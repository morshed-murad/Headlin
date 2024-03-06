import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContexts } from "../../App";

const Form = () => {
  const { user, setUser } = useContext(UserContexts);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="py-28 bg-gradient-to-r from-blue-600 to-indigo-500 h-[100vh]">
      <div className="flex justify-center ">
        <form className="bg-gradient-to-r from-purple-500 to-red-400 px-5 py-4 rounded flex flex-col gap-4">
          <h1 className="text-white font-semibold txt-xl py-5">Login form</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-white font-semibold">
              Name:
            </label>
            <input
              type="text"
              className="rounded border border-gray-600 focus:outline-none px-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-white font-semibold">
              Last/Name:
            </label>
            <input
              type="text"
              className="rounded border border-gray-600 focus:outline-none px-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-white font-semibold">
              F/Name:
            </label>
            <input
              type="text"
              className="rounded border border-gray-600 focus:outline-none px-2"
            />
          </div>
          <NavLink to="/pages">
            <button
              onClick={() => {
                if (user?.isLoggedIn) return;
                setUser({ isLoggedIn: true });
                if (location.state.from) {
                  navigate(location.state.from);
                }
              }}
              className="py-1 px-4 rounded bg-gradient-to-r border"
            >
              Login
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Form;
