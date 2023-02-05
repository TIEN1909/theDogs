import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Dogs from "./components/Dogs/Dogs";
import Cart from "./components/Cart/Cart";
import Navbar from "./Navbar/Navbar";
import Favorite from "./components/Favorite/Favorite";
import Footer from "./components/Footer/Footer";
import CartContext from "./Contexts/CartContext";

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [myCart, setMyCart] = useState([]);
  const [addFavorite, setAddFavorite] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/dogs");
      return res;
    }
    getData()
      .then((res) => {
        setDogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const context = {
  //   myCart,
  //   setMyCart,
  // };
  return (
    <CartContext.Provider
      value={{
        dogs,
        setDogs,
        myCart,
        setMyCart,
        total,
        setTotal,
        addFavorite,
        setAddFavorite,
      }}
    >
      <Router>
        <nav>
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dogs" element={<Dogs dogs={dogs} />} />
          <Route path="checkout" element={<Cart />} />
          <Route path="favorite" element={<Favorite />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
