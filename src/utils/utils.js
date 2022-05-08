import { nanoid } from "nanoid";

const newJob = () => {
  return {
    id: nanoid(),
    company: "",
    position: "",
    city: "",
    start: new Date(),
    end: "",
    desc: "",
  };
};

const newSchool = () => {
  return {
    id: nanoid(),
    school: "",
    program: "",
    degree: "",
    city: "",
    start: "",
    end: "",
  };
};

const savedCV = JSON.parse(localStorage.getItem("cvData"));

const emptyCV = {
  personal: {
    name: "",
    email: "",
    phone: "",
    city: "",
    title: "",
  },
  education: [newSchool()],
  experience: [newJob()],
  skills: "",
};

export { newJob, newSchool, savedCV, emptyCV };
