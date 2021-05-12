import React from "react";
import { MoonIcon } from "@heroicons/react/solid";
import { MoonIcon as Moon } from "@heroicons/react/outline";

const Header = (props) => {
  const { handleDark, isDarkMode } = props;
  return (
    <header className={isDarkMode ? "bg-dark_header" : "bg-light_header"}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 min-h-header">
          <div className="flex items-center">
            <p
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } font-nunito font-bold text-base`}
            >
              Where in the world?
            </p>
          </div>
          <div className="flex justify-end items-center">
            <button
              onClick={() => handleDark()}
              className={`${
                isDarkMode ? "text-white" : "text-black"
              } flex items-center font-nunito font-semibold text-sm`}
            >
              {isDarkMode ? (
                <MoonIcon className="text-white h-6 w-6 pr-2" />
              ) : (
                <Moon className="text-black h-6 w-6 pr-2" />
              )}
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
