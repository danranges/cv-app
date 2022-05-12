import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Header from "./components/Header";
import Main from "./components/Main";
import Output from "./components/Output";
import "./index.css";
import { emptyCV, savedCV } from "./utils/utils";

const App = () => {
  const [resumeData, setResumeData] = useState(!!savedCV ? savedCV : emptyCV);
  const componentRef = useRef();

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

  const handleExport = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='App content-center h-screen overflow-scroll bg-slate-50 dark:bg-slate-900'>
      <Header handleSave={handleSave} handleExport={handleExport} />
      <Main handleChange={handleChange} data={resumeData} handleSave={handleSave} />
      <Output data={resumeData} ref={componentRef} />
    </div>
  );
};

export default App;
