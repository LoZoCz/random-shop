import { Link } from "react-router-dom";
import { useUserContext } from "../../utils/siteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const UserOrders = () => {
  const { userCart } = useUserContext();

  return (
    <div className="grid grid-rows-3 grid-cols-1 min-[480px]:grid-cols-3 min-[480px]:grid-rows-1 gap-4">
      {userCart
        .filter((_, i) => i < 2)
        .map((item) => {
          return (
            <div
              className="bg-white rounded-md p-4 flex flex-col gap-2 justify-center items-center"
              key={item.id}
            >
              <img
                src={item.thumbnail}
                alt={`${item.title} image`}
                className="w-24 aspect-square object-cover rounded-sm"
              />
              <p className="font-medium text-slate-900 text-center">
                {item.title}
              </p>
            </div>
          );
        })}
      {userCart.length > 2 && (
        <Link
          to={"/random-shop/cart"}
          className="bg-white rounded-md p-4 flex flex-col gap-2 justify-center items-center"
        >
          <FontAwesomeIcon icon={faPlus} className="text-6xl text-slate-900" />
          <p className="font-medium text-center text-slate-900">
            {userCart.length - 2} orders more
          </p>
        </Link>
      )}
    </div>
  );
};

export default UserOrders;
