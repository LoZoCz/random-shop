import { useState } from "react";

type TextInpTypes = {
  label: string;
  handleLoginData: (fieldName: string, value: string) => void;
};

const TextInp = ({ label, handleLoginData }: TextInpTypes) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleLoginData("nickname", e.target.value);
  };

  return (
    <div>
      <p className="text-white capitalize">{label}</p>
      <input
        type="text"
        className="text-2xl rounded-md outline-none p-1 focus:outline focus:outline-1 focus:outline-pink-400 transition-all"
        placeholder="..."
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default TextInp;
