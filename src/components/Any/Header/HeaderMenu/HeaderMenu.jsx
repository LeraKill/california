import React from "react";
import "./style.scss";
import { useHeaderMenu } from "./useHeaderMenu";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  const { menuArr, openMenu, closeMenu, handleOpenMenu } = useHeaderMenu();

  return (
    <>
      <nav className="header__menu menu">
        <div
          className={`menu__burger ${openMenu ? "_active" : ""}`}
          onClick={handleOpenMenu}
        >
          <span />
        </div>
        <div className={`menu__body ${openMenu ? "_active" : ""}`}>
          <ul className="menu__list">
            {menuArr &&
              menuArr.map((item, index) => (
                <li key={`${item.title}_${index}`} className="menu__item">
                  <Link to={item.href} onClick={closeMenu}>
                    {item.title}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="menu__actions">
            <a href="/">
              <span className="icon icon-search" />
            </a>
            <a href="/">
              <span className="icon icon-cart" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderMenu;
