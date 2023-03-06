import React, { useEffect, useState } from "react";

export const Counter = React.memo(() => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      const counter = count + 1;
      setCount(counter);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
});
