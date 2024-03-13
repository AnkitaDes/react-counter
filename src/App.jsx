import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);
  //et counter = 15;

  const addValue = () => {
    if (counter >= 0 && counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log("Clicked:", counter);
    }
  };

  const decreaseValue = () => {
    if (counter > 0 && counter <= 20) {
      counter = counter - 1;
      setCounter(counter);
      console.log("Clicked:", counter);
    }
  };
  return (
    <>
      <h1>Counter Value: {counter}</h1>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={decreaseValue}> Decrease Value {counter}</button>
      <footer>
        <p>Footer: {counter}</p>
      </footer>
    </>
  );
}

export default App;
