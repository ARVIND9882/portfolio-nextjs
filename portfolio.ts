import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Arvind Pardeshi",
  title: "Hi all, I'm Arvind",
  description:
    " a passionate Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, and Node.js).I enjoy building scalable, user-friendly web applications and solving challenging programming problems. I’m always eager to learn and implement the latest technologies in my projects. My goal is to create impactful digital solutions that blend creativity with technical excellence.",
  resumeLink: "/resume.pdf",
};

export const openSource = {
  githubUserName: "ARVIND9882",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:arvindpardeshi007@gmail.com",
  linkedin: "https://www.linkedin.com/in/arvind-pardeshi-2606831ab/",
  github: "https://github.com/ARVIND9882",
  instagram: "https://www.instagram.com/_arvind.24_/",
  
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive websites using HTML, CSS, and Bootstrap"),
        emoji("⚡ Developing interactive user interfaces with React.js"),
        emoji("⚡ Creating RESTful APIs using Node.js and Express"),
        emoji("⚡ Managing databases with MySQL and MongoDB"),
        emoji("⚡ Version control and collaboration with GitHub"),
      ],
      softwareSkills: [
        
        {
          skillName: "HTML",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS",
          iconifyTag: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Bootstrap",
          iconifyTag: "logos:bootstrap",
        },
        {
          skillName: "Tailwind CSS",
          iconifyTag: "logos:tailwindcss-icon",
        },
        {
          skillName: "React",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Express",
          iconifyTag: "logos:express",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb-icon",
        },
        {
          skillName: "API",
          iconifyTag: "tabler:api",
        },
        {
          skillName: "GitHub",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "78",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Navsahyadri Group Of Institutes",
    subHeader: "Bachelor of Engineering in Computer Engineering",
    duration: "April 2020 - May 2023",
    desc: "",
    cgpa: "7.9 cgpa",
    descBullets: [], 
  },
  {
    schoolName: "Maharashtra Institute Of Technology",
    subHeader: "Diploma in Computer Engineering",
    duration: "April 2016 - September 2019",
    desc: "",
    cgpa: "6.9 cgpa",
    descBullets: [], 
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Jr.Web Developer",
    company: "Georeach Technologies",
    companyLogo: "/img/icons/common/georeachlogo.png",
    date: "Aug 2024 - Present",
    desc: "As a Jr. Web Developer, I specialize in creating responsive, user-friendly websites and web applications using technologies like WordPress, PHP, and React. My role involves developing custom themes, plugins, and interactive front-end components to deliver modern, scalable solutions tailored to client requirements. I am committed to writing clean, efficient code and ensuring optimal website performance.",
  },
  
];

export const projects: ProjectType[] = [
  {
    name: "Gym Exercises",
    desc: "A React-based application that allows users to search for exercises and view related GIFs and video tutorials. This app fetches data from an API and provides an interactive platform for fitness enthusiasts.",
    github: "https://github.com/ARVIND9882/gym_exercises",
    link: "gym-exercises-deploy.netlify.app/",
  },
  {
    name: "Cryptoapp",
    desc: " A real-time cryptocurrency tracker that provides live prices, trends, and detailed analytics for various cryptocurrencies. Users can view price graphs, monitor market movements, and make informed decisions with an intuitive and responsive interface. Built with React and powered by a robust API for accurate data.",
    github:"https://github.com/ARVIND9882/cryptoapp"
  },
  {
    name: "Expense-Tracker",
    desc: "A modern React-based Expense Tracker that lets users add, manage, and analyze their expenses. Features include a dark mode toggle, a responsive UI, a detailed expense list, a summary section, and a pie chart for expense analysis. Built with modular components for scalability and styled for a clean user experience.",
    link: "expensetracker9882.netlify.app/",
    github:"https://github.com/ARVIND9882/expense-tracker"
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },

  
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Arvind Pardeshi",
  description: greetings.description,
  author: "Arvind Pardeshi",
  image: "https://avatars.githubusercontent.com/ARVIND9882",
  url: "",
  keywords: [
    "Arvind",
    "Arvind Pardeshi",
    "Portfolio",
    "Arvind Portfolio ",
    "Arvind Pardeshi Portfolio",
  ],
};
