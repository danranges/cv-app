import { nanoid } from "nanoid";

const newJob = () => {
  return {
    id: nanoid(),
    company: "",
    position: "",
    city: "",
    start: Date(),
    end: Date(),
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
    start: Date(),
    end: Date(),
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
  education: [],
  work: [],
  skills: "",
};

export { newJob, newSchool, savedCV, emptyCV };
