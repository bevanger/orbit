import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/projects" element={ <Projects/> } />
        <Route path="/settings" element={ <Settings/> } />
      </Routes>
    </Layout>
  );
}

export default App;