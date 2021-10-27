import React from "react";
import ContainerOptions from "../components/containerOptions/ContainerOptions";
import "./Listado.scss";
import Banner from "../assets/image/banner_listado.png";
import Funkii from "../assets/image/4048.png";
import Car from "../assets/image/car.png";

const Listado = () => {
  //  const [states, setStates] = useState([]);
  //const imagenes = require.context("../assets/image", true);
  return (
    <div className="listado">
      <div className="listado-container">
        <img className="image" src={Banner} alt="banner" />
      </div>
      <ContainerOptions />
      {/* <img src={imagenes("./29164.png")} alt="fotofunkyr" /> */}
      <div className="listado-products">
        <img src={Funkii} alt="fotofunkyr" width="100%" />
        <div className="listado-products__data">
          <p className="listado-products__title">Funko</p>
          <p className="listado-products__name">
            Funko POP | Game of Thrones - Daenerys 25
          </p>
          <p className="listado-products__cuotas">6 cuotas sin interes de:</p>
          <p className="listado-products__price">$211.50</p>
        </div>
        <button className="listado-products__button">
          <img src={Car} alt="car" width="100%" />
        </button>
      </div>
    </div>
  );
};

export default Listado;
