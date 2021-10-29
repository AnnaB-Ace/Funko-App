import React from "react";
import "./ListProducts.scss";
import Car from "../../assets/image/car.png";

const ListProducts = ({ list }) => {
  const cuotas = list.price / 6;
  return (
    <div className="products__container">
      {list.map((lis, i) => (
        <div className="products__card">
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
              <div className="products__description-interes">$211,50</div>
              <div className="products__description-interes">
                <span className="products__description-interes">Final:</span>
                <span>$</span>
                <span>{lis.price}</span>
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
