import React, { useState } from "react";
import "./dogs.css";
import Dog from "./Dog";
import DogFilter from "./DogFilter";
const Dogs = (props) => {
  const { dogs } = props;
  return (
    <>
      <section className="dogs-container">
        <div className="dog-filter">
          <DogFilter />
        </div>
        <div className="dogs-box">
          {dogs.map((dog) => {
            return (
              <div key={dog.id}>
                <Dog
                  id={dog.id}
                  name={dog.name}
                  breed={dog.breed}
                  price={dog.price}
                  description={dog.description}
                  imageUrl={dog.imageUrl}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Dogs;
