import { useState } from 'react';
import {
  Box,
  Heading,
  createListCollection,
  Separator,
  VStack
} from '@chakra-ui/react';
import { PrimaryButton } from '@/components/atoms/PrimaryButton';
import { DateInput } from '@/components/atoms/DateInput';
import { GeneralSelect } from '@/components/atoms/GeneralSelect';
import { TextInput } from '@/components/atoms/TextInput';

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
      <Heading size="3xl" mb={4}>KPT 振り返り</Heading>
      <Separator />
      <VStack p={4} gap={6}>
        <DateInput label='日付' value={date} onChangeValue={setDate} />
        <GeneralSelect 
          label='プロジェクト' 
          value={projectName} 
          placeholder={'プロジェクト名を選択してください'} 
          options={projects} 
          onChangeValue={e => setProjectName(e.value)} 
        />
        <TextInput label={"Keep"} value={keep} onChangeValue={setKeep} />
        <TextInput label={"Problem"} value={problem} onChangeValue={setProblem} />
        <TextInput label={"Try"} value={tryItem} onChangeValue={setTryItem} />
        <PrimaryButton type='button' onClick={handleSubmit} w="300px" alignSelf={"end"}>
            登録
          </PrimaryButton>
      </VStack>

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