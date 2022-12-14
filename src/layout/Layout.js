import style from "./layout.module.css";
import Header from "./navigation/Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className={style.layoutWrap}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
