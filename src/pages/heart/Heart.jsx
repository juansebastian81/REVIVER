import "./Heart.css";
import { Outlet, useLocation } from "react-router";

const Heart = () => {
  const location = useLocation();
  const userData = location.state?.userData;

  return (
    <div>
      <p>{userData?.displayName}</p>
      <Outlet />
    </div>
  );
};

export default Heart;
