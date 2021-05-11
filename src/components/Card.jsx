import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { name, population, region, capital, flag } = props.info;
  return (
    <Link to={`/single-country/${name.toLowerCase().replace(/\s/g, "")}`}>
      <div className="card flex justify-center">
        <div className="bg-dark_header w-3/4 lg:w-full">
          <div className="min-h-card">
            <img src={flag} alt="flag" />
          </div>
          <div className="p-3 text-white">
            <p className="font-nunito font-bold">{name}</p>
            <p className="font-nunito font-semibold">
              Population: <span className="font-light">{population}</span>
            </p>
            <p className="font-nunito font-semibold">
              Region: <span className="font-light">{region}</span>
            </p>
            <p className="font-nunito font-semibold">
              Capital: <span className="font-light">{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
