import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import Models from "./pages/models/Models";
import Arrhythmia from "./pages/models/arrhythmia/Arrhythmia";
import HeartFailure from "./pages/models/heart-failure/HeartFailure";
import CoronaryDiseases from "./pages/models/coronary-disease/CoronaryDiseases";
import CongenitalHeartDisease from "./pages/models/congenital-heart-disease/CongenitalHeartDisease";
import Layout from "./pages/layout/Layout";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/models/arrhythmia" element={<Arrhythmia />} />
        <Route path="/models/heart-failure" element={<HeartFailure />} />
        <Route path="/models/coronary-disease" element={<CoronaryDiseases />} />
        <Route
          path="/models/congenital-heart-disease"
          element={<CongenitalHeartDisease />}
        />
      </Routes>
    </Layout>
  </BrowserRouter>
);
