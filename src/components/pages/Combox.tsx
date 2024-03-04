import { HiMiniChevronUpDown } from "react-icons/hi2";

import { IoCheckmark } from "react-icons/io5";
import { useState } from "react";
import { Lists, listBoxes } from "../store/ListStore";
import Button from "../button/Button";
import {  NavLink } from "react-router-dom";

const Combox = () => {
  const [filteredOptions, setFilteredOptions] = useState<Lists[]>([]);
  const [selectedOption, setSelectedOption] = useState<Lists | null>(
    listBoxes[0]
  );
  const [selected, setSelected] = useState(listBoxes[0].title);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  const handleIputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchinput = event.target.value;
    setSelected(searchinput);
    const filtering = listBoxes.filter((list) =>
      list.title.toLowerCase().includes(searchinput.toLowerCase())
    );
    setFilteredOptions(filtering);
    if (filtering.length > 0) {
      setSelectedOption(filtering[0]);
    } else {
      setSelectedOption(null);
    }
    setShow(true);
  };

  const handleSelectedop = (option: Lists) => {
    setSelected(option.title);
    setSelectedOption(option);
    setShow(false);
  };

  return (
    <div className="h-[100vh] justify-center py-20 px-10 bg-gradient-to-r from-greenbg to-greenlightbg">
      <NavLink to={"/"}>
        <Button children={"Back"} />
      </NavLink>
      <div className="flex justify-center">
        <div className="flex flex-col gap-2 items-start  mt-20">
          <div className="flex bg-white py-1 px-1 rounded-lg">
            <input
              value={selected}
              type="text"
              className="outline-none focus:outline-none px-2"
              onChange={handleIputChange}
            />

            <HiMiniChevronUpDown
              onClick={handleClick}
              className="text-gray-400 text-2xl cursor-pointer"
            />
          </div>
          {show && (
            <div className="bg-white w-full rounded-xl py-2">
              {filteredOptions.map((list) => (
                <ul
                  onClick={() => handleSelectedop(list)}
                  key={list.id}
                  className={`cursor-default flex items-center px-3 gap-2 hover:bg-teal-600 hover:text-white ${
                    selectedOption?.id === list.id
                      ? "bg-teal-600 text-white"
                      : ""
                  }`}
                >
                  {selectedOption?.id === list.id ? (
                    <IoCheckmark
                      className={`text-2xl  ${
                        selectedOption ? "text-white" : "text-teal-700"
                      }`}
                    />
                  ) : (
                    <span className="w-6"></span>
                  )}

                  <li className="text-xl py-2">{list.title}</li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Combox;
