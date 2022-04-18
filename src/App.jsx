import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

const App = () => {
  return (
    <div className='App h-screen bg-slate-100 dark:bg-slate-900'>
      <Header />
      <Main />
    </div>
  );
};

export default App;
