import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `'${crumb}`;
      return (
        <div
          className="text-white text-xl my-3 ml-3 after:ml-3  after:content-['>']  after:last:hidden"
          key={crumb}
        >
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return <div className="text-white mr-3 flex">{crumbs}</div>;
};

export default Breadcrumbs;
