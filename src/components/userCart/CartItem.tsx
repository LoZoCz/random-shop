import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  UserCartTypes,
  isTouchDevice,
  useUserContext,
} from "../../utils/siteData";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

type CartItemProps = {
  item: UserCartTypes;
  index: number;
};

const CartItem = ({ item, index }: CartItemProps) => {
  const { updateUserCartQuantity, deleteItemFromCart, scrWidth } =
    useUserContext();
  const isMobile = isTouchDevice() || scrWidth < 768 ? false : true;

  return (
    <div
      key={index}
      className="bg-white rounded-md p-4 flex flex-col gap-2 justify-center items-start relative user-cart-item"
    >
      <img
        src={item.thumbnail}
        alt={`${item.title} image`}
        className="w-32 aspect-square object-cover self-center rounded-sm"
      />
      <h2 className="text-lg font-medium text-slate-900 text-center">
        {item.title}
      </h2>
      <p>€{item.price}</p>
      <div className="flex gap-4">
        <p>Quantity: {item.quantity}</p>
        <div className="flex gap-2">
          <button
            onClick={() => updateUserCartQuantity(item.id, item.quantity + 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          <button
            onClick={() => updateUserCartQuantity(item.id, item.quantity - 1)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
      </div>
      <button
        onClick={() => deleteItemFromCart(item.id)}
        className={`delete-item-btn ${
          !isMobile ? "w-8 h-8 bg-red-600" : "w-0 h-8"
        }`}
      >
        <FontAwesomeIcon
          icon={faTrashCan}
          className={`${
            !isMobile ? "opacity-100" : "opacity-0 transition-all duration-300"
          }`}
        />
      </button>
    </div>
  );
};

export default CartItem;
