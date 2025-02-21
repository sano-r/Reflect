import { Route, Routes } from "react-router";
import { LoginForm } from "./pages/LoginForm";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { Review } from "./pages/Review";
import { Layout } from "./components/shared/Layout";
import { Page404 } from "./pages/Page404";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
