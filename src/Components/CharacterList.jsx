import { useState, useEffect } from "react";
import Character from "./Character";
import { NavPage } from "./NavPage";

function CharacterList() {
  const [charactersApi, setCharactersApi] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const api = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharactersApi(data.results);
    };
    api();
  }, [page]);

  return (
    <div className="container">
      <div className="mb-4">
        <NavPage page={page} setPage={setPage} />
      </div>

      <div className="row">
        {loading ? (
          <button className="btn btn-dark" type="button" disabled>
            <span
              className="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <h3>Loading...</h3>
          </button>
        ) : (
          charactersApi.map((character) => {
            return (
              <div className="col-md-4" key={character.id}>
                <Character character={character} />
              </div>
            );
          })
        )}
      </div>

      <div className="pb-5 mt-2">
        <NavPage page={page} setPage={setPage} />
      </div>
    </div>
  );
}

export default CharacterList;
