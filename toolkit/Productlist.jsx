import React from 'react';
import { Product } from './Product';
import "./Productlist.css"
export const Productlist = () => {
  return (
    <div className="productlist">
      {Product.map((product, index) => (
        <div key={index} className="product">
          <img src={product.image} alt={product.name} className="pro-img" />
          <h2 className="pro-h">{product.name}</h2>
          <p className="pro-p">{product.features}</p>
          <h4 className="pro-head">{product.price}</h4>
          <a
            href={product.purchase_link}
            target="_blank"
            rel="noopener noreferrer"
            className="buy-button"
          >
            Buy Now
          </a>
        </div>
      ))}
    </div>
  );
};

  