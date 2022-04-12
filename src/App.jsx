import React from "react";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  const toggleDark = () => {
    document.getElementById("root").classList.toggle("dark");
  };

  return (
    <div className='App'>
      <Header toggleDark={toggleDark} />
    </div>
  );
};

export default App;
