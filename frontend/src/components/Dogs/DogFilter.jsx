import React, { useState } from "react";
import CartContext from "../../Contexts/CartContext";
import { BsSearch } from "react-icons/bs";
import { useContext } from "react";
const DogFilter = () => {
  const { dogs, setDogs } = useContext(CartContext);
  const [filterText, setFilterText] = useState("");

  const filterDogs = () => {
    const filterDog = dogs.filter((dog) => {
      if (filterText === "") {
        return dog;
      } else if (filterText.toLowerCase() === dog.name.toLowerCase()) {
        console.log(dog);
        return dog;
      }
    });
    setDogs(filterDog);
    setFilterText("");
  };
  return (
    <>
      <div className="filter-container">
        <input
          className="filter"
          value={filterText}
          type="text"
          placeholder="Search..."
          onChange={(e) => setFilterText(e.target.value)}
        />
        <div className="filter-icon" onClick={filterDogs}>
          <BsSearch />
        </div>
      </div>
    </>
  );
};

export default DogFilter;
