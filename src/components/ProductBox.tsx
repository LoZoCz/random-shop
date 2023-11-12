import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { productTypes } from "../utils/siteData";
import { Link } from "react-router-dom";

type ProductsBoxProps = {
  product: productTypes;
};

const ProductBox = ({ product }: ProductsBoxProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      data-name="product"
      className="rounded-md overflow-hidden p-4 border-sky-300 border-solid h-full"
      style={{ borderWidth: "1px" }}
    >
      <img
        src={product.images[0]}
        alt={`${product.title} image`}
        loading="lazy"
        className="h-3/5 w-full object-cover rounded-sm"
      />
      <div className="mt-4 h-2/5 relative">
        <h2 className="text-2xl font-semibold pt-2">{product.title}</h2>
        <p className="pb-2">{product.brand}</p>
        <p className="text-xl">{product.price} €</p>
        <button
          data-name="cart-btn"
          onClick={(e) => {
            e.preventDefault();
            console.log("Added to cart");
          }}
          className="bg-sky-400 hover:bg-pink-400 absolute bottom-4 right-2 w-0 h-0 rounded-full grid place-items-center transition-all"
        >
          <FontAwesomeIcon
            data-name="cart-icon"
            icon={faCartShopping}
            className="text-transparent"
          />
        </button>
      </div>
    </Link>
  );
};

export default ProductBox;
