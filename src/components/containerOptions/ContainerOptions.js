import React from "react";
import "./ContainerOptions.scss";
import Filter from "./Filter";
import Order from "./Order";

const ContainerOptions = () => {
  return (
    <div className="container-global">
      <div className="container-options">
        <li>Inicio / </li>
        <li>Juguetes / </li>
        <li className="container-options__black">Funko Pop </li>
      </div>
      <Filter />
      <Order />
    </div>
  );
};

export default ContainerOptions;
