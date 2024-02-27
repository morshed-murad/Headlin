import { Link } from "react-router-dom";
import { imageList } from "./store/Store";



const Allpages = () => {
  return (
    <div className="bg-blue-400 py-20 grid grid-cols-3 px-10 gap-3">
      {imageList.map((image) => (
        <Link key={image.id} to={image.path}>
          <div>
            <img src={image.src} alt={image.alt} />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-indigo-600">
              {image.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Allpages;
