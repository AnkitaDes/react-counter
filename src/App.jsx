import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);
  //et counter = 15;

  const addValue = () => {
    // if (counter >= 0 && counter < 20) {
    //   counter = counter + 1;
    //   setCounter(counter + 1);

    //   console.log("Clicked:", counter);
    // }
    //counter = counter + 1;

    // if (counter >= 0 && counter < 20) {
    //   //counter = counter + 1;
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);
    //   setCounter(counter + 1);

    //   console.log("Clicked:", counter);
    // }
    // counter increases with 1

    // counter increases as a batch
    counter = counter + 1;
    if (counter >= 0 && counter < 20) {
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);

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
