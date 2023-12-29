import Header from "../components/header/Header";
import { useState } from "react";
import image from "../assets/loginSvg.svg";
import RegisterForm from "../components/login&register/RegisterForm";
import { useUserContext } from "../utils/siteData";

const Register = () => {
  const { scrWidth } = useUserContext();
  const [showPassword, setShowPassword] = useState(false);

  const showImage = scrWidth <= 1350 && scrWidth !== 0;
  return (
    <>
      <Header />
      <main
        className="flex flex-col gap-8 justify-center items-center text-slate-950 p-1"
        style={{ height: "calc(100vh - 7rem)" }}
      >
        <div
          className={`grid ${
            !showImage ? "grid-cols-2" : "grid-cols-1"
          } grid-rows-1 gap-16`}
        >
          {!showImage && (
            <img
              src={image}
              alt="login image"
              className="h-full rounded-lg bg-sky-400 p-4"
            />
          )}
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
