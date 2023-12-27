import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type HamburgerBtnProps = {
  setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const HamburgerBtn = ({ setOpenNav }: HamburgerBtnProps) => {
  return (
    <button
      onClick={() => setOpenNav((prev) => (prev === true ? false : true))}
      className="border-sky-300 w-12 aspect-square border-2 border-solid p-2 rounded-md hover:border-white focus-visible:border-white transition-all justify-self-end"
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );
};

export default HamburgerBtn;
