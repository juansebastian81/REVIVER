import "./BreadCrumbs.css";
import { NavLink, useLocation } from "react-router";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x)
    .map((part) => decodeURIComponent(part));

  const crumbs = pathnames.map((value, index) => {
    const to = "/" + pathnames.slice(0, index + 1).join("/");

    const isLast = index === pathnames.length - 1;

    return isLast ? (
      <span className="breadcrumb-current" key={to}>
        {formatName(value)}
      </span>
    ) : (
      <NavLink to={to} className="breadcrumb-link" key={to}>
        {formatName(value)}
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

const formatName = (name) =>
  name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

export default Breadcrumbs;
