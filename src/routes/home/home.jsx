import React from "react";
import "./home.scss";
import Gif from "assets/images/banner-gif.gif";
import mockupDataDiscount from "data/mockupDataDiscount";
import mockupDataBestSeller from "data/mockupDataBestSeller";
import mockupDataNewest from "data/mockupDataNewest";
import mockupDataHot from "data/mockupDataHot";
import { HomepageCarousel } from "components/homepage-carousel/homepage-carousel";
import { Hottrend } from "components/homepage-hottrend/homepage-hottrend";
import  {CategorySection}  from "components/category-section/category-section";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageCarousel></HomepageCarousel>
      <Hottrend />
      {/* <Newest />
      
      <Discount data={mockupDataDiscount}/>
      <BestSeller data={mockupDataBestSeller} />
      <Hot data={mockupDataHot} /> */}
      <CategorySection title="SẢN PHẨM MỚI NHẤT" link="/category/san-pham-moi-nhat" dataProduct={mockupDataNewest} isSlider={false} />
      <CategorySection title="SẢN PHẨM KHUYẾN MÃI" link="/category/san-pham-khuyen-mai" dataProduct={mockupDataDiscount} isSlider={true} />
      <CategorySection title="SẢN PHẨM BÁN CHẠY" link="/category/san-pham-ban-chay" dataProduct={mockupDataBestSeller} isSlider={true} />
      <CategorySection title="SẢN PHẨM NỔI BẬT" link="/category/san-pham-noi-bat" dataProduct={mockupDataHot} isSlider={true} />
    </div>
  );
};

export default Homepage;
