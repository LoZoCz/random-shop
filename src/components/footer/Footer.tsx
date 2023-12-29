import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className="bg-sky-400 text-white flex justify-center items-center flex-col gap-6 px-8 py-8 md:justify-between md:flex-row">
      <Logo />
      <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
        <li>
          <a href="#" className="text-md hover:underline">
            Instagram
          </a>
        </li>
        <li>
          <a href="#" className="text-md hover:underline">
            Twitter
          </a>
        </li>
        <li>
          <a href="#" className="text-md hover:underline">
            Facebook
          </a>
        </li>
        <li>
          <a href="#" className="text-md hover:underline">
            Support
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
