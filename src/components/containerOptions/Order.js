import React, { useState } from "react";
import VectorTop from "../../assets/image/Vector-top.png";
import VectorTopBlack from "../../assets/image/Vector-topblack.png";
import "../containerOptions/ContainerOptions.scss";

const Order = () => {
  const [open, setOpen] = useState(false);
  const openOrder = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="order">
      <span>Ordenar por</span>
      <button onClick={openOrder}>
        {open ? (
          <img src={VectorTopBlack} alt="vector black" />
        ) : (
          <img src={VectorTop} alt="vector top" />
        )}
      </button>
    </div>
  );
};

export default Order;
