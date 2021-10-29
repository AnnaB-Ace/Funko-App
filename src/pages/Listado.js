import React, { useEffect, useState } from "react";
import ContainerOptions from "../components/containerOptions/ContainerOptions";
import "./Listado.scss";
import { getEventsList } from "../api/list";
import ListProducts from "../components/listProducts/ListProducts";
import Banner from "../components/banner/Banner";

const Listado = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const getList = async () => {
    try {
      setLoading(true);
      const resp = await getEventsList();
      console.log(resp.data.eventos);
      setList(resp.data.eventos);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getList();
  }, []);
  console.log("Lista:", list);
  return (
    <div className="listado">
      <Banner />
      <ContainerOptions />
      <ListProducts list={list} />
    </div>
  );
};

export default Listado;

/* <button className="productos__data__button">
          <img src={Car} alt="car" width="100%" />
        </button> */

/* <img src={imagenes("./29164.png")} alt="fotofunkyr" /> */

/* <div className="listado-products">
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
      </div> */
