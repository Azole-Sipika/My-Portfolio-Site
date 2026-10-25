export type Project = {
  slug: string; title: string; subtitle: string; summary: string; problem: string;
  solution: string; features: string[]; stack: string[]; architecture: string[];
  github?: string; demo?: string; status: string; accent: 'cyan' | 'violet';
};

// Add verified repository/demo URLs before publishing. Never invent public links.
export const projects: Project[] = [
  {
    slug: 'ai-legacy-moderniser', title: 'AI-Legacy-Moderniser',
    subtitle: 'Code analysis and modernization platform',
    summary: 'A full-stack platform for reviewing legacy code, identifying improvement opportunities, generating modernization suggestions and saving analysis history.',
    problem: 'Legacy codebases can be difficult to understand, assess and modernize consistently.',
    solution: 'Built an application that connects a React dashboard to an ASP.NET Core API and PostgreSQL persistence, with rule-based analysis and modernization workflows. Optional OpenAI-powered capabilities require separate API configuration.',
    features: ['Rule-based code analysis with findings and scores', 'Modernization suggestions and generated code', 'Saved analysis history in PostgreSQL', 'Project management endpoints', 'Printable reports using the browser’s Save as PDF', 'Optional OpenAI integration when configured'],
    stack: ['React', 'TypeScript', 'ASP.NET Core 9', 'C#', 'PostgreSQL', 'Entity Framework Core'],
    architecture: ['React + TypeScript user interface', 'ASP.NET Core REST API', 'Entity Framework Core persistence', 'PostgreSQL database', 'Optional external AI service'],
    github: 'https://github.com/Azole-Sipika/AI-Legacy-Moderniser', status: 'Locally tested · public demo not yet verified', accent: 'cyan'
  },
  {
    slug: 'smartservice', title: 'SmartService',
    subtitle: 'Multi-portal service management platform',
    summary: 'A service management application with role-specific portals and a modern web application architecture.',
    problem: 'Service workflows become harder to manage when different users need different views of the same system.',
    solution: 'Developed a React-based frontend with an ASP.NET Core backend, with separate portal experiences for distinct roles. Confirm specific production functionality and repository details before public release.',
    features: ['Role-specific portal interfaces', 'Customer-facing workflows', 'Administrative dashboard interface', 'REST API integration', 'Database-backed application architecture'],
    stack: ['React', 'TypeScript', 'ASP.NET Core', 'C#', 'PostgreSQL'],
    architecture: ['React web client', 'ASP.NET Core Web API', 'PostgreSQL data layer'],
    github: 'https://github.com/Azole-Sipika/SmartService', status: 'Development project · deployment not yet verified', accent: 'violet'
  }
];
