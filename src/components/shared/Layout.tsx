import { Box, Flex } from "@chakra-ui/react";
import { SideMenu } from "../molecures/SideMenu";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <Flex>
      <SideMenu />
      <Box flex={1} overflow={"auto"} ml={{ md: 80 }} p="4">
        {/* ここに各ページのコンポーネントが表示される */}
        <Outlet />
      </Box>
    </Flex>
  );
}
