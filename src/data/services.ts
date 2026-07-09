export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  outcomes: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Product Design & UX",
    slug: "product-design",
    description:
      "Research-led interfaces and flows that feel clear on day one—so operators adopt software without friction.",
    outcomes: [
      "Discovery workshops and journey mapping",
      "Wireframes through polished UI systems",
      "Usability reviews before engineering locks in",
    ],
  },
  {
    id: "2",
    title: "Custom Software Development",
    slug: "custom-software",
    description:
      "End-to-end builds with Next.js, Node, and cloud infrastructure—shipped as durable products, not throwaway prototypes.",
    outcomes: [
      "Web apps, portals, and admin consoles",
      "API design and integration workstreams",
      "Secure authentication and role-based access",
    ],
  },
  {
    id: "3",
    title: "Platform Implementation",
    slug: "platform-implementation",
    description:
      "Roll out ApexOne POS, Real Estate, or Student Platform with configuration, training, and go-live support.",
    outcomes: [
      "Environment setup and data migration plans",
      "Staff onboarding and playbooks",
      "Post-launch tuning based on real usage",
    ],
  },
  {
    id: "4",
    title: "Support & Iteration",
    slug: "support-iteration",
    description:
      "Keep products sharp after launch with monitoring, fixes, and feature iterations tied to business outcomes.",
    outcomes: [
      "Priority bug and performance response",
      "Roadmap refinements from operator feedback",
      "Release cadence you can plan around",
    ],
  },
];
