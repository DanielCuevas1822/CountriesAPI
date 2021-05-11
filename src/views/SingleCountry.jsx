import React from "react";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

const SingleCountry = () => {
  return (
    <div className="container mx-auto py-5 px-4 min-h-main text-white font-nunito">
      <div className="my-10">
        <button className="flex items-center bg-dark_header px-8 py-2 text-white font-nunito font-light">
          <ArrowNarrowLeftIcon className="h-5 y-5 pr-2" />
          Back
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div>
          <img src="https://restcountries.eu/data/deu.svg" alt="flag" />
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full lg:w-4/5">
            <p className="font-bold text-3xl">Belgium</p>
            <div className="flex justify-between  my-10">
              <div>
                <p className="font-semibold">
                  Native Name: <span className="font-light">Belgie</span>
                </p>
                <p className="font-semibold">
                  Population: <span className="font-light">11,319,511</span>
                </p>
                <p className="font-semibold">
                  Region: <span className="font-light">Europe</span>
                </p>
                <p className="font-semibold">
                  Sub Region: <span className="font-light">Western Europe</span>
                </p>
                <p className="font-semibold">
                  Capital: <span className="font-light">Brussels</span>
                </p>
              </div>
              <div>
                <p className="font-semibold">
                  Top Level Domain: <span className="font-light">.be</span>
                </p>
                <p className="font-semibold">
                  Currencies: <span className="font-light">Euro</span>
                </p>
                <p className="font-semibold">
                  Languages:{" "}
                  <span className="font-light">Dutch,French,German</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
              <p className="font-semibold">Border Countries:</p>
              <button className="bg-dark_header py-1 px-3 my-3">France</button>
              <button className="bg-dark_header py-1 px-3 my-3">Germany</button>
              <button className="bg-dark_header py-1 px-3 my-3">Netherlands</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountry;
