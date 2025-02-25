import { Outlet } from "react-router";
import { Header } from "../molecures/Header";
import { Box, Flex } from "@chakra-ui/react";
import { SideMenu } from "../molecures/SideMenu";

// 使ってないけど念のため残しておく
export function HeaderLayout() {
  return (
    <Box minHeight="100vh">
      <Header username="User001" />
      <Box pt="60px" minHeight={"calc(100vh-60px)"}>
        <Flex direction={"row"} flex={1} alignItems={"flex-start"}>
          <SideMenu />
          <Outlet /> {/* ここに各ページコンポーネントがレンダリングされる */}
        </Flex>
      </Box>
    </Box>
  );
}
