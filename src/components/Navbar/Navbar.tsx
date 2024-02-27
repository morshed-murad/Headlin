import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Allpages from "../Allpages";
import MenuDropDown from "../pages/MenuDropDown";
import LIstbox from "../pages/LIstbox";
import { Combobox } from "@headlessui/react";

const Navbar = () => {
  return (
    <div className="h-full">
      <BrowserRouter>
        <div>
          <header className="flex fixed top-0 left-0 w-full justify-between px-20 bg-gradient-to-r from-purple-500  to-indigo-500 py-4 items-center">
            <h1 className="flex items-center font-bold">
              Headless
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-red-400 font-lobster text-xl font-bold ">
                PRACTICE
              </span>
            </h1>
            <nav>
              <div className="nav">
                <NavLink
                  className={({ isActive }) => (isActive ? "bg-red-400" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </div>
            </nav>
          </header>
          <Routes>
            <Route index element={<Allpages />} />
            <Route path="/dropmenu" element={<MenuDropDown />} />
            <Route path="/listbox" element={<LIstbox />} />
            <Route path="/combobox" element={<Combobox />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
