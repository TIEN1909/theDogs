import React, { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import CartContext from "../../Contexts/CartContext";
import "./dogs.css";
const Dog = (props) => {
  const { id, name, breed, price, description, imageUrl } = props;
  const { setMyCart, setTotal, setAddFavorite } = useContext(CartContext);
  const [add, setAdd] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const handleClick = () => {
    setAdd(true);
    const newItem = {
      id: id,
      name: name,
      breed: breed,
      price: price,
      imageUrl: imageUrl,
    };
    setMyCart((item) => [...item, newItem]);
    setTotal((total) => (total += Number(price)));
  };
  const handleFavorite = () => {
    setFavorite(true);
    const newFavorite = {
      name: name,
      breed: breed,
      price: price,
      description: description,
      imageUrl: imageUrl,
    };
    setAddFavorite((item) => [...item, newFavorite]);
  };
  return (
    <>
      <section className="dog-container">
        <div className="box">
          <div className="wrapper">
            <div className="dog-image">
              <img src={imageUrl} className="dog-img" />
            </div>
            <span className="dog-price">{price}$</span>
          </div>
          <div className="text">
            <div className="text-wrapper">
              <h3 className="dog-name">{name}</h3>
              {favorite ? (
                <Link onClick={handleFavorite} className="dog-icon">
                  <AiFillHeart />
                </Link>
              ) : (
                <Link onClick={handleFavorite} className="dog-icon">
                  <AiOutlineHeart />
                </Link>
              )}
            </div>
            <p className="dog-breed">{breed}</p>
            <p className="dog-description">{description}</p>
            <div className="dog-btn">
              {add ? (
                <button className="dog-button" onClick={handleClick}>
                  Added
                </button>
              ) : (
                <button className="dog-button" onClick={handleClick}>
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dog;
