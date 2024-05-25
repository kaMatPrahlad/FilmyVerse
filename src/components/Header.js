import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Appstate } from "../App";

const Header = () => {
  const useAppstate = useContext(Appstate);

  return (
    <div className="sticky header top-0 z-10 bg-black text-2xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500">
      <Link to={"/"}>
        <span>
          Filmy<span className="text-white ">Verse</span>
        </span>
      </Link>
      {useAppstate.login ? (
        <Link to={"/addmovie"}>
          <h1 className="text-lg cursor-pointer flex items-center">
            <Button className="text-white">
              <AddIcon className="mr-2" color="secondary" />
              <span className="text-white">Add New </span>
            </Button>
          </h1>
        </Link>
      ) : (
        <Link to={"/login"}>
          <h1 className="text-lg bg-green-500 cursor-pointer flex items-center">
            <Button className="text-white">
              <span className="text-white">Login</span>
            </Button>
          </h1>
        </Link>
      )}
    </div>
  );
};

export default Header;
