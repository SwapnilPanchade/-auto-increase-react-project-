import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervel = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    })
  }, []);

  return (
    <>
      <h1>This is auto counter increaser {count}</h1>
    </>
  );
}

export default App;
