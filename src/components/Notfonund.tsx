import { Link } from "react-router-dom";

const Notfonund = () => {
  return (
    <div className="flex flex-col gap-6 py-24 px-10">
      <h1 className="text-center text-4xl text-red-500">Page note NotFound</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ut
        nesciunt fugiat cum explicabo quasi aut architecto minus! Repellat fugit
        omnis ea alias quos enim velit corporis adipisci repellendus dolor.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ut
        nesciunt fugiat cum explicabo quasi aut architecto minus! Repellat fugit
        omnis ea alias quos enim velit corporis adipisci repellendus dolor.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ut
        nesciunt fugiat cum explicabo quasi aut architecto minus! Repellat fugit
        omnis ea alias quos enim velit corporis adipisci repellendus dolor.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae ut
        nesciunt fugiat cum explicabo quasi aut architecto minus! Repellat fugit
        omnis ea alias quos enim velit corporis adipisci repellendus dolor.
      </p>
      <span>
        Go TO the <Link to="/">HomPage</Link>
      </span>
    </div>
  );
};

export default Notfonund;
