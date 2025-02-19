import { Outlet } from "react-router";
import Header from "../molecures/Header";

export function Layout() {
  const onClickLogout = () => {
    console.log("ログアウト");
  };
  return (
    <div>
      <Header username="User001" onLogout={onClickLogout} />
      <main>
        <Outlet /> {/* ここに各ページコンポーネントがレンダリングされる */}
      </main>
    </div>
  );
}
