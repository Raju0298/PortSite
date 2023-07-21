import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  python,
  personal
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Facebook Social Login Asset",
    company_name: "Company Project",
    icon: personal,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with team members to build a viable project",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other team members.",
    ],
  },
  {
    title: "Crowd sourced Epidemiology(Karuna App)",
    company_name: "Personal Project",
    icon: personal,
    iconBg: "#E6DEDD",
    date: "Sept 2022 - Oct 2022",
    points: [
        "Helped building and migrating  from glide app to React.js with Firebase as Backend.",
        "Created components for mobile version of web pages.",
        "Designing Figma pages for the Karuna migration.",
        "Worked on React and React Native for frontend development.",
        "Worked on Glide and Google sheets for migration."
    ],
  },
  {
    title: "Covid19 Feedback Survey Web Application",
    company_name: "Personal",
    icon: personal,
    iconBg: "#383E56",
    date: "Jan 2022 - Apr 2022",
    points: [
        "Designing , Implementation and Deploying the website.",
        "Created Components on React for frontend of the website .",
        "Developing collections and writing queries to fetch records from MongoDB Atlas Database using Mongoose.",
        "Creating backend for the application using Node.js.",
        "Implementing Stripe API for accepting online payments.",
        "Deploying the project on Heroku Cloud Application Platform."
    ],
  },
  {
    title: "Online Bookstore Web Application",
    company_name: "Personal",
    icon: personal,
    iconBg: "#E6DEDD",
    date: "May 2021",
    points: [
      "Developed the project using Java Server Pages or JSP.",
      "Developed MySQL database to store data.",
      "Using Heroku cloud application deployed the project.",
      "Involved in designing the Design Document and Detailed System design Document.",
      "Used Agile Methodology for developing the Application and followed the software development lifecycle for each iteration"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Building a beautiful product from scratch is tough task to achieve but Kishan's knowledge base in frontend and backend really helped us a lot.",
    name: "Jeet Shah",
    designation: "Teammate",
    company: "Personal",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about the project success like Kishan does.",
    name: "Omkar Shinde",
    designation: "Teammate",
    company: "Personal",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kishan optmized our project we were able to showcase our new app on Android as well as IOS",
    name: "Aditya Raj",
    designation: "Teammate",
    company: "Personal",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
