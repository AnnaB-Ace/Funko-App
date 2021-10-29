import "./Banner.scss";
import React from "react";
import banner from "../../assets/image/banner_listado.png";

const Banner = () => {
  return (
    <div className="banner">
      <img className="banner__image" src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
