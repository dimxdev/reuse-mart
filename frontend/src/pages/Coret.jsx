import ButtonExample from "../components/atom/ButtonExample";
import useNomor from "../hooks/useNomor";

function Coret() {
  const { addNumber, minNumber, resetNumber, nomor } = useNomor();

  return (
    <div className="flex gap-4">
      <ButtonExample namaTombol="Add" handleClick={addNumber} />
      <h1>{nomor}</h1>
      <ButtonExample namaTombol="Min" handleClick={minNumber} />
      <ButtonExample namaTombol="Reset" handleClick={resetNumber} />
    </div>
  );
}

export default Coret;
