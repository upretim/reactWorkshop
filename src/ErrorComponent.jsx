import { useState } from "react";

function ErrorComponent() {
  let [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log(`called ${count} times`);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick}>
        Increment
      </button>
    </div>
  );
}

export default ErrorComponent;
