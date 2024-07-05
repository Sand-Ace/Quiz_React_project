import ChildComponent from "./ChildComponent";
import { useCallback, useState } from "react";
export default function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(function handleClick() {
    console.log("Button was clicked");
  }, []);

  console.log("Parent component rendered", count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
