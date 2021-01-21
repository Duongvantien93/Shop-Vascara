import React, { useState, useEffect } from "react";
import "./category.scss";
import { CategorySection } from "components/category-section/category-section";
import { Link } from "react-router-dom";
import mockupDataDiscount from "data/mockupDataDiscount";
import mockupDataBestSeller from "data/mockupDataBestSeller";
import mockupDataNewest from "data/mockupDataNewest";
import mockupDataHot from "data/mockupDataHot";

import { connect } from "react-redux";

const Category = ({ match}) => {
  const [dataCategory, setData] = useState([]);
  const [title,updated] = useState("");
  const currentCategory = match.params.category;

  const banner = [
    require("assets/images/category-image-1.png"),
    require("assets/images/category-image-2.png"),
    require("assets/images/category-image-3.png"),
    require("assets/images/category-image-4.png"),
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    currentCategory === "san-pham-moi-nhat"
      ? setData(mockupDataNewest)
      : currentCategory === "san-pham-khuyen-mai"
      ? setData(mockupDataDiscount)
      : currentCategory === "san-pham-ban-chay"
      ? setData(mockupDataBestSeller)
      : currentCategory === "san-pham-noi-bat"
      ? setData( mockupDataHot )
      : setData(mockupDataNewest);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    currentCategory === "san-pham-moi-nhat"
      ? updated("sản phẩm mới nhất")
      : currentCategory === "san-pham-khuyen-mai"
      ? updated("sản phẩm khuyến mại")
      : currentCategory === "san-pham-ban-chay"
      ? updated("sản phẩm bán chạy")
      : currentCategory === "san-pham-noi-bat"
      ? updated("sản phẩm nổi bật")
      : updated("sản phẩm mới nhất");
  }, []);


  return (
    <div className="category">
      <div className="category-banner">
        {currentCategory === "san-pham-moi-nhat" ? (
          <img src={banner[0]} alt="" />
        ) : currentCategory === "san-pham-khuyen-mai" ? (
          <img src={banner[1]} alt="" />
        ) : currentCategory === "san-pham-ban-chay" ? (
          <img src={banner[2]} alt="" />
        ) : currentCategory === "san-pham-noi-bat" ? (
          <img src={banner[3]} alt="" />
        ) : (
          ""
        )}
      </div>
      <CategorySection title={title} link="/" dataProduct={dataCategory} isSlider={false} />



      <div className="category-footer d-flex justify-content-center">
        <Link className="see-more-category" to="/">
          Xem thêm các sản phẩm khác
        </Link>
      </div>
    </div>
  );
};
export default Category;
