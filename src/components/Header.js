import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky header top-0 z-10 bg-black text-2xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <span>
        Filmy<span className="text-white ">Verse</span>
      </span>
      <Link to={"/addmovie"}>
        <h1 className="text-lg cursor-pointer flex items-center">
          <Button className="text-white">
            <AddIcon className="mr-2" color="secondary" />
            <span className="text-white">Add New </span>
          </Button>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
