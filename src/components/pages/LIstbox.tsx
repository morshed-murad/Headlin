import { useState } from "react";
import { listBoxes } from "../store/ListStore";

import { IoCheckmark } from "react-icons/io5";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";

const LIstbox = () => {
  const [slected, setSelected] = useState<string | null>(listBoxes[0].title);
  const [show, setShow] = useState(false);
  const handleClick = (title: string) => {
    setSelected(title);
    setShow(!show);
  };
  const hndlechange = () => {
    setShow(!show);
  };
  return (
    <div className="bg-gradient-to-r from-listboxbody to-listboxbod py-20 px-10 h-[100vh] w-full  cursor-default duration-400">
      <NavLink to={"/"}>
        <Button>Back</Button>
      </NavLink>
      <div className="flex flex-col  justify-center pt-20 gap-1 items-center">
        <div
          onClick={hndlechange}
          className="flex items-center justify-between bg-white py-2 px-2 rounded-lg w-[280px] shadow-lg "
        >
          {slected ? <span className="text-2xl f">{slected}</span> : <></>}
          <HiMiniChevronUpDown className="text-gray-400 text-2xl" />
        </div>
        {show === true ? (
          <ul className="grid grid-flow-row transition-all duration-500 bg-white py-1 rounded-lg w-[280px] h-60 overflow-y-auto shadow-lg">
            {listBoxes.map((item) => (
              <li
                className="py-2 px-2 flex items-center gap-4 hover:bg-orange-200"
                key={item.id}
                onClick={() => handleClick(item.title)}
              >
                {slected === item.title ? (
                  <IoCheckmark className="text-orange-300 text-2xl" />
                ) : (
                  <span className="w-6"></span>
                )}
                <span className="hover:text-amber-900 text-2xl">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default LIstbox;
