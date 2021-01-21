import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import {
  HotlineIcon,
  MapMarkerIcon,
  BctIcon,
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  YoutubeIcon,
  ZaloIcon,
  CashIcon,
  AtmIcon,
  VisaIcon,
  MomoIcon,
  ZalopayIcon,
} from "components/icons/icons";

export const Footer = () => {
  return (
    <div>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 content-footer">
              <p className="title">công ty</p>
              <a href="">Giới thiệu</a>
              <a href="">Tuyển dụng</a>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content-footer">
              <p className="title">chính sách</p>
              <a href="">Chính sách bảo mật</a>
              <a href="">Ưu đãi khách hàng thân thiết</a>
              <a href="">Chính sách bảo hành trọn đời</a>
              <a href="">Chính sách giao nhận</a>
              <a href="">Chính sách đổi sản phẩm</a>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content-footer">
              <p className="title">Hỗ trợ khách hàng</p>
              <a href="">Hướng dẫn mua hàng</a>
              <a href="">Tra cứu bảo hành</a>
              <a href="">Quy định về phiếu quà tặng</a>
              <a href="">Điều khoản sử dụng</a>
            </div>
            <div className="col-12 col-md-6 col-lg-3 content-footer">
              <p className="title title-connect">Kết nối VASCARA</p>
              <div className="d-flex connect-vascara">
                <div>
                  <FacebookIcon />
                </div>
                <div>
                  <InstagramIcon />
                </div>
                <div>
                  <PinterestIcon />
                </div>
                <div>
                  <YoutubeIcon />
                </div>
                <div>
                  <ZaloIcon />
                </div>
              </div>
              <p className="title title-connect">phương thức thanh toán</p>
              <div className="d-flex connect-vascara">
                <div>
                  <CashIcon />
                </div>
                <div>
                  <AtmIcon />
                </div>
                <div>
                  <VisaIcon />
                </div>
                <div>
                  <MomoIcon />
                </div>
                <div>
                  <ZalopayIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-12 col-lg-4">
              <BctIcon />
            </div>
            <div className="col-12 col-lg-4 d-flex phone">
              <HotlineIcon className="icon-phone" />
              <a href="#">
                190012345 <span>(miễn phí,9h-22h)</span>
              </a>
            </div>
            <div className="col-12 col-lg-4 address">
              <MapMarkerIcon className="icon-map" />
              <a href="">xem vị trí cửa hàng</a>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>
          Công ty TNHH MTV Global Fashion. Văn phòng: Lầu 4 tòa nhà ACM số 96
          Cao Thắng phường 04 quận 03 TP Hồ Chí Minh.
        </p>
        <p>
          GP số 0314657558 do sở KHĐT Tp Hồ Chí Minh cấp lần đầu ngày 05/10/2017
        </p>
      </div>
    </div>
  );
};
