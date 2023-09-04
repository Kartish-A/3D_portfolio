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
      "I thought it was impossible to make a website as beautiful as our product, but Abdoulfatah proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Abdoulfatah does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abdoulfatah optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
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
    source_code_link: "https://github.com/",
    project_link: "",
  },
  {
    name: "CommerceZone",
    subtitle: "web store",
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
    source_code_link: "https://github.com/",
    project_link: "",
  },
  {
    name: "SocialEase",
    subtitle: "social media app",
    description:
      "An app with seamless user experience, enabling users to connect and interact effortlessly. through intuitive interface & innovative features, fostering meaningful interactions in the digital realm",
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
    image: socialEase,
    source_code_link: "https://github.com/",
    project_link: "",
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
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: taskfocus,
    source_code_link: "https://github.com/",
    project_link: "",
  },
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
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bookNook,
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
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: lafifProjectPhoto,
    source_code_link: "https://github.com/",
    project_link: "",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
