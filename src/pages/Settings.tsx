import {
  Box,
  Heading,
  Separator,
  List,
  HStack,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { SingleInput } from "@/components/atoms/SingleInput";
import {
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdDelete } from "react-icons/md";

interface Project {
  id: number;
  name: string;
  technologies: string[];
}

export function Settings() {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: "プロジェクトA", technologies: ["React", "TypeScript"] },
    { id: 2, name: "プロジェクトB", technologies: ["Vue", "JavaScript"] },
  ]);
  const [newProjectName, setNewProjectName] = useState("");
  const [newTechnology, setNewTechnology] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleAddProject = () => {
    if (newProjectName === "") {
      return null;
    }
    setProjects([
      ...projects,
      {
        id: projects.length + 1,
        name: newProjectName,
        technologies: [],
      },
    ]);
    setNewProjectName("");
  };

  const handleAddTechnology = () => {
    if (selectedProject) {
      const updatedProjects = projects.map((project) =>
        project.id === selectedProject.id
          ? {
              ...project,
              technologies: [...project.technologies, newTechnology],
            }
          : project
      );
      setProjects(updatedProjects);
      setNewTechnology("");
    }
  };

  const handleRemoveTechnology = (technology: string) => {
    console.log(technology);
    if (selectedProject) {
      const updatedProjects = projects.map((project) =>
        project.id === selectedProject.id
          ? {
              ...project,
              technologies: project.technologies.filter(
                (tech) => tech !== technology
              ),
            }
          : project
      );
      setProjects(updatedProjects);
    }
  };

  const handleOpenModal = (id: number) => {
    const proj = projects.find((project) => project.id === id) ?? null;
    setSelectedProject(proj);
  };

  return (
    <Box p={4} w={{ md: 1000 }}>
      <Heading size="3xl" mb={4}>
        設定
      </Heading>
      <Separator mb={4} />
      <VStack p={4} gap={6} align={"flex-start"}>
        <Heading size="lg" mb={2}>
          新しいプロジェクトの登録
        </Heading>
        <HStack align={"end"}>
          <SingleInput
            label={"プロジェクト名"}
            value={newProjectName}
            onChangeValue={setNewProjectName}
          />
          <PrimaryButton onClick={handleAddProject}>追加</PrimaryButton>
        </HStack>
        <Separator my={4} />

        <Heading size="lg" mb={2}>
          プロジェクトと技術
        </Heading>
        <List.Root gap={3} ml={4}>
          {projects.map((project) => (
            <List.Item key={project.id}>
              {project.name}
              <DialogRoot>
                <DialogBackdrop />
                <DialogTrigger asChild>
                  <PrimaryButton
                    size={"sm"}
                    ml={2}
                    onClick={() => handleOpenModal(project.id)}
                  >
                    編集
                  </PrimaryButton>
                </DialogTrigger>
                <DialogContent>
                  <DialogCloseTrigger />
                  <DialogHeader>
                    <DialogTitle>技術を追加</DialogTitle>
                  </DialogHeader>
                  <DialogBody>
                    {selectedProject && (
                      <>
                        <HStack align={"end"}>
                          <SingleInput
                            label="技術追加"
                            value={newTechnology}
                            onChangeValue={setNewTechnology}
                          />
                          <PrimaryButton onClick={handleAddTechnology}>
                            追加
                          </PrimaryButton>
                        </HStack>

                        <List.Root gap={3} mt={4} ml={4}>
                          {selectedProject.technologies.map((technology) => (
                            <List.Item key={technology}>
                              {technology}
                              <IconButton
                                size={"sm"}
                                ml={2}
                                onClick={() =>
                                  handleRemoveTechnology(technology)
                                }
                              >
                                <MdDelete />
                              </IconButton>
                            </List.Item>
                          ))}
                        </List.Root>
                      </>
                    )}
                  </DialogBody>
                  <DialogFooter />
                </DialogContent>
              </DialogRoot>
            </List.Item>
          ))}
        </List.Root>
      </VStack>
    </Box>
  );
}
