import AddMovie from "./components/AddMovie";
import Cards from "./components/Cards";
import Detail from "./components/Detail";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={(login, userName, setLogin)}>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="addmovie" element={<AddMovie />} />
          <Route path="detail/:id" element={<Detail />} />
        </Routes>
      </div>
    </Appstate.Provider>
  );
}

export default App(Appstate);
