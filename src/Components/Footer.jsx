import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  //  main render
  return (
    <div className="main-footer flex-col flex-center m-bot">
      <h3>assembled by @iONBain</h3>
      <p>{"CONNECT "}</p>
      <section className="flex-row flex-center">
        <Link
          className="accent text-deco-none"
          to="https://twitter.com"
          rel="noreferrer"
          target="_blank"
        >
          <FaTwitter />
        </Link>
      </section>
    </div>
  );
};

export default Footer;
