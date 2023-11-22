import Logo from "../Logo";
import { Link } from "react-router-dom";

const Logo_options = () => {
  return (
    <div data-name="logo&options" className="flex gap-16">
      <Link to={"/"}>
        <Logo />
      </Link>
      <ul data-name="products-options" className="flex items-center gap-4">
        <li>
          <Link
            to={"/products"}
            data-name="products-btn"
            className="text-xl font-medium hover:text-pink-200 transition-all"
          >
            All products
          </Link>
        </li>
        <li>
          <Link
            to={"/categories"}
            data-name="category-btn"
            className="text-xl font-medium hover:text-pink-200 transition-all"
          >
            Categories
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Logo_options;
