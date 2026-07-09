export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "POS",
    slug: "pos",
    description:
      "A fast, reliable point-of-sale system built for retail, F&B, and multi-outlet businesses.",
    longDescription:
      "ApexOne POS helps teams sell faster, track inventory in real time, and understand performance across every store. From checkout and receipts to staff permissions and sales reporting, it is designed for day-to-day operations without slowing your team down.",
    features: [
      "Fast checkout with barcode and QR support",
      "Real-time inventory and stock alerts",
      "Multi-outlet management from one dashboard",
      "Sales, tax, and shift reporting",
      "Role-based staff access and audit trails",
      "Offline-ready checkout for unstable networks",
    ],
    image: "/images/products/pos.jpg",
  },
  {
    id: "2",
    title: "Real Estate Platform",
    slug: "real-estate-platform",
    description:
      "A modern property platform for listings, inquiries, agent workflows, and deal tracking.",
    longDescription:
      "The ApexOne Real Estate Platform connects buyers, renters, and agencies in one place. Publish listings, manage leads, coordinate agent pipelines, and give clients a polished search experience—whether you are running a brokerage site or a full property marketplace.",
    features: [
      "Property listing and media management",
      "Advanced search with maps and filters",
      "Lead capture and inquiry routing",
      "Agent CRM and deal pipeline",
      "Seller and landlord portals",
      "SEO-ready public listing pages",
    ],
    image: "/images/products/real-estate.jpg",
  },
  {
    id: "3",
    title: "Student Platform",
    slug: "student-platform",
    description:
      "An all-in-one student platform for learning, enrollment, attendance, and academic progress.",
    longDescription:
      "ApexOne Student Platform streamlines how schools and training programs teach and manage students. Deliver courses, track attendance and submissions, communicate with learners and parents, and give administrators clear visibility into academic performance.",
    features: [
      "Course and class management",
      "Enrollment and timetable tools",
      "Attendance and assessment tracking",
      "Student and parent dashboards",
      "Assignments, quizzes, and gradebooks",
      "Announcements and messaging",
    ],
    image: "/images/products/student-platform.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}
