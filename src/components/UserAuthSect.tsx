import Logo from "../components/Logo";
import image from "../assets/loginSvg.svg";
import LoginForm from "../components/LoginForm";
const UserAuthSect = () => {
  return (
    <main
      className="flex flex-col gap-8 justify-center items-center text-slate-950 p-1"
      style={{ height: "calc(100vh - 7rem)" }}
    >
      <Logo />
      <div className="flex justify-center items-center gap-16">
        <img
          src={image}
          alt="login image"
          className=" w-1/2 rounded-lg bg-sky-400 p-4"
        />
        <LoginForm />
      </div>
    </main>
  );
};

export default UserAuthSect;
