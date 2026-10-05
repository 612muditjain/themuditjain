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
    "Flutter Developer with 2+ years of experience building and shipping 12+ production-grade mobile applications across CRM, ERP, EdTech, travel/booking, donation, media and e-commerce domains. Skilled in state management (BLoC, Riverpod, GetX, Provider), REST API integration, third-party SDKs (Agora, Razorpay, Firebase, OneSignal) and native Android development in Kotlin.",
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
      value: "2+",
      label: "Years Experience",
      sublabel: "Professional Mobile Engineering",
    },
    {
      value: "Android + iOS",
      label: "Store Releases",
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
