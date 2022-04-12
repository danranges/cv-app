import "../index.css";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = ({ toggleDark, isDark }) => {
  return (
    <div className='flex flex-col items-center justify-between p-1  sm:flex-row'>
      <h1 className='mx-1 font-black text-2xl tracking-wide text-slate-900 dark:text-stone-100'>
        CV Builder
      </h1>
      <div className='flex align-middle'>
        <button
          onClick={toggleDark}
          className='flex m-1 bg-indigo-900 text-slate-50 w-7 h-7 justify-center items-center text-lg rounded dark:bg-orange-300 dark:text-stone-900'>
          {!isDark ? <FiMoon /> : <FiSun />}
        </button>
        <button className='m-1 w-24 h-7 rounded bg-teal-300 dark:bg-teal-400'>Save</button>
        <button className='m-1 w-24 h-7 rounded bg-stone-200 dark:bg-slate-700 dark:text-stone-100'>
          Export
        </button>
      </div>
    </div>
  );
};

export default Header;
