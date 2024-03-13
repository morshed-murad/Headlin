import { useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContexts } from "../../App";

const Form = () => {
  const { user, setUser } = useContext(UserContexts);
  const [valueinputs, setValueinputs] = useState<string[]>(["", "", ""]);
  const handleInput = (index: number, values: string) => {
    setValueinputs((prevValue) => {
      const newValue = [...prevValue];
      newValue[index] = values;
      return newValue;
    });
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (user?.isLoggedIn) return;
    setUser({ isLoggedIn: true });
    if (location.state.from) {
      navigate(location.state.from);
    }
  };
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
              value={valueinputs[0]}
              onChange={(e) => handleInput(0, e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-white font-semibold">
              Last/Name:
            </label>
            <input
              type="text"
              className="rounded border border-gray-600 focus:outline-none px-2"
              value={valueinputs[1]}
              onChange={(e) => handleInput(1, e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-white font-semibold">
              F/Name:
            </label>
            <input
              type="text"
              className="rounded border border-gray-600 focus:outline-none px-2"
              value={valueinputs[2]}
              onChange={(e) => handleInput(2, e.target.value)}
            />
          </div>
          <NavLink to="/">
            <button
              disabled={!valueinputs}
              onClick={handleClick}
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
