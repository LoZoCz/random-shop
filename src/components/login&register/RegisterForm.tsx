import TextInp from "./TextInp";
import PassInp from "./PassInp";
import LoginBtn from "./LoginBtn";
import { useState } from "react";

type RegisterFormTypes = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterForm = ({ showPassword, setShowPassword }: RegisterFormTypes) => {
  const [userLoginData, setUserLoginData] = useState({
    mail: "",
    nickname: "",
    password: "",
    passwordAuth: "",
  });

  const handleLoginData = (fieldName: string, value: string) => {
    setUserLoginData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  // useEffect(() => {
  //   console.log(userLoginData);
  // }, [userLoginData]);

  return (
    <form
      action=""
      className="flex items-center flex-col gap-4 text-slate-950 bg-sky-400 p-4 rounded-md h-fit"
    >
      <h1 className="text-4xl text-center text-sky-950 font-semibold">Login</h1>
      <TextInp label="mail" handleLoginData={handleLoginData} />
      <TextInp label="username" handleLoginData={handleLoginData} />
      <PassInp
        label="password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleLoginData={handleLoginData}
      />
      <PassInp
        label="auth password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleLoginData={handleLoginData}
      />
      <LoginBtn />
      <a className="hover:text-white underline transition-all cursor-pointer">
        You already have an anccount?
      </a>
    </form>
  );
};

export default RegisterForm;
