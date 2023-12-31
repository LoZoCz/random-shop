import { useUserContext } from "../../utils/siteData";
import CartItem from "./CartItem";

const CartSect = () => {
  const { userCart } = useUserContext();

  return (
    <div className="grid grid-cols-1 min-[800px]:grid-cols-3 min-[500px]:grid-cols-2 gap-3">
      {userCart.map((item, index) => {
        return <CartItem item={item} index={index} key={index} />;
      })}
    </div>
  );
};

export default CartSect;
