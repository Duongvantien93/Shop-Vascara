import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Logo from "assets/images/logo.png";
import User from "assets/images/user.png";
import {
  SearchIcon,
  CartIcon,
  CaretDownIcon,
  BarsIcon,
  CloseIcon,
  PlusIcon,
} from "components/icons/icons";
import { Navbar } from "./../navbar/navbar";

export const Header = () => {
  useEffect(() => {
    const listmenu = document.querySelector(".NavbarItems");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 125) {
        listmenu.classList.add("active");
      } else {
        listmenu.classList.remove("active");
      }
    });
  }, []);

  return (
    <div className="header px-0">
      <div className="container d-flex justify-content-between align-items-center header-top">
        <div className="">
          <a href="">
            <img src={Logo} className="logo" alt="" />
          </a>
        </div>
        <div className="location">
          <p>chọn kho giao hàng</p>
          <select name="" id="" className="section">
            <option>Hà nôi</option>
            <option>Hồ Chí Minh</option>
          </select>
        </div>
        <div className="d-flex align-items-center header-search">
          <div>
            <SearchIcon className="icon-search"></SearchIcon>
          </div>
          <form action="">
            <input type="text" placeholder="Tìm kiếm" />
          </form>
        </div>
        <div className="header-authen">
          <a href="#">Đăng nhập</a> &nbsp; &frasl; &nbsp;
          <a href="#">Đăng ký</a>
        </div>
        <div className="d-flex align-items-center header-cart">
          <CartIcon className="icon-cart"></CartIcon>
          <p>(0)</p>
        </div>
      </div>
      {/* <div className="container-fluid menu">
        <ul className="container d-flex align-items-center justify-content-between">
          <li>
            <a href="/">giày</a>
          </li>
          <li>
            <a href="/">túi sách</a>
          </li>
          <li>
            <a href="/">dép Guốc</a>
          </li>
          <li>
            <a href="/">Balo</a>
          </li>
          <li>
            <a href="/">Ví Bóp</a>
          </li>
          <li>
            <a href="/">Phụ kiện</a>
          </li>
          <li>
            <a href="/">gift carf</a>
          </li>
          <li>
            <a href="/">sale off</a>
          </li>
          <li>
            <a href="/">new arrival</a>
          </li>
          <li>
            <a href="/">summer kisses</a>
          </li>
          <li>
            <a href="/">tin tức</a>
          </li>
        </ul>
      </div> */}
      <Navbar></Navbar>
      <div className="container d-flex justify-content-between align-items-center responsive ">
        <div className="section-responsive">
          <span>chọn kho giao hàng : </span>
          <select name="" id="" className="section">
            <option>Hà nôi</option>
            <option>Hồ Chí Minh</option>
          </select>
        </div>
        <div className="d-flex align-items-center cart-responsive">
          <CartIcon></CartIcon>
          <p>(0)</p>
        </div>
      </div>
    </div>
  );
};
