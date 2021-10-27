import React from "react";
import VectorDown from "../../assets/image/Vector-down.png";
import "../containerOptions/ContainerOptions.scss";

const Filter = () => {
  return (
    <div className="filter">
      <span className="filter__name">Filtrar</span>
      <button>
        <img src={VectorDown} alt="vector down" className="filter__image" />
      </button>
    </div>
  );
};

export default Filter;
