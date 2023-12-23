import { useState } from "react";
function ComponentA() {
  //   let count = 0;

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <h2>Use State Hooks {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default ComponentA;
