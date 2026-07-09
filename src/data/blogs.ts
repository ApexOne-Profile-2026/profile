export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author?: string;
}

export const blogs: BlogPost[] = [
  {
    id: "1",
    title: "How Modern POS Systems Help Multi-Outlet Retail Scale",
    slug: "modern-pos-multi-outlet-retail",
    excerpt:
      "Why real-time inventory, role-based access, and unified reporting matter when your business grows beyond a single store.",
    content: `Growing from one shop to many sounds exciting—until inventory drifts, shift reports disagree, and managers are stuck stitching together spreadsheets.

A modern POS should do more than print receipts. It should give every outlet a shared source of truth for stock, sales, and staff activity while still working reliably at the counter.

At ApexOne, we design POS workflows around three practical needs:

1. Speed at checkout — cashiers need fewer taps and clear error states.
2. Trustworthy inventory — stock updates should land in real time across outlets.
3. Decision-ready reporting — owners want daily, weekly, and outlet-level clarity without exporting CSVs first.

If you are evaluating POS options, start with your peak-hour operations. The best system is the one your team can run confidently when the queue is longest.`,
    coverImage: "/images/blog/modern-pos-retail.jpg",
    date: "2026-05-12",
    author: "ApexOne",
  },
  {
    id: "2",
    title: "Building a Real Estate Platform Buyers Actually Trust",
    slug: "real-estate-platform-buyer-trust",
    excerpt:
      "Listings, media, and lead response times define whether a property platform feels polished—or abandoned.",
    content: `Buyers decide quickly. Incomplete photos, stale prices, and slow inquiry responses quietly kill deals before an agent ever picks up the phone.

A strong real estate platform earns trust through consistency:

- Accurate listing data that is easy for agents to keep current
- High-quality media and map context that reduce ambiguity
- Inquiry routing that gets the right agent involved fast
- A clear pipeline so follow-ups do not fall through

Technology does not replace good agents—it removes the friction that slows them down. That is the approach behind ApexOne’s Real Estate Platform: public discovery that feels premium, and internal tools that keep the sales motion organized.`,
    coverImage: "/images/blog/real-estate-trust.jpg",
    date: "2026-04-28",
    author: "ApexOne",
  },
  {
    id: "3",
    title: "What Schools Should Expect from a Student Platform in 2026",
    slug: "student-platform-expectations-2026",
    excerpt:
      "Beyond course pages—attendance, assessments, parent visibility, and admin clarity in one connected system.",
    content: `Education software often fails when it tries to be everything at once and ends up being hard to use every day.

Schools and training programs usually need a tighter set of capabilities done well:

- Reliable enrollment and class scheduling
- Attendance that staff can capture quickly
- Assessments and grading with transparent history
- Dashboards for students, parents, and administrators
- Communication tools that reduce scattered messaging apps

The winning platforms are not the ones with the longest feature lists. They are the ones teachers will open every morning without friction. ApexOne’s Student Platform is built around that reality—clear roles, practical workflows, and data schools can actually act on.`,
    coverImage: "/images/blog/student-platform-2026.jpg",
    date: "2026-03-18",
    author: "ApexOne",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((post) => post.slug === slug);
}

export function getBlogById(id: string): BlogPost | undefined {
  return blogs.find((post) => post.id === id);
}

export function getRecentBlogs(limit = 3): BlogPost[] {
  return [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
