import { useState } from "react";
import { IoChevronDown, IoChevronUpSharp } from "react-icons/io5";
import {  NavLink } from "react-router-dom";
import Button from "../button/Button";

const Disclosure = () => {
  const [showFirstDiv, setShowFirstDiv] = useState(true);
  const [showSecondDiv, setShowSecondDIv] = useState(true);

  const handleCHangediv = () => {
    setShowFirstDiv(!showFirstDiv);
    // const heights={`h`}
  };
  const handleChangesecondDiv = () => {
    setShowSecondDIv(!showSecondDiv);
  };
  return (
    <div className="bg-gradient-to-r from-disbgfirst to-disbgsecond py-20 flex  h-[100vh] px-10">
      <NavLink to="/">
        <Button children="Back" />
      </NavLink>
      <div className="flex justify-center items-center w-full">
        <div className="bg-white px-2 py-2 rounded-lg w-[430px] fixed top-40">
          <div className="pb-2 ">
            <div
              onClick={handleCHangediv}
              className=" bg-purple-100 hover:bg-purple-200 py-2 px-4 rounded-lg flex items-center justify-between"
            >
              <h1 className="text-purple700 font-semibold">
                What is your refound policy?
              </h1>
              {showFirstDiv ? (
                <IoChevronUpSharp className="text-purple-700" />
              ) : (
                <IoChevronDown className="text-purple-700" />
              )}
            </div>
            {showFirstDiv ? (
              <p className="px-2 py-4 text-gray-800">
                If you're unhappy with your purchase for any reason,
                <br /> email us within 90 days and we'll refund you in full, no{" "}
                <br />
                questions asked.
              </p>
            ) : (
              ""
            )}
          </div>
          <div>
            <div
              onClick={handleChangesecondDiv}
              className="bg-purple-100 hover:bg-purple-200 py-2 px-4 rounded-lg flex justify-between items-center"
            >
              <h1>Do you offer technical support</h1>
              {showSecondDiv ? (
                <IoChevronUpSharp className="text-purple-700" />
              ) : (
                <IoChevronDown className="text-purple-700" />
              )}
            </div>
            {showSecondDiv ? (
              <p className="px-2 py-4 text-gray-800">No.</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclosure;
