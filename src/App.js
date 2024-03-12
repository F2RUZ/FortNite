import { useEffect, useState } from "react";
import "./App.scss";
import { getProduct } from "./Hooks/api";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ToysList from "./components/Toys/ToysList";
import Loader from "./components/Loader/Loader";
import Cart from "./components/Cart/Cart";

import ShopStore from "./components/Shop/ShopStore";
import Pagination from "./components/Pagination/Pagination";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [toys, setToys] = useState([]);
  const [cartToys, setCartToys] = useState([]);
  const [count, setCount] = useState(0);

  const [currenPage, setCurrenPage] = useState(1);
  const [postsPerPage, setPostsPerPAge] = useState(8);
  const [showCart, setShowCart] = useState(false);

  // OPEN CLOSE  CART
  const handleCart = () => {
    if (cartToys.length) {
      setShowCart(!showCart);
    }
  };

  //------SHOP cart
  const addCart = (name, price, image, id) => {
    const itemInclude = cartToys.findIndex((item) => item.id === id);
    if (itemInclude < 0) {
      setCount((prev) => prev + 1);
      setCartToys((prev) => {
        const newToys = {
          name,
          image,
          price,
          id,
          quantity: 1,
        };
        return [...prev, newToys];
      });
    } else {
      const reCartToys = cartToys.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setCartToys(reCartToys);
      toast(`${name} added`);
    }
  };

  const plusBtn = (id, name) => {
    const findCArt = cartToys.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    setCartToys(findCArt);
    toast.success(`${name} added`);
  };
  const minusBtn = (id, name) => {
    const findCArt = cartToys.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity < 2 ? item.quantity : item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    setCartToys(findCArt);
    toast.warning(`${name} removed`);
  };

  const removeCartToys = (id, name) => {
    const removeCart = cartToys.filter((item) => item.id !== id);
    if (removeCart.length !== 0) {
      setCartToys(removeCart);
      setCount((prev) => prev - 1);
    } else {
      setCartToys(removeCart);
      setShowCart(!showCart);
      setCount((prev) => prev - 1);
    }

    toast.error(`${name} delete`);
  };

  //-----GET DATA
  useEffect(() => {
    getProduct().then((data) => data.featured && setToys(data.featured));
  }, []);
  //----- PAGINATION
  const lastPostIndex = currenPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = toys.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="App">
      <Header />
      <Cart handleCart={handleCart} count={count} />
      <Pagination
        setCurrenPage={setCurrenPage}
        totalPost={toys.length}
        postsPerPage={postsPerPage}
      />
      {showCart === true ? (
        <ShopStore
          removeCartToys={removeCartToys}
          minusBtn={minusBtn}
          plusBtn={plusBtn}
          cartToys={cartToys}
          handleCart={handleCart}
        />
      ) : null}

      {toys.length === 0 ? (
        <Loader />
      ) : (
        <ToysList addCart={addCart} toys={currentPost} />
      )}
      <Footer />
    </div>
  );
}

export default App;
