import React from "react";
import PersonalOutput from "./outputs/PersonalOutput";
import EduOutput from "./outputs/EduOutput";
import ExpOutput from "./outputs/ExpOutput";
import "../index.css";

const Output = React.forwardRef(({ data }, ref) => {
  const { personal, education, experience, skills } = data;

  return (
    <div ref={ref} className='flex min-w-full justify-center'>
      <div className='flex flex-col bg-white rounded-lg shadow-md m-2 p-2 w-[50rem] break-normal'>
        <PersonalOutput personal={personal} />
        <div className='mt-2 text-3xl font-extralight'>Education:</div>
        {education.map((school) => {
          return <EduOutput key={school.id} school={school}></EduOutput>;
        })}
        <div className=' mt-2 text-3xl font-extralight'>Experience:</div>
        {experience.map((job) => {
          return <ExpOutput key={job.id} job={job} />;
        })}
        <div className='mb-2'>
          <div className='mt-2 text-3xl font-extralight'>Skills:</div>
          <div className='mt-2 text-sm'>{skills}</div>
        </div>
      </div>
    </div>
  );
});

export default Output;
