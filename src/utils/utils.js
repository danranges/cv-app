import { nanoid } from "nanoid";

const newJob = () => {
  return {
    id: nanoid(),
    company: "",
    position: "",
    city: "",
    start: new Date(),
    end: new Date(),
    desc: "",
  };
};

const newSchool = () => {
  return {
    id: nanoid(),
    schoolName: "",
    program: "",
    degree: "",
    city: "",
    start: new Date(),
    end: new Date(),
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
