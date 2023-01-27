import '../Styles/Character.css'

function Character( { character } ) {
  return (
    <div className="text-center p-5 rounded-4 characters">
      <h3>{character.name}</h3>
      <img className="img-fluid rounded-pill" src={character.image} alt={character.name} />
      <h5>{`Origin: ${character.origin.name}`}</h5>
    </div>
  );
}

export default Character;
