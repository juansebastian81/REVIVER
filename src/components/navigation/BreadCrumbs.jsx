import "./BreadCrumbs.css";
import { NavLink, useLocation } from "react-router";
import { useMemo } from "react";

const pathNameMap = {
  models: "Enfermedades",
  "coronary-disease": "Enfermedad Coronaria",
  "symptoms-coronary-disease": "Síntomas",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const breadcrumbs = useMemo(() => {
    return pathParts.map((part, index) => {
      const url = "/" + pathParts.slice(0, index + 1).join("/");
      const label = pathNameMap[part] || decodeURIComponent(part);
      return { label, url };
    });
  }, [location]);

  return (
    <nav className="breadcrumb-container">
      <NavLink to="/" className="breadcrumb-link">
        Inicio
      </NavLink>
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        return (
          <span key={crumb.url}>
            <span className="breadcrumb-separator">/</span>
            {isLast ? (
              <span className="breadcrumb-current">{crumb.label}</span>
            ) : (
              <NavLink to={crumb.url} className="breadcrumb-link">
                {crumb.label}
              </NavLink>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
