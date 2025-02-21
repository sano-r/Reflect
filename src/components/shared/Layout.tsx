import { Outlet, useNavigate } from "react-router";
import {Header} from "../molecures/Header";
import { Box } from "@chakra-ui/react";

export function Layout() {
  const navigate = useNavigate();
  const onClickLogout = () => {
    navigate("/");
  };
  return (
    <>
      <Header username="User001" onLogout={onClickLogout} />
      <Box pt="60px">
        <Outlet /> {/* ここに各ページコンポーネントがレンダリングされる */}
      </Box>
    </>
  );
}
