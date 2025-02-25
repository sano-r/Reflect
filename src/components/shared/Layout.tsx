import { Box, Flex } from "@chakra-ui/react";
import { SideMenu } from "../molecures/SideMenu";
import { Outlet } from "react-router";

export function Layout(){
    return(
        <Flex w={"100vw"}>
            <SideMenu />
            <Box flex={1} overflow={"auto"}>
                <Outlet />
            </Box>
        </Flex>
    )
}