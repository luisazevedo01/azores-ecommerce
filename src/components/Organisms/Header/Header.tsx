import { Link } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import "./Header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        Island Dripp
      </Link>
      <div className="options">
        <Link className="option" to="/cart">
          <GiShoppingCart size="2em" />
        </Link>
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      </div>
    </div>
  );
};

export default Header;
