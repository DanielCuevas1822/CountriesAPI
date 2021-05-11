import React from "react";
import { MoonIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="bg-dark_header">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 min-h-header">
          <div className="flex items-center">
            <p className="text-white font-nunito font-bold text-base">
              Where in the world?
            </p>
          </div>
          <div className="flex justify-end items-center">
            <button className="flex items-center text-white font-nunito font-semibold text-sm">
              <MoonIcon className="text-white h-6 w-6 pr-2" />
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
