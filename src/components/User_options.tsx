import { Link } from "react-router-dom";
import { headerIcons } from "../utils/siteData";

const User_options = () => {
  return (
    <>
      <div data-name="user-options" className="flex gap-10">
        <Link
          to={"/user"}
          data-name="user-btn"
          className="grid place-items-center hover:text-pink-200 transition-all"
        >
          {headerIcons[1].icon}
          <p className="capitalize">{headerIcons[1].name}</p>
        </Link>
        <button
          data-name="user-btn"
          className="grid place-items-center hover:text-pink-200 transition-all"
        >
          {headerIcons[2].icon}
          <p className="capitalize">{headerIcons[2].name}</p>
        </button>
      </div>
    </>
  );
};

export default User_options;
