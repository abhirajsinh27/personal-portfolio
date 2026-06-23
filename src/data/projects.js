
export const projects = [
  {
    id: "invhub",
    name: "InvHub",
    tagline: "Multi-Tenant SaaS Inventory Management Platform",
    description:
      "A multi-tenant SaaS platform with organization-based data isolation — every restaurant or business gets an auto-generated unique code, and all data is scoped by organizationId for zero cross-tenant leakage.",
    points: [
      "Architected organization-scoped data isolation across the entire schema, with zero cross-tenant data leakage.",
      "Implemented JWT authentication with Role-Based Access Control (Admin / Staff), protected routes, and secure httpOnly token handling.",
      "Built 15+ RESTful API endpoints for product CRUD, category management, stock tracking, and per-organization activity logging.",
      "Designed an analytics dashboard with real-time low-stock alerts, inventory trend summaries, and activity audit logs.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "JWT"],
    github: "https://github.com/abhirajsinh27/invhub-restaurant-saas",
    liveDemo: "https://invhubs.netlify.app",
    featured: true,
  },
  {
    id: "freelancerhub",
    name: "FreelancerHub",
    tagline: "Role-Based Freelancer Marketplace",
    description:
      "A full-featured marketplace with two distinct roles — Clients post projects, Freelancers submit bids — each with their own dashboard and live data.",
    points: [
      "Built dual-role dashboards for Clients (post projects) and Freelancers (submit bids).",
      "Implemented Firebase Authentication for secure email/password login.",
      "Used Firestore real-time listeners (onSnapshot) for live bid and project updates.",
      "Designed a fully responsive UI with conditional role-based rendering.",
    ],
    stack: ["React.js", "Firebase Auth", "Firestore", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/abhirajsinh27/Freelancer-Hub",
    liveDemo: "https://freelancerrhub.netlify.app/",
    featured: true,
  },
  {
    id: "sportsera",
    name: "SportsEra",
    tagline: "Sports & Esports Event Management Platform",
    description:
      "A final-year team project for managing sports and esports event listings, registration, and participation — built across a 3-person team.",
    points: [
      "Built responsive UI layouts, navigation components, and event listing pages.",
      "Implemented user registration and login using PHP sessions.",
      "Built event participation features with MySQL integration.",
      "Collaborated in a 3-member team, integrating frontend and backend modules via Git.",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    github: "",
    liveDemo: "",
    featured: false,
  },
];
