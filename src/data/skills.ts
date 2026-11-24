export type SkillCategory = {
  id: string;
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "API Integration",
      "Backend Development",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    items: [
      "MongoDB",
      "MongoDB Atlas",
      "MySQL",
      // "PostgreSQL", // Uncomment when confirmed
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce & CMS",
    items: [
      "Shopify",
      "Shopify Liquid",
      "WordPress",
      "Elementor",
      "Theme Customization",
      "Plugin Integration",
    ],
  },
  {
    id: "tools",
    title: "Development Tools",
    items: ["Git", "GitHub", "Bitbucket", "Jira", "Postman", "VS Code"],
  },
  {
    id: "practices",
    title: "Engineering Practices",
    items: [
      "Responsive Web Design",
      "Reusable Components",
      "State Management",
      "Authentication & Authorization",
      "Debugging",
      "API Integration",
      "Agile / Scrum",
      "Version Control",
      "Code Maintainability",
    ],
  },
];
