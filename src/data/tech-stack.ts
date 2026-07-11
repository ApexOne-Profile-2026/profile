export const techStackGroupIds = [
  "mobile",
  "backend",
  "web",
  "design",
  "erp",
  "integrations",
  "database",
  "devops",
] as const;

export type TechStackGroupId = (typeof techStackGroupIds)[number];

export const techStackGroups = {
  mobile: ["Flutter", "Java", "Kotlin", "Android", "iOS"],
  backend: ["PHP", "Laravel", "CodeIgniter", "Node.js", "Express.js", "Odoo", "RESTful API"],
  web: ["JavaScript", "Vue.js", "React.js", "Next.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  design: ["Figma", "UI/UX"],
  erp: ["ERP", "SAP", "Custom ERP modules", "POS"],
  integrations: ["Third-party Integration", "Payment Integration", "End-to-End Integration"],
  database: ["MySQL", "PostgreSQL", "SQL Optimization", "Stored Procedures", "ERD Design", "Directus"],
  devops: ["AWS", "Alibaba Cloud", "DigitalOcean", "Docker", "CI/CD", "Coolify", "Git", "Postman"],
} as const satisfies Record<TechStackGroupId, readonly string[]>;

export type TechStackName = (typeof techStackGroups)[TechStackGroupId][number];

export const techStack = techStackGroupIds.flatMap((groupId) => [...techStackGroups[groupId]]);
