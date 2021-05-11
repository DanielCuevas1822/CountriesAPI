import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";

const SearchFilter = (props) => {
  const { handleFilter } = props;
  const [filters, setFilters] = useState({
    country: "",
    region: "",
  });
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    handleFilter(filters.country, filters.region);
  };
  return (
    <div className="container mx-auto px-4">
      <form>
        <div className="grid grid-cols-1">
          <div className="mt-5 flex flex-col md:flex-row justify-center">
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Search for a country..."
              className="py-3 pl-3 mr-2 mt-2 text-white bg-dark_header font-nunito"
              value={filters.country}
              onChange={handleChange}
            />

            <select
              className="text-white bg-dark_header mr-2 mt-2 py-3 px-4 font-nunito font-light"
              name="region"
              id="region"
              value={filters.region}
              onChange={handleChange}
            >
              <option hidden>Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
              <option value="All">All</option>
            </select>

            <button
              onClick={handleClick}
              className="py-3 text-white bg-dark_header mt-2 w-3/12 md:w-20"
              type="submit"
            >
              <SearchIcon className="text-white h-5 w-20" />
            </button>
          </div>
        </div>
      </form>
      <div className="flex text-white font-nunito mt-3">
        <p className="font-semibold mr-2">Filtering by:</p>
        {filters.country !== "" ? (
          <p className="bg-dark_header mr-2 px-2 rounded-sm">
            {filters.country}
          </p>
        ) : null}
        {filters.region !== "" ? (
          <p className="bg-dark_header mr-2 px-2 rounded-sm">
            {filters.region}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default SearchFilter;
