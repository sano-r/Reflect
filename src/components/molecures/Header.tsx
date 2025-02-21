import { Flex, Heading, Button, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router";

interface HeaderProps {
  username: string;
}

export function Header({ username}: HeaderProps){
  const navigate = useNavigate();
  const onClickLogout = () => {
    navigate("/");
  }
  return (
    <Flex
      as="header"
      width="100%"
      height="60px"
      align="center"
      padding="0 20px"
      bg="blue.500" // 背景色
      color="white" // 文字色
      position="fixed"
      shadow="lg"
    >
      <Heading as="h1" size="lg">
        Reflect
      </Heading>
      <Spacer />
      <Flex align="center">
        <Heading as="h2" size="md" mr="10px">
          {username}
        </Heading>
        <Button colorPalette="yellow" onClick={onClickLogout}>
          ログアウト
        </Button>
      </Flex>
    </Flex>
  );
};

