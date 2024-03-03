import { Link } from "react-router-dom";
import Button from "../button/Button";
import { FaCircle } from "react-icons/fa";
import { useState } from "react";

const Switch = () => {
  const [transelated, setTranselated] = useState<boolean>(false);
  const handleChange = () => {
    setTranselated(!transelated);
  };
  return (
    <div className="bg-gradient-to-r from-lighgreen to-darkgreen py-20 px-10 h-[100vh]">
      <Link to={"/"}>
        <Button children="Back" />
      </Link>
      <div className="flex justify-center">
        <div
          onClick={handleChange}
          className={`trnasition duration-200 ease-linear rounded-full  px-1 py-1 w-28 cursor-pointer ${
            transelated === true ? "bg-radiosecondcol" : "bg-radiofirstcol"
          }`}
        >
          <FaCircle
            onClick={handleChange}
            className={`text-5xl trnasition duration-200 ease-linear text-white transform  ${
              transelated ? "translate-x-14" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default Switch;
