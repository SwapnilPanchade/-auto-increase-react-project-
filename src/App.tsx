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
      <button style={{ padding: 1, margin: 5 }} onClick={pauseCounter}>
        {" "}
        Pause{" "}
      </button>
      <button> Resume </button>
    </>
  );
}

const pauseCounter = () => {
  setCount((prev) => prev);
};

const resumeCounter = () => {
  
}

export default App;
