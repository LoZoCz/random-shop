import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type PassInpProps = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  handleLoginData: (fieldName: string, value: string) => void;
};

const PassInp = ({
  showPassword,
  setShowPassword,
  label,
  handleLoginData,
}: PassInpProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleLoginData("password", e.target.value);
  };

  return (
    <div>
      <p className="text-white capitalize">{label}</p>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="text-2xl rounded-md outline-none p-1 focus:outline focus:outline-1 focus:outline-pink-400 transition-all"
          placeholder="..."
          value={inputValue}
          onChange={(e) => handleInputChange(e)}
        />
        {label === "password" && (
          <button
            type="button"
            className="absolute top-1/2 right-2 -translate-y-1/2 text-sky-950 hover:text-pink-400 transition-all"
            onClick={() => setShowPassword(!showPassword)}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </button>
        )}
      </div>
    </div>
  );
};

export default PassInp;
