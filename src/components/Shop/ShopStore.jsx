import React from "react";
import "./shopstore.scss";
import ShopStoteItem from "../ShopItem/ShopStoteItem";
const ShopStore = ({
  handleCart,
  cartToys,
  plusBtn,
  minusBtn,
  removeCartToys,
}) => {
  const totalPrice = cartToys.reduce((total, num) => {
    if (!num) {
      return;
    } else {
      return total + num.price + num.quantity;
    }
  }, 0);
  return (
    <div className="shopStore">
      <div className="price__btn">
        <button
          onClick={handleCart}
          type="button"
          className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 btn"
        >
          Close
        </button>

        <h1 className="totalPrice"> TOTAL PRICE :{totalPrice} $</h1>
      </div>

      <hr />
      <div className="shopStoreCard">
        {cartToys.map((item, i) => (
          <ShopStoteItem
            removeCartToys={removeCartToys}
            minusBtn={minusBtn}
            plusBtn={plusBtn}
            totalPrice={totalPrice}
            key={i}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopStore;
