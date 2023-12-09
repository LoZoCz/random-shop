import Header from "../components/header/Header";
import { useState } from "react";
import image from "../assets/loginSvg.svg";
import RegisterForm from "../components/login&register/RegisterForm";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Header />
      <main
        className="flex flex-col gap-8 justify-center items-center text-slate-950 p-1"
        style={{ height: "calc(100vh - 7rem)" }}
      >
        <div className="grid grid-cols-2 grid-rows-1 gap-16">
          <img
            src={image}
            alt="login image"
            className="h-full rounded-lg bg-sky-400 p-4"
          />
          <RegisterForm
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>
      </main>
    </>
  );
};

export default Register;
