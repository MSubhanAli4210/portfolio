export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  href: string;
  github: string;
  category: string;
  featured: boolean;
  image: string;
};

export const projects: Project[] = [
  {
    id: "doctor-booking",
    number: "01",
    title: "Doctor Booking",
    subtitle: "Healthcare Appointment Platform",
    description:
      "A modern healthcare booking interface focused on discovering doctors, viewing availability, and creating a clean appointment scheduling experience.",
    stack: ["React", "TypeScript", "Vite", "Responsive UI"],
    category: "Healthcare / Frontend",
    href: "https://doctor-booking-client-beta.vercel.app",
    github: "https://github.com/MSubhanAli4210/doctor-booking-client",
    featured: true,
    image: "/doctor-booking.png",
  },
  {
    id: "learnspace-lms",
    number: "02",
    title: "Learnspace",
    subtitle: "Learning Management System",
    description:
      "A full-stack learning platform built around courses, lessons, enrollment, authenticated dashboards, and a structured student learning experience.",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Stripe"],
    category: "Full Stack / EdTech",
    href: "https://lms-ecru-tau.vercel.app",
    github: "https://github.com/MSubhanAli4210/lms",
    featured: true,
    image: "/lms.png",
  },
  {
    id: "real-estate",
    number: "03",
    title: "Real Estate",
    subtitle: "Property Discovery Platform",
    description:
      "A responsive real-estate application designed around browsing property listings and presenting property information through a clean, modern interface.",
    stack: ["React", "Vite", "JavaScript", "Responsive UI"],
    category: "Real Estate / Frontend",
    href: "https://realestate-client-alpha.vercel.app",
    github: "https://github.com/MSubhanAli4210/realestate-client",
    featured: true,
    image: "/realestate.png",
  },
  {
    id: "ecommerce-app",
    number: "04",
    title: "E-Commerce",
    subtitle: "Full-Stack Shopping Platform",
    description:
      "An e-commerce application focused on product discovery, cart workflows, order processing, authentication, and a production-style shopping experience.",
    stack: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    category: "E-Commerce / Full Stack",
    href: "#",
    github: "https://github.com/MSubhanAli4210/ecommerce-app",
    featured: false,
    image: "/ecommerce.png",
  },
  {
    id: "food-recipes",
    number: "05",
    title: "Food Recipes",
    subtitle: "Recipe Discovery Application",
    description:
      "A recipe browsing application focused on discovering meals, exploring food categories, and presenting recipes through an easy-to-use responsive interface.",
    stack: ["React", "Vite", "JavaScript", "API Integration"],
    category: "Food / Frontend",
    href: "#",
    github: "https://github.com/MSubhanAli4210/food-recipes-app",
    featured: false,
    image: "/food-recipe.png",
  },
];