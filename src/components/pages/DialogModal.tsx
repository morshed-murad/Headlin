import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import { useState } from "react";

const DialogModal = () => {
  const [show, setShow] = useState(true);
  const handleHide = () => {
    setShow(!show);
  };
  return (
    <div className="py-20 px-10 h-[100vh] bg-gradient-to-r from-dialogfirstbg to-dialogsecondbg">
      <NavLink to="/">
        <Button children="Back" />
      </NavLink>
      <div className="flex justify-center items-center">
        <button onClick={handleHide} className="bg-black/20 py-2 px-4 rounded">
          Open dailog
        </button>
        {show && (
          <div onClick={handleHide} className="fixed pt-32">
            <div className="absolute top-0 left-[10%] w-[430px] px-5 py-5 bg-white rounded-xl flex flex-col gap-4 justify-center items-start">
              <h1 className="text-xl font-semibold">Payment successful</h1>
              <p>
                Your payment has been successfully submitted. We’ve <br /> sent
                you an email with all of the details of your order.
              </p>
              <button
                onClick={handleHide}
                className="bg-blue-100 py-2 px-4 rounded hover:bg-blue-200 text-blue-900 font-semibold"
              >
                Got it, thanks!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogModal;
