export interface Profile {
  name: string;
  initials: string;
  title: string;
  specialization: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  positioning: string;
  heroBadge: string;
  heroHeading: string;
  heroDescription: string;
  stats: {
    value: string;
    label: string;
    sublabel: string;
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    specialization?: string;
  }[];
}

export const profileData: Profile = {
  name: "Mudit Jain",
  initials: "MJ",
  title: "Flutter Developer (Android & iOS)",
  specialization: "Android & iOS • Flutter • Kotlin • Mobile Architecture",
  location: "Bhilwara, Rajasthan, India",
  email: "m.sethia465@gmail.com",
  phone: "+91-9314706789",
  linkedin: "https://linkedin.com/in/muditjain612",
  github: "https://github.com/612muditjain",
  positioning:
    "Flutter Developer experienced in designing, developing, and deploying 12+ production-grade mobile applications across CRM, ERP, EdTech, travel and booking, donation, media, and e-commerce domains. Proficient in Flutter, Dart, state management (BLoC, Riverpod, GetX, and Provider), REST API integration, and third-party SDKs including Firebase, Agora, Razorpay, and OneSignal. Hands-on experience in native Android development using Kotlin, including background call recording implementation for Android 10–14. Skilled in end-to-end application development, performance optimization, debugging, and release management across Google Play Console and Apple App Store Connect. MCA graduate specializing in Cloud Computing and Full Stack Development.",
  heroBadge: "FLUTTER DEVELOPER • ANDROID • iOS",
  heroHeading: "Building Mobile Experiences That People Love to Use.",
  heroDescription:
    "I build production-ready Android and iOS applications with Flutter, Kotlin, scalable architecture, and modern backend integrations.",
  stats: [
    {
      value: "12+",
      label: "Production Apps",
      sublabel: "Shipped Across Domains",
    },
    {
      value: "Full-Cycle",
      label: "Mobile Engineering",
      sublabel: "Architecture to Store Deployment",
    },
    {
      value: "3 Apps",
      label: "Dual-Store Releases",
      sublabel: "Google Play & App Store Connect",
    },
    {
      value: "60%",
      label: "Overhead Reduction",
      sublabel: "Automated Workflows & Systems",
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "JECRC University",
      period: "2023 – 2025",
      specialization: "Cloud Computing & Full Stack Development",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "MDSU University",
      period: "2020 – 2023",
    },
  ],
};
