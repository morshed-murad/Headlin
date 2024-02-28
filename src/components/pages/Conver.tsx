import { useState } from "react";
import { useListStore } from "../store/listItems";
import Button from "../button/Button";
import { Link } from "react-router-dom";

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
    <div className="py-20 px-10 bg-gradient-to-r from-greenbg to-greenlightbg">
      <Link to={"/"}>
        <Button children={"Back"} />
      </Link>
      <div className="flex items-center gap-4 py-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleinput}
          name=""
          id=""
        />
        <button onClick={handleAdds} className="px-4 py-2 bg-red-600 rounded">
          Adds itmes
        </button>
      </div>
      <ul className="flex flex-col bg-yellow-200 gap-2 text-black">
        {items.map((item) => (
          <div>
            <li key={item.id}>{item.title}</li>
            <button
              onClick={() => handleRemove(item.id)}
              className="px-4 py-2 bg-red-600 rounded"
            >
              Adds itmes
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Conver;
