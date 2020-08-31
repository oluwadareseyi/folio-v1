import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { openMenu, closeMenu } from "../animations";
import { ReactComponent as Logo } from "../assets/images/logo-full.svg";

const Header = ({ history }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      openMenu();
    } else {
      closeMenu();
    }

    history.listen(() => {
      setMenuOpen(false);
    });
  }, [menuOpen, history]);
  return (
    <div className="header">
      <div className={`${menuOpen ? "logo-open" : ""} logo header-item`}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`hamburger${menuOpen ? "__active" : ""} header-item`}
      >
        <div className="hamburger-icon"></div>
      </div>
    </div>
  );
};

export default withRouter(Header);
