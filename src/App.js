import "./App.css";
import { useState } from "react";
import Subscribe from "./Subscribe";
import Header from "./Header";
import Content from "./Content";
import CointTossCounter from "./CoinTossCounter";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  return (
    <>
      <Subscribe />
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} text="some content" />
      <CointTossCounter />
    </>
  );
}

export default App;
