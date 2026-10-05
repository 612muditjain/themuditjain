export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface TechStackItem {
  name: string;
  category: string;
  level?: string;
  highlight?: boolean;
  color?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "mobile",
    title: "Mobile Development",
    description: "Cross-platform Flutter (Android & iOS), Native Android (Kotlin), and Platform Channels architecture.",
    skills: ["Flutter (Android & iOS)", "Native Android (Kotlin)", "Platform Channels", "Cross-Platform Development"],
    icon: "Smartphone",
  },
  {
    id: "state",
    title: "State Management",
    description: "Reactive, modular, and maintainable state architectures across production codebases.",
    skills: ["BLoC", "Riverpod", "GetX", "Provider"],
    icon: "Layers",
  },
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core languages for mobile, script pipelines, and modern web application logic.",
    skills: ["Dart", "Kotlin", "JavaScript", "HTML", "CSS"],
    icon: "Code2",
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description: "RESTful server communication, session security, and role-based token authentication.",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    icon: "Server",
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description: "Cloud database architectures and high-speed on-device persistent cache systems.",
    skills: ["Firebase (Firestore, Realtime DB, Auth)", "Supabase", "MongoDB", "SQLite (sqflite)", "Hive"],
    icon: "Database",
  },
  {
    id: "integrations",
    title: "Third-Party SDKs & Integrations",
    description: "Real-time calling, checkout gateways, push alerts, mapping, charts, and media capture.",
    skills: [
      "Agora SDK (audio/video)",
      "Razorpay (payments)",
      "OneSignal & FCM",
      "Google Maps & Sign-In",
      "OkHttp / Retrofit",
      "MediaRecorder API",
      "fl_chart",
      "PDF generation",
    ],
    icon: "Cpu",
  },
  {
    id: "deployment",
    title: "App Deployment & Store Management",
    description: "End-to-end publishing lifecycle across Google Play and Apple App Store ecosystems.",
    skills: ["Google Play Console", "Apple App Store Connect", "TestFlight", "Provisioning Profiles & Certificates"],
    icon: "UploadCloud",
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    description: "Industry-standard developer workflows, API debugging, IDEs, and cloud services.",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Android Studio", "Xcode", "AWS"],
    icon: "Wrench",
  },
];

export const techStackItems: TechStackItem[] = [
  { name: "Flutter", category: "Android & iOS", highlight: true, color: "#02569B" },
  { name: "Dart", category: "Language", highlight: true, color: "#0175C2" },
  { name: "Kotlin", category: "Native Android", highlight: true, color: "#7F52FF" },
  { name: "BLoC", category: "State Management", highlight: true, color: "#00BCD4" },
  { name: "Riverpod", category: "State Management", highlight: true, color: "#2E86DE" },
  { name: "GetX", category: "State Management", color: "#9B59B6" },
  { name: "Node.js", category: "Backend Runtime", color: "#68A063" },
  { name: "Firebase", category: "Firestore & Auth", color: "#FFCA28" },
  { name: "Supabase", category: "Backend & DB", color: "#3ECF8E" },
  { name: "MongoDB", category: "Database", color: "#47A248" },
  { name: "Agora SDK", category: "RTC Video/Voice", color: "#099DFD" },
  { name: "Razorpay", category: "Payment Gateway", color: "#0C2340" },
  { name: "OneSignal", category: "Push Notifications", color: "#E54B4D" },
  { name: "Google Play", category: "Deployment", color: "#3DDC84" },
  { name: "App Store", category: "Deployment", color: "#FFFFFF" },
  { name: "AWS", category: "Cloud & Storage", color: "#FF9900" },
];
