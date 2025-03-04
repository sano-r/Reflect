import { useState } from "react";
import {
  Box,
  Heading,
  createListCollection,
  Separator,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { DateInput } from "@/components/atoms/DateInput";
import { GeneralSelect } from "@/components/atoms/GeneralSelect";
import { TextInput } from "@/components/atoms/TextInput";
import { Field } from "@/components/ui/field";
import { Tag } from "@/components/ui/tag";

interface Project {
  id: string;
  value: string;
  skills: string[];
}

const projects = createListCollection<Project>({
  items: [
    {
      id: "test01",
      value: "○○社: △△システムバージョンアップ",
      skills: ["React", "TypeScript", "Chakra UI"],
    },
    {
      id: "test02",
      value: "□□社: ××システムリプレース",
      skills: ["Vue.js", "JavaScript", "Vuetify"],
    },
    {
      id: "test03",
      value: "社内: Webアプリ画面設計",
      skills: ["Figma", "Adobe XD"],
    },
    {
      id: "test04",
      value: "社内: ○○システムテスト",
      skills: ["JUnit", "Selenium"],
    },
  ],
});

export function Home() {
  const [date, setDate] = useState<string>("");
  const [projectName, setProjectName] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [keep, setKeep] = useState<string>("");
  const [problem, setProblem] = useState<string>("");
  const [tryItem, setTryItem] = useState<string>("");

  const handleSubmit = () => {
    // TODO: 登録処理の実装
    console.log({
      date,
      projectName,
      skills,
      keep,
      problem,
      tryItem,
    });
  };

  const handleProject = (v: string[]) => {
    setProjectName(v);
    const project = projects.items.find((project) => project.value === v[0]);
    if (project) {
      setSkills(project.skills);
    } else {
      setSkills([]);
    }
  };

  return (
    <Box p={4} w={{ md: 1000 }}>
      <Heading size="3xl" mb={4}>
        KPT 振り返り
      </Heading>
      <Separator />
      <VStack p={4} gap={6}>
        <DateInput label="日付" value={date} onChangeValue={setDate} />
        <GeneralSelect
          label="プロジェクト"
          value={projectName}
          placeholder={"プロジェクト名を選択してください"}
          options={projects}
          onChangeValue={(e) => handleProject(e.value)}
        />
        <Field label={"使用技術"}>
          <HStack gap={4} minWidth={60}>
            <Box
              gap={4}
              borderWidth={"1px"}
              p={2}
              color={"gray"}
              rounded={"sm"}
              h={10}
              width={"100%"}
            >
              <Flex direction={"row"} gap={4}>
                {skills.map((skill) => (
                  <Tag
                    key={skill}
                    cursor={"pointer"}
                    size={"lg"}
                    colorPalette={"cyan"}
                  >
                    {skill}
                  </Tag>
                ))}
              </Flex>
            </Box>
          </HStack>
        </Field>
        <TextInput label={"Keep"} value={keep} onChangeValue={setKeep} />
        <TextInput
          label={"Problem"}
          value={problem}
          onChangeValue={setProblem}
        />
        <TextInput label={"Try"} value={tryItem} onChangeValue={setTryItem} />
        <PrimaryButton
          type="button"
          onClick={handleSubmit}
          w="300px"
          alignSelf={"end"}
        >
          登録
        </PrimaryButton>
      </VStack>
    </Box>
  );
}
