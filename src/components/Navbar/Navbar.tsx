import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { UserContexts } from "../../App";
import Footer from "../footers/Footer";

const Navbar = () => {
  const { user, setUser } = useContext(UserContexts);
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <header className="flex fixed top-0 left-0 w-full justify-between px-20 bg-gradient-to-r from-purple-500  to-indigo-500 py-4 items-center">
          <h1 className="flex items-center font-bold">
            Headless
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-red-400 font-lobster text-xl font-bold ">
              PRACTICE
            </span>
          </h1>
          <nav>
            <div className="nav flex gap-2">
              {user?.isLoggedIn === false ? (
                <div className="nav flex gap-2">
                  <NavLink
                    className={({ isActive }) => (isActive ? "bg-red-400" : "")}
                    to="home"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    className={({ isActive }) => (isActive ? "bg-red-400" : "")}
                    to="form"
                  >
                    Login
                  </NavLink>
                </div>
              ) : (
                <NavLink
                  className={({ isActive }) => (isActive ? "bg-red-400" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              )}

              <button
                onClick={() => {
                  if (!user?.isLoggedIn) return;
                  setUser({ isLoggedIn: false });
                }}
                className={`py-2 px-4 rounded text-white font-medium hover:bg-colroutHover focus:bg-red-400 ${
                  user?.isLoggedIn === true ? "block" : "hidden"
                }`}
              >
                Log out
              </button>
            </div>
          </nav>
          {/* <Breadcrumbs /> */}
        </header>
      </div>
      <div></div>
      <div>
        <Outlet />
      </div>
      <div className="  w-full bg-gradient-to-r from-sky-600 to-orange-400">
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;
