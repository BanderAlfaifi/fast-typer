import "../styles.css";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      Made with <AiFillHeart className="heart" fill="#DC143C" /> by{" "}
      <a
        target="_blank"
        href="https://www.linkedin.com/in/bander-alfaifi-a02b75203"
        rel="noopener noreferrer"
      >
        {" "}
        Bander Alfaifi{" "}
      </a>
    </div>
  );
};

export default Footer;
