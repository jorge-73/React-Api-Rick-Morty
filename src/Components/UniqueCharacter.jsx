import { useState, useEffect } from "react";
import "../Styles/Character.css";
import { useNavigate, useParams } from "react-router-dom";

function UniqueCharacter() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const api = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      console.log(data);
      setCharacter(data);
    };
    api();
  }, []);

  const handleClick = () => {
    navigate("/React-Api-Rick-Morty");
  };

  return (
    <>
      <div className="text-center p-5 rounded-4 characters2 col-md-4 offset-md-4">
        <button
          className="btn btn-outline-light btn-sm p-2 fw-bold mb-5"
          onClick={handleClick}
        >
          Back
        </button>
        <h3>{character?.name}</h3>
        <img
          className="img-fluid rounded-pill"
          src={character?.image}
          alt={character?.name}
        />
        <p className="h5">{`Origin: ${character?.origin?.name}`}</p>
        <p className="h5">{`Gender: ${character?.gender}`}</p>
        <p className="h5">{`Species: ${character?.species}`}</p>
        <p className="h5">{`Status: ${character?.status}`}</p>
      </div>
      <br />
    </>
  );
}

export default UniqueCharacter;
