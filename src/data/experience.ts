export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  badge?: string;
  highlights: string[];
  technologies: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Fuel IT Online",
    role: "Flutter Developer",
    period: "October 2026 – Present",
    badge: "Current Role",
    highlights: [
      "Developing and publishing cross-platform Flutter applications for Android and iOS, including ERP, donation and travel booking apps, using modular architecture with Riverpod and BLoC.",
      "Integrating REST APIs and third-party SDKs such as Razorpay, Firebase, OneSignal and Google Maps into production applications.",
      "Managing full release lifecycle on Google Play Console and Apple App Store Connect, including app listings, compliance checks and post-publish support.",
    ],
    technologies: [
      "Flutter",
      "Riverpod",
      "BLoC",
      "Razorpay",
      "Firebase",
      "OneSignal",
      "Google Maps",
      "Google Play",
      "App Store",
    ],
  },
  {
    company: "CWL Technology Pvt. Ltd.",
    role: "Flutter Developer",
    period: "March 2026 – September 2026",
    badge: "Enterprise Client Delivery",
    highlights: [
      "Built cross-platform Flutter applications for Android and iOS with scalable, modular architecture using BLoC for enterprise clients.",
      "Developed a native Kotlin call recording module integrated with Flutter via Platform Channels, supporting background recording and automatic server upload.",
      "Integrated Node.js REST APIs, third-party SDKs and payment gateways into production mobile applications.",
      "Implemented background call recording using Kotlin Foreground Service and MediaRecorder API for Android 10-14 with automatic upload via OkHttp; applied device-specific fixes for Samsung Galaxy M-Series.",
      "Published Time-Sey Matrimonial & Lead Management app on Android and iOS, owning the end-to-end release including provisioning profiles.",
      "Collaborated with backend teams to ensure seamless data flow, real-time updates and performance optimization.",
    ],
    technologies: [
      "Flutter",
      "Kotlin",
      "BLoC",
      "Platform Channels",
      "MediaRecorder",
      "Node.js",
      "Payment Gateways",
      "REST APIs",
    ],
  },
  {
    company: "Imperial Milestones",
    role: "Flutter Developer",
    period: "January 2025 – February 2026",
    badge: "Multi-App Deployment",
    highlights: [
      "Engineered and deployed 4+ production-ready Flutter applications on Google Play Console and Apple App Store Connect.",
      "Developed CRM lead management, role-based authentication with JWT, real-time dashboards using fl_chart and automated PDF generation.",
      "Built booking systems and School ERP modules, reducing manual processing time by 60%; improved UI rendering performance by 25-30% through widget optimization and profiling.",
      "Worked in an Agile/Scrum environment with Git workflows and code reviews.",
    ],
    technologies: [
      "Flutter",
      "fl_chart",
      "JWT",
      "PDF Generation",
      "Google Play",
      "App Store Connect",
      "Agile",
    ],
  },
];
