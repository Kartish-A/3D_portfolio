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
  msg,
  socialbee,
  dci,
  lafifLogo,
  commercezone,
  admin,
  socialEase,
  lafifProjectPhoto,
  taskfocus,
  bookNook,
  tripguide,
  threejs,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UX/UI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Entrepreneur",
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
    name: "Redux Toolkit",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "IT Consultant",
    company_name: ".MSG systems",
    icon: msg,
    iconBg: "#fff",
    date: "February 2022 - Present",
    points: [
      "Leading Front End Developer in web applications using React.js Angular and other related frameworks and technologies.",
      "Design and build excellent UX/UI interfaces using Figma or Adobe XD applications, collaborating with fellow developers to transform these designs into fully functional products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Trainee at Change maker program",
    company_name: "Socialbee",
    icon: socialbee,
    iconBg: "#fff",
    date: "Aug 2021 - Dec 2022",
    points: [
      "Participated in a comprehensive training program aimed at preparing individuals for qualification in the German labor market, focusing on both soft and hard skills.",
      "Underwent rigorous training on SAP-integrated business processes, gaining proficiency in using enterprise resource planning systems for efficient business operations.",
      "Engaged in intensive soft skills training, enhancing communication and managerial abilities crucial for effective team collaboration and leadership.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company_name: "DCI digital career institute",
    icon: dci,
    iconBg: "#fff",
    date: "Jan 2020 - Jun 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Founder and CEO",
    company_name: "LAFIF Investment initiative",
    icon: lafifLogo,
    iconBg: "#fff",
    date: "Feb 2019 - Okt 2019",
    points: [
      "Conceptualized and founded a social investment club/platform in the financial sector, aimed at connecting like-minded individuals interested in socially responsible investing.",
      "Developed the business model, strategies, and roadmap to drive growth and engagement within the platform.",
      "Registered the project in a prominent business incubator, gaining access to valuable resources, mentorship, and networking opportunities.",
      "Managed challenges presented by the Covid-19 pandemic, adapting the project's operations and strategies to the changing circumstances.",
      "Unfortunately, due to the unprecedented impact of the Covid-19 pandemic on the financial sector, the project had to be halted.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abdoulfatah surpassed my expectations by crafting a website that beautifully complements our product. I initially thought it might be a challenging task, but he proved me wrong.",
    name: "A. Q. nelssa",
    designation: "CFO",
    company: "Acmelx. Co",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    testimonial:
      "Abdoulfatah's web development skills are truly exceptional. His attention to detail and creativity in designing our website have left a lasting impression on our customers.",
    name: "K. M. Huztrl",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    testimonial:
      "We owe our online success to Abdoulfatah's web development expertise. His dedication and technical proficiency have transformed our digital presence.",
    name: "S.M. Latim",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const projects = [
  {
    name: "BookNook ",
    subtitle: "online book store",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: bookNook,
    source_code_link: "https://github.com/Kartish-A/nookbook",
    project_link: "https://nookbook.vercel.app/",
  },
  {
    name: "Admin dashboard",
    subtitle: "control central",
    description:
      "A comprehensive full-stack data visualization and management application, empowering users to seamlessly integrate their databases or manually input data. with user-friendly interface, and dynamic data visualization.",
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
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/Kartish-A/admin_dashboard_frontend",
    project_link: "https://github.com/Kartish-A/admin_dashboard_frontend",
  },
  {
    name: "CommerceZone",
    subtitle: "online store",
    description:
      "CommerceZone is an online store with responsive design, prioritizing a user-centric experience. By enabling customers to explore a variety of offerings with ease, It creates a seamless and enjoyable shopping journey",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "strapi",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: commercezone,
    source_code_link: "https://github.com/Kartish-A/commerceZone",
    project_link: "https://github.com/Kartish-A/commerceZone",
  },
  {
    name: "SocialEase",
    subtitle: "social-media app",
    description:
      "An app with seamless user experience, enabling users to connect and interact effortlessly. through intuitive interface & innovative features, fostering meaningful interactions in the digital realm",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: socialEase,
    source_code_link: "https://github.com/Kartish-A/SocialEase_Frontend",
    project_link: "https://github.com/Kartish-A/SocialEase_Frontend",
  },
  {
    name: "TaskFocus ",
    subtitle: "online ToDo & Focus app",
    description:
      "Specialized to-do app, offering seamless task management. With focus mode and priority matrix features, it enhances productivity. It's a dynamic tool for efficient task organization.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: taskfocus,
    source_code_link: "https://github.com/",
    project_link: "",
  },
  
  {
    name: "LAFIF ",
    subtitle: "Investment initiative platform",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: lafifProjectPhoto,
    source_code_link: "https://github.com/",
    project_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
