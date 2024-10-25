import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    fireflix,
    bookart,
    brainsightai,
    java,
    mysql,
    restapi,
    python,

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
    // {
    //   title: "Python Developer",
    //   icon: web,
    // },
    {
      title: "Java Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Node.js Developer",
      icon: backend,
    },
    {
      title: "API Design",
      icon: creator,
    },
    {
      title: "Authentication",
      icon: backend,
    }
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
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySql",
      icon: mysql,
    },

    // {
    //   name: "Python",
    //   icon: python,
    // },

    {
      name: "Java",
      icon: java,
    },

    {
      name: "git",
      icon: git,
    },
    {
      name: "restapi",
      icon: restapi,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "BrainSightAI",
      icon: brainsightai,
      iconBg: "#050A30",
      date: "July 2023 - August 2023",
      points: [
        "Webhooks in type form. Understanding typeform and implementing webhooks in it.",
        "Api creation for crud operation on db. Inserting the typeform info in db and manipulating other db info.",
        "Learned the git version control system and used it in the implementations.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "FireFlix",
      description:
        "Platform for entertainment with a subscription. Uses a RESTful API to store user and subscription information.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "white-text-gradient",
        }
      ],
      image:fireflix,
      source_code_link: "https://github.com/iamnachiketh/FireFlix_frontend",
      deployed_link: "https://wonderful-mandazi-3c1585.netlify.app/"
    },
    {
      name: "Bookart",
      description:
        "A full-stack application with JWT-based authentication and permission. Users can register, log in, and reserve hotel rooms.",
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
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "express",
          color: "white-text-gradient",
        }
      ],
      image: bookart,
      source_code_link: "https://github.com/iamnachiketh/Bookart",
      deployed_link: "https://famous-empanada-932779.netlify.app/"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };