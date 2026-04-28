export type Project = {
  slug: string;
  name: string;
  description: string;
  role: "Full-Stack Engineer" | "Full-Stack / DevOps Engineer";
  duration: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  problem: string;
  solution: string;
  architecture: string;
  pipeline: string[];
  features: string[];
  challengesAndSolutions: string[];
  impact: string;
  screenshots: string[];
};

export const careerObjective = [
 "Hi, I'm Megha. I am a Full Stack Developer using modern technologies to build scalable web applications that are intuitive, efficient, and a pleasure to use. My passion is solving complex problems and transforming ideas into meaningful digital experiences that don’t just meet user needs, but create lasting impact. My goal is to bridge the gap between people and technology by building smarter, simpler, and more effective solutions."  
];
export const expertise = [
 
  "Java",
  "Object-Oriented Programming (OOP)",
  "Multithreading & Concurrency",
  "Data Structures & Algorithms",
  "Problem Solving",
  "MERN Stack Development",
  "REST API Architecture",
  "Web Designing",
  "CI/CD Pipelines (Jenkins, GitHub Actions)",
  "Docker Containerization",
  "Kubernetes Orchestration",
  "Terraform",
  "Prometheus & Grafana Monitoring",
  "Accessibilty Development",
  "Authentication & Security (JWT,Cookies)",
  "Database Design (MongoDB, MySQL)",
];

export const projects: Project[] = [
  {
    slug: "eventra",
    name: "EVENTRA",
    description:
      "A full-stack event management platform built with the MERN stack, integrated with CI/CD pipelines and deployed using Docker and Kubernetes for scalable and reliable performance.",
    role: "Full-Stack / DevOps Engineer",
    duration: "FEB 2026",
    tech: ["MongoDB", "Express", "React", "Node.js", "Jenkins", "Docker", "Kubernetes", "Prometheus", "Grafana", "Terraform"],
    image: "/EVENTRA.png",
    github: "https://github.com/meghaeg/EVENTRA",
  
    problem:
    "Modern web applications(MERN) require frequent updates, fast deployment, scalability, and real-time monitoring. In a traditional setup, developers manually build Docker images, push them to registries, deploy to Kubernetes, and configure monitoring." ,    
    solution:
    "An end-to-end automated DevOps pipeline that builds, pushes, and deploys a multi-container application to Kubernetes using Jenkins, Docker, and Terraform, with integrated real-time monitoring via Prometheus and Grafana.",
      
    architecture:
      "React frontend + Node/Express services + MongoDB persistence; Jenkins pipeline builds Docker images and deploys to Kubernetes with observability via Prometheus and Grafana.",
    pipeline: [
      "Code push triggers Jenkins pipeline.",
      "Linting and tests validate build quality.",
      "Docker image build and registry push.",
      "Kubernetes rolling deployment with health checks.",
      "Prometheus/Grafana post-deploy validation.",
    ],
    features: [
      "Event creation and registration management.",
      "Role-based access for organizers and attendees.",
      "Automated CI/CD release flow.",
      "Production monitoring dashboards and alerts.",
    ],
    challengesAndSolutions: [
      "Challenge: Traffic spikes impacted release confidence. Solution: Introduced rolling deployments and autoscaling policies.",
      "Challenge: Slow production issue detection. Solution: Added metrics-based alerting with Grafana dashboards.",
    ],
    impact:
      "Improved deployment reliability and enabled faster production issue detection with measurable operational visibility.",
    screenshots: [
      "/grafana.png",
      "/prometheus.png",
      "/Build-jenkins.png",
    ],
  },
  {
    slug: "blogging-platform",
    name: "BlogIt",
    description:
    "A full-stack blogging web app with features like creating blogs, liking, commenting, and saving blogs. Implemented secure JWT authentication using HTTP-only cookies with protected routes, and integrated WebSockets (Socket.IO) for real-time chat.",
    role: "Full-Stack Developer",
    duration: "Dec 2025",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    image: "/blogit.png",
    github: "https://github.com/meghaeg/Blog_IT",
    live:"https://splendid-elf-33bf32.netlify.app/",
    problem:
    "Modern blogging platforms require secure authentication, interactive user engagement, and real-time communication, yet many systems lack robust session security and dynamic features. The challenge was to build a scalable application that ensures secure user access while supporting functionalities like content interaction and real-time communication.",
      
    solution:
    "Built a MERN-based application with JWT authentication via HTTP-only cookies and integrated Socket.IO for real-time features.",
    architecture:
      "React client with authenticated routes, Express API layer with JWT middleware, and MongoDB for posts, comments, and user entities.",
    pipeline: [
      "PR-based CI checks for lint and tests.",
      "API validation and auth checks in build pipeline.",
      "Containerized staging deployments for QA.",
      "Controlled promotion to production.",
    ],
    features: [
      "JWT-based authentication and authorization.",
      "Create, edit, delete, and publish blog posts.",
      "Protected API endpoints for content actions.",
      "Commenting and moderation support.",
    ],
    challengesAndSolutions: [
      "Challenge: Unauthorized content modifications. Solution: Added strict resource-level authorization middleware.",
      "Challenge: Input handling risks. Solution: Enforced validation and sanitization at API boundaries.",
    ],
    impact:
      "Delivered a secure and scalable content platform with stronger API protection and cleaner editorial workflows.",
    screenshots: [
      "/blog3.png",
      "/blog1.png",
      "/blog2.png",
      ],
  },
  {
    slug: "panchakarma-management-system",
    name: "Panchakarma-Hub",
    description:
    "A Centralized Panchakarma Management Hub that connects patients, treatment centers, doctors, and the Ministry of Ayush on a single digital platform.The system also includes blind-friendly voice assistance to ensure accessible and independent usage for visually impaired users.",
    role: "Accessibilty Developer",
    duration: "Sep 2025",
    tech: ["Python", "Flask", "MongoDB", "HTML/CSS"],
    image: "/sih.png",
    github: "https://github.com/meghaeg/Panchakarma-Hub",
    problem:
    "Panchakarma services lack a centralized platform connecting patients, centers, doctors, and the Ministry of Ayush. Existing systems are fragmented, causing delays in booking, tracking, and coordination. Visually impaired users also face accessibility challenges.",
    solution:
    "Developed a centralized Panchakarma Management Hub to unify patients, centers, doctors, and the Ministry of Ayush on one platform. It enables easy booking, treatment monitoring, and transparent management. Integrated voice assistance ensures blind-friendly accessibility",
    architecture:
      "HTML/CSS frontend forms and dashboards connected to Flask backend services with MySQL relational storage for appointments and medical records.",
    pipeline: [
      "Feature branch checks with backend validation.",
      "Automated schema migration checks before release.",
      "Staging rollout for clinical workflow testing.",
      "Production deployment with backup snapshots.",
    ],
    features: [
      "Patient profile and treatment lifecycle tracking.",
      "Therapy scheduling with conflict checks.",
      "Database-backed records for clinical operations.",
      "Administrative summaries and reporting views.",
    ],
    challengesAndSolutions: [
      "Challenge: Duplicate or inconsistent record updates. Solution: Applied strict relational constraints and input validation.",
      "Challenge: Scheduling collisions. Solution: Added time-slot conflict logic in service layer.",
    ],
    impact:
      "Reduced workflow friction in day-to-day operations and improved consistency of treatment and patient data.",
    screenshots: [
      "/sih1.png",
      "/sih3.png",
      "/sih2.png",
    ],
  },
  {
  slug: "yarn-movement-analytics-system",
  name: "Yarn Movement Analytics System",
  description:
    "A data analytics driven textile management platform to track yarn movement, monitor processing stages, manage suppliers, and visualize operational insights in real time.",
  role: "Full-Stack & Data Analytics Developer",
  duration: "Dec 2025",
  tech: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Recharts"],
  image: "/yarn.png",
  github: "https://github.com/meghaeg/Yarn-Movement-Tracking-System",
  live: "https://yarn-movement-tracking-system.onrender.com",
  problem:
    "Airson Textile Mills lacked a centralized system to track yarn received from multiple suppliers, processing unit allocation, delivery schedules, and real-time yarn status updates.",
  solution:
    "Developed a Yarn Movement Tracking and Management System with centralized data storage, supplier management, yarn allocation workflows, processing supervision, alerts, and analytics dashboards.",
  architecture:
    "React and Next.js frontend provides dashboards and operational interfaces, Node.js and Express.js APIs manage business logic, while MongoDB stores supplier, yarn, processing, and sales data for analytics visualization.",
  pipeline: [
    "Supplier and yarn entry with grade, quantity, sales amount, and delivery date.",
    "Assign yarn batches to specific processing units.",
    "Supervisors update processing stages and completion status.",
    "Analytics dashboards visualize stock flow, supplier trends, and sales reports.",
  ],
  features: [
    "Centralized supplier and yarn inventory management.",
    "Real-time yarn status tracking: pending, processing, delivered.",
    "Unit-wise supervisor control panel for operations.",
    "Delivery deadline alerts and notifications.",
    "Interactive sales and movement analytics charts.",
    "Role-based admin and supervisor access.",
  ],
  challengesAndSolutions: [
    "Challenge: Tracking yarn across multiple units simultaneously. Solution: Implemented batch-wise status mapping with live updates.",
    "Challenge: Understanding business performance from raw records. Solution: Built Recharts dashboards for sales, supplier, and processing insights.",
  ],
  impact:
    "Improved yarn traceability, reduced manual record errors, enhanced production visibility, and enabled data-driven decision making for textile operations.",
  screenshots: [
    "/yarn1.png",
    "/yarn2.png",
    "/yarn3.png",
  ],
},
  {
  slug: "findit-hub",
  name: "FindIt Hub",
  description:
    "A secure lost and found management platform for institutions that helps students report, search, and claim misplaced belongings through a simple digital system.",
  role: "Web Developer",
  duration: "Aug 2025",
  tech: ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
  image: "/f.png",
  github: "#",
  url: "https://lostfoundportal.onrender.com",
  problem:
    "Institutions lacked a centralized and efficient method to manage lost belongings, causing delays in item recovery and poor communication between students and administrators.",
  solution:
    "Developed FindIt Hub, a web-based Lost & Found portal where users can report missing items, browse found items, and securely claim belongings through an organized approval workflow.",
  architecture:
    "Frontend built with HTML, CSS, and JavaScript connects to Flask backend APIs handling authentication, item management, and claims processing, while MySQL stores user and item records.",
  pipeline: [
    "Students register and log in securely.",
    "Users submit lost or found item reports with item details.",
    "Search and filter items by category, date, or keyword.",
    "Admins verify claims and manage item handover records."
  ],
  features: [
    "Secure user authentication and login system.",
    "Lost item and found item reporting portal.",
    "Search and filter for faster item discovery.",
    "Claim request workflow with admin approval.",
    "Centralized database for item records.",
    "Responsive and user-friendly interface."
  ],
  challengesAndSolutions: [
    "Challenge: Avoiding duplicate or fake claims. Solution: Added admin verification before item release.",
    "Challenge: Making item search faster. Solution: Implemented category and keyword-based filtering."
  ],
  impact:
    "Improved recovery rate of lost belongings, reduced manual effort for institutions, and created a transparent process for reporting and claiming items.",
  screenshots: [
    "/f1.png",
    "/f2.png",
    "/f3.png",
  ],
},

  {
    slug: "blood-bank-management-system",
    name: "Bloodlinks",
    description:
      "A centralized system for managing blood inventory, donor records, and real-time availability tracking across multiple locations.",
    role: "Web Developer",
    duration: "July 2025",
    tech: ["MERN Stack", "MongoDB", "Express", "React", "Node.js","Twilio"],
    image: "/blood.png",
    github: "https://github.com/preethi123455/HACKONS",
    live:"https://bloodbank-g10h.onrender.com/",
    problem:
      "Hospitals and blood banks lacked unified inventory visibility, slowing urgent request fulfillment.",
    solution:
      "Built a centralized full-stack application for inventory tracking, donor management, and fast request matching.",
    architecture:
      "React admin interface + Express/Node APIs + MongoDB for stock, donor, and request workflows across multiple facilities.",
    pipeline: [
      "CI validation for API and UI changes.",
      "Automated build and regression checks.",
      "Staging verification for inventory workflows.",
      "Production deployment with health checks.",
    ],
    features: [
      "Real-time blood availability tracking.",
      "Donor and request management modules.",
      "Admin dashboard with status summaries.",
      "Cross-location inventory visibility.",
    ],
    challengesAndSolutions: [
      "Challenge: Data freshness across facilities. Solution: Added periodic sync and update-triggered dashboard refresh logic.",
      "Challenge: High-priority request handling. Solution: Introduced urgency-based queueing and filtering.",
    ],
    impact:
      "Improved response coordination and increased trust in inventory visibility during critical request scenarios.",
    screenshots: [
      "/b1.png",
      "/b2.png",
      "/b3.png",
    ],
  },
 
];
