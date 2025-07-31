import "./index.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./lib/firebase";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import NotFound from "./pages/not-found/NotFound";
import Diseases from "./pages/models/Diseases";
import Arrhythmia from "./pages/models/arrhythmia/Arrhythmia";
import ChestPain from "./pages/models/arrhythmia/symptoms-arrhythmia/chest-pain";
import ArrhythmiaTreatment from "./pages/models/arrhythmia/treatment-arrhythmia/TreatmentArrhythmia";
import HeartFailure from "./pages/models/heart-failure/HeartFailure";
import CoronaryDiseases from "./pages/models/coronary-disease/CoronaryDiseases";
import CongenitalHeartDisease from "./pages/models/congenital-heart-disease/CongenitalHeartDisease";
import FatigueFailure from "./pages/models/heart-failure/fatigue-symptom/fatigue";
import TreatmentCongenital from "./pages/models/congenital-heart-disease/treatment-congenital/TreatmentCongenital";
import Cough from "./pages/models/heart-failure/cough-symptom/cough";
import Layout from "./pages/layout/Layout";
import Fatigue from "./pages/models/congenital-heart-disease/symptom-fatigue/Fatigue";
import AboutUs from "./pages/about-us/AboutUs";
import SymptomsCoronary from "./pages/models/coronary-disease/symptoms-coronary-disease/SymptomsCoronary";
import TreatmentCoronary from "./pages/models/coronary-disease/treatment-coronary-disease/TreatmentCoronary";
import PreventionCareCoronary from "./pages/models/coronary-disease/prevention-care-coronary-disease/PreventionCareCoronary";
import SiteMap from "./pages/site/SiteMap";
import PreventionCongenital from "./pages/models/congenital-heart-disease/prevention-congenital/PreventionCongenital";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/sitemap" element={<SiteMap />} />

          {/* Arritmia */}
          <Route path="/diseases/arrhythmia" element={<Arrhythmia />} />
          <Route
            path="/diseases/arrhythmia/symptoms-arrhythmia"
            element={<ChestPain />}
          />
          <Route
            path="/diseases/arrhythmia/treatment-arrhythmia"
            element={<ArrhythmiaTreatment />}
          />

          {/* Insuficiencia cardiaca */}
          <Route path="/diseases/heart-failure" element={<HeartFailure />} />
          <Route
            path="/diseases/heart-failure/fatigue-symptom"
            element={<FatigueFailure />}
          />
          <Route
            path="/diseases/heart-failure/cough-symptom"
            element={<Cough />}
          />

          {/* Enfermedad coronaria */}
          <Route
            path="/diseases/coronary-disease"
            element={<CoronaryDiseases />}
          />
          <Route
            path="/diseases/coronary-disease/symptoms-coronary-disease"
            element={<SymptomsCoronary />}
          />
          <Route
            path="/diseases/coronary-disease/treatment-coronary-disease"
            element={<TreatmentCoronary />}
          />
          <Route
            path="/diseases/coronary-disease/prevention-care-coronary-disease"
            element={<PreventionCareCoronary />}
          />

          {/* Cardiopatia congenita */}
          <Route
            path="/diseases/congenital-heart-disease"
            element={<CongenitalHeartDisease />}
          />
          <Route
            path="/diseases/congenital-heart-disease/fatigue"
            element={<Fatigue />}
          />
          <Route
            path="/diseases/congenital-heart-disease/treatment-congenital"
            element={<TreatmentCongenital />}
          />
          <Route
            path="/diseases/congenital-heart-disease/prevention-congenital"
            element={<PreventionCongenital />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  </AuthProvider>
);
