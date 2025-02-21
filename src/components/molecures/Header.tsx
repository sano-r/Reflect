import React from "react";
import { Flex, Heading, Button, Spacer } from "@chakra-ui/react";

interface HeaderProps {
  username: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ username, onLogout }) => {
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
    >
      <Heading as="h1" size="lg">
        Reflect
      </Heading>
      <Spacer />
      <Flex align="center">
        <Heading as="h2" size="md" mr="10px">
          {username}
        </Heading>
        <Button colorPalette="yellow" onClick={onLogout}>
          ログアウト
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
