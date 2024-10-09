import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Software engineering student from Darbhanga,Bihar 
Pursing Bachelor of technology in Computer science and engineering from Darbhanga college of engineering.
And Bachelor of science in Data science and Programming from IIT Madras`;

export const ABOUT_TEXT = `Aspiring Software Engineer | Driven by Innovation and Problem-Solving

Currently pursuing a B.Tech degree in Computer Science, with a strong passion for programming and a solid foundation in Data Structures and Algorithms (DSA). Proficient in web development technologies and always eager to explore diverse domains.

Actively engaged in coding contests and hackathons, utilizing creativity and perseverance to develop innovative solutions. I aim to contribute my skills to a leading product-based company, such as FAANG, where I can work on impactful projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "B.Tech in Computer Science and Engineering",
    company: "Darbhanga college of Engineering",
    // description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML","CSS","Javascript", "React.js", "C++"],
  },
  {
    year: "2022 - present",
    role: "B.S in Data Science and Programming",
    company: "IIT MADRAS",
    // description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Python","sed","awk","shell-scripting"],
  },
  {
    year: "2019 - 2021",
    role: "Intermediate",
    company: "Central board of secondary education",
    // description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2019",
    role: "Matriculation",
    company: "Bihar school examination board",
    // description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Tourism Website",
    image: project1,
    description:
      "A fully functional toursism website with features like places listing, iteneraries, and user authentication.",
    technologies: ["HTML", "CSS", "Js", "Python", "django"],
  },
  {
    title: "Notes App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "React", "django", "JWT"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "React", "Tailwind Css"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS","django"],
  },
];

export const CONTACT = {
  address: "Darbhanga, Bihar, India, 846001",
  phoneNo: "+9170******81",
  email: "ayushkjha.2004@gmail.com",
};