import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404";
import Dashboard from "../pages/Dashboard";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
