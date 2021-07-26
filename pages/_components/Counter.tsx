import React, { useState } from "react";
import { hello2 } from "../hello2.telefunc";

export { Counter };

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      type="button"
      onClick={() => {
        setCount((count) => count + 1);
        hello2("Counter click");
      }}
    >
      Counter {count}
    </button>
  );
}
