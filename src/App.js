import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import CalculatorsPage from "./pages/CalculatorsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculators" element={<CalculatorsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
