import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; // Usando react-router
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import Models from "./pages/models/Models";
import Arrhythmia from "./pages/models/arrhythmia/Arrhythmia";
import ChestPain from "./pages/models/arrhythmia/chest-pain-symptom/chest-pain";
import HeartFailure from "./pages/models/heart-failure/HeartFailure";
import CoronaryDiseases from "./pages/models/coronary-disease/CoronaryDiseases";
import CongenitalHeartDisease from "./pages/models/congenital-heart-disease/CongenitalHeartDisease";
import Cough from "./pages/models/heart-failure/fatigue-symptom/fatigue";
import Layout from "./pages/layout/Layout";
import Cianosis from "./pages/models/congenital-heart-disease/cianosis-symptom/Cianosis";
import AboutUs from "./pages/about-us/AboutUs";
import SymptomsCoronary from "./pages/models/coronary-disease/symptoms-coronary-disease/SymptomsCoronary";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/models/arrhythmia" element={<Arrhythmia />} />
        <Route path="/models/arrhythmia/chest-pain" element={<ChestPain />} />
        <Route path="/models/heart-failure" element={<HeartFailure />} />
        <Route
          path="/models/heart-failure/fatigue-symptom"
          element={<Cough />}
        />
        <Route
          path="/models/cianosis-symptom/cianosis"
          element={<Cianosis />}
        />
        <Route path="/models/coronary-disease" element={<CoronaryDiseases />} />
        <Route
          path="/models/coronary-disease/symptoms-coronary-disease/symptoms-coronary"
          element={<SymptomsCoronary />}
        />
        <Route
          path="/models/congenital-heart-disease"
          element={<CongenitalHeartDisease />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
