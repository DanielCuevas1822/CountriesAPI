import React from "react";

const Card = () => {
  return (
    <div className="card flex justify-center">
      <div className="bg-dark_header w-3/4 lg:w-full">
        <div>
          <img src="https://restcountries.eu/data/deu.svg" alt="flag" />
        </div>
        <div className="p-3 text-white">
          <p className="font-nunito font-bold">Germany</p>
          <p className="font-nunito font-semibold">
            Population: <span className="font-light">81,770,900</span>
          </p>
          <p className="font-nunito font-semibold">
            Region: <span className="font-light">Europe</span>
          </p>
          <p className="font-nunito font-semibold">
            Capital: <span className="font-light">Berlin</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
