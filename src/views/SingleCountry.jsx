import React, { useEffect, useState } from "react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";

const SingleCountry = (props) => {
  const { countries, isDarkMode } = props;
  const { name } = useParams();
  const [countryInfo, setCOuntryInfo] = useState([]);
  const history = useHistory();
  const handleBack = () => {
    history.push("/");
  };

  useEffect(() => {
    setCOuntryInfo(
      countries.filter(
        (item) => item.name.toLowerCase().replace(/\s/g, "") === name
      )
    );
  }, [countries, name]);

  return (
    <div
      className={`${
        isDarkMode ? "text-white" : "text-black"
      } container mx-auto py-5 px-4 min-h-main font-nunito`}
    >
      <div className="my-10">
        <button
          onClick={handleBack}
          className={`${
            isDarkMode ? "bg-dark_header" : "bg-light_header"
          } flex items-center px-8 py-2 font-nunito font-light`}
        >
          <ArrowNarrowLeftIcon className="h-5 y-5 pr-2" />
          Back
        </button>
      </div>
      {countryInfo.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <img src={countryInfo[0].flags[0]} alt="flag" />
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full lg:w-4/5">
              <p className="font-bold text-3xl">{countryInfo[0].name}</p>
              <div className="flex justify-between  my-10">
                <div>
                  <p className="font-semibold">
                    Native Name:{" "}
                    <span className="font-light">
                      {countryInfo[0].nativeName}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Population:{" "}
                    <span className="font-light">
                      {countryInfo[0].population}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Region:{" "}
                    <span className="font-light">{countryInfo[0].region}</span>
                  </p>
                  <p className="font-semibold">
                    Sub Region:{" "}
                    <span className="font-light">
                      {countryInfo[0].subregion}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Capital:{" "}
                    <span className="font-light">{countryInfo[0].capital}</span>
                  </p>
                </div>
                <div>
                  <p className="font-semibold">
                    Top Level Domain:{" "}
                    <span className="font-light">
                      {countryInfo.topLevelDomain}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Currencies:{" "}
                    <span className="font-light">
                      {countryInfo[0].currencies[0].name},
                      {countryInfo[0].currencies[0].symbol}
                    </span>
                  </p>
                  <p className="font-semibold">
                    Languages:{" "}
                    <span className="font-light">
                      {countryInfo[0].languages.map((item) => item.name)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full">
                <p className="font-semibold mb-2">Border Countries:</p>
                {countryInfo[0].borders.map((item, index) => {
                  let borders = countries.filter(
                    (country) => country.alpha3Code === item
                  );
                  return (
                    <button key={index} className="mr-1 mb-3">
                      <Link
                        to={`/single-country/${borders[0].name
                          .toLowerCase()
                          .replace(/\s/g, "")}`}
                        className={`${
                          isDarkMode ? "bg-dark_header" : "bg-light_header"
                        } py-1 px-3 `}
                      >
                        {borders[0].name}
                      </Link>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SingleCountry;
