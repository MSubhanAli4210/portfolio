export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
  stack?: string[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Dev Weekends",
    role: "Co-Mentor",
    duration: "October 2026 – Present",
    description:
      "Supporting learners through technical guidance, project feedback, problem-solving, and collaborative software development within the Dev Weekends community.",
    stack: [
      "Mentoring",
      "Software Engineering",
      "Code Review",
      "Project Guidance",
      "Team Collaboration",
    ],
  },
  {
    company: "AS Digitech",
    role: "Frontend Intern",
    duration: "5 months",
    description:
      "Worked on frontend development tasks, building responsive user interfaces, improving existing pages, and contributing to web application features.",
    stack: ["React", "JavaScript", "Responsive Design", "Frontend Development"],
  },
  {
    company: "Dev Weekends",
    role: "Full Stack AI Engineering Fellow",
    duration: "3 months",
    description:
      "Completed a hands-on fellowship focused on full-stack development, AI engineering, project building, collaborative problem-solving, and applying modern software engineering practices.",
    stack: [
      "Full Stack Development",
      "AI Engineering",
      "Project Development",
      "Software Engineering",
      "Team Collaboration",
    ],
  },
];
