import React from "react";
import "./shopstoreitem.scss";

const ShopStoteItem = ({
  price,
  name,
  quantity,
  image,
  plusBtn,
  id,
  minusBtn,
  removeCartToys,
}) => {
  return (
    <>
      <div className="  storeItemCard   ">
        <div className="fort__box">
          <i
            onClick={() => {
              removeCartToys(id, name);
            }}
            className="fas fa-trash fa-lg"
          ></i>

          <h1 className="title">{quantity}</h1>
        </div>

        <a href="">
          <img
            className="p-8 rounded-t-lg store_itemimg"
            src={image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name} : {price} x ({quantity}) = {price * quantity} $
            </h5>
          </a>

          <div className="flex items-center justify-between  price-button">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {price}$
            </span>
            <div className="buttonsAdd">
              <i
                onClick={() => {
                  minusBtn(id, name);
                }}
                className="fas fa-minus-circle minus__btn fa-lg"
              ></i>

              <i
                onClick={() => {
                  plusBtn(id, name);
                }}
                className="fas fa-plus-circle fa-lg"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopStoteItem;
