import { useState } from "react";
import { ErrorTypes } from "../../utils/siteData";

type TextInpTypes = {
  label: string;
  handleLoginData: (fieldName: string, value: string) => void;
  error?: ErrorTypes;
  resetErrors?: () => void;
};

const TextInp = ({
  label,
  handleLoginData,
  error,
  resetErrors,
}: TextInpTypes) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (resetErrors) {
      resetErrors();
    }
    setInputValue(e.target.value);
    handleLoginData(label, e.target.value);
  };

  return (
    <div className="w-full relative">
      <p className="text-white capitalize">{label}</p>
      <input
        type="text"
        name={label + "-inp"}
        className="w-full text-2xl rounded-md outline-none p-1 focus:outline focus:outline-1 focus:outline-pink-400 transition-all"
        placeholder="..."
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />
      {!error?.errorState && (
        <p className="text-sky-950 text-center absolute -bottom-6 left-0">
          {error?.errorMsg}
        </p>
      )}
    </div>
  );
};

export default TextInp;
