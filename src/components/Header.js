import React from "react";
import AddIcon from "@mui/icons-material/Add";

const Header = () => {
  return (
    <div className="text-2xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <span>
        Filmy<span className="text-white ">Verse</span>
      </span>
      <h1 className="text-lg text-white cursor-pointer flex items-center">
        <AddIcon className="mr-2" color="inherit" />
        Add New
      </h1>
    </div>
  );
};

export default Header;
