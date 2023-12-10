import TextInp from "./TextInp";
import PassInp from "./PassInp";
import LoginBtn from "./LoginBtn";
import { useState } from "react";
import { Link } from "react-router-dom";

type LoginFormTypes = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ showPassword, setShowPassword }: LoginFormTypes) => {
  const [userLoginData, setUserLoginData] = useState({
    username: "",
    password: "",
  });

  const handleLoginData = (fieldName: string, value: string) => {
    setUserLoginData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(userLoginData);
  };

  return (
    <form
      onSubmit={handleSubmitLogin}
      className="flex items-center justify-center flex-col gap-4 text-slate-950 bg-sky-400 p-4 rounded-md h-full"
    >
      <h1 className="text-4xl text-center text-sky-950 font-semibold">Login</h1>
      <TextInp label="username" handleLoginData={handleLoginData} />
      <PassInp
        label="password"
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        handleLoginData={handleLoginData}
      />
      <LoginBtn />
      <Link
        to={"/register"}
        className="hover:text-white underline transition-all cursor-pointer"
      >
        New users
      </Link>
    </form>
  );
};

export default LoginForm;
