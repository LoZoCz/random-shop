import { useState } from "react";
import { UserDataTypes } from "../../utils/siteData";

type UserTabInputTypes = {
  label: string;
  defaultValue: string;
  objLabel: string;
  setData: React.Dispatch<React.SetStateAction<UserDataTypes>>;
};

const UserTabInput = ({
  label,
  defaultValue,
  objLabel,
  setData,
}: UserTabInputTypes) => {
  const [inputData, setInputData] = useState(defaultValue);

  const handleUserData = (value: string) => {
    setInputData(value);

    setData((prev) => {
      return {
        ...prev,
        [objLabel]: value,
      };
    });
  };

  return (
    <div className="">
      <p>{label}</p>
      <input
        type="text"
        name={label + "-inp"}
        value={inputData}
        onChange={(e) => handleUserData(e.target.value)}
        className="userTabInput"
      />
    </div>
  );
};

export default UserTabInput;
