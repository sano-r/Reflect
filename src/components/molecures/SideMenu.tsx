import { Box, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";

export function SideMenu(){
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const navigate = useNavigate();

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    navigate(`/${menu}`);
  };

  return (
    <Box w="200px" bg="gray.300" p="4" height={"100vh"} position={"absolute"}>
      <Flex direction={"column"} gap={4}>
        <Button
          onClick={() => handleMenuClick("home")}
        >
          ふりかえり
        </Button>
        <Button
          onClick={() => handleMenuClick("review")}
        >
          まとめ
        </Button>
        <Button
          onClick={() => handleMenuClick("settings")}
        >
          設定
        </Button>
      </Flex>
    </Box>
  );
};