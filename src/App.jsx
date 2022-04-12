import React, { useState } from "react";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    document.getElementById("root").classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className='App h-screen bg-stone-50 dark:bg-slate-900'>
      <Header toggleDark={toggleDark} isDark={isDark} />
    </div>
  );
};

export default App;
