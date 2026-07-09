export interface Client {
  id: string;
  name: string;
  company: string;
  logo: string;
  testimonial: string;
  role?: string;
}

export const clients: Client[] = [
  {
    id: "1",
    name: "Thiri Aung",
    company: "Golden Mart Retail",
    logo: "/images/clients/golden-mart.svg",
    role: "Operations Director",
    testimonial:
      "ApexOne POS cut our checkout time and gave us clear stock visibility across every branch. The team understood retail operations from day one.",
  },
  {
    id: "2",
    name: "Htet Naing",
    company: "Horizon Properties",
    logo: "/images/clients/horizon-properties.svg",
    role: "Managing Partner",
    testimonial:
      "The Real Estate Platform transformed how we publish listings and follow up leads. Our agents finally work from one shared pipeline.",
  },
  {
    id: "3",
    name: "May Zin",
    company: "BrightPath Academy",
    logo: "/images/clients/brightpath-academy.svg",
    role: "Head of Academic Affairs",
    testimonial:
      "Student Platform made enrollment, attendance, and parent updates simple. Our staff spend less time on paperwork and more time teaching.",
  },
  {
    id: "4",
    name: "Ko Ye",
    company: "Nova Digital Group",
    logo: "/images/clients/nova-digital.svg",
    role: "CTO",
    testimonial:
      "ApexOne delivered clean architecture, fast iteration, and production-ready quality. They feel like an extension of our engineering team.",
  },
];

export function getClientById(id: string): Client | undefined {
  return clients.find((client) => client.id === id);
}
