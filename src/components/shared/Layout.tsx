import { Outlet, useNavigate } from "react-router";
import Header from "../molecures/Header";

export function Layout() {
  const navigate = useNavigate();
  const onClickLogout = () => {
    navigate("/");
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
