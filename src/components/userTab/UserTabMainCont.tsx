import { useUserContext } from "../../utils/siteData";
import UserImage from "../../components/userTab/UserImage";
import UserOrders from "../userCart/UserOrders";
import UserTabForm from "./UserTabForm";

const UserTabMainCont = () => {
  const { user, userCart } = useUserContext();

  return (
    <main className="userMainTab">
      <section className="bg-sky-400 rounded-lg flex flex-col gap-10 p-4 max-w-[45rem]">
        <div className="flex flex-col min-[350px]:flex-row justify-between gap-6">
          <UserImage img={user.image} />
          <UserTabForm />
        </div>
        <div>
          <h2 className="text-xl sm:text-4xl text-white font-medium mb-2">
            My orders
          </h2>
          {userCart.length !== 0 ? (
            <UserOrders />
          ) : (
            <h3 className="text-2xl text-white font-semibold text-center py-12">
              Your cart is empty
            </h3>
          )}
        </div>
      </section>
    </main>
  );
};

export default UserTabMainCont;
