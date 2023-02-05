import React, { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import "./favorite.css";
const Favorite = () => {
  const { addFavorite } = useContext(CartContext);
  return (
    <div className="favorite-container">
      {addFavorite.map((favorite) => {
        return (
          <div className="favorite">
            <div className="favorite-image">
              <img src={favorite.imageUrl} className="favorite-img" />
            </div>
            <h2>{favorite.name}</h2>
            <p className="favorite-breed">{favorite.breed}</p>
            <div className="favorite-description">
              <span>{favorite.description}</span>
            </div>
            <button className="favorite-btn">Add To Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default Favorite;
