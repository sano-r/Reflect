import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../molecures/Header";
import { SideMenu } from "../molecures/SideMenu";
import { Outlet } from "react-router";

interface Props{
    header: React.ReactNode;
    sidebar: React.ReactNode;
    mainContent: React.ReactNode;
}

export function Layout(){
    return(
        <Box minH={"100vh"} position={"fixed"}>
            <Header username="AAA"/>
            <Flex direction={"row"} flex={1} pt={"60px"}>
                <SideMenu />
                <Outlet />
            </Flex>
        </Box>
    )
}