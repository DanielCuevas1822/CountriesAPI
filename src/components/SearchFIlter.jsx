import React from "react";
import { SearchIcon } from "@heroicons/react/solid";

const SearchFilter = () => {
  return (
    <div className=" bg-dark_main">
      <div className="container mx-auto px-4">
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="mt-6 flex">
              <button className="py-3 text-white bg-dark_header" type="submit">
                <SearchIcon className="text-white h-5 w-20" />
              </button>

              <input
                type="text"
                name="country"
                id="country"
                placeholder="Search for a country..."
                className="py-3 text-white bg-dark_header w-full lg:w-2/4 font-nunito"
              />
            </div>

            <div className="mt-6 flex justify-start md:justify-end">
              <select
                className="text-white bg-dark_header py-3 px-4 w-3/6 lg:w-1/4 font-nunito font-light"
                name="region"
                id="region"
              >
                <option selected="default">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchFilter;
