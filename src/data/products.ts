import type { Locale } from "@/src/lib/i18n";
import {
  posLongDescriptionEn,
  posLongDescriptionMm,
} from "@/src/data/product-copy/pos";
import {
  realEstateLongDescriptionEn,
  realEstateLongDescriptionMm,
} from "@/src/data/product-copy/real-estate";

export interface ProductCopy {
  title: string;
  description: string;
  longDescription: string;
  features: string[];
}

export interface Product {
  id: string;
  slug: string;
  image: string;
  copy: Record<Locale, ProductCopy>;
}

export const products: Product[] = [
  {
    id: "1",
    slug: "pos",
    image: "/product/pos.png",
    copy: {
      en: {
        title: "POS",
        description:
          "An all-in-one cloud POS for retail, F&B, and multi-outlet shops — start with just a phone or tablet.",
        longDescription: posLongDescriptionEn,
        features: [
          "Web and Mobile sales dashboard",
          "Fast checkout with barcode scanning",
          "Stock and inventory management",
          "Multi-branch and staff permission control",
          "Live and Testing environments",
          "Hardware-ready: printer, scanner, cash drawer",
        ],
      },
      mm: {
        title: "POS",
        description:
          "ဖုန်း သို့မဟုတ် Tablet တစ်လုံးရှိရုံနဲ့ စတင်နိုင်တဲ့ All-in-One Cloud POS Solution။",
        longDescription: posLongDescriptionMm,
        features: [
          "Web နှင့် Mobile ရောင်းအား Dashboard",
          "Barcode Scan ဖြင့် အမြန်ငွေရှင်းစနစ်",
          "Stock နှင့် Inventory Management",
          "Multi-Branch နှင့် User Permission Control",
          "Live နှင့် Testing Environment",
          "Printer၊ Scanner၊ Cash Drawer ချိတ်ဆက်နိုင်ခြင်း",
        ],
      },
    },
  },
  {
    id: "2",
    slug: "real-estate-platform",
    image: "/product/real-estate.png",
    copy: {
      en: {
        title: "Real Estate Platform",
        description:
          "A ready-to-use digital platform for real estate companies, developers, agencies, brokers, and construction businesses.",
        longDescription: realEstateLongDescriptionEn,
        features: [
          "Smart property listing management",
          "Website, Android, iOS, and Admin Panel",
          "Home tour and video showcase tools",
          "Wanted listings, events, and marketing",
          "Point system with local payment gateways",
          "Advanced search, map view, and AI agent",
        ],
      },
      mm: {
        title: "Real Estate Platform",
        description:
          "အိမ်ခြံမြေလုပ်ငန်းကို Digital Platform အဖြစ် ပြောင်းလဲလိုသူများအတွက် အသင့်အသုံးပြုနိုင်မယ့် system တစ်ခု။",
        longDescription: realEstateLongDescriptionMm,
        features: [
          "Smart Property Listing Management",
          "Website၊ Android၊ iOS နှင့် Admin Panel",
          "Home Tour နှင့် Video Showcase",
          "Wanted Listing၊ Events နှင့် Marketing",
          "Point System နှင့် Digital Payment",
          "Advanced Search၊ Map View နှင့် AI Agent",
        ],
      },
    },
  },
  {
    id: "3",
    slug: "student-platform",
    image: "/product/student-platform.png",
    copy: {
      en: {
        title: "Student Platform",
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
      },
      mm: {
        title: "Student Platform",
        description:
          "သင်ယူမှု၊ ကျောင်းဝင်ခွင့်၊ တက်ရောက်မှုနှင့် ပညာရေးတိုးတက်မှုအတွက် all-in-one student platform။",
        longDescription:
          "ApexOne Student Platform သည် ကျောင်းများနှင့် သင်တန်းအစီအစဉ်များ၏ သင်ကြားမှုနှင့် ကျောင်းသားစီမံခန့်ခွဲမှုကို ပိုမိုလွယ်ကူစေပါသည်။ Course ပေးပို့ခြင်း၊ တက်ရောက်မှုနှင့် တင်သွင်းမှုများ စောင့်ကြည့်ခြင်း၊ ကျောင်းသားနှင့် မိဘများနှင့် ဆက်သွယ်ခြင်း၊ ပညာရေးစွမ်းဆောင်ရည်ကို ရှင်းလင်းစွာ ကြည့်ရှုနိုင်ခြင်းတို့ကို ပံ့ပိုးပေးပါသည်။",
        features: [
          "Course နှင့် class စီမံခန့်ခွဲမှု",
          "Enrollment နှင့် timetable tools",
          "Attendance နှင့် assessment tracking",
          "Student နှင့် parent dashboard များ",
          "Assignment၊ quiz နှင့် gradebook များ",
          "ကြေညာချက်နှင့် messaging",
        ],
      },
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export function getLocalizedProduct(product: Product, locale: Locale = "en") {
  const copy = product.copy[locale] ?? product.copy.en;
  return {
    id: product.id,
    slug: product.slug,
    image: product.image,
    title: copy.title,
    description: copy.description,
    longDescription: copy.longDescription,
    features: copy.features,
  };
}
