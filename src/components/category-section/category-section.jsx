import React from "react";
import "./category-section.scss";
import AliceCarousel from "react-alice-carousel";

import { Link } from "react-router-dom";
import { Product } from "components/product/product";
import { AngleRightIcon } from "components/icons/icons";

export const CategorySection = (props) => {
  const responsive = {
    0: { items: 1 },
    400: { items: 2 },
    575: { items: 3 },
    991: { items: 4 },
  };
  return (
    <div className="container px-0 align-items-center category-section">
      <h2 className="title-category">{props.title}</h2>
      <Link className="view-all" to={props.link}>
        Xem tất cả <AngleRightIcon className="icon-arrow"/>
      </Link>
      {props.isSlider === true && (
        <div className=""  >
          <AliceCarousel
            mouseTrackingEnabled={false}
            touchTrackingEnabled={false}
            dotsDisabled
            responsive={responsive}
          >
            {props.dataProduct.length !== 0 &&
              props.dataProduct.map((item) => (
                <div className="product-slider">
                <Product 
                  
                  key={item.image}
                  image={item.image}
                  price={item.price}
                  sale={item.sale}
                  title={item.title}
                  status={item.status}
                />
                </div>
              ))}
          </AliceCarousel>
        </div>
      )}
      {props.isSlider === false && (
        <div className="d-flex flex-wrap">
          {props.dataProduct.length !== 0 &&
            props.dataProduct.map((item) => (
              <div className="col-lg-3 col-sm-4 col-6">
              <Product
                key={item.image}
                image={item.image}
                price={item.price}
                sale={item.sale}
                title={item.title}
                status={item.status}
              />
              </div>
            ))}
        </div>
      )}
       <Link className="view-all-end" to={props.link}>
        Xem tất cả <AngleRightIcon className="icon-arrow"/>
      </Link>
    </div>
  );
};
