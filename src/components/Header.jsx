import React, { useState } from "react";
import "../index.css";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = ({ handleSave, handleExport }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    document.getElementById("root").classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className='flex flex-col absolute top-0 z-50 min-w-full items-center justify-between p-2 bg-slate-50 dark:bg-slate-900 sm:flex-row'>
      <h1 className='mx-1 font-extrabold text-4xl tracking-widest text-slate-900 dark:text-stone-100'>
        CV Builder
      </h1>
      <div className='flex align-middle'>
        <button
          onClick={toggleDark}
          className='flex m-1 bg-indigo-900 text-slate-50 w-7 h-7 justify-center items-center text-lg rounded dark:bg-orange-300 dark:text-stone-900'>
          {!isDark ? <FiMoon /> : <FiSun />}
        </button>
        <button
          onClick={handleSave}
          className='m-1 w-24 h-7 rounded bg-teal-300 hover:bg-teal-200 active:bg-teal-400 dark:bg-teal-400 dark:hover:bg-teal-300 dark:active:bg-teal-500'>
          Save
        </button>
        <button
          onClick={handleExport}
          className='m-1 w-24 h-7 rounded bg-slate-300 hover:bg-slate-200 active:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600 dark:active:bg-slate-800 dark:text-slate-100'>
          Export
        </button>
      </div>
    </div>
  );
};

export default Header;
