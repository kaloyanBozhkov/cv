import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    setSize([window.innerWidth, window.innerHeight]);
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useWindowSize;
