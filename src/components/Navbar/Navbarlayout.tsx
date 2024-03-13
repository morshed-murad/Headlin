import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "./Navbar";

import Allpages from "../Allpages";
import Combox from "../pages/Combox";
import Conver from "../pages/Conver";
import DialogModal from "../pages/DialogModal";
import LIstbox from "../pages/LIstbox";
import MenuDropDown from "../pages/MenuDropDown";
import Pages from "../Pages";
import Form from "../pages/Form";
import Switch from "../pages/Switch";
import Disclosure from "../pages/Disclosure";
import Notfonund from "../Notfonund";
import ProductRouts from "../ProductRouts";

const Navbarlayout = () => {
  const Routers = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="home" element={<Pages />} />
        <Route element={<ProductRouts />}>
          <Route index element={<Allpages />} />
          <Route path="dropmenu" element={<MenuDropDown />} />
          <Route path="listbox" element={<LIstbox />} />
          <Route path="combox" element={<Combox />} />
          <Route path="conversation" element={<Conver />} />
          <Route path="switch" element={<Switch />} />
          <Route path="disclosure" element={<Disclosure />} />
          <Route path="dialog" element={<DialogModal />} />
        </Route>
        <Route path="*" element={<Notfonund />} />
        <Route path="form" element={<Form />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={Routers} />
    </div>
  );
};

export default Navbarlayout;
