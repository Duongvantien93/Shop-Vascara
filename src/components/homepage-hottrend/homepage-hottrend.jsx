import React, { useState, useEffect } from "react";
import "./homepage-hottrend.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Banner from "assets/images/banner-gif.gif"



export const Hottrend = () => {
  useEffect(() => {}, []);

  return (
    <div className="container content">
        <p>hot trend 2020</p>
        <img src={Banner} alt=""/>
      
    </div>
  );
};
