export const locales = ["en", "mm"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizeHref(locale: Locale, href: string) {
  if (href.startsWith("http")) return href;
  if (href === "/") return `/${locale}`;
  return `/${locale}${href}`;
}

export const dictionary = {
  en: {
    languageLabel: "Language",
    languages: { en: "EN", mm: "MM" },
    nav: {
      home: "Home",
      products: "Products",
      services: "Services",
      blog: "Blog",
      contact: "Contact",
      talkToUs: "Talk to us",
    },
    footer: {
      description:
        "Software that moves business forward. We design and ship product-grade software for teams that need clarity, speed, and lasting craft.",
      explore: "Explore",
      company: "Company",
      about: "About ApexOne",
      rights: "All rights reserved.",
      built: "Built with care in Myanmar.",
      privacy: "Privacy",
      terms: "Terms",
    },
    home: {
      eyebrow: "ApexOne",
      title: "Software that transforms how businesses run.",
      description:
        "From production-ready platforms to custom software development. We engineer high-quality digital tools designed to help your business grow.",
      exploreProducts: "Explore Products",
      bookConsultation: "Book a Consultation",
      techEyebrow: "Engineering at ApexOne",
      techTitle: "The technologies we use to build reliable software.",
      techGroups: {
        mobile: "Mobile development",
        backend: "Backend development",
        web: "Web development",
        design: "Design",
        erp: "ERP & business systems",
        integrations: "Integrations",
        database: "Database",
        devops: "DevOps, cloud & tools",
      },
      productsEyebrow: "Products",
      productsTitle: "Platforms designed for real operations.",
      productsDescription:
        "From checkout counters to classrooms, three product lines built to feel fast, clear, and dependable in daily use.",
      viewAllProducts: "View all products",
      viewDetails: "View Details",
      clientsEyebrow: "Our Clients",
      clientsTitle: "Businesses that grow with ApexOne.",
      testimonialsEyebrow: "Testimonials",
      testimonialsTitle: "What partners say after launch.",
      testimonialsDescription:
        "Real feedback from operators who use ApexOne products every day.",
    },
    pages: {
      products: {
        title: "Products",
        heroTitle: "Platforms designed for real operations.",
        heroDescription:
          "Three product lines for retail, property, and education, fast to adopt, clear to run, and built to last.",
        heroCta: "Talk through your use case",
        cardBadge: "product",
        customTitle: "Need something more custom?",
        customDescription:
          "We also design and build tailored platforms for teams with unique workflows. Start a conversation with ApexOne.",
        customCta: "Explore services",
        demo: "Demo",
      },
      services: {
        title: "Services",
        heroTitle: "From first sketch to production and beyond.",
        heroDescription:
          "Whether you are launching a new platform or rolling out an ApexOne product, we pair product craft with engineering that holds up in daily use.",
        consultation: "Book a consultation",
        seeProducts: "See products",
        badge: "Service",
        engagement: "Engagement",
        engagementTitle: "Ready when clarity beats guesswork.",
        engagementDescription:
          "Share your timeline and constraints. We will suggest the leanest path to a useful first release.",
        engagementCta: "Start a conversation",
      },
      contact: {
        title: "Contact",
        heroTitle: "Let's build the next chapter of your product.",
        heroDescription:
          "Tell us what you are aiming for, demo, consultation, or a custom build. We will reply with a clear next step.",
        introEyebrow: "Get in touch",
        introTitle: "A direct line for premium product conversations.",
        introDescription:
          "Reach out for flagship product demos or custom software engagements. We keep the process focused, fast, and discreet.",
        directLines: "Direct lines",
        email: "Email",
        phone: "Phone",
        facebook: "Facebook",
        domain: "Domain",
        nextTitle: "What happens next",
        formTitle: "Send us a message",
        next1: "We review your note within one business day.",
        next2: "We propose a short call or live product walkthrough.",
        next3: "You get a clear scope path, no vague decks.",
        form: {
          successEyebrow: "Message received",
          successTitle: "We'll be in touch.",
          successDescription:
            "Your inquiry is noted. For a faster reply, you can also reach us at",
          sendAnother: "Send another message",
          demoBanner: "Demo request for",
          demoBannerTail: "We'll tailor the walkthrough to your workflow.",
          name: "Full name",
          email: "Work email",
          company: "Company",
          interest: "Interest",
          product: "Product",
          message: "How can we help?",
          trackLabel: "What are you looking for?",
          tracks: {
            flagship: "Flagship Products",
            custom: "Custom Development",
          },
          placeholderName: "Your name",
          placeholderEmail: "you@company.com",
          placeholderCompany: "Company or organization",
          placeholderMessage:
            "Tell us about your goals, timeline, or the demo you'd like.",
          unknownProduct: "Not sure yet",
          consent:
            "By submitting, you agree we may reply by email about your inquiry.",
          sending: "Sending...",
          send: "Send message",
          intents: {
            general: "General inquiry",
            demo: "Request a demo",
            consultation: "Book a consultation",
            partnership: "Partnership",
          },
        },
      },
      blog: {
        title: "Blog",
        heroTitle: "Notes on shipping software that operators trust.",
        heroDescription:
          "Practical writing on retail systems, property platforms, student software, and the craft behind durable products.",
        read: "Read",
      },
      productDetail: {
        breadcrumbHome: "Home",
        breadcrumbProducts: "Products",
        eyebrow: "ApexOne Product",
        talkToSales: "Talk to sales",
        builtForOps: "Built for daily operations",
        ready: "Ready when your team is.",
        readyDescription:
          "Request a live walkthrough tailored to your workflows, no generic slide deck, just the product in context.",
        featuresCount: "Features",
        demoLabel: "Demo",
        demoValue: "Live",
        overview: "About this product",
        keyFeatures: "Key features",
        moreFromApex: "More from ApexOne",
        viewDetails: "View details",
        requestDemo: "Request Demo",
        notFound: "Product not found",
      },
      blogDetail: {
        breadcrumbHome: "Home",
        breadcrumbBlog: "Blog",
        eyebrow: "Insights",
        ctaTitle: "Want something built for your team?",
        ctaDescription:
          "Tell us about your product goals. We'll respond with a clear next step.",
        ctaButton: "Book a consultation",
        keepReading: "Keep reading",
        readArticle: "Read article",
        notFound: "Article not found",
      },
      notFound: {
        title: "This page left the building.",
        description:
          "The link may be outdated, or the page hasn't been published yet. Let's get you back to something useful on ApexOne.",
        backHome: "Back to home",
        browseProducts: "Browse products",
        contact: "Contact us",
        services: "Services",
        servicesHint: "How we engage",
        blog: "Blog",
        blogHint: "Product insights",
        requestDemo: "Request demo",
        requestDemoHint: "See a walkthrough",
      },
    },
  },
  mm: {
    languageLabel: "ဘာသာစကား",
    languages: { en: "EN", mm: "MM" },
    nav: {
      home: "ပင်မ",
      products: "ထုတ်ကုန်များ",
      services: "ဝန်ဆောင်မှုများ",
      blog: "ဘလော့",
      contact: "ဆက်သွယ်ရန်",
      talkToUs: "ဆက်သွယ်ပါ",
    },
    footer: {
      description:
        "စီးပွားရေးကို ရှေ့သို့ တိုးစေသော software များကို ဖန်တီးပေးပါသည်။ ရှင်းလင်းမှု၊ မြန်ဆန်မှုနှင့် အရည်အသွေးကောင်းမွန်မှု လိုအပ်သော အဖွဲ့များအတွက် product-grade software များကို တည်ဆောက်ပေးပါသည်။",
      explore: "လေ့လာရန်",
      company: "ကုမ္ပဏီ",
      about: "ApexOne အကြောင်း",
      rights: "မူပိုင်ခွင့်အားလုံး ထိန်းသိမ်းထားသည်။",
      built: "မြန်မာနိုင်ငံတွင် အလေးထားဖန်တီးထားသည်။",
      privacy: "ကိုယ်ရေးကိုယ်တာ",
      terms: "စည်းမျဉ်းများ",
    },
    home: {
      eyebrow: "ApexOne",
      title: "စီးပွားရေးလုပ်ငန်းများကို ပိုမိုစနစ်ကျကောင်းမွန်အောင် Software ဖြင့် ပြောင်းလဲပေးပါသည်။",
      description:
        "အသုံးပြုရန် အဆင်သင့်ဖြစ်သော Software platform များ (သို့မဟုတ်) custom software များဖြင့် သင့်လုပ်ငန်း စနစ်တကျဖြစ်စေရန် digital tools များကို တည်ဆောက်ပေးပါသည်။",
      exploreProducts: "Software Products များ ကြည့်ရန်",
      bookConsultation: "အခမဲ့ အကြံပေး ချိန်းဆိုရန်",
      techEyebrow: "Engineering at ApexOne",
      techTitle: "ယုံကြည်စိတ်ချရသော software များ တည်ဆောက်ရန် ApexOne's Development Team မှ အသုံးပြုသော နည်းပညာများ။",
      techGroups: {
        mobile: "Mobile ဖွံ့ဖြိုးရေး",
        backend: "Backend ဖွံ့ဖြိုးရေး",
        web: "Web ဖွံ့ဖြိုးရေး",
        design: "Design",
        erp: "ERP & business systems",
        integrations: "Integration များ",
        database: "Database",
        devops: "DevOps, cloud & tools",
      },
      productsEyebrow: "ထုတ်ကုန်များ",
      productsTitle: "လုပ်ငန်းလည်ပက်မှုများအတွက် အသင့်သုံး software platform များ။",
      productsDescription:
        "နေ့စဉ်အသုံးပြုရာတွင် မြန်ဆန်၊ တိကျ ရှင်းလင်းပြီး ယုံကြည်စိတ်ချရသော ApexOne software products များ။",
      viewAllProducts: "ထုတ်ကုန်အားလုံး ကြည့်ရန်",
      viewDetails: "အသေးစိတ်ကြည့်ရန်",
      clientsEyebrow: "ကျွန်ုပ်တို့၏ Client များ",
      clientsTitle: "ApexOne နှင့်အတူ လုပ်ကိုင်နေသော Company များ/လုပ်ငန်းများ။",
      testimonialsEyebrow: "ဖောက်သည် အမြင်များ",
      testimonialsTitle: "Launch ပြီးနောက် ပါတနာများ ပြောကြားချက်များ။",
      testimonialsDescription:
        "ApexOne ထုတ်ကုန်များကို နေ့စဉ်အသုံးပြုနေသော operators များထံမှ တကယ့်အတွေ့အကြုံများ။",
    },
    pages: {
      products: {
        title: "ထုတ်ကုန်များ",
        heroTitle: "လုပ်ငန်းလည်ပတ်မှုများအတွက် အသင့်သုံး software platform များ။",
        heroDescription:
          "Retail၊ property နှင့် education အတွက် product line သုံးခုကို အလွယ်တကူ အသုံးချနိုင်ပြီး တည်ငြိမ်စွာ လည်ပတ်နိုင်အောင် တည်ဆောက်ထားပါသည်။",
        heroCta: "သင့်လိုအပ်ချက်အကြောင်း ပြောကြရအောင်",
        cardBadge: "product",
        customTitle: "ပိုမိုလိုက်ဖက်သော Customize solution လိုပါသလား?",
        customDescription:
          "အထူး workflow များရှိသော အဖွဲ့များအတွက် custom software platform များကိုလည်း တည်ဆောက်ပေးပါသည်။",
        customCta: "ဝန်ဆောင်မှုများ ကြည့်ရန်",
        demo: "Demo",
      },
      services: {
        title: "ဝန်ဆောင်မှုများ",
        heroTitle: "ApexOne မှ ဝန်ဆောင်မှုများ။",
        heroDescription:
          "Platform အသစ်တစ်ခု စတင်မလား၊ ApexOne product တစ်ခု အသုံးချမလား၊ product craft နှင့် engineering ကို တစ်ပြိုင်နက် ပံ့ပိုးပေးပါသည်။",
        consultation: "အခမဲ့ အကြံပေး ချိန်းဆိုရန်",
        seeProducts: "ထုတ်ကုန်များ ကြည့်ရန်",
        badge: "ဝန်ဆောင်မှု",
        engagement: "Engagement",
        engagementTitle: "ခန့်မှန်းခြင်းထက် ရှင်းလင်းမှုက ပိုအရေးကြီးသောအချိန်တွင် အဆင်သင့်ရှိပါသည်။",
        engagementDescription:
          "သင့် timeline နှင့် constraints များကို မျှဝေပါ။ အသုံးဝင်သော first release အတွက် အလွယ်ဆုံးလမ်းကြောင်းကို အကြံပြုပေးပါမည်။",
        engagementCta: "စကားပြောကြရအောင်",
      },
      contact: {
        title: "ဆက်သွယ်ရန်",
        heroTitle: "သင့် product ၏ နောက်ထပ်အဆင့်ကို အတူတည်ဆောက်ရအောင်။",
        heroDescription:
          "Demo, consultation သို့မဟုတ် custom build အတွက် သင်ရည်ရွယ်ထားသည့်အရာကို ပြောပြပါ။ ရှင်းလင်းသော နောက်တစ်ဆင့်ဖြင့် ပြန်လည်ဆက်သွယ်ပါမည်။",
        introEyebrow: "ဆက်သွယ်ရန်",
        introTitle: "အရည်အသွေးမြင့် product များအတွက် ဆက်သွယ်ရန်",
        introDescription:
          "အဆင်သင့်သုံး Software Products များ သို့မဟုတ် custom software များအတွက် ဆက်သွယ်နိုင်ပါသည်။",
        directLines: "တိုက်ရိုက်ဆက်သွယ်ရန်",
        email: "အီးမေးလ်",
        phone: "ဖုန်း",
        facebook: "Facebook",
        domain: "ဒိုမိန်း",
        nextTitle: "နောက်တစ်ဆင့်မှာ",
        formTitle: "မက်ဆေ့ချ်ပို့ရန်",
        next1: "သင့်စာကို အလုပ်ချိန် တစ်ရက်အတွင်း ပြန်လည်သုံးသပ်ပါမည်။",
        next2: "ခေါ်ဆိုမှုတို သို့မဟုတ် live product walkthrough ကို အကြံပြုပေးပါမည်။",
        next3: "မရှင်းလင်းသော deck မဟုတ်ဘဲ ရှင်းလင်းသော scope path ကို ရရှိပါမည်။",
        form: {
          successEyebrow: "မက်ဆေ့ချ် လက်ခံပြီးပါပြီ",
          successTitle: "မကြာမီ ပြန်လည်ဆက်သွယ်ပါမည်။",
          successDescription:
            "သင့် inquiry ကို မှတ်တမ်းတင်ထားပါသည်။ အမြန်ဆုံးပြန်လည်ရရှိလိုပါက",
          sendAnother: "နောက်ထပ် မက်ဆေ့ချ်ပို့ရန်",
          demoBanner: "Demo တောင်းဆိုမှု",
          demoBannerTail: "သင့် workflow အတွက် လိုက်လျောညီထွေ walkthrough ပြုလုပ်ပေးပါမည်။",
          name: "အမည်အပြည့်အစုံ",
          email: "လုပ်ငန်းသုံး အီးမေးလ်",
          company: "ကုမ္ပဏီ",
          interest: "စိတ်ဝင်စားမှု",
          product: "ထုတ်ကုန်",
          message: "ဘယ်လိုကူညီပေးရမလဲ?",
          trackLabel: "သင်ဘာကို ရှာဖွေနေပါသလဲ?",
          tracks: {
            flagship: "Flagship Products",
            custom: "Custom Development",
          },
          placeholderName: "သင့်အမည်",
          placeholderEmail: "you@company.com",
          placeholderCompany: "ကုမ္ပဏီ သို့မဟုတ် အဖွဲ့အစည်း",
          placeholderMessage:
            "သင့်ရည်မှန်းချက်၊ timeline သို့မဟုတ် ကြည့်လိုသော demo အကြောင်းကို ပြောပြပါ။",
          unknownProduct: "မသေချာသေးပါ",
          consent:
            "ပို့လိုက်ခြင်းအားဖြင့် သင့် inquiry အတွက် အီးမေးလ်ဖြင့် ပြန်လည်ဆက်သွယ်နိုင်ကြောင်း သဘောတူပါသည်။",
          sending: "ပို့နေသည်...",
          send: "ပို့မည်",
          intents: {
            general: "အထွေထွေ inquiry",
            demo: "Demo တောင်းဆိုရန်",
            consultation: "အကြံပေး ချိန်းဆိုရန်",
            partnership: "ပူးပေါင်းဆောင်ရွက်မှု",
          },
        },
      },
      blog: {
        title: "ဘလော့",
        heroTitle: "ယုံကြည်စိတ်ချရသော software များ တည်ဆောက်ခြင်းအကြောင်း မှတ်စုများ။",
        heroDescription:
          "Retail systems, property platforms, student software နှင့် product craft အကြောင်း လက်တွေ့ရေးသားချက်များ။",
        read: "ဖတ်ရန်",
      },
      productDetail: {
        breadcrumbHome: "ပင်မ",
        breadcrumbProducts: "ထုတ်ကုန်များ",
        eyebrow: "ApexOne Product",
        talkToSales: "sales နှင့် ဆက်သွယ်ရန်",
        builtForOps: "နေ့စဉ်လုပ်ငန်းလည်ပတ်မှုအတွက်",
        ready: "သင့်အဖွဲ့ အသင့်ဖြစ်သည့်အချိန်တွင် အဆင်သင့်ရှိသည်။",
        readyDescription:
          "Generic slide deck မဟုတ်ဘဲ သင့် workflow အတွက် သင့်လျော်သော live walkthrough ကို တောင်းဆိုနိုင်ပါသည်။",
        featuresCount: "Features",
        demoLabel: "Demo",
        demoValue: "Live",
        overview: "ဤထုတ်ကုန်အကြောင်း",
        keyFeatures: "အဓိက features များ",
        moreFromApex: "ApexOne မှ နောက်ထပ်",
        viewDetails: "အသေးစိတ်ကြည့်ရန်",
        requestDemo: "Demo တောင်းဆိုရန်",
        notFound: "ထုတ်ကုန် မတွေ့ပါ",
      },
      blogDetail: {
        breadcrumbHome: "ပင်မ",
        breadcrumbBlog: "ဘလော့",
        eyebrow: "Insights",
        ctaTitle: "သင့်အဖွဲ့အတွက် တစ်ခုခု တည်ဆောက်လိုပါသလား?",
        ctaDescription:
          "သင့် product ရည်မှန်းချက်ကို ပြောပြပါ။ ရှင်းလင်းသော နောက်တစ်ဆင့်ဖြင့် ပြန်လည်ဖြေကြားပါမည်။",
        ctaButton: "အကြံပေး ချိန်းဆိုရန်",
        keepReading: "ဆက်ဖတ်ရန်",
        readArticle: "ဆောင်းပါးဖတ်ရန်",
        notFound: "ဆောင်းပါး မတွေ့ပါ",
      },
      notFound: {
        title: "ဒီစာမျက်နှာ မရှိတော့ပါ။",
        description:
          "Link ဟောင်းနေခြင်း သို့မဟုတ် စာမျက်နှာ မထုတ်ဝေသေးခြင်း ဖြစ်နိုင်ပါသည်။ အသုံးဝင်သောတစ်ခုသို့ ပြန်သွားကြရအောင်။",
        backHome: "ပင်မသို့ ပြန်ရန်",
        browseProducts: "ထုတ်ကုန်များ ကြည့်ရန်",
        contact: "ဆက်သွယ်ရန်",
        services: "ဝန်ဆောင်မှုများ",
        servicesHint: "ကျွန်ုပ်တို့ ဘယ်လိုကူညီသလဲ",
        blog: "ဘလော့",
        blogHint: "Product insights",
        requestDemo: "Demo တောင်းဆိုရန်",
        requestDemoHint: "Walkthrough ကြည့်ရန်",
      },
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}
