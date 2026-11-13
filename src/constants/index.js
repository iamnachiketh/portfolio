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
      id: "impact",
      title: "Impact",
    },
    {
      id: "contact",
      title: "Connect",
    },
  ];

  const impacts = [
    {
      metric: "1M/day",
      label: "SIM sync jobs",
      detail:
        "Built and ran Airtel SIM management scripts syncing statuses and dates at million-record daily scale.",
    },
    {
      metric: "8K",
      label: "Vehicles analyzed",
      detail:
        "Go checkpoint logic and PostgreSQL loads on IoT movement data — reports for 10+ clients.",
    },
    {
      metric: "20m → 30s",
      label: "Release time",
      detail:
        "GitHub Actions CI/CD for a Go service: auto-deploy to dev, manually gated prod via SSH.",
    },
    {
      metric: "7",
      label: "Modules owned",
      detail:
        "End-to-end ownership — requirements, schema, APIs, deployment, and production support.",
    },
    {
      metric: "Award",
      label: "CEO recognition",
      detail:
        "Certificate of Appreciation from Intellicar's CEO, CTO, and VP of Software Engineering.",
    },
  ];

  const socials = [
    {
      label: "Email",
      value: "nachikethkc@gmail.com",
      href: "mailto:nachikethkc@gmail.com",
      external: false,
    },
    {
      label: "Phone",
      value: "+91 63621 14092",
      href: "tel:+916362114092",
      external: false,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nachiketh-k-c-a94a30247",
      href: "https://linkedin.com/in/nachiketh-k-c-a94a30247",
      external: true,
    },
  ];
  
  const services = [
    {
      title: "Go Backend",
      icon: web,
    },
    {
      title: "Node.js APIs",
      icon: backend,
    },
    {
      title: "PostgreSQL / Data",
      icon: mobile,
    },
    {
      title: "CI/CD & DevOps",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "REST APIs",
      icon: restapi,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "React JS",
    //   icon: reactjs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Java",
    //   icon: java,
    // },
  ];
  
  const experiences = [
    {
      title: "Backend Engineer I",
      company_name: "Intellicar Telematics",
      icon: "/intellicar_logo.jpeg",
      iconBg: "#FFFFFF",
      date: "Mar 2025 – Present",
      points: [
        "Owned 7 backend modules end to end across client and internal projects: requirements, schema design, APIs, deployment, and production support.",
        "Built and ran Airtel SIM management scripts syncing SIM statuses for 1M SIMs per day.",
        "Wrote analytical scripts on IoT movement data for 8K vehicles (Go checkpoint logic, PostgreSQL loads); powered graph/CSV reports for 10+ clients.",
        "Built a GitHub Actions CI/CD pipeline for a Go service (auto-deploy to dev, gated prod), cutting release time from 20 min to 30 sec.",
        "Built reusable Node.js libraries for third-party API integrations (auth, retries, error handling) shared across projects.",
        "Acted as direct client contact: requirements, demos, and status updates; mentored 2 newer engineers and reviewed PRs.",
        "Converted sequential processing to parallel in a legacy Express codebase, cutting response time by ~10 sec.",
        "Use Claude Code and Cursor daily to navigate legacy code, write tests, and review PRs.",
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
  
  export { services, technologies, experiences, testimonials, projects, impacts, socials };
