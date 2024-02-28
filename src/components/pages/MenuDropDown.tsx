import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { FiArchive, FiEdit2 } from "react-icons/fi";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiExternalLinkLine } from "react-icons/ri";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const MenuDropDown = () => {
  const [rotated, setRotated] = useState(false);
  const handleRote = () => {
    setRotated(!rotated);
  };

  return (
    <div className="py-20 px-10 bg-gradient-to-r from-purple-500 to-indigo-500 h-[100vh]">
      <Link to={"/"}>
        <Button>Back</Button>
      </Link>
      <div className="flex flex-col  items-center gap-3">
        <button
          onClick={handleRote}
          className="flex py-2 px-3 rounded-lg bg-colroutHover items-center gap-4 ml-[83px]"
        >
          <span className="text-white font-medium">Option</span>

          <FaChevronRight
            className="text-white transition-all"
            style={{ transform: rotated ? "rotate(90deg)" : "rotate(0deg)" }}
          />
        </button>
        <ul
          className={`bg-white rounded w-48 cursor-default pb-1 ${
            rotated === false ? "hidden" : ""
          }`}
        >
          <div className="px-1 py-1 border border-b rounded">
            <li
              onClick={handleRote}
              className="flex gap-2 items-center hover:bg-violet-500 px-2 py-1 rounded group cursor-pointer"
            >
              <FiEdit2 className="text-violet-500 group-hover:text-violet-400" />
              <span className="group-hover:text-white">Edit</span>
            </li>
            <li
              onClick={handleRote}
              className="flex items-center gap-2 hover:bg-violet-500 px-2 py-1 rounded group cursor-pointer"
            >
              <HiOutlineDuplicate className="text-violet-500 group-hover:text-violet-300" />
              <span className="group-hover:text-white">Duplicate</span>
            </li>
          </div>
          <div className="px-1 py-1 border border-b">
            <li
              onClick={handleRote}
              className="flex items-center gap-2 hover:bg-violet-500 px-2 py-1 rounded group cursor-pointer"
            >
              <FiArchive className="text-violet-500 group-hover:text-violet-300" />
              <span className="group-hover:text-white">Archive</span>
            </li>
            <li
              onClick={handleRote}
              className="flex items-center gap-2 hover:bg-violet-500 px-2 py-1 rounded group cursor-pointer"
            >
              <RiExternalLinkLine className="text-violet-500 group-hover:text-violet-300" />
              <span className="group-hover:text-white">Move</span>
            </li>
          </div>
          <div className="px-1 py-1">
            <li
              onClick={handleRote}
              className="flex items-center gap-2 hover:bg-violet-500 px-2 py-1 rounded group cursor-pointer"
            >
              <AiOutlineDelete className="text-violet-500 group-hover:text-violet-300" />
              <span className="group-hover:text-white">Delete</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MenuDropDown;
