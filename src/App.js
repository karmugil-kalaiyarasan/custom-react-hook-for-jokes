import { useRef, useState } from "react";
import "./App.css";
import useRandomJokes from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("Karmugil");
  const [lastName, setLastName] = useState("Kalaiyarasan");

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  const jokes = useRandomJokes(firstName, lastName);

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      <h3>{jokes}</h3>
      <form>
        <input placeholder="First Name" ref={firstNameRef} />
        <input placeholder="Last Name" ref={lastNameRef} />
        <button onClick={generateJoke}>Generate Jokes</button>
      </form>
    </div>
  );
}

export default App;
