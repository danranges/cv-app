import React, { useState } from "react";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  return (
    <div className='App h-screen bg-stone-50 dark:bg-slate-900'>
      <Header />
    </div>
  );
};

export default App;
