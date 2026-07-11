import type { Locale } from "@/src/lib/i18n";

export interface ServiceCopy {
  title: string;
  description: string;
  outcomes: string[];
}

export interface Service {
  id: string;
  slug: string;
  copy: Record<Locale, ServiceCopy>;
}

export const services: Service[] = [
  {
    id: "1",
    slug: "mobile-application",
    copy: {
      en: {
        title: "Mobile Application",
        description:
          "Native and cross-platform apps that feel fast, clear, and reliable on every device.",
        outcomes: [
          "iOS and Android apps built for daily use",
          "Clean UI with smooth performance",
          "App store ready delivery and updates",
        ],
      },
      mm: {
        title: "Mobile Application",
        description:
          "စက်တိုင်းတွင် မြန်ဆန်၊ ရှင်းလင်းပြီး ယုံကြည်စိတ်ချရသော Native နှင့် Cross-platform App များ။",
        outcomes: [
          "နေ့စဉ်အသုံးပြုရန် iOS နှင့် Android App များ",
          "ချောမွေ့သော စွမ်းဆောင်ရည်ရှိသည့် UI",
          "App Store တင်ရန် အဆင်သင့် ပေးပို့ခြင်းနှင့် Update များ",
        ],
      },
    },
  },
  {
    id: "2",
    slug: "website-web-application",
    copy: {
      en: {
        title: "Website / Web Application",
        description:
          "Modern websites and web apps designed to look sharp and work hard for your business.",
        outcomes: [
          "Marketing sites, portals, and dashboards",
          "Responsive design for desktop and mobile",
          "Fast loading and easy to maintain",
        ],
      },
      mm: {
        title: "Website / Web Application",
        description:
          "သင့်လုပ်ငန်းအတွက် လှပပြီး အသုံးဝင်အောင် ဒီဇိုင်းလုပ်ထားသော ခေတ်မီ Website နှင့် Web App များ။",
        outcomes: [
          "Marketing Site၊ Portal နှင့် Dashboard များ",
          "Desktop နှင့် Mobile အတွက် Responsive Design",
          "မြန်ဆန်စွာ Load ဖြစ်ပြီး ထိန်းသိမ်းရလွယ်ကူခြင်း",
        ],
      },
    },
  },
  {
    id: "3",
    slug: "odoo-erp-software",
    copy: {
      en: {
        title: "Odoo ERP Software",
        description:
          "Odoo setup and customization to connect sales, inventory, accounting, and operations in one system.",
        outcomes: [
          "Module configuration for your workflows",
          "Custom fields, reports, and automations",
          "Training and go-live support",
        ],
      },
      mm: {
        title: "Odoo ERP Software",
        description:
          "Sales၊ Inventory၊ Accounting နှင့် Operations များကို စနစ်တစ်ခုတည်းတွင် ချိတ်ဆက်ပေးသော Odoo Setup နှင့် Customize လုပ်ငန်းများ။",
        outcomes: [
          "သင့် Workflow အတွက် Module Configuration",
          "Custom Field၊ Report နှင့် Automation များ",
          "သင်တန်းပေးခြင်းနှင့် Go-live Support",
        ],
      },
    },
  },
  {
    id: "4",
    slug: "customize-software-development",
    copy: {
      en: {
        title: "Customize Software Development",
        description:
          "Tailored software built around your process—so your team works faster with fewer workarounds.",
        outcomes: [
          "Custom web and business applications",
          "API and system integrations",
          "Secure access and role-based control",
        ],
      },
      mm: {
        title: "Customize Software Development",
        description:
          "သင့်လုပ်ငန်းစဉ်နှင့် ကိုက်ညီအောင် တည်ဆောက်ထားသော Custom Software — အဖွဲ့သည် ပိုမိုမြန်ဆန်စွာ အလုပ်လုပ်နိုင်ရန်။",
        outcomes: [
          "Custom Web နှင့် Business Application များ",
          "API နှင့် System Integration များ",
          "လုံခြုံသော Access နှင့် Role-based Control",
        ],
      },
    },
  },
  {
    id: "5",
    slug: "product-design-ux",
    copy: {
      en: {
        title: "Product Design & UX",
        description:
          "Clear interfaces and flows that help users adopt software quickly and with less friction.",
        outcomes: [
          "User research and journey mapping",
          "Wireframes through polished UI",
          "Usability reviews before build",
        ],
      },
      mm: {
        title: "Product Design & UX",
        description:
          "အသုံးပြုသူများ Software ကို မြန်ဆန်စွာ လက်ခံအသုံးပြုနိုင်ရန် ရှင်းလင်းသော Interface နှင့် Flow များ။",
        outcomes: [
          "User Research နှင့် Journey Mapping",
          "Wireframe မှ Polished UI အထိ",
          "တည်ဆောက်မီ Usability Review များ",
        ],
      },
    },
  },
  {
    id: "6",
    slug: "support-iteration",
    copy: {
      en: {
        title: "Support & Iteration",
        description:
          "Ongoing support after launch—fixes, improvements, and updates tied to real usage.",
        outcomes: [
          "Priority bug and performance support",
          "Feature updates from team feedback",
          "A release plan you can rely on",
        ],
      },
      mm: {
        title: "Support & Iteration",
        description:
          "Launch ပြီးနောက် ဆက်လက်ပံ့ပိုးမှု — အမှန်တကယ်အသုံးပြုမှုအပေါ် အခြေခံသော ပြင်ဆင်မှု၊ တိုးတက်မှုနှင့် Update များ။",
        outcomes: [
          "ဦးစားပေး Bug နှင့် Performance Support",
          "အဖွဲ့ Feedback အပေါ် အခြေခံသော Feature Update များ",
          "ယုံကြည်စိတ်ချရသော Release Plan",
        ],
      },
    },
  },
];

export function getLocalizedService(service: Service, locale: Locale = "en") {
  const copy = service.copy[locale] ?? service.copy.en;
  return {
    id: service.id,
    slug: service.slug,
    title: copy.title,
    description: copy.description,
    outcomes: copy.outcomes,
  };
}
