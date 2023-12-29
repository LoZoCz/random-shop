import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  productTypes,
  useUserContext,
  isTouchDevice,
} from "../../utils/siteData";
import { Link, useNavigate } from "react-router-dom";

type ProductsBoxProps = {
  product: productTypes;
};

const ProductBox = ({ product }: ProductsBoxProps) => {
  const { updateUserCart, scrWidth } = useUserContext();
  const isLogged = localStorage.getItem("userToken");
  const navigate = useNavigate();

  const isMobile = isTouchDevice() || scrWidth < 768 ? false : true;

  const handleClick = (e: React.FormEvent, newItem: productTypes) => {
    e.preventDefault();

    if (!isLogged) {
      navigate("/random-shop/login");
    } else {
      updateUserCart(newItem);
    }
  };

  return (
    <Link
      to={`/random-shop/product/${product.id}`}
      className="rounded-md overflow-hidden p-4 border-sky-300 border-2 border-solid h-[30rem] group product-box"
    >
      <img
        src={product.images[0]}
        alt={`${product.title} image`}
        className="h-3/5 w-full object-cover rounded-sm"
      />
      <div className="mt-4 h-2/5 relative">
        <h2 className="text-2xl font-semibold pt-2">{product.title}</h2>
        <p className="pb-2">{product.brand}</p>
        <p className="text-xl">{product.price} €</p>
        <button
          onClick={(e) => handleClick(e, product)}
          className={`add-cart-mini-btn ${
            isMobile ? "w-0 h-0 group-hover:w-12 group-hover:h-12" : "w-12 h-12"
          }`}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className={`${isMobile ? "text-transparent" : "text-white"}`}
          />
        </button>
      </div>
    </Link>
  );
};

export default ProductBox;
