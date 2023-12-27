import { Link } from "react-router-dom";
import { headerIcons, useUserContext } from "../../utils/siteData";

const UserOptions = () => {
  const { user, logout } = useUserContext();
  const webToken = localStorage.getItem("userToken");

  const isLogged = user.token !== webToken;

  return (
    <>
      <div className="flex gap-10">
        {isLogged ? (
          <Link to={"/random-shop/login"} className="header-options-links">
            {headerIcons[3].icon}
            <p className="capitalize leading-4">{headerIcons[3].name}</p>
          </Link>
        ) : (
          <>
            <Link to={"/random-shop/user"} className="header-options-links">
              {headerIcons[1].icon}
              <p className="capitalize leading-4">{headerIcons[1].name}</p>
            </Link>
            <button onClick={() => logout()} className="header-options-links">
              {headerIcons[4].icon}
              <p className="capitalize leading-4">{headerIcons[4].name}</p>
            </button>
            <Link to={"/random-shop/cart"} className="header-options-links">
              {headerIcons[2].icon}
              <p className="capitalize leading-4">{headerIcons[2].name}</p>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default UserOptions;
