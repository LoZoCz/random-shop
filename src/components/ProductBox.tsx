import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { productTypes, useUserContext } from "../utils/siteData";
import { Link } from "react-router-dom";

type ProductsBoxProps = {
  product: productTypes;
};

const ProductBox = ({ product }: ProductsBoxProps) => {
  const { updateUserCart } = useUserContext();
  const handleClick = (e: React.FormEvent, newItem: productTypes) => {
    e.preventDefault();

    updateUserCart(newItem);
  };

  return (
    <Link
      to={`/random-shop/product/${product.id}`}
      className="rounded-md overflow-hidden p-4 border-sky-300 border-solid h-full product-box"
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
          onClick={(e) => handleClick(e, product)}
          className="add-cart-mini-btn"
        >
          <FontAwesomeIcon icon={faCartShopping} className="text-transparent" />
        </button>
      </div>
    </Link>
  );
};

export default ProductBox;
