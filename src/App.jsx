import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { ProjectsPage } from "./pages/ProjectsPage";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route index element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
