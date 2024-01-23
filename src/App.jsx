import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterList from "./Components/CharacterList";
import pngtitle from "./assets/pngegg.png";
import UniqueCharacter from "./Components/UniqueCharacter";
import "./Styles/App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App text-white">
        {/* <h1 className="text-center display-1 py-4">Rick and Morty</h1> */}
        <div className="container d-flex justify-content-center align-items-center">
          <img className="img-title" src={pngtitle} alt="Rick and Morty" />
        </div>
        <Routes>
          <Route path="/React-Api-Rick-Morty" element={<CharacterList />} />
          <Route path="/React-Api-Rick-Morty/:id" element={<UniqueCharacter />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
