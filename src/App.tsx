import { Route, Routes } from "react-router";
import { LoginForm } from "./pages/LoginForm";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";
import { Review } from "./pages/Review";
import { Layout } from "./components/shared/Layout";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
