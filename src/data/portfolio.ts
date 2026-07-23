export const profile = {
  name: "Thit Lwin",
  title: "Senior Software Engineer",
  tagline:
    "12+ years building and shipping software — mobile, web, and backend — from architecture and clean code through release and production support.",
  location: "Mandalay, Myanmar",
  address: [
    "Room(7), MM25, Building 5, MyaYeeNandar Housing",
    "Chanmyatharsi Township, Mandalay, 05041",
  ],
  email: "saithitlwin@gmail.com",
  phone: "+959256130323",
  skype: "saithitlwin",
  about:
    "Senior Software Engineer with 12+ years of software development experience, including 6+ years specializing in native Android. Deep expertise in Kotlin, Jetpack Compose, MVVM, Clean Architecture, and shipping production apps end to end — architecture, CI/CD, store releases, and post-release optimization. Also experienced across Flutter and fullstack delivery when products need web and backend support.",
  links: {
    email: "mailto:saithitlwin@gmail.com",
    linkedin: "https://www.linkedin.com/in/thit-lwin/",
    telegram: "https://t.me/+959256130323",
    whatsapp: "https://wa.me/959256130323",
    cv: "/Thit-Lwin-CV.pdf",
    github: "https://thitlwin.github.io/",
  },
};

export const experience = [
  {
    role: "Senior Flutter Developer",
    company: "JOY Detox & Healthy Meal Distribution Co.Ltd",
    location: "Myanmar (Remote)",
    period: "Jan 2024 – Present",
    highlights: [
      "Owned the full lifecycle of a production Flutter app (iOS & Android) with subscription meal plans, ecommerce-like ordering, and real-time support.",
      "Designed modular architecture with Riverpod for maintainability and faster feature delivery.",
      "Built real-time chat with Firebase for low-latency customer–coach communication.",
      "Implemented CI/CD with Fastlane + GitHub Actions for App Store & Play Store deployment.",
      "Diagnosed production crashes, performance bottlenecks, and API failures to keep the app stable.",
    ],
    tech: ["Dart", "Flutter", "Riverpod", "Firebase", "Fastlane", "GitHub Actions"],
  },
  {
    role: "Android Developer",
    company: "Zuju Gameplay PTE. Ltd",
    location: "Singapore (Remote)",
    period: "Apr 2023 – Dec 2023",
    highlights: [
      "Built scalable features for a live sports gameplay app focused on real-time interaction and performance.",
      "Applied MVVM and clean API integration for maintainable, testable modules.",
      "Shipped unit-tested modules that reduced regressions.",
      "Used Android & Rive animation libraries for smooth, interactive motion.",
    ],
    tech: ["Kotlin", "MVVM", "Retrofit", "GraphQL", "AWS AppSync", "Rive", "JUnit", "Espresso"],
  },
  {
    role: "Android Developer",
    company: "Digital Services SG Six PTE. Ltd",
    location: "Singapore (Remote)",
    period: "Jan 2022 – Apr 2023",
    highlights: [
      "Delivered features for B2B apps Tinvio and Jaz Accounting — ordering and business workflows.",
      "Migrated legacy MVP architecture to MVVM for better scalability.",
      "Collaborated with design, backend, and product to ship reliably.",
      "Maintained automated tests to protect against regressions.",
    ],
    tech: ["Kotlin", "MVVM", "Retrofit", "GraphQL", "Coroutines", "JUnit"],
  },
  {
    role: "Senior Software Engineer (Android & Flutter)",
    company: "Twinrock PTE. Ltd",
    location: "Singapore (Remote)",
    period: "Feb 2019 – Nov 2021",
    highlights: [
      "Contributed to mobile and web system planning alongside the CTO.",
      "Built Flutter apps with Bloc and GetX for complex state flows.",
      "Led sprint planning across mobile and web teams.",
      "Managed App Store & Play Store releases and mentored developers through reviews.",
    ],
    tech: ["Java", "Kotlin", "Flutter", "Dart", "Bloc", "GetX", "MVP"],
  },
  {
    role: "Project Manager, Web & Android Developer",
    company: "Bits Manager Co., Ltd",
    location: "Myanmar",
    period: "Apr 2014 – Dec 2018",
    highlights: [
      "Led ecommerce apps covering ordering flows, payments, and backend coordination.",
      "Managed full-stack delivery across web (PHP, Node.js) and mobile.",
      "Oversaw hosting on AWS & DigitalOcean with a 95% on-time delivery rate.",
      "Balanced technical leadership with hands-on development.",
    ],
    tech: ["Java", "PHP", "Node.js", "AWS", "DigitalOcean", "Project Management"],
  },
];

export const projects = [
  {
    name: "JOY",
    description: "Detox & healthy meal app with subscriptions, ordering, and real-time chat support.",
    tech: ["Flutter", "Riverpod", "Firebase"],
    team: "Solo",
    links: {
      play: "https://play.google.com/store/apps/details?id=com.joy.detox_app",
      appStore: "https://apps.apple.com/th/app/joy-detox-healthy-meal/id6748552075",
    },
  },
  {
    name: "Tayarr",
    description: "Media player for Dhamma talks — Kotlin & Jetpack Compose with multi-module MVVM.",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Firebase"],
    team: "Solo",
    links: {
      play: "https://play.google.com/store/apps/details?id=com.thit.yawki",
    },
  },
  {
    name: "Jaz Accounting",
    description: "B2B accounting workflows built with Kotlin Flow and Coroutines.",
    tech: ["Kotlin", "Flow", "Coroutines"],
    team: "3 members",
    links: {
      play: "https://play.google.com/store/apps/details?id=com.tinvio.jaz",
    },
  },
  {
    name: "Victory MRCOG",
    description:
      "E-learning platform for obstetrics & gynaecology trainees — MRCOG courses, 500+ video lectures, progress tracking, and secure streaming.",
    tech: ["Flutter", "Video streaming", "Education"],
    team: "Solo",
    links: {
      play: "https://play.google.com/store/apps/details?id=com.victorymrcog.mrcog_mobile",
      appStore: "https://apps.apple.com/th/app/victory-mrcog/id6787036136",
    },
  },
];

export const skills = {
  Mobile: ["Android (Kotlin, Java)", "Jetpack Compose", "Flutter (Dart)", "iOS (Swift)", "React Native"],
  Architecture: ["MVVM", "Clean Architecture", "Multi-module", "Riverpod", "Bloc / GetX"],
  Backend: ["Firebase", "Supabase", "REST", "GraphQL", "AWS AppSync"],
  Web: ["Next.js", "Node.js", "PHP (Laravel)", "Spring Boot", "Python (Django)"],
  Delivery: ["CI/CD", "Fastlane", "GitHub Actions", "Play Store", "App Store"],
  Leadership: ["Project Management", "Mentoring", "Sprint Planning", "Agile"],
};

export const education = [
  {
    title: "Master of Computer Science (M.C.Sc)",
    org: "University of Computer Studies, Mandalay",
    year: "2016",
  },
  {
    title: "B.C.Sc (Hons.)",
    org: "University of Computer Studies, Mandalay",
    year: "2012",
  },
  {
    title: "Project Management Professional (PMP)",
    org: "PMBOK® Guide – Sixth Edition",
    year: "2018",
  },
  {
    title: "Mobile App Training Program",
    org: "Samsung Tech Institute, Myanmar",
    year: "2014",
  },
  {
    title: "Software Engineering Training Course",
    org: "ICT Training Institute, Myanmar",
    year: "2014",
  },
];

export const awards = [
  {
    title: "First Runner Up",
    org: "Samsung Tech Institute Mobile App Training Programme",
    detail: "Money changer application for Android",
  },
  {
    title: "Third Workshop Outstanding",
    org: "ICT Training Institute (ICTTI), Yangon",
    detail: "Online library management web application",
  },
];
