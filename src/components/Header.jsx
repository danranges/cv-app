import "../index.css";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = ({ toggleDark }) => {
  return (
    <div className='flex justify-between p-1 dark:bg-slate-900'>
      <h1>CV Builder</h1>
      <div className='flex align-middle'>
        <button
          onClick={toggleDark}
          className='flex m-1 bg-indigo-900 text-white w-7 h-7 justify-center items-center text-lg rounded dark:bg-orange-300 dark:text-stone-900'>
          <FiMoon />
          <FiSun />
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
