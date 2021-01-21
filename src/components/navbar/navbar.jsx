import React, { useState, useEffect } from "react";
import Logo from "assets/images/logo.png";
import "./navbar.scss";
import { SearchIcon } from "components/icons/icons";

export const Navbar = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState({ clicked: !state.clicked });
  };
  return (
    <nav className="container d-flex px-0 NavbarItems">
      <div>
        <a href="">
          <img src={Logo} alt="" className="nav-logo" />
        </a>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="" className="nav-links">
            giày
          </a>
        </li>
        <li>
          <a href="" className="nav-links">
            túi sách
          </a>
        </li>
        <li>
          <a href="" className="nav-links">
            dép guốc
          </a>
        </li>
        <li>
          <a href="" className="nav-links">
            balô
          </a>
        </li>
        <li>
          <a href="" className="nav-links">
            ví bóp
          </a>
        </li>
        <li>
          <a href="" className="nav-links">
            phụ kiện
          </a>
        </li>
        <li>
          <a href="" className="nav-links">
            gift carf
          </a>
        </li>
        <li>
          <a href="" className="nav-links">
            sale off
          </a>
        </li>
        <li>
          <a href="" className="nav-links">
            new arrival
          </a>
        </li>
        <li>
          <a href="" className="nav-links">
            summer kisses
          </a>
        </li>
        <li>
          <a href="" className="nav-links">
            tin tức
          </a>
        </li>
        <div className="d-flex align-items-center search-input">
          <div>
            <SearchIcon className="icon-search"></SearchIcon>
          </div>
          <form action="">
            <input type="text" placeholder="Tìm kiếm" />
          </form>
        </div>
        <div className="d-flex align-items-center link-login">
          <a href="">Đăng ký </a>
          <span>/</span>
          <a href=""> Đăng nhập</a>
        </div>
      </ul>
    </nav>
  );
};
