import CharacterList from "./Components/CharacterList";
import pngtitle from "./assets/pngegg.png";
import "./Styles/App.css";

export const App = () => {
  return (
    <div className="App text-white">
      {/* <h1 className="text-center display-1 py-4">Rick and Morty</h1> */}
      <div className="container d-flex justify-content-center align-items-center">
        <img className="img-title" src={pngtitle} alt="Rick and Morty" />
      </div>
      <CharacterList />
    </div>
  );
};
