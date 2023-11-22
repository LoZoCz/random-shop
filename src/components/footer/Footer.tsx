import Logo from "../Logo";

const Footer = () => {
  return (
    <footer
      data-name="main-foot"
      className="bg-sky-400 text-white flex justify-between items-center px-8 py-8"
    >
      <Logo />
      <ul data-name="contact" className="flex gap-8">
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
