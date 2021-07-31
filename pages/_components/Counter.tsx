import React, { useState } from "react";
// import { hello2 } from "../hello2.telefunc";

export { Counter };

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      type="button"
      onClick={async () => {
        setCount((count) => count + 1);
        // console.log(await hello2("Counter click"));
      }}
    >
      Counter {count}
    </button>
  );
}
