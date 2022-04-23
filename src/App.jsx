import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

const App = () => {
  const [resumeData, setResumeData] = useState(JSON.parse(localStorage.getItem("cvData")));

  const handleChange = (personal, education, experience, skills) => {
    setResumeData({
      personal: personal,
      education: education,
      experience: experience,
      skills: skills,
    });
  };

  return (
    <div className='App h-screen overflow-scroll bg-slate-100 dark:bg-slate-900'>
      <Header />
      <Main handleChange={handleChange} data={resumeData} />
      <div className='text-slate-900 dark:text-slate-50'>{JSON.stringify(resumeData, "", 2)}</div>
    </div>
  );
};

export default App;
