import { Link } from "react-router-dom";

const ProductsOptions = () => {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <Link
          to={"/random-shop/products"}
          className="text-xl font-medium hover:text-pink-200 transition-all"
        >
          All products
        </Link>
      </li>
      <li>
        <Link
          to={"/random-shop/categories"}
          className="text-xl font-medium hover:text-pink-200 transition-all"
        >
          Categories
        </Link>
      </li>
    </ul>
  );
};

export default ProductsOptions;
