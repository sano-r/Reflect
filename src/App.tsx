import { Route, Routes } from "react-router";
import { LoginForm } from "./features/LoginForm";
import { Home } from "./features/Home";
import { Settings } from "./features/Settings";
import { Review } from "./features/Review";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/home" element={<Home />} />
      <Route path="/review" element={<Review />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
