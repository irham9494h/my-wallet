import { FC } from "react";
import Home from "./pages/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Settings from "./pages/settings";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
