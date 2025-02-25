import { Text, Avatar, Box, Flex } from "@chakra-ui/react";
import { RiDashboardFill, RiSettings3Fill, RiTaskFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import { PrimaryButton } from "../atoms/PrimaryButton";

export function SideMenu() {
  const navigate = useNavigate();

  const onClickLogout = () => {
    navigate("/");
  };

  return (
    <Box w={{ md: 80 }} bg="gray.100" height={"100vh"} position={"absolute"}>
      <Box maxW={"80%"} ml={4}>
        <Flex direction={"column"} gap={4}>
          <Text fontSize={"4xl"} fontWeight={"semibold"} mt="6">
            Reflect
          </Text>
          <Flex direction={"row"} gap="2" mt={4}>
            <Avatar.Root
              variant="subtle"
              colorPalette={"blue"}
              shape={"rounded"}
              size={"md"}
            >
              <Avatar.Fallback name="Test User" />
            </Avatar.Root>
            <Text fontSize={"2xl"}>Test User</Text>
          </Flex>
          <Link to={`/home`}>
            <Flex
              direction="row"
              align={"center"}
              _hover={{ backgroundColor: "gray.200" }}
              rounded={"md"}
            >
              <RiTaskFill size={"1.8rem"} color="black" />
              <Text fontSize={"xl"} fontWeight={"medium"} ml={2}>
                メイン
              </Text>
            </Flex>
          </Link>
          <Link to={`/review`}>
            <Flex
              direction="row"
              align={"center"}
              _hover={{ backgroundColor: "gray.200" }}
              rounded={"md"}
            >
              <RiDashboardFill size={"1.8rem"} color="black" />
              <Text fontSize={"xl"} fontWeight={"medium"} ml={2}>
                まとめ
              </Text>
            </Flex>
          </Link>
          <Link to={`/settings`}>
            <Flex
              direction="row"
              align={"center"}
              _hover={{ backgroundColor: "gray.200" }}
              rounded={"md"}
            >
              <RiSettings3Fill size={"1.8rem"} color="black" />
              <Text fontSize={"xl"} fontWeight={"medium"} ml={2}>
                設定
              </Text>
            </Flex>
          </Link>
          <PrimaryButton onClick={() => onClickLogout()}>
            ログアウト
          </PrimaryButton>
        </Flex>
      </Box>
    </Box>
  );
}
