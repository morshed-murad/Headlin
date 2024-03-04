import { useState } from "react";
import { useListStore } from "../store/listItems";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";

const Conver = () => {
  const { items, addItems } = useListStore();
  const [inputValue, setInputValue] = useState("");
  const removeItems = useListStore((state) => state.removeItem);
  const handleinput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleAdds = () => {
    if (inputValue.trim() !== "") {
      const newItems = { id: Date.now(), title: inputValue.trim() };
      addItems(newItems);
      setInputValue("");
    }
  };
  const handleRemove = (id: number) => {
    removeItems(id);
  };
  return (
    <div className="py-20 px-10 bg-gradient-to-r from-greenbg to-greenlightbg h-[100vh]">
      <NavLink to={"/"}>
        <Button children={"Back"} />
      </NavLink>
      <div className="flex flex-col gap-10">
        <div className="flex justify-start mt-10">
          <div className="flex items-center gap-4 py-2 px-3 rounded-lg bg-white justify-self-start">
            <input
              className="focus:outline-none py-1 w-80"
              type="text"
              value={inputValue}
              onChange={handleinput}
              name=""
              id=""
            />
            <button
              onClick={handleAdds}
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Add
            </button>
          </div>
        </div>
        <ul className="flex flex-col justify-center w-full  items-baseline gap-2 text-black">
          {items.map((item) => (
            <div className="flex justify-between px-10 py-2 items-center bg-indigo-700 w-full rounded-lg">
              <li key={item.id} className="text-white font-bold text-xl">
                {item.title}
              </li>
              <button
                onClick={() => handleRemove(item.id)}
                className="px-4 py-2 bg-white rounded"
              >
                <span className="text-xl">❌</span>
              </button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Conver;
