import React, { useState } from "react";
import { Flex, Box, Heading, Input, Button } from "@chakra-ui/react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // ログイン処理
    if (email === "test@example.com" && password === "password") {
      // ログイン成功
      toast({
        title: "ログイン成功",
        description: "ログインしました。",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      // ログイン失敗
      toast({
        title: "ログイン失敗",
        description: "メールアドレスまたはパスワードが間違っています。",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex align="center" justify="center" h="100vh">
      <Box bg="gray.100" p={8} borderRadius="lg">
        <Heading as="h1" size="lg" mb={4}>
          ログイン
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl mb={4}>
            <FormLabel>メールアドレス</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>パスワード</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="100%">
            ログイン
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
