import "./BreadCrumbs.css";
import { NavLink, useLocation } from "react-router-dom";

const pathNameMap = {
  diseases: "Enfermedades",
  "coronary-disease": "Enfermedad Coronaria",
  "symptoms-coronary-disease": "Síntomas",
  "treatment-coronary-disease": "Tratamiento",
  arrhythmia: "Arritmia",
  "chest-pain": "Dolor torácico",
  "heart-failure": "Insuficiencia Cardiaca",
  "fatigue-symptom": "Fatiga",
  "congenital-heart-disease": "Cardiopatía Congénita",
  fatigue: "Cansancio",
  "cough-symptom": "Tos",
  "symptoms-arrhythmia": "Síntomas Arritmia",
  "treatment-arrhythmia": "Tratamiento Arritmia",
};

const BreadCrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname
    .split("/")
    .filter((x) => x)
    .map((part) => decodeURIComponent(part));

  const crumbs = pathnames.map((value, index) => {
    const to = "/" + pathnames.slice(0, index + 1).join("/");
    const isLast = index === pathnames.length - 1;

    const label = formatName(value);

    return isLast ? (
      <span className="breadcrumb-current" key={to}>
        {label}
      </span>
    ) : (
      <NavLink to={to} className="breadcrumb-link" key={to}>
        {label}
      </NavLink>
    );
  });

  return (
    <nav className="breadcrumb-container" aria-label="Breadcrumb">
      <NavLink to="/" className="breadcrumb-link">
        Inicio
      </NavLink>
      {crumbs.length > 0 && <span className="breadcrumb-separator">/</span>}
      {crumbs.flatMap((crumb, index) => [
        crumb,
        index !== crumbs.length - 1 && (
          <span key={index + "-sep"} className="breadcrumb-separator">
            /
          </span>
        ),
      ])}
    </nav>
  );
};

const formatName = (slug) => {
  return (
    pathNameMap[slug] ||
    slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  );
};

export default BreadCrumbs;
