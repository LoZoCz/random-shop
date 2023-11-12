import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

type PassInpProps = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const PassInp = ({ showPassword, setShowPassword }: PassInpProps) => {
  return (
    <>
      <input
        type={showPassword ? "text" : "password"}
        className="text-2xl rounded-md outline-none p-1 focus:outline focus:outline-1 focus:outline-pink-400 transition-all"
        placeholder="..."
      />
      <button
        type="button"
        className="absolute top-1/2 right-2 -translate-y-1/2 text-sky-950 hover:text-pink-400 transition-all"
        onClick={() => setShowPassword(!showPassword)}
      >
        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
      </button>
    </>
  );
};

export default PassInp;
