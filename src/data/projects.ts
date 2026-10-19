export interface PlayStoreLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  status: string;
  badge?: string;
  platform: string;
  technologies: string[];
  shortDescription: string;
  fullDescription: string;
  keyHighlights: string[];
  impact?: string;
  architectureNotes?: string;
  playStoreUrl?: string;
  playStoreLinks?: PlayStoreLink[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  previewInsights?: {
    label: string;
    value: string;
  }[];
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "calltrack-pro",
    number: "01",
    title: "CallTrack Pro",
    category: "Native Android Call Recording SDK",
    status: "Core Native Android SDK",
    badge: "Native Android & Kotlin Innovation",
    platform: "Android (Kotlin) • Flutter Platform Channels",
    technologies: ["Kotlin", "Flutter", "MediaRecorder", "OkHttp", "Foreground Service", "SQLite"],
    shortDescription:
      "A production-grade native Android call recording solution integrated with Flutter via bi-directional Platform Channels with automatic cloud upload.",
    fullDescription:
      "Implemented MediaRecorder with VOICE_COMMUNICATION source and dynamic AMR_NB/AAC fallback strategy based on device manufacturer and Android version. Added automatic server upload via OkHttp multipart POST with retry logic, metadata tagging, and SQLite caching on failure. Handled runtime permissions across Android 10-14 and solved OEM-specific hardware hurdles for Samsung Galaxy M-Series.",
    keyHighlights: [
      "MediaRecorder with VOICE_COMMUNICATION source & AMR_NB/AAC fallback strategy",
      "Automatic server upload via OkHttp multipart POST with exponential retry logic",
      "Metadata tagging (duration, timestamp, phone number) & SQLite caching on failure",
      "Full runtime permission orchestration across Android 10-14 & Samsung M-Series fixes",
    ],
    impact: "99.4% recording success rate across fragmented Android OEM hardware",
    architectureNotes:
      "Flutter MethodChannel & EventChannel ⟷ Kotlin Plugin Service ⟷ Telephony BroadcastReceiver ⟷ MediaRecorder Engine ⟷ SQLite Buffer ⟷ OkHttp Background Uploader",
    codeSnippet: {
      language: "kotlin",
      filename: "CallRecorderService.kt",
      code: `class CallRecorderService : Service() {
    private var mediaRecorder: MediaRecorder? = null
    private val dbHelper by lazy { LocalCallDatabase(applicationContext) }

    fun startRecording(phoneNumber: String, callType: String) {
        val outputFile = File(cacheDir, "rec_\${System.currentTimeMillis()}.m4a")
        mediaRecorder = MediaRecorder().apply {
            // Adaptive audio source fallback: VOICE_COMMUNICATION -> MIC
            try {
                setAudioSource(MediaRecorder.AudioSource.VOICE_COMMUNICATION)
            } catch (e: Exception) {
                setAudioSource(MediaRecorder.AudioSource.MIC)
            }
            setOutputFormat(MediaRecorder.OutputFormat.MPEG_4)
            setAudioEncoder(MediaRecorder.AudioEncoder.AAC)
            setOutputFile(outputFile.absolutePath)
            prepare()
            start()
        }
        dbHelper.insertPendingUpload(phoneNumber, outputFile.absolutePath)
    }
}`,
    },
    previewInsights: [
      { label: "Samsung M-Series Fallback", value: "Active (AMR_NB/AAC)" },
      { label: "OkHttp Retry Buffer", value: "SQLite Cached (Offline Safe)" },
      { label: "Reliability Rate", value: "99.4% Across OEMs" },
    ],
    featured: true,
  },
  {
    id: "donslip",
    number: "02",
    title: "Donslip",
    category: "Donation Application",
    status: "Published: Android & iOS",
    badge: "Published: Android & iOS",
    platform: "Google Play Store & Apple App Store",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.donslip.android&hl=en_IN",
    technologies: ["Flutter", "REST APIs", "App Store Connect", "Provisioning Profiles"],
    shortDescription:
      "Developed and published a donation platform on Google Play Store and Apple App Store, enabling users to contribute to causes through a simple, secure flow.",
    fullDescription:
      "Engineered the full donation platform on both Google Play Store and Apple App Store. Handled iOS-specific configuration including App Store Connect setup, provisioning profiles, certificate signing, and platform-specific UI adjustments for a frictionless giving experience.",
    keyHighlights: [
      "Published on Google Play Store and Apple App Store with full lifecycle management",
      "Simple, secure donation checkout flow with real-time transaction receipts",
      "Complete iOS configuration: App Store Connect, certificates & provisioning profiles",
      "Adaptive platform-specific UI components respecting iOS Human Interface & Material 3",
    ],
    impact: "Dual-store published live application with seamless contribution workflow",
    previewInsights: [
      { label: "Deployment Scope", value: "Google Play & App Store (Dual Store)" },
      { label: "iOS Architecture", value: "Provisioning & Store Connect" },
      { label: "Checkout Flow", value: "Simple & Secure Giving Flow" },
    ],
    featured: true,
  },
  {
    id: "time-sey",
    number: "03",
    title: "Time-Sey (Secret Secretary)",
    category: "Matrimonial & Lead CRM Platform",
    status: "Published: Android & iOS",
    badge: "Published: Android & iOS (Dual Apps)",
    platform: "Google Play Store & Apple App Store",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.secretsecretaryuser.app&hl=en_IN",
    playStoreLinks: [
      {
        label: "User App (Google Play)",
        url: "https://play.google.com/store/apps/details?id=com.secretsecretaryuser.app&hl=en_IN",
      },
      {
        label: "Partner App (Google Play)",
        url: "https://play.google.com/store/apps/details?id=com.secretseceratary.app&hl=en_IN",
      },
    ],
    technologies: ["Flutter", "Node.js", "GetX", "Razorpay", "OneSignal"],
    shortDescription:
      "Published dual applications on both Google Play and Apple App Store (User App & Partner App) with matchmaking algorithms and business lead pipelines.",
    fullDescription:
      "Built matrimonial matchmaking and business lead management modules across a multi-app ecosystem (User App and Partner/Secretary App). Integrated OneSignal push notifications and Razorpay payments. Owned the end-to-end release lifecycle including certificates and provisioning profiles on both stores.",
    keyHighlights: [
      "Dual-app architecture published on Google Play and Apple App Store (User & Partner apps)",
      "Built matrimonial matchmaking algorithms and business lead management modules",
      "Integrated OneSignal push notifications and Razorpay payment checkout flow",
      "Managed end-to-end release lifecycle including provisioning profiles and certificates",
    ],
    impact: "Dual-store published live production suite serving matchmaking and partner lead workflows",
    previewInsights: [
      { label: "Dual Ecosystem", value: "User App + Partner App" },
      { label: "Store Status", value: "Live on Android & iOS" },
      { label: "Payment Gateway", value: "Razorpay Checkout & Webhooks" },
    ],
    featured: true,
  },
  {
    id: "yumantra",
    number: "04",
    title: "YuMantra",
    category: "Astrology, Kundli & Horoscope Platform",
    status: "Published: Google Play Store",
    badge: "Published: Google Play Store",
    platform: "Google Play Store (Android)",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.yumantra.android&hl=en_IN",
    technologies: ["Flutter", "Dart", "REST APIs", "Node.js", "Payment Gateway"],
    shortDescription:
      "Published an astrology and horoscope mobile app featuring personalized reports, Kundli generation, and birth chart evaluations.",
    fullDescription:
      "Engineered and published YuMantra on the Google Play Store to provide personalized astrology-based guidance, daily horoscopes, Kundli generation, and Vedic birth chart breakdowns. Built intuitive UI components for complex astrological charts, compatibility reports, and seamless consultation booking flows.",
    keyHighlights: [
      "Published on Google Play Store with responsive, astrology-themed UI architecture",
      "Personalized horoscope engine, Kundli generation, and planetary alignment evaluations",
      "In-depth birth charts and compatibility reports based on user birth details",
      "Optimized rendering performance for complex zodiac visuals and chart layouts",
    ],
    impact: "Live Google Play Store astrology app delivering personalized spiritual insights",
    previewInsights: [
      { label: "Store Status", value: "Published on Google Play" },
      { label: "Astrology Engine", value: "Kundli & Vedic Charts" },
      { label: "Architecture", value: "Modular Flutter Client" },
    ],
    featured: true,
  },
  {
    id: "go4explore",
    number: "05",
    title: "Go4Explore",
    category: "Tour & Travel Booking Application",
    status: "Published: Google Play Store",
    badge: "Published: Google Play Store",
    platform: "Google Play Store (Android)",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.go4explore.android&hl=en_IN",
    technologies: ["Flutter", "Node.js", "Supabase", "Riverpod", "Payment Gateway"],
    shortDescription:
      "Developed and published a travel app with destination discovery, package/tour listings, and an end-to-end trip booking system.",
    fullDescription:
      "Developed and published a travel app on Google Play Store featuring destination discovery, package/tour listings, and an end-to-end trip booking system. Built day-wise itinerary browsing, booking management, and payment gateway integration using Riverpod for scalable state management.",
    keyHighlights: [
      "Published on Google Play Store with real-time tour inventory sync",
      "Built destination discovery, curated tour packages, and seamless booking workflow",
      "Interactive day-wise itinerary browsing and post-booking trip management",
      "Engineered with Riverpod for scalable, reactive state management and Supabase sync",
    ],
    impact: "Live Google Play travel booking application with high user engagement",
    previewInsights: [
      { label: "Store Status", value: "Published on Google Play" },
      { label: "Inventory Sync", value: "Supabase Real-Time DB" },
      { label: "State Architecture", value: "Riverpod Reactive Models" },
    ],
    featured: true,
  },
  {
    id: "multiverse",
    number: "06",
    title: "Multiverse",
    category: "CRM & Workforce Mobile App",
    status: "Published: Google Play Store",
    badge: "Published: Google Play Store • +40% Sales Efficiency",
    platform: "Google Play Store (Android)",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.imperialmilestone.multiverse&hl=en_IN",
    technologies: ["Flutter", "Kotlin", "Node.js", "MongoDB", "Hive", "AWS", "fl_chart"],
    shortDescription:
      "Published an all-in-one CRM, HRM and LMS app with lead management, location-based attendance and analytics dashboards using fl_chart, improving sales team efficiency by 40%.",
    fullDescription:
      "Consolidated CRM leads, HRM attendance, and corporate LMS training into a unified mobile client on Google Play Store. Used Hive for offline caching of leads and attendance data in low-connectivity areas, with location-based attendance tracking and analytical dashboards powered by fl_chart.",
    keyHighlights: [
      "Published on Google Play Store for enterprise mobility and field operations",
      "All-in-one CRM, HRM, and LMS mobility suite improving sales team efficiency by 40%",
      "Geofenced location-based attendance logging and real-time validation",
      "Dynamic analytical dashboards built with fl_chart and pipeline insights",
      "Hive local database for high-speed offline caching in remote areas",
    ],
    impact: "40% improvement in sales team efficiency and real-time field operations",
    previewInsights: [
      { label: "Operational Suite", value: "CRM + HRM + LMS Unified" },
      { label: "Store Status", value: "Published on Google Play" },
      { label: "Field Caching", value: "Hive Offline Persistence" },
    ],
    featured: true,
  },
  {
    id: "shiksha-suite",
    number: "07",
    title: "Shiksha One & Shiksha Connect",
    category: "School ERP Suite",
    status: "Published: Google Play Store",
    badge: "Published: Google Play Store • 1,000+ DAU",
    platform: "Google Play Store (Android)",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.imperialmilestone.shikshaone&hl=en_IN",
    playStoreLinks: [
      {
        label: "Shiksha One (School ERP)",
        url: "https://play.google.com/store/apps/details?id=com.imperialmilestone.shikshaone&hl=en_IN",
      },
      {
        label: "Shiksha Connect (Parent & Student)",
        url: "https://play.google.com/store/apps/details?id=com.imperialmilestone.shikshaconnect&hl=en_IN",
      },
    ],
    technologies: ["Flutter", "Node.js", "MongoDB", "JWT", "PDF Generation"],
    shortDescription:
      "Published School ERP suite on Google Play Store with portals for students, parents, admins, staff and teachers, serving 1,000+ daily active users and reducing admin overhead by 60%.",
    fullDescription:
      "Engineered comprehensive multi-portal architecture published on Google Play (Shiksha One and Shiksha Connect). Implemented role-based JWT authentication, daily digital attendance tracking, and automated student fee management with digital PDF receipts.",
    keyHighlights: [
      "Published on Google Play Store across two specialized companion apps",
      "Served 1,000+ daily active users with 5 dedicated user role portals",
      "Reduced administrative processing time and operational overhead by 60%",
      "Automated fee collection pipeline with instant client/server PDF receipts",
    ],
    impact: "1,000+ daily active users and 60% reduction in administrative overhead",
    previewInsights: [
      { label: "User Portals", value: "5 Dedicated Guarded Roles" },
      { label: "Receipt Engine", value: "Automated PDF Generation" },
      { label: "Admin Impact", value: "1,000+ DAU • -60% Overhead" },
    ],
    featured: false,
  },
  {
    id: "inventoryverse",
    number: "08",
    title: "InventoryVerse",
    category: "ERP Application",
    status: "Published: Google Play Store",
    badge: "Published: Google Play Store",
    platform: "Google Play Store (Android)",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.imperialmilestone.inventory_app&hl=en_IN",
    technologies: ["Flutter", "REST APIs", "Modular Architecture", "Google Play"],
    shortDescription:
      "Built and published an ERP-based mobile app for managing inventory and business operations with a clean, modular architecture.",
    fullDescription:
      "Built and published an ERP mobile application on Google Play Store for comprehensive inventory management and warehouse operations. Integrated backend REST APIs for real-time stock levels, orders, and structured business workflows across company departments.",
    keyHighlights: [
      "Published on Google Play Store with clean, modular architecture",
      "Complete inventory catalog, stock movement logging, and order tracking",
      "Integrated backend REST APIs for real-time data sync and structured workflows",
      "Designed for rapid operational scans, low memory overhead, and reliability",
    ],
    impact: "Live Google Play Store ERP app streamlining stock management workflows",
    previewInsights: [
      { label: "Store Status", value: "Published on Google Play" },
      { label: "Architecture", value: "Clean Modular Structure" },
      { label: "Data Pipeline", value: "Real-Time REST APIs" },
    ],
    featured: false,
  },
  {
    id: "holidaywaale",
    number: "09",
    title: "HolidayWaale",
    category: "Trip & Tour Booking App",
    status: "Published: Google Play Store",
    badge: "Published: Google Play Store",
    platform: "Google Play Store (Android)",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.imperialmilestone.holidaywaale&hl=en_IN",
    technologies: ["Flutter", "Node.js", "MongoDB", "Google Play"],
    shortDescription:
      "Published a production app with destination search and filtering, booking forms, a review and rating system, and dark/light theme support.",
    fullDescription:
      "Published on Google Play Store to provide leisure travelers with intuitive destination search and filtering, customizable booking forms, verified customer review and rating mechanisms, and native dark/light theme syncing.",
    keyHighlights: [
      "Published production app on Google Play Store with MongoDB backend",
      "Destination search with price, duration, and theme filters",
      "Verified customer review and photo rating system",
      "Polished dark and light themes matching Android system settings",
    ],
    impact: "Successfully published leisure booking mobile application on Google Play",
    previewInsights: [
      { label: "Store Status", value: "Published on Google Play" },
      { label: "Theme Adaptation", value: "Native Dark & Light Modes" },
      { label: "Search Engine", value: "Dynamic Filtering & Forms" },
    ],
    featured: false,
  },
  {
    id: "buddly",
    number: "10",
    title: "Buddly",
    category: "Real-Time Consultation & Calling Platform",
    status: "Production Ready",
    badge: "Agora RTC Video/Voice",
    platform: "Android & iOS",
    technologies: ["Flutter", "Node.js", "Agora SDK", "Razorpay", "Provider"],
    shortDescription:
      "Developed one-on-one expert sessions with Agora SDK-powered audio/video calling and a dual-role architecture (User and Expert panels).",
    fullDescription:
      "Connected users with verified mentors and experts through low-latency audio/video calling powered by Agora SDK. Built an in-app wallet with Razorpay for session bookings, balance top-ups, and automated expert payouts, plus calendar session scheduling.",
    keyHighlights: [
      "Real-time 1-on-1 audio/video calling sessions powered by Agora RTC SDK",
      "Dual-role architecture with tailored panels for Users and Verified Experts",
      "In-app wallet system with automated Razorpay top-ups and expert payouts",
      "Session scheduling, booking calendar sync, and call duration billing",
    ],
    impact: "Low-latency RTC audio/video communication with in-app wallet monetization",
    previewInsights: [
      { label: "Agora Engine", value: "Low-Latency RTC Channel" },
      { label: "Wallet & Billing", value: "In-App Razorpay Wallet" },
      { label: "Role Architecture", value: "Dual User & Expert Panels" },
    ],
    featured: false,
  },
  {
    id: "5wh-newsroom",
    number: "11",
    title: "5WH Virtual Newsroom",
    category: "Media & News Trading Platform",
    status: "Production Ready",
    badge: "Media Trading Platform",
    platform: "Android & iOS",
    technologies: ["Flutter", "Node.js", "GetX", "REST APIs"],
    shortDescription:
      "Built a newsroom platform where verified journalists and media houses trade multi-format content (articles, images, audio, video) through REST APIs.",
    fullDescription:
      "Facilitated decentralized trading of breaking and investigative news. Journalists upload multi-format assets (articles, high-res images, audio recordings, video clips), and media organizations license rights through secure REST API endpoints with role-based access control.",
    keyHighlights: [
      "Multi-format media content trading: Articles, Images, Audio, and Video",
      "Verified editorial workflows with watermark protection preview mode",
      "Granular role-based publishing access for journalists and news agencies",
      "Snappy UI rendering and streaming story feeds implemented with GetX",
    ],
    impact: "Decentralized news licensing pipeline with rapid multi-format media delivery",
    previewInsights: [
      { label: "Content Formats", value: "Articles, Images, Audio & Video" },
      { label: "Licensing System", value: "Role-Based Publishing Access" },
      { label: "State Architecture", value: "GetX Reactive Feeds" },
    ],
    featured: false,
  },
];
