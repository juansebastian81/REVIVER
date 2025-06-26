import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Usando react-router
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import Models from "./pages/models/Models";
import Arrhythmia from "./pages/models/arrhythmia/Arrhythmia";
import HeartFailure from "./pages/models/heart-failure/HeartFailure";
import CoronaryDiseases from "./pages/models/coronary-disease/CoronaryDiseases";
import CongenitalHeartDisease from "./pages/models/congenital-heart-disease/CongenitalHeartDisease";
import Cough from "./pages/models/heart-failure/fatigue-symptom/fatigue"; 
import Layout from "./pages/layout/Layout";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/models/arrhythmia" element={<Arrhythmia />} />
        <Route path="/models/heart-failure" element={<HeartFailure />} />
        <Route path="/models/heart-failure/prueba/cough" element={<Cough />} />
        <Route path="/models/coronary-disease" element={<CoronaryDiseases />} />
        <Route path="/models/congenital-heart-disease" element={<CongenitalHeartDisease />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
