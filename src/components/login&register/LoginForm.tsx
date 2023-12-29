import TextInp from "./TextInp";
import PassInp from "./PassInp";
import LoginBtn from "./LoginBtn";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useUserContext } from "../../utils/siteData";

type LoginFormTypes = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginForm = ({ showPassword, setShowPassword }: LoginFormTypes) => {
  const { login } = useUserContext();

  const navigate = useNavigate();

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

    const { username, password } = userLoginData;

    if (username && password) {
      axios
        .post("http://localhost:5000/login", {
          username: username,
          password: password,
        })
        .then((response) => {
          login(response.data.userData, response.data.userCart);

          localStorage.setItem("userToken", response.data.userData.token);

          navigate("/random-shop/user");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <form onSubmit={handleSubmitLogin} className="loginForm">
      <h1 className="text-4xl text-center text-sky-950 font-semibold">Login</h1>
      <div className="relative w-3/5">
        <TextInp label="username" handleLoginData={handleLoginData} />
      </div>
      <div className="relative w-3/5">
        <PassInp
          label="password"
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          handleLoginData={handleLoginData}
        />
      </div>
      <LoginBtn />
      <Link
        to={"/random-shop/register"}
        className="hover:text-white underline transition-all cursor-pointer"
      >
        New users
      </Link>
    </form>
  );
};

export default LoginForm;
