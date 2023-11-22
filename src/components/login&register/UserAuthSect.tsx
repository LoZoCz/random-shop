import { useState } from "react";
import image from "../../assets/loginSvg.svg";
// import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const UserAuthSect = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main
      className="flex flex-col gap-8 justify-center items-center text-slate-950 p-1"
      style={{ height: "calc(100vh - 7rem)" }}
    >
      <div className="flex justify-center items-center gap-16">
        <img
          src={image}
          alt="login image"
          className=" w-1/2 rounded-lg bg-sky-400 p-4"
        />
        {/* <LoginForm
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        /> */}
        <RegisterForm
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>
    </main>
  );
};

export default UserAuthSect;

// ! dodaje animacje przejscia fomularza logowania i rejestracji
