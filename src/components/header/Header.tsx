import { Link } from "react-router-dom";
import Logo from "../Logo";
import HeaderOptions from "./HeaderOptions";
import { useEffect, useState } from "react";
import HamburgerBtn from "./HamburgerBtn";
import { useUserContext } from "../../utils/siteData";

const Header = () => {
  const { scrWidth } = useUserContext();
  const [openNav, setOpenNav] = useState(true);

  useEffect(() => {
    setOpenNav(scrWidth > 1350);
  }, [scrWidth]);

  const showBars = scrWidth < 1350 && scrWidth !== 0;

  return (
    <header className="bg-sky-400 text-white flex gap-6 justify-between items-center h-28 relative px-4 sm:px-8">
      <Link to={"/random-shop/"}>
        <Logo />
      </Link>
      <HeaderOptions openNav={openNav} />
      {showBars && <HamburgerBtn setOpenNav={setOpenNav} />}
    </header>
  );
};

export default Header;
