import { useState, useEffect } from "react";

const useRandomJoke = (firstName, lastName) => {
  const [jokes, setJokes] = useState("");

  useEffect(() => {
    const fetchJokes = async () =>
      await fetch(
        `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
      )
        .then((res) => res.json())
        .then((data) => setJokes(data.value.joke))
        .catch((err) => console.log(err));

    fetchJokes();
  }, [firstName, lastName]);

  return jokes;
};

export default useRandomJoke;
