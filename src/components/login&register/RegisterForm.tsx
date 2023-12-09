import TextInp from "./TextInp";
import PassInp from "./PassInp";
import LoginBtn from "./LoginBtn";
import { useState } from "react";
import {
  isPasswordValid,
  isUsernameValid,
  isEmailValid,
  isPasswordsMatch,
  ErrorTypes,
} from "../../utils/siteData";

type RegisterFormTypes = {
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

const RegisterForm = ({ showPassword, setShowPassword }: RegisterFormTypes) => {
  const [userLoginData, setUserLoginData] = useState({
    mail: "",
    username: "",
    password: "",
    passwordAuth: "",
  });

  const handleLoginData = (fieldName: string, value: string) => {
    setUserLoginData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const [errors, setErrors] = useState<ErrorTypes[]>([
    {
      errorType: "blankField",
      errorState: true,
      errorMsg: "Please fill in all fields",
    },
    { errorType: "mail", errorState: true, errorMsg: "Mail is not valid" },
    {
      errorType: "username",
      errorState: true,
      errorMsg: "Username is too short or have invalid characters",
    },
    {
      errorType: "password",
      errorState: true,
      errorMsg: "Password must be at least 8 characters long",
    },
    {
      errorType: "passwordMatch",
      errorState: true,
      errorMsg: "Passwords do not match",
    },
  ]);

  const updateErrorState = (errorType: string, newErrorState: boolean) => {
    setErrors((prevErrors) => {
      const updatedErrors = prevErrors.map((error) =>
        error.errorType === errorType
          ? { ...error, errorState: newErrorState }
          : error,
      );
      return updatedErrors;
    });
  };

  const handleRegisterData = (e: React.FormEvent) => {
    e.preventDefault();

    const { mail, username, password, passwordAuth } = userLoginData;

    if (
      mail.length == 0 ||
      username.length == 0 ||
      password.length == 0 ||
      passwordAuth.length == 0
    ) {
      console.log(errors);
      updateErrorState("blankField", false);
    }

    if (!isPasswordsMatch(password, passwordAuth)) {
      console.log(errors);
      updateErrorState("passwordMatch", false);
    }

    if (!isPasswordValid(password)) {
      console.log(errors);
      updateErrorState("password", false);
    }

    if (!isEmailValid(mail)) {
      console.log(errors);
      updateErrorState("mail", false);
    }

    if (!isUsernameValid(username)) {
      console.log(errors);
      updateErrorState("username", false);
    }

    if (mail && username && password && passwordAuth) {
      console.log("Registration successful", userLoginData);
    }
  };

  const resetErrors = () => {
    setErrors((prevErrors) =>
      prevErrors.map((error) => ({ ...error, errorState: true })),
    );
  };

  return (
    <form
      onSubmit={(e) => handleRegisterData(e)}
      className="h-full flex flex-col items-center gap-8 text-slate-950 bg-sky-400 p-4 rounded-md relative"
    >
      <h1 className="text-4xl text-center text-sky-950 font-semibold">
        Register
      </h1>
      <div className="relative w-3/5">
        <TextInp
          label="mail"
          handleLoginData={handleLoginData}
          error={errors[1]}
          resetErrors={resetErrors}
        />
      </div>
      <div className="relative w-3/5">
        <TextInp
          label="username"
          handleLoginData={handleLoginData}
          error={errors[2]}
          resetErrors={resetErrors}
        />
      </div>
      <div className="relative w-3/5">
        <PassInp
          label="password"
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          handleLoginData={handleLoginData}
          error={errors[3]}
          resetErrors={resetErrors}
        />
      </div>
      <div className="relative w-3/5">
        <PassInp
          label="auth password"
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          handleLoginData={handleLoginData}
          error={errors[4]}
          resetErrors={resetErrors}
        />
      </div>
      {!errors[0]?.errorState && (
        <p className="text-sky-950 absolute bottom-32 left-1/2 -translate-x-1/2">
          {errors[0]?.errorMsg}
        </p>
      )}
      <LoginBtn />
      <a className="hover:text-white underline transition-all cursor-pointer">
        You already have an anccount?
      </a>
    </form>
  );
};

export default RegisterForm;
