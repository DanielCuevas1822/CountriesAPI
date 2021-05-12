import React, { useState } from "react";
import Card from "../components/Card";
import SearchFilter from "../components/SearchFIlter";

const Home = (props) => {
  const { countries, isDarkMode } = props;
  const [resultsSearch, setResultSearch] = useState(countries);
  const handleFilter = (country, region) => {
    setResultSearch(
      countries
        .filter((item) =>
          region !== "All" && region !== ""
            ? item.region === region
            : item.region.includes("")
        )
        .filter((item) =>
          country !== ""
            ? item.name.toLowerCase().replace(/\s/g, "") ===
              country.toLowerCase().replace(/\s/g, "")
            : item.name.includes("")
        )
    );
  };
  return (
    <React.Fragment>
      <SearchFilter handleFilter={handleFilter} isDarkMode={isDarkMode} />
      <div
        className={`${
          isDarkMode ? "text-white" : "text-black"
        } container mx-auto py-5 min-h-main`}
      >
        <p className="px-4 my-5 font-nunito font-semibold">
          Results: {resultsSearch.length}
        </p>
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4">
          {resultsSearch.map((item, index) => (
            <Card key={index} info={item} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
