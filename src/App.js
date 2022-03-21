import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./components/pages/HomePage";
import CalculatorsPage from "./components/pages/CalculatorsPage";
import BMRPage from "./components/pages/BMRPage";
import TDEEPage from "./components/pages/TDEEPage";
import FFMIPage from "./components/pages/FFMIPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculators" element={<CalculatorsPage />} />
        <Route path="/calculators/bmr" element={<BMRPage />} />
        <Route path="/calculators/tdee" element={<TDEEPage />} />
        <Route path="/calculators/ffmi" element={<FFMIPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
