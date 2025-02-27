import { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Textarea,
  // Button,
  Fieldset,
  Field,
  // SelectRoot,
  createListCollection,
  // SelectLabel,
  // SelectTrigger,
  // SelectValueText,
  // SelectContent,
  // SelectItem,
  Select
} from '@chakra-ui/react';
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"
import { PrimaryButton } from '@/components/atoms/PrimaryButton';

const projects= createListCollection({
  items: [
    { id: "test01", value: "○○社: △△システムバージョンアップ" },
    { id: "test02", value: "□□社: ××システムリプレース" },
    { id: "test03", value: "社内: Webアプリ画面設計" },
    { id: "test04", value: "社内: ○○システムテスト" },
  ],
});

export function Home(){
  const [date, setDate] = useState<string>('');
  const [projectName, setProjectName] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState<string>('');
  const [keep, setKeep] = useState<string>('');
  const [problem, setProblem] = useState<string>('');
  const [tryItem, setTryItem] = useState<string>('');

  const handleAddSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (skillToDelete: string) => {
    setSkills(skills.filter((skill) => skill !== skillToDelete));
  };

  const handleSubmit = () => {
    // TODO: 登録処理の実装
    console.log({ date, projectName, skills, keep, problem, tryItem });
  };

  return (
    <Box p={4} w={{md: 1000}}>
      <Heading mb={4}>KPT 振り返り</Heading>

      <Fieldset.Root>
        <Fieldset.Content>
          <Field.Root orientation={"horizontal"} mb={4}>
            <Field.Label width={"20%"}>日付ああああああああ</Field.Label>
            <Input type='date' value={date} onChange={e => setDate(e.target.value)} w={"80%"}/>
          </Field.Root>

          <Field.Root orientation={"horizontal"}>
            <Field.Label w={"20%"}>プロジェクト名</Field.Label>
            <SelectRoot collection={projects} value={projectName} onValueChange={e => setProjectName(e.value)} w={"80%"}>
              {/* <SelectLabel>プロジェクト名</SelectLabel> */}
              <SelectTrigger>
                <SelectValueText placeholder='プロジェクト名を選択してください'/>
              </SelectTrigger>
              <SelectContent>
                {projects.items.map((item) => (
                  <SelectItem item={item} key={item.id}>
                    {item.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
          </Field.Root>
          

          <Field.Root orientation={"horizontal"} mb={4}>
            <Field.Label>Keep</Field.Label>
            <Textarea value={keep} onChange={e => setKeep(e.target.value)} maxLength={140}/>
          </Field.Root>

          <Field.Root orientation={"horizontal"} mb={4}>
            <Field.Label>Problem</Field.Label>
            <Textarea value={problem} onChange={e => setProblem(e.target.value)} maxLength={140}/>
          </Field.Root>

          <Field.Root orientation={"horizontal"} mb={4}>
            <Field.Label>Try</Field.Label>
            <Textarea value={tryItem} onChange={e => setTryItem(e.target.value)} maxLength={140}/>
          </Field.Root>

          <PrimaryButton type='button' onClick={handleSubmit} w="300px" alignSelf={"end"}>
            登録
          </PrimaryButton>


        </Fieldset.Content>
      </Fieldset.Root>

      {/* <FormControl mb={4}>
        <FormLabel>使用技術</FormLabel>
        <Flex>
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="技術名を入力"
          />
          <Button ml={2} onClick={handleAddSkill}>追加</Button>
        </Flex>
        <Wrap mt={2}>
          {skills.map((skill) => (
            <Tag
              key={skill}
              mr={2}
              mb={2}
              onClick={() => handleDeleteSkill(skill)}
              cursor="pointer"
            >
              {skill}
            </Tag>
          ))}
        </Wrap>
      </FormControl> */}

    </Box>
  );
};