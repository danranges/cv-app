import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Output from "./components/Output";
import "./index.css";
import { emptyCV, savedCV } from "./utils/utils";

const App = () => {
  const [resumeData, setResumeData] = useState(!!savedCV ? savedCV : emptyCV);

  const handleChange = (personal, education, experience, skills) => {
    setResumeData({
      personal: personal,
      education: education,
      experience: experience,
      skills: skills,
    });
  };

  const handleSave = () => {
    localStorage.setItem("cvData", JSON.stringify(resumeData));
  };

  return (
    <div className='App h-screen overflow-scroll bg-slate-100 dark:bg-slate-900'>
      <Header handleSave={handleSave} />
      <Main handleChange={handleChange} data={resumeData} />
      <Output data={resumeData} />
    </div>
  );
};

export default App;
