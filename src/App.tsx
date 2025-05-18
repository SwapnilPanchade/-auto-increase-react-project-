import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervel = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // unmount the intervel
    return () => clearInterval(intervel);
  }, []);

  return (
    <>
      <h1>This is auto counter increaser {count}</h1>
    </>
  );
}

export default App;
