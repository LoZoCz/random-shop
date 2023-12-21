import { useUserContext } from "../../utils/siteData";
import CartSect from "./CartSect";

const MainCart = () => {
  const { userCart } = useUserContext();

  const total = userCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <main
      className="flex justify-center items-center py-16"
      style={{ minHeight: "calc(100vh - 8rem)" }}
    >
      <section className="bg-sky-400 p-4 rounded-lg min-w-[48rem]">
        <h1 className="text-6xl font-bold text-white mb-6">My cart</h1>
        {userCart.length !== 0 ? (
          <CartSect />
        ) : (
          <h3 className="text-2xl text-white font-semibold text-center py-12">
            Your cart is empty
          </h3>
        )}
        <h3 className="text-3xl text-white font-semibold mt-4">
          Total: €{total}
        </h3>
      </section>
    </main>
  );
};

export default MainCart;

//! dodaj formularz wykanczania zamowienia
