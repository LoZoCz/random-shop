import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { productTypes } from "../../utils/siteData";

type ProductInformationProps = {
  item: productTypes;
  click: (e: React.MouseEvent<HTMLButtonElement>, item: productTypes) => void;
};

const ProductInformation = ({ click, item }: ProductInformationProps) => {
  return (
    <div className="productInfo">
      <h1 className="text-4xl font-semibold min-[800px]:text-6xl">
        {item?.title}
      </h1>
      <div className="flex flex-col gap-4">
        <p className="text-md">{item?.brand}</p>
        <p className="text-lg pt-6 w-auto min-[800px]:text-2xl min-[800px]:w-[40ch]">
          {item?.description}
        </p>
        <p className="font-semibold text-xl min-[800px]:text-2xl">
          {item?.price} €
        </p>
      </div>
      <div className="flex gap-4 items-center pt-8">
        <p className="text-md min-[800px]:text-lg">
          <FontAwesomeIcon icon={faStar} className="text-md text-yellow-400" />{" "}
          {item?.rating}
        </p>
        <span>•</span>
        <p className="text-md min-[800px]:text-lg">{item?.stock} stocks</p>
      </div>
      <button onClick={(e) => click(e, item)} className="add-cart-btn">
        Add to cart
      </button>
    </div>
  );
};

export default ProductInformation;
