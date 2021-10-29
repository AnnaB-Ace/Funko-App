import React, { useEffect, useState } from "react";
import ContainerOptions from "../components/containerOptions/ContainerOptions";
import "./Listado.scss";
import { getEventsList } from "../api/list";
import ListProducts from "../components/listProducts/ListProducts";
import Banner from "../components/banner/Banner";

const Listado = () => {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const resp = await getEventsList();
      console.log(resp.data.eventos);
      setList(resp.data.eventos);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="listado">
      <div className="mostrarExpandido">
        <Banner />
        <ContainerOptions />
      </div>
      <div className="mostrarRenposive">
        <ContainerOptions />
        <Banner />
      </div>
      <ListProducts list={list} />
    </div>
  );
};

export default Listado;
