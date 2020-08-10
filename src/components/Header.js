import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { openMenu, closeMenu } from "../animations";
import gsap from "gsap";

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
      <div className="logo">
        <Link to="/">Oluwaseyi.</Link>
      </div>
      <div
        onClick={() => setMenuOpen(!menuOpen)}
        className={`hamburger${menuOpen ? "__active" : ""}`}
      >
        <div className="hamburger-icon"></div>
      </div>
    </div>
  );
};

export default withRouter(Header);
