import React, { useState } from 'react';
import {
  Box,
  Heading,
  Input,
  Button,
  Alert,
  Center,
  Flex,
  Text
} from '@chakra-ui/react';
import { Field } from '@/components/ui/field'
import { PasswordInput } from '@/components/ui/password-input';
import { useNavigate } from 'react-router';

export function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ここで実際のログイン処理を行う
    if (email === 'test@example.com' && password === 'dummypass') {
      // ホーム画面に遷移
      navigate('/home');
    } else {
      setError('メールアドレスまたはパスワードが間違っています。');
    }
  };

  return (
    <Center h="100vh" backgroundColor={"gray.100"}>
      <Flex direction="column" align={"center"} gap={4} justify={"center"}>
        <div>
          <Heading as="h1" size={"3xl"} mb={2}>Reflect | Review yourself!</Heading>
          <Text justifySelf="center">振り返りアプリ</Text>

        </div>
        <Box p={4} maxWidth="md" borderWidth="1px" borderRadius="lg" minWidth={"md"} backgroundColor={"white"}>
          <Flex gap="4" direction={"column"}>
            <Heading as="h2" size="lg">
              ログイン
            </Heading>

            {error && (
              <Box animationName="fade-in" animationDuration="slowest">
              <Alert.Root status="error">
                <Alert.Indicator />
                <Alert.Content>
                  <Alert.Title>{error}</Alert.Title>
                </Alert.Content>
              </Alert.Root>
              </Box>
            )}

            <form onSubmit={handleSubmit}>
              <Flex gap="2" align={"center"} direction={"column"}>
                <Field mb={4} label="メールアドレス" required errorText="必須入力です">
                  <Input type='email' value={email} onChange={e => setEmail(e.target.value)} />
                </Field>

                <Field label="パスワード" required>
                  <PasswordInput value={password} onChange={e => setPassword(e.target.value)} />
                </Field>
              </Flex>
              <Button type="submit" colorPalette="blue" width="full" mt={"4"}>
                ログイン
              </Button>
            </form>
          </Flex>
        </Box>
      </Flex>
    </Center>
  );
};
