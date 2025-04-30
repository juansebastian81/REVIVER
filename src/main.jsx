import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import Heart from "./pages/heart/Heart";
import Arrhythmia from "./pages/heart/arrhythmia/Arrhythmia";
import HeartFailure from "./pages/heart/heart-failure/HeartFailure";
import CoronaryDiseases from "./pages/heart/coronary-disease/CoronaryDiseases";
import CongenitalHeartDisease from "./pages/heart/congenital-heart-disease/CongenitalHeartDisease";
import Layout from "./pages/layout/Layout";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="heart" element={<Heart />}>
          <Route path="arrhythmia" element={<Arrhythmia />} />
          <Route path="heart-failure" element={<HeartFailure />} />
          <Route path="coronary-disease" element={<CoronaryDiseases />} />
          <Route
            path="congenital-heart-disease"
            element={<CongenitalHeartDisease />}
            
          />
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
