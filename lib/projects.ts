export type Project = {
  name: string
  description: string
  industry: string
  logo: string
  featured: boolean
}

export const projects: Project[] = [
  {
    name: "Buna Bello",
    description: "Full-stack digital platform for a premium Ethiopian coffee brand — e-commerce storefront, inventory management, and order fulfilment system.",
    industry: "F&B / E-Commerce",
    logo: "https://bunabello.com/wp-content/uploads/2025/02/We-Mean-Coffee1.png",
    featured: true,
  },
  {
    name: "Temari Lije",
    description: "EdTech platform connecting students with tutors across Ethiopia — scheduling, payments, progress tracking, and AI-powered learning recommendations.",
    industry: "Education",
    logo: "/partners/temar-lije.png",
    featured: true,
  },
  {
    name: "Neo Vend",
    description: "Smart vending management system with IoT telemetry, real-time inventory monitoring, cashless payments, and route optimisation for operators.",
    industry: "IoT / Retail Tech",
    logo: "/partners/neovend.png",
    featured: true,
  },
  {
    name: "Zekre Sematat",
    description: "Brand identity and digital presence for a cultural events organisation — website, ticketing platform, and social media integration.",
    industry: "Events / Culture",
    logo: "/partners/ecco.png",
    featured: false,
  },
  {
    name: "Saylem Construction",
    description: "Project management and resource planning platform for a construction firm — site tracking, material procurement, workforce scheduling, and reporting.",
    industry: "Construction",
    logo: "/placeholder-logo.png",
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
