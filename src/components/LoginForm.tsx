import { useState } from "react";
import TextInp from "./TextInp";
import PassInp from "./PassInp";
import LoginBtn from "./LoginBtn";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form
      action=""
      className="flex items-center flex-col gap-4 text-slate-950 bg-sky-400 p-4 rounded-md h-fit"
    >
      <h1 className="text-4xl text-center text-sky-950 font-semibold">Login</h1>
      <div>
        <p className="text-white">Username</p>
        <TextInp />
      </div>
      <div>
        <p className="text-white">Password</p>
        <div className="relative">
          <PassInp
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>
      </div>
      <LoginBtn />
      <a href="" className="hover:text-white underline transition-all">
        New users
      </a>
    </form>
  );
};

export default LoginForm;
