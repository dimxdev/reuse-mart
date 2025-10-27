import { useState } from "react";
import Button from "../components/atom/ButtonExample";

function Testing() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(() => count + 1);
  }

  return (
    <div>
      <Button namaTombol="Click Me" handleClick={handleClick} />
      <h1>{count}</h1>
    </div>
  );
}

export default Testing;
