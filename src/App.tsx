import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Timeout = any;

function App() {
  const [count, setCount] = useState<number>(0);
  const intervelRef = useRef<null | string | number | Timeout | undefined>(
    null
  );
  useEffect(() => {
    startCounter();

    return () => clearInterval(intervelRef.current);
  }, []);

  const startCounter = () => {
    if (intervelRef.current === null) {
      intervelRef.current = setInterval(() => {
        setCount((prevCounter) => prevCounter + 1);
      }, 1000);
    }
  };

  const pauseCounter = () => {
    clearInterval(intervelRef.current);
    intervelRef.current = null;
  };

  const resumeCounter = () => {
    startCounter();
  };
  return (
    <>
      <h1>This is auto counter increaser {count}</h1>
      <button style={{ padding: 1, margin: 5 }} onClick={pauseCounter}>
        {" "}
        Pause{" "}
      </button>
      <button style={{ padding: 1, margin: 5 }} onClick={resumeCounter}>
        {" "}
        Resume{" "}
      </button>
    </>
  );
}

export default App;
