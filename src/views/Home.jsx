import React from "react";
import Card from "../components/Card";
import SearchFilter from "../components/SearchFIlter";

const Home = () => {
  return (
    <React.Fragment>
      <SearchFilter />
      <div className="container mx-auto py-5 min-h-main">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
