import React from "react";
import "./ListProducts.scss";
import Car from "../../assets/image/car.png";

const ListProducts = ({ list }) => {
  return (
    <div className="products__container">
      {list.map((lis, i) => (
        <div className="products__card" key={i}>
          <img
            className="products__card-image"
            src={`${lis.image}`}
            alt="product"
          />
          <div className="products__description">
            <div>
              <div className="products__description-title">Funko</div>
              <div className="products__description-name">{lis.name}</div>
              <div className="products__description-cuotas">
                6 cuotas s/interés de
              </div>
              <div className="products__description-monto">$211,50</div>
              <div className="products__description-interes">
                <span className="products__description-final">Final:</span>
                <span className="simbolo">$</span>
                <span className="precio">{lis.price}</span>
                <span className="descuento">$1.269</span>
              </div>
            </div>
            <button className="products__card-button my-3">
              <img src={Car} alt="car" width="100%" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
