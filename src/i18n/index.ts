import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const en = {
  translation: {
    common: {
      loading: "Loading...",
      error: "Error",
      reset: "Reset",
      submit: "Submit",
      cancel: "Cancel",
      back: "Back",
      retry: "Retry",
      progress: "Progress",
      chooseFile: "Choose File",
      camera: "Camera",
      dragDrop: "Drag & drop an image or video here",
      viewLiveTracking: "View Live Tracking",
      play: "Play",
      pause: "Pause",
      resume: "Resume",
      stop: "Stop",
      preview: "Preview",
      remove: "Remove",
    },
    navbar: {
      home: "Home",
      report: "Report Issue",
      map: "Live Map",
      dashboard: "Dashboard",
      myReports: "My Reports",
      login: "Sign in with Google",
      logout: "Logout",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      copyright: "© {{year}} Community Hero. All rights reserved.",
    },
    landing: {
      hero: {
        eyebrow: "AI-Powered Civic Intelligence Platform",
        tagline: "One Report. Six AI Agents. One Stronger Community.",
        headline: {
          before: "When neighbors speak up, ",
          highlight: "communities transform.",
        },
        description: "Community Hero turns a single photo and voice note into a verified, prioritized, trackable civic action—so every report reaches the right authority and every resident stays informed.",
        ctas: {
          primary: "Report an Issue",
          secondary: "Explore Live Map",
        },
        trust_badges: {
          "ai-powered": "AI Powered",
          "real-time": "Real-Time Tracking",
          "multilingual": "Multilingual Support",
        },
      },
      problem: {
        eyebrow: "The civic problem",
        title: "Reporting should connect people—not bury them in paperwork",
        description: "Most cities still run on forms, phone trees, and hope. Citizens report once, then hear nothing. Trust erodes. Issues pile up. Community Hero exists to close that gap.",
        cards: {
          "black-hole": {
            title: "Reports vanish into a black hole",
            description: "Citizens submit issues and never receive updates. Without visibility, people stop reporting—and problems grow unchecked.",
          },
          "no-accountability": {
            title: "No one owns the outcome",
            description: "Departments pass tickets between desks. Residents cannot see who is responsible or when work will begin.",
          },
          "language-barrier": {
            title: "Language locks people out",
            description: "Official portals assume English fluency and digital literacy, excluding the very communities that need help most.",
          },
          "slow-response": {
            title: "Urgency is invisible",
            description: "A pothole and a gas leak look the same in a spreadsheet. Without intelligent triage, critical issues wait in line.",
          },
        },
      },
      solution: {
        eyebrow: "The AI solution",
        title: "From one citizen report to community resolution",
        description: "Community Hero is an AI operating system for civic life. Every report flows through specialized agents that understand, validate, prioritize, and coordinate—then bring the community back into the loop.",
        flow: {
          citizen: {
            label: "Citizen",
            detail: "Snaps a photo, records a voice note, or taps a map pin",
          },
          agents: {
            label: "AI Agents",
            detail: "Six specialized agents analyze, verify, and route the report",
          },
          authorities: {
            label: "Authorities",
            detail: "Ward engineers and departments receive prioritized work orders",
          },
          community: {
            label: "Community",
            detail: "Neighbors track progress and verify fixes together",
          },
          resolution: {
            label: "Resolution",
            detail: "Issues close with proof—and trust is rebuilt block by block",
          },
        },
      },
      agents: {
        eyebrow: "AI agent pipeline",
        title: "Six agents. One coordinated workflow.",
        description: "Each agent owns a single responsibility. Together they transform raw citizen input into actionable intelligence—without a single line of hardcoded guesswork.",
        list: {
          vision: {
            title: "Vision Agent",
            responsibility: "Analyzes photos and visual evidence from citizen reports",
          },
          geo: {
            title: "Geo Agent",
            responsibility: "Maps issues to precise ward boundaries and landmarks",
          },
          trust: {
            title: "Trust Agent",
            responsibility: "Validates authenticity and flags duplicate or spam reports",
          },
          priority: {
            title: "Priority Agent",
            responsibility: "Ranks urgency and community impact for faster response",
          },
          prediction: {
            title: "Prediction Agent",
            responsibility: "Forecasts resolution timelines based on historical patterns",
          },
          copilot: {
            title: "Community Copilot",
            responsibility: "Guides citizens in their language and explains every step",
          },
        },
      },
      live_tracking: {
        eyebrow: "Live tracking preview",
        title: "Every report. Every status. In real time.",
        description: "Residents and officials share one transparent dashboard—so nobody has to call a helpline to ask what happened to their report.",
        sampleLabel: "Sample dashboard preview",
        labels: {
          engineerStatus: "Engineer Status",
          eta: "ETA",
          verification: "Community Verification",
          progress: "Progress",
        },
        issue: {
          category: "Road Repair",
          ward: "Ward 18",
          engineerStatus: "Engineer assigned — inspection complete",
          eta: "Estimated resolution: 4 days",
          verification: "3 of 5 neighbors verified on-site",
        },
      },
      twin: {
        eyebrow: "Community digital twin",
        title: "Your neighborhood, measured and understood",
        description: "AI synthesizes reports, resolutions, and community feedback into living health scores—giving leaders and residents a shared picture of civic wellbeing.",
        demoLabel: "AI-generated demo scores",
        scores: {
          infrastructure: {
            label: "Infrastructure",
            trend: "+3 this month",
          },
          safety: {
            label: "Safety",
            trend: "+5 this month",
          },
          cleanliness: {
            label: "Cleanliness",
            trend: "+2 this month",
          },
          water: {
            label: "Water",
            trend: "Stable",
          },
          health: {
            label: "Community Health",
            trend: "+4 this month",
          },
        },
      },
      google: {
        eyebrow: "Built on Google",
        title: "Powered by the platforms communities already trust",
        description: "Community Hero integrates Google technologies end-to-end—so intelligence, infrastructure, and insight scale together.",
        technologies: {
          "ai-studio": {
            title: "Google AI Studio",
            description: "Gemini powers every agent decision—from vision analysis to community copilot responses.",
          },
          firebase: {
            title: "Firebase",
            description: "Authentication, real-time data sync, and secure storage keep reports flowing instantly.",
          },
          maps: {
            title: "Google Maps",
            description: "Precise geolocation, ward mapping, and live issue pins connect reports to places.",
          },
          speech: {
            title: "Speech API",
            description: "Voice-to-text and text-to-speech let every resident report in the way that feels natural.",
          },
          translate: {
            title: "Google Translate",
            description: "Multilingual support ensures no neighbor is excluded because of language.",
          },
          analytics: {
            title: "Google Analytics",
            description: "Usage and impact metrics help cities measure what is working and where to invest.",
          },
        },
      },
      impact: {
        eyebrow: "Community impact",
        title: "The difference transparency makes",
        description: "When citizens see progress, they report more, volunteer more, and trust more. These numbers illustrate what becomes possible.",
        demoLabel: "Sample statistics for demonstration",
        stats: {
          solved: {
            label: "Issues Solved",
          },
          citizens: {
            label: "Citizens Helped",
          },
          volunteer: {
            label: "Volunteer Hours",
          },
          resolution: {
            label: "Resolution Rate",
          },
        },
      },
      final_cta: {
        title: "Ready to make an impact?",
        description: "Join your neighbors in building a cleaner, safer, and more responsive community today.",
        ctas: {
          primary: "Report an Issue",
          secondary: "Explore Live Map",
        },
      },
    },
    dashboard: {
      title: "Dashboard",
      subtitle: "Your civic impact",
      description: "Review your latest submissions, track status, and see how your reports are moving through the community process.",
      stats: {
        totalReports: "Total reports",
        pending: "Pending",
        assigned: "Assigned",
        inProgress: "In progress",
        resolved: "Resolved",
      },
      gamification: {
        levelProgress: "Progress to Next Level",
        pointsRequired: "{{points}} pts until {{level}}",
        dailyStreak: "Daily Streak",
        streakDays: "{{days}} Days",
        streakTip: "Log in daily to maintain your streak!",
        badgesEarned: "Badges Earned",
        badgesTip: "Unlock achievements to earn points!",
        cityRank: "City Rank",
        rankTip: "Your position on the global board",
        badgesTitle: "Civic Badges",
        badgesSubtitle: "Earn badges by contributing to community cleanups and report tracking.",
        pts: "pts",
        badge: "badge",
        badges: "badges",
      },
      leaderboard: {
        title: "City Leaderboard",
        subtitle: "Top 10 Heroes",
        empty: "No heroes on the board yet.",
        pts: "pts",
      },
      performance: {
        title: "Performance",
        description: "AI analysis metrics and priority distribution.",
        verifiedByAi: "Verified by AI",
        verifiedTip: "Reports containing AI analysis",
        highPriority: "High Priority",
        highPriorityTip: "Priority score ≥ 80",
        averagePriority: "Average Priority",
        averagePriorityTip: "Average score of AI reports",
        averageConfidence: "Average AI Confidence",
        averageConfidenceTip: "Confidence of AI processing",
      },
      recentReports: {
        title: "Recent reports",
        subtitle: "Latest issues submitted by you.",
        loading: "Loading your reports...",
        empty: "No reports found yet. Submit your first report to start tracking progress.",
      },
    },
    reportForm: {
      title: "Report a Civic Issue",
      description: "Upload an image or short video of the issue. Our AI will analyze the evidence and recommend the appropriate department.",
      uploadTitle: "Upload Evidence",
      uploadTip: "Supported formats: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "Description",
      descPlaceholder: "Describe the civic issue... (You can also speak by clicking the microphone button)",
      categoryLabel: "Category",
      locationStatus: "Location status",
      locationDetail: {
        waiting: "Waiting for browser permission...",
        denied: "Location permission denied. You can still submit without a detected location.",
        detected: "Location detected",
        requesting: "Requesting location...",
      },
      locationCard: {
        address: "Address",
        latitude: "Latitude",
        longitude: "Longitude",
        city: "City",
        region: "Region",
        accuracy: "Accuracy: {{accuracy}} meters",
      },
      buttons: {
        analyze: "Analyze with AI",
        analyzing: "Analyzing...",
        complete: "✓ AI Analysis Complete",
        submit: "Submit Report",
        submitting: "Submitting...",
        reset: "Reset",
      },
      speech: {
        start: "Start voice recording",
        stop: "Stop voice recording",
        unsupported: "Speech-to-Text is not supported by your browser.",
      },
    },
    reports: {
      title: "My Reports",
      subtitle: "Report history",
      description: "Browse every issue you submitted and check status updates from the community review process.",
      loading: "Loading your reports...",
      empty: {
        line1: "You haven't submitted any reports yet.",
        line2: "Head over to the Report page to file a new issue.",
      },
    },
    reportDetail: {
      title: "Report Details",
      subtitle: "Live tracking",
      description: "Review the current status, analysis, timeline, and department assignment for this report.",
      created: "Created",
      lastUpdated: "Last updated",
      location: "Location",
      noLocation: "Location not available",
      assignedDept: "Assigned Department",
      notAssigned: "Not assigned",
      aiAnalysis: {
        title: "AI Analysis",
        category: "Category",
        department: "Department",
        severity: "Severity",
        priority: "Priority Score",
        confidence: "AI Confidence",
        summary: "Summary",
        empty: "No AI analysis is available for this report.",
        translating: "Translating summary...",
      },
      speech: {
        read: "Read content aloud",
        stop: "Stop reading",
      },
      notFound: {
        title: "Report Not Found",
        description: "The report you are trying to view does not exist or you do not have permission to view it.",
        back: "Back to Reports",
      },
    },
    tracking: {
      progress: {
        title: "Report Progress",
        description: "Track the current stage of your report.",
      },
      timeline: {
        title: "Tracking Timeline",
        description: "Recent updates shown in chronological order.",
      },
      status: {
        Pending: "Pending",
        Verified: "Verified",
        Assigned: "Assigned",
        "In Progress": "In Progress",
        Resolved: "Resolved",
        "Issue submitted": "Issue submitted",
        "AI verification completed": "AI verification completed",
        "Assigned to department": "Assigned to department",
        "Work started": "Work started",
        "Issue resolved": "Issue resolved",
      },
    },
    liveMap: {
      title: "Live Community Map",
      subtitle: "Real-time reporting",
      description: "View and track ongoing civic issues across the community in real-time.",
      statistics: "Statistics",
      legend: "Legend",
      filters: {
        category: "All Categories",
        status: "All Statuses",
        all: "All",
      },
      popup: {
        department: "Assigned Department",
        priority: "Priority Score",
        severity: "Severity",
        confidence: "AI Confidence",
        address: "Address",
        time: "Reported Time",
        button: "View Live Tracking →",
      },
      empty: {
        title: "No civic reports available.",
        description: "No active reports match the selected filters or contain geolocation details. Check back later or submit a new report.",
      },
      connecting: "Connecting to Firestore...",
      loading: "Loading interactive map...",
    },
    badges: {
      first_report: {
        name: "First Report",
        description: "Submitted your first civic report.",
      },
      five_reports: {
        name: "5 Reports",
        description: "Submitted five civic reports.",
      },
      ten_reports: {
        name: "10 Reports",
        description: "Submitted ten civic reports.",
      },
      points_100: {
        name: "100 Hero Points",
        description: "Reached 100 Hero Points.",
      },
      points_500: {
        name: "500 Hero Points",
        description: "Reached 500 Hero Points.",
      },
      streak_7: {
        name: "7 Day Streak",
        description: "Maintained a 7-day active streak.",
      },
      clean_city_hero: {
        name: "Clean City Hero",
        description: "Submitted a report to help clean the city.",
      },
      traffic_guardian: {
        name: "Traffic Guardian",
        description: "Reported traffic signal or safety issues.",
      },
      environment_protector: {
        name: "Environment Protector",
        description: "Reported water leakages or sewerage issues.",
      },
      community_starter: {
        name: "Community Starter",
      },
      civic_volunteer: {
        name: "Civic Volunteer",
      },
      community_guardian: {
        name: "Community Guardian",
      },
      city_hero: {
        name: "City Hero",
      },
      civic_champion: {
        name: "Civic Champion",
      },
      community_legend: {
        name: "Community Legend",
      },
    },
    toasts: {
      badgeUnlocked: "Badge Unlocked",
      pointsAwarded: "+{{points}} Hero Points",
    },
    categories: {
      Roads: "Roads",
      Garbage: "Garbage",
      Water: "Water",
      Traffic: "Traffic",
      "Street Lights": "Street Lights",
      Safety: "Safety",
      Other: "Other",
    },
    departments: {
      "Public Works Department": "Public Works Department",
      "Municipal Corporation": "Municipal Corporation",
      "Water Department": "Water Department",
      "Traffic Police": "Traffic Police",
      "Electricity Department": "Electricity Department",
      "Public Safety": "Public Safety",
      "Environment Department": "Environment Department",
      "Awaiting Assignment": "Awaiting Assignment",
    },
    severity: {
      Low: "Low",
      Medium: "Medium",
      High: "High",
      Critical: "Critical",
      Pending: "Pending",
    },
  },
};

const hi = {
  translation: {
    common: {
      loading: "लोड हो रहा है...",
      error: "त्रुटि",
      reset: "रीसेट करें",
      submit: "जमा करें",
      cancel: "रद्द करें",
      back: "पीछे जाएं",
      retry: "पुनः प्रयास करें",
      progress: "प्रगति",
      chooseFile: "फ़ाइल चुनें",
      camera: "कैमरा",
      dragDrop: "एक छवि या वीडियो यहाँ खींचें और छोड़ें",
      viewLiveTracking: "लाइव ट्रैकिंग देखें",
      play: "चलाएं",
      pause: "रोकें",
      resume: "पुनः शुरू करें",
      stop: "बंद करें",
      preview: "पूर्वावलोकन",
      remove: "हटाएं",
    },
    navbar: {
      home: "होम",
      report: "समस्या की रिपोर्ट करें",
      map: "लाइव मैप",
      dashboard: "डैशबोर्ड",
      myReports: "मेरी रिपोर्टें",
      login: "गूगल से साइन इन करें",
      logout: "लॉगआउट",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      privacy: "गोपनीयता",
      terms: "शर्तें",
      contact: "संपर्क",
      copyright: "© {{year}} कम्युनिटी हीरो। सर्वाधिकार सुरक्षित।",
    },
    landing: {
      hero: {
        eyebrow: "एआई-संचालित नागरिक खुफिया मंच",
        tagline: "एक रिपोर्ट। छह एआई एजेंट। एक मजबूत समुदाय।",
        headline: {
          before: "जब पड़ोसी आवाज उठाते हैं, ",
          highlight: "तो समुदाय बदलते हैं।",
        },
        description: "कम्युनिटी हीरो एक ही फोटो और वॉयस नोट को एक सत्यापित, प्राथमिकता वाले, ट्रैक करने योग्य नागरिक कार्य में बदल देता है—ताकि हर रिपोर्ट सही अधिकारी तक पहुंचे और हर निवासी सूचित रहे।",
        ctas: {
          primary: "समस्या दर्ज करें",
          secondary: "लाइव मैप देखें",
        },
        trust_badges: {
          "ai-powered": "एआई संचालित",
          "real-time": "रियल-टाइम ट्रैकिंग",
          "multilingual": "बहुभाषी समर्थन",
        },
      },
      problem: {
        eyebrow: "नागरिक समस्या",
        title: "रिपोर्टिंग से लोगों को जुड़ना चाहिए—कागजी कार्रवाई में नहीं दबना चाहिए",
        description: "अधिकांश शहर अभी भी फॉर्म, फोन ट्री और उम्मीदों पर चलते हैं। नागरिक एक बार रिपोर्ट करते हैं, फिर कुछ नहीं सुनते। विश्वास खत्म हो जाता है। समस्याएं बढ़ती जाती हैं। कम्युनिटी हीरो उस अंतर को पाटने के लिए है।",
        cards: {
          "black-hole": {
            title: "रिपोर्टें एक ब्लैक होल में गायब हो जाती हैं",
            description: "नागरिक समस्याओं को जमा करते हैं और कभी कोई अपडेट प्राप्त नहीं करते हैं। दृश्यता के बिना, लोग रिपोर्ट करना बंद कर देते हैं—और समस्याएं बिना जांचे बढ़ती हैं।",
          },
          "no-accountability": {
            title: "परिणाम की जिम्मेदारी कोई नहीं लेता",
            description: "विभाग एक-दूसरे को टिकट सौंपते हैं। निवासियों को यह दिखाई नहीं देता कि कौन जिम्मेदार है या काम कब शुरू होगा।",
          },
          "language-barrier": {
            title: "भाषा लोगों को बाहर कर देती है",
            description: "आधिकारिक पोर्टल अंग्रेजी प्रवाह और डिजिटल साक्षरता मान लेते हैं, जिससे वे समुदाय बाहर हो जाते हैं जिन्हें मदद की सबसे अधिक आवश्यकता होती है।",
          },
          "slow-response": {
            title: "तात्कालिकता अदृश्य है",
            description: "स्प्रेडशीट में एक गड्ढा और एक गैस रिसाव समान दिखाई देते हैं। बुद्धिमान प्राथमिकता के बिना, महत्वपूर्ण समस्याएं कतार में प्रतीक्षा करती हैं।",
          },
        },
      },
      solution: {
        eyebrow: "एआई समाधान",
        title: "एक नागरिक रिपोर्ट से लेकर सामुदायिक समाधान तक",
        description: "कम्युनिटी हीरो नागरिक जीवन के लिए एक एआई ऑपरेटिंग सिस्टम है। प्रत्येक रिपोर्ट विशेष एजेंटों के माध्यम से प्रवाहित होती है जो समझती है, पुष्टि करती है, प्राथमिकता देती है और समन्वय करती है—फिर समुदाय को वापस जोड़ती है।",
        flow: {
          citizen: {
            label: "नागरिक",
            detail: "एक तस्वीर लेता है, आवाज नोट रिकॉर्ड करता है, या मानचित्र पर टैप करता है",
          },
          agents: {
            label: "एआई एजेंट",
            detail: "छह विशेष एजेंट रिपोर्ट का विश्लेषण, सत्यापन और मार्ग प्रशस्त करते हैं",
          },
          authorities: {
            label: "प्राधिकारी",
            detail: "वार्ड इंजीनियरों और विभागों को प्राथमिकता वाले कार्य आदेश प्राप्त होते हैं",
          },
          community: {
            label: "समुदाय",
            detail: "पड़ोसी मिलकर प्रगति को ट्रैक करते हैं और समाधान की पुष्टि करते हैं",
          },
          resolution: {
            label: "समाधान",
            detail: "सबूत के साथ मुद्दे बंद होते हैं—और विश्वास का निर्माण ब्लॉक दर ब्लॉक होता है",
          },
        },
      },
      agents: {
        eyebrow: "एआई एजेंट पाइपलाइन",
        title: "छह एजेंट। एक समन्वित कार्यप्रवाह।",
        description: "प्रत्येक एजेंट की एक जिम्मेदारी होती है। मिलकर वे बिना किसी गलत अनुमान के नागरिक इनपुट को कार्रवाई योग्य जानकारी में बदल देते हैं।",
        list: {
          vision: {
            title: "विज़न एजेंट",
            responsibility: "नागरिक रिपोर्टों से तस्वीरों और दृश्य साक्ष्यों का विश्लेषण करता है",
          },
          geo: {
            title: "जियो एजेंट",
            responsibility: "सटीक वार्ड सीमाओं और स्थलों के लिए मुद्दों को मैप करता है",
          },
          trust: {
            title: "ट्रस्ट एजेंट",
            responsibility: "सत्यता की पुष्टि करता है और नकली या स्पैम रिपोर्टों को फ़्लैग करता है",
          },
          priority: {
            title: "प्राथमिकता एजेंट",
            responsibility: "तेज प्रतिक्रिया के लिए तात्कालिकता और सामुदायिक प्रभाव को रैंक करता है",
          },
          prediction: {
            title: "पूर्वानुमान एजेंट",
            responsibility: "ऐतिहासिक पैटर्न के आधार पर समाधान समयरेखा का अनुमान लगाता है",
          },
          copilot: {
            title: "सामुदायिक कोपायलट",
            responsibility: "नागरिकों का उनकी भाषा में मार्गदर्शन करता है और हर कदम समझाता है",
          },
        },
      },
      live_tracking: {
        eyebrow: "लाइव ट्रैकिंग पूर्वावलोकन",
        title: "हर रिपोर्ट। हर स्थिति। वास्तविक समय में।",
        description: "निवासी और अधिकारी एक पारदर्शी डैशबोर्ड साझा करते हैं—ताकि किसी को भी यह पूछने के लिए हेल्पलाइन पर कॉल न करना पड़े कि उनकी रिपोर्ट का क्या हुआ।",
        sampleLabel: "नमूना डैशबोर्ड पूर्वावलोकन",
        labels: {
          engineerStatus: "इंजीनियर स्थिति",
          eta: "अनुमानित समय",
          verification: "सामुदायिक सत्यापन",
          progress: "प्रगति",
        },
        issue: {
          category: "सड़क मरम्मत",
          ward: "वार्ड १८",
          engineerStatus: "इंजीनियर नियुक्त — निरीक्षण पूर्ण",
          eta: "अनुमानित समाधान: ४ दिन",
          verification: "५ में से ३ पड़ोसियों ने स्थल पर पुष्टि की",
        },
      },
      twin: {
        eyebrow: "सामुदायिक डिजिटल ट्विन",
        title: "आपका पड़ोस, मापा और समझा हुआ",
        description: "एआई रिपोर्टों, समाधानों और सामुदायिक प्रतिक्रिया को सक्रिय स्वास्थ्य स्कोर में संश्लेषित करता है—नेताओं और निवासियों को नागरिक कल्याण की एक साझा तस्वीर देता है।",
        demoLabel: "एआई-जनित नमूना स्कोर",
        scores: {
          infrastructure: {
            label: "बुनियादी ढांचा",
            trend: "+3 इस महीने",
          },
          safety: {
            label: "सुरक्षा",
            trend: "+5 इस महीने",
          },
          cleanliness: {
            label: "स्वच्छता",
            trend: "+2 इस महीने",
          },
          water: {
            label: "पानी",
            trend: "स्थिर",
          },
          health: {
            label: "सामुदायिक स्वास्थ्य",
            trend: "+4 इस महीने",
          },
        },
      },
      google: {
        eyebrow: "गूगल पर निर्मित",
        title: "उन प्लेटफार्मों द्वारा संचालित जिन पर समुदाय पहले से भरोसा करते हैं",
        description: "कम्युनिटी हीरो अंत से अंत तक गूगल तकनीकों को एकीकृत करता है—ताकि खुफिया जानकारी, बुनियादी ढांचा और अंतर्दृष्टि एक साथ स्केल हो सकें।",
        technologies: {
          "ai-studio": {
            title: "गूगल एआई स्टूडियो",
            description: "जेमिनी हर एजेंट के निर्णय को संचालित करता है—विज़न विश्लेषण से लेकर सामुदायिक कोपायलट प्रतिक्रियाओं तक।",
          },
          firebase: {
            title: "फायरबेस",
            description: "सत्यापन, वास्तविक समय डेटा सिंक और सुरक्षित भंडारण रिपोर्टों को तुरंत चालू रखते हैं।",
          },
          maps: {
            title: "गूगल मैप्स",
            description: "सटीक भू-स्थान, वार्ड मैपिंग और लाइव इश्यू पिन रिपोर्ट को स्थानों से जोड़ते हैं।",
          },
          speech: {
            title: "स्पीच एपीआई",
            description: "वॉयस-टू-टेक्स्ट और टेक्स्ट-टू-स्पीच प्रत्येक निवासी को स्वाभाविक रूप से रिपोर्ट करने की अनुमति देते हैं।",
          },
          translate: {
            title: "गूगल ट्रांसलेट",
            description: "बहुभाषी समर्थन यह सुनिश्चित करता है कि भाषा के कारण कोई भी पड़ोसी बाहर न छूटे।",
          },
          analytics: {
            title: "गूगल एनालिटिक्स",
            description: "उपयोग और प्रभाव मेट्रिक्स शहरों को यह मापने में मदद करते हैं कि क्या काम कर रहा है और कहां निवेश करना है।",
          },
        },
      },
      impact: {
        eyebrow: "सामुदायिक प्रभाव",
        title: "पारदर्शिता से आने वाला अंतर",
        description: "जब नागरिक प्रगति देखते हैं, तो वे अधिक रिपोर्ट करते हैं, अधिक स्वयंसेवा करते हैं और अधिक भरोसा करते हैं। ये संख्याएं दर्शाती हैं कि क्या संभव हो जाता है।",
        demoLabel: "प्रदर्शन के लिए नमूना आँकड़े",
        stats: {
          solved: {
            label: "मुद्दे हल किए गए",
          },
          citizens: {
            label: "नागरिकों की मदद की",
          },
          volunteer: {
            label: "स्वयंसेवक घंटे",
          },
          resolution: {
            label: "समाधान दर",
          },
        },
      },
      final_cta: {
        title: "क्या आप प्रभाव डालने के लिए तैयार हैं?",
        description: "आज ही एक स्वच्छ, सुरक्षित और अधिक उत्तरदायी समुदाय बनाने में अपने पड़ोसियों के साथ शामिल हों।",
        ctas: {
          primary: "मुद्दे की रिपोर्ट करें",
          secondary: "लाइव मैप देखें",
        },
      },
    },
    dashboard: {
      title: "डैशबोर्ड",
      subtitle: "आपका नागरिक प्रभाव",
      description: "अपनी नवीनतम प्रस्तुतियों की समीक्षा करें, स्थिति को ट्रैक करें, और देखें कि आपकी रिपोर्टें सामुदायिक प्रक्रिया के माध्यम से कैसे आगे बढ़ रही हैं।",
      stats: {
        totalReports: "कुल रिपोर्टें",
        pending: "लंबित",
        assigned: "आवंटित",
        inProgress: "प्रगति पर",
        resolved: "हल किया गया",
      },
      gamification: {
        levelProgress: "अगले स्तर के लिए प्रगति",
        pointsRequired: "अगले स्तर {{level}} तक पहुंचने के लिए {{points}} अंक चाहिए",
        dailyStreak: "दैनिक स्ट्रीक",
        streakDays: "{{days}} दिन",
        streakTip: "अपनी स्ट्रीक बनाए रखने के लिए दैनिक लॉगिन करें!",
        badgesEarned: "अर्जित बैज",
        badgesTip: "अंक अर्जित करने के लिए उपलब्धियों को अनलॉक करें!",
        cityRank: "शहर रैंक",
        rankTip: "वैश्विक बोर्ड पर आपका स्थान",
        badgesTitle: "नागरिक बैज",
        badgesSubtitle: "सामुदायिक स्वच्छता और रिपोर्ट ट्रैकिंग में योगदान देकर बैज अर्जित करें।",
        pts: "अंक",
        badge: "बैज",
        badges: "बैज",
      },
      leaderboard: {
        title: "शहर लीडरबोर्ड",
        subtitle: "शीर्ष 10 नायक",
        empty: "बोर्ड पर अभी तक कोई नायक नहीं है।",
        pts: "अंक",
      },
      performance: {
        title: "प्रदर्शन",
        description: "एआई विश्लेषण मेट्रिक्स और प्राथमिकता वितरण।",
        verifiedByAi: "एआई द्वारा सत्यापित",
        verifiedTip: "एआई विश्लेषण वाली रिपोर्टें",
        highPriority: "उच्च प्राथमिकता",
        highPriorityTip: "प्राथमिकता स्कोर ≥ 80",
        averagePriority: "औसत प्राथमिकता",
        averagePriorityTip: "एआई रिपोर्टों का औसत स्कोर",
        averageConfidence: "औसत एआई विश्वास",
        averageConfidenceTip: "एआई प्रसंस्करण का विश्वास",
      },
      recentReports: {
        title: "हाल की रिपोर्टें",
        subtitle: "आपके द्वारा प्रस्तुत नवीनतम मुद्दे।",
        loading: "आपकी रिपोर्ट लोड हो रही है...",
        empty: "अभी तक कोई रिपोर्ट नहीं मिली। प्रगति पर नज़र रखने के लिए अपनी पहली रिपोर्ट सबमिट करें।",
      },
    },
    reportForm: {
      title: "एक नागरिक समस्या की रिपोर्ट करें",
      description: "समस्या का चित्र या लघु वीडियो अपलोड करें। हमारा एआई साक्ष्य का विश्लेषण करेगा और उचित विभाग की सिफारिश करेगा।",
      uploadTitle: "साक्ष्य अपलोड करें",
      uploadTip: "समर्थित प्रारूप: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "विवरण",
      descPlaceholder: "नागरिक समस्या का वर्णन करें... (आप माइक्रोफ़ोन बटन पर क्लिक करके भी बोल सकते हैं)",
      categoryLabel: "श्रेणी",
      locationStatus: "स्थान की स्थिति",
      locationDetail: {
        waiting: "ब्राउज़र अनुमति की प्रतीक्षा की जा रही है...",
        denied: "स्थान की अनुमति अस्वीकार कर दी गई। आप अभी भी बिना किसी स्थान के सबमिट कर सकते हैं।",
        detected: "स्थान का पता चल गया",
        requesting: "स्थान का अनुरोध किया जा रहा है...",
      },
      locationCard: {
        address: "पता",
        latitude: "अक्षांश",
        longitude: "देशांतर",
        city: "शहर",
        region: "क्षेत्र",
        accuracy: "सटीकता: {{accuracy}} मीटर",
      },
      buttons: {
        analyze: "एआई के साथ विश्लेषण करें",
        analyzing: "विश्लेषण किया जा रहा है...",
        complete: "✓ एआई विश्लेषण पूर्ण",
        submit: "रिपोर्ट सबमिट करें",
        submitting: "सबमिट किया जा रहा है...",
        reset: "रीसेट करें",
      },
      speech: {
        start: "आवाज रिकॉर्डिंग शुरू करें",
        stop: "आवाज रिकॉर्डिंग रोकें",
        unsupported: "वॉयस-टू-टेक्स्ट आपके ब्राउज़र द्वारा समर्थित नहीं है।",
      },
    },
    reports: {
      title: "मेरी रिपोर्टें",
      subtitle: "रिपोर्ट इतिहास",
      description: "आपके द्वारा प्रस्तुत हर मुद्दे को ब्राउज़ करें और समीक्षा प्रक्रिया से स्थिति अपडेट देखें।",
      loading: "आपकी रिपोर्ट लोड हो रही है...",
      empty: {
        line1: "आपने अभी तक कोई रिपोर्ट सबमिट नहीं की है।",
        line2: "एक नया मुद्दा दर्ज करने के लिए रिपोर्ट पेज पर जाएं।",
      },
    },
    reportDetail: {
      title: "रिपोर्ट विवरण",
      subtitle: "लाइव ट्रैकिंग",
      description: "इस रिपोर्ट के लिए वर्तमान स्थिति, विश्लेषण, समयरेखा और विभाग आवंटन की समीक्षा करें।",
      created: "बनाया गया",
      lastUpdated: "अंतिम अद्यतन",
      location: "स्थान",
      noLocation: "स्थान उपलब्ध नहीं है",
      assignedDept: "आवंटित विभाग",
      notAssigned: "आवंटित नहीं",
      aiAnalysis: {
        title: "एआई विश्लेषण",
        category: "श्रेणी",
        department: "विभाग",
        severity: "तीव्रता",
        priority: "प्राथमिकता स्कोर",
        confidence: "एआई विश्वास",
        summary: "सारांश",
        empty: "इस रिपोर्ट के लिए कोई एआई विश्लेषण उपलब्ध नहीं है।",
        translating: "सारांश का अनुवाद किया जा रहा है...",
      },
      speech: {
        read: "सामग्री जोर से पढ़ें",
        stop: "पढ़ना बंद करें",
      },
      notFound: {
        title: "रिपोर्ट नहीं मिली",
        description: "वह रिपोर्ट जिसे आप देखने का प्रयास कर रहे हैं उसका अस्तित्व नहीं है या आपको इसे देखने की अनुमति नहीं है।",
        back: "रिपोर्ट पर वापस जाएं",
      },
    },
    tracking: {
      progress: {
        title: "रिपोर्ट प्रगति",
        description: "अपनी रिपोर्ट के वर्तमान चरण को ट्रैक करें।",
      },
      timeline: {
        title: "ट्रैकिंग टाइमलाइन",
        description: "हाल के अपडेट समय के अनुसार दिखाए गए हैं।",
      },
      status: {
        Pending: "लंबित",
        Verified: "सत्यापित",
        Assigned: "आवंटित",
        "In Progress": "प्रगति पर",
        Resolved: "हल किया गया",
        "Issue submitted": "समस्या दर्ज की गई",
        "AI verification completed": "एआई सत्यापन पूर्ण हुआ",
        "Assigned to department": "विभाग को आवंटित किया गया",
        "Work started": "कार्य शुरू हुआ",
        "Issue resolved": "समस्या का समाधान हुआ",
      },
    },
    liveMap: {
      title: "लाइव सामुदायिक मानचित्र",
      subtitle: "रियल-टाइम रिपोर्टिंग",
      description: "वास्तविक समय में पूरे समुदाय में चल रहे नागरिक मुद्दों को देखें और ट्रैक करें।",
      statistics: "आंकड़े",
      legend: "संकेत संकेत",
      filters: {
        category: "सभी श्रेणियां",
        status: "सभी स्थितियाँ",
        all: "सभी",
      },
      popup: {
        department: "आवंटित विभाग",
        priority: "प्राथमिकता स्कोर",
        severity: "तीव्रता",
        confidence: "एआई विश्वास",
        address: "पता",
        time: "रिपोर्ट किया गया समय",
        button: "लाइव ट्रैकिंग देखें →",
      },
      empty: {
        title: "कोई नागरिक रिपोर्ट उपलब्ध नहीं है।",
        description: "कोई भी सक्रिय रिपोर्ट चयनित फ़िल्टर से मेल नहीं खाती है या उसमें भू-स्थान विवरण नहीं है। बाद में पुनः देखें या एक नई रिपोर्ट सबमिट करें।",
      },
      connecting: "फायरस्टोर से कनेक्ट किया जा रहा है...",
      loading: "इंटरैक्टिव मानचित्र लोड हो रहा है...",
    },
    badges: {
      first_report: {
        name: "पहली रिपोर्ट",
        description: "अपनी पहली नागरिक रिपोर्ट प्रस्तुत की।",
      },
      five_reports: {
        name: "5 रिपोर्टें",
        description: "पांच नागरिक रिपोर्ट प्रस्तुत कीं।",
      },
      ten_reports: {
        name: "10 रिपोर्टें",
        description: "दस नागरिक रिपोर्ट प्रस्तुत कीं।",
      },
      points_100: {
        name: "100 हीरो अंक",
        description: "100 हीरो अंक तक पहुंचे।",
      },
      points_500: {
        name: "500 हीरो अंक",
        description: "500 हीरो अंक तक पहुंचे।",
      },
      streak_7: {
        name: "7 दिन की स्ट्रीक",
        description: "7 दिन की सक्रिय स्ट्रीक बनाए रखी।",
      },
      clean_city_hero: {
        name: "स्वच्छ शहर नायक",
        description: "शहर को साफ करने में मदद के लिए एक रिपोर्ट प्रस्तुत की।",
      },
      traffic_guardian: {
        name: "यातायात संरक्षक",
        description: "यातायात संकेत या सुरक्षा मुद्दों की रिपोर्ट की।",
      },
      environment_protector: {
        name: "पर्यावरण रक्षक",
        description: "पानी के रिसाव या सीवरेज के मुद्दों की रिपोर्ट की।",
      },
      community_starter: {
        name: "कम्युनिटी स्टार्टर",
      },
      civic_volunteer: {
        name: "नागरिक स्वयंसेवक",
      },
      community_guardian: {
        name: "कम्युनिटी गार्जियन",
      },
      city_hero: {
        name: "सिटी हीरो",
      },
      civic_champion: {
        name: "नागरिक चैंपियन",
      },
      community_legend: {
        name: "कम्युनिटी लीजेंड",
      },
    },
    toasts: {
      badgeUnlocked: "बैज अनलॉक हो गया",
      pointsAwarded: "+{{points}} हीरो अंक",
    },
    categories: {
      Roads: "सड़कें",
      Garbage: "कचरा",
      Water: "पानी",
      Traffic: "यातायात",
      "Street Lights": "स्ट्रीट लाइट",
      Safety: "सुरक्षा",
      Other: "अन्य",
    },
    departments: {
      "Public Works Department": "लोक निर्माण विभाग",
      "Municipal Corporation": "नगर निगम",
      "Water Department": "जल विभाग",
      "Traffic Police": "यातायात पुलिस",
      "Electricity Department": "विद्युत विभाग",
      "Public Safety": "सार्वजनिक सुरक्षा",
      "Environment Department": "पर्यावरण विभाग",
      "Awaiting Assignment": "आवंटन की प्रतीक्षा है",
    },
    severity: {
      Low: "कम",
      Medium: "मध्यम",
      High: "उच्च",
      Critical: "गंभीर",
      Pending: "लंबित",
    },
  },
};

const gu = {
  translation: {
    common: {
      loading: "લોડ થઈ રહ્યું છે...",
      error: "ભૂલ",
      reset: "રીસેટ કરો",
      submit: "સબમિટ કરો",
      cancel: "રદ કરો",
      back: "પાછા જાઓ",
      retry: "ફરી પ્રયાસ કરો",
      progress: "પ્રગતિ",
      chooseFile: "ફાઇલ પસંદ કરો",
      camera: "કેમેરા",
      dragDrop: "અહીં છબી અથવા વિડિઓ ખેંચો અને છોડો",
      viewLiveTracking: "લાઇવ ટ્રેકિંગ જુઓ",
      play: "ચલાવો",
      pause: "થોભાવો",
      resume: "ફરી શરૂ કરો",
      stop: "બંધ કરો",
      preview: "પૂર્વાવલોકન",
      remove: "દૂર કરો",
    },
    navbar: {
      home: "હોમ",
      report: "સમસ્યાની રિપોર્ટ કરો",
      map: "લાઇવ મેપ",
      dashboard: "ડેશબોર્ડ",
      myReports: "મારી રિપોર્ટ્સ",
      login: "ગૂગલથી સાઇન ઇન કરો",
      logout: "લોગઆઉટ",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      privacy: "ગોપનીયતા",
      terms: "શરતો",
      contact: "સંપર્ક",
      copyright: "© {{year}} કોમ્યુનિટી હીરો. સર્વાધિકાર સુરક્ષિત.",
    },
    landing: {
      hero: {
        eyebrow: "AI-સંચાલિત નાગરિક ગુપ્તચર મંચ",
        tagline: "એક રિપોર્ટ. છ AI એજન્ટ્સ. એક મજબૂત સમુદાય.",
        headline: {
          before: "જ્યારે પડોશીઓ અવાજ ઉઠાવે છે, ",
          highlight: "ત્યારે સમુદાયો બદલાય છે.",
        },
        description: "કોમ્યુનિટી હીરો એક જ ફોટો અને વોઇસ નોટને ચકાસાયેલ, અગ્રતાવાળા, ટ્રેક કરી શકાય તેવા નાગરિક કાર્યમાં ફેરવે છે—જેથી દરેક રિપોર્ટ યોગ્ય સત્તાધિકારી સુધી પહોંચે અને દરેક રહેવાસી માહિતગાર રહે.",
        ctas: {
          primary: "સમસ્યા નોંધાવો",
          secondary: "લાઇવ મેપ જુઓ",
        },
        trust_badges: {
          "ai-powered": "AI સંચાલિત",
          "real-time": "રિયલ-ટાઇમ ટ્રેકિંગ",
          "multilingual": "બહુભાષી સપોર્ટ",
        },
      },
      problem: {
        eyebrow: "નાગરિક સમસ્યા",
        title: "રિપોર્ટિંગ લોકોને જોડવા માટે હોવું જોઈએ—કાગળના કામમાં દબાવવા માટે નહીં",
        description: "મોટાભાગના શહેરો હજી પણ ફોર્મ, ફોન ટ્રી અને આશા પર ચાલે છે. નાગરિકો એકવાર રિપોર્ટ કરે છે, પછી કંઈ સાંભળતા નથી. વિશ્વાસ તૂટી જાય છે. સમસ્યાઓ વધતી જાય છે. કોમ્યુનિટી હીરો તે અંતરને પૂરવા માટે છે.",
        cards: {
          "black-hole": {
            title: "અહેવાલો બ્લેક હોલમાં અદૃશ્ય થઈ જાય છે",
            description: "નાગરિકો સમસ્યાઓ સબમિટ કરે છે અને ક્યારેય કોઈ અપડેટ પ્રાપ્ત કરતા નથી. દૃશ્યતા વિના, લોકો રિપોર્ટ કરવાનું બંધ કરે છે—અને સમસ્યાઓ અનિયંત્રિત વધે છે.",
          },
          "no-accountability": {
            title: "પરિણામની જવાબદારી કોઈ લેતું નથી",
            description: "વિભાગો એકબીજાને ટિકિટો સોંપે છે. રહેવાસીઓ જોઈ શકતા નથી કે કોણ જવાબદાર છે કે કામ ક્યારે શરૂ થશે.",
          },
          "language-barrier": {
            title: "ભાષા લોકોને બહાર રાખે છે",
            description: "સત્તાવાર પોર્ટલ અંગ્રેજી પ્રવાહિતા અને ડિજિટલ સાક્ષરતા ધારી લે છે, જે મદદની સૌથી વધુ જરૂરિયાતવાળા સમુદાયોને બાકાત રાખે છે.",
          },
          "slow-response": {
            title: "તાકીદ અદૃશ્ય છે",
            description: "સ્પ્રેડશીટમાં એક ખાડો અને ગેસ લીકેજ સરખા દેખાય છે. બુદ્ધિશાળી વર્ગીકરણ વિના, મહત્વપૂર્ણ સમસ્યાઓ કતારમાં રાહ જુએ છે.",
          },
        },
      },
      solution: {
        eyebrow: "AI ઉકેલ",
        title: "એક નાગરિક અહેવાલથી લઈને સામુદાયિક ઉકેલ સુધી",
        description: "કોમ્યુનિટી હીરો નાગરિક જીવન માટે એક AI ઓપરેટિંગ સિસ્ટમ છે. દરેક રિપોર્ટ વિશિષ્ટ એજન્ટો દ્વારા વહે છે જે સમજે છે, પુષ્ટિ કરે છે, અગ્રતા આપે છે અને સંકલન કરે છે—પછી સમુદાયને ફરીથી જોડે છે.",
        flow: {
          citizen: {
            label: "નાગરિક",
            detail: "ફોટો લે છે, વૉઇસ નોટ રેકોર્ડ કરે છે અથવા નકશા પર ટેપ કરે છે",
          },
          agents: {
            label: "AI એજન્ટ્સ",
            detail: "છ વિશિષ્ટ એજન્ટો રિપોર્ટનું વિશ્લેષણ, ચકાસણી અને રૂટીંગ કરે છે",
          },
          authorities: {
            label: "સત્તાવાળાઓ",
            detail: "વોર્ડ એન્જિનિયરો અને વિભાગોને પ્રાથમિકતાવાળા કામના ઓર્ડર મળે છે",
          },
          community: {
            label: "સમુદાય",
            detail: "પડોશીઓ સાથે મળીને પ્રગતિને ટ્રેક કરે છે અને ઉકેલોની ચકાસણી કરે છે",
          },
          resolution: {
            label: "ઉકેલ",
            detail: "પુરાવા સાથે સમસ્યાઓ બંધ થાય છે—અને વિશ્વાસનું નિર્માણ બ્લોક દર બ્લોક થાય છે",
          },
        },
      },
      agents: {
        eyebrow: "AI એજન્ટ પાઇપલાઇન",
        title: "છ એજન્ટો. એક સંકલિત કાર્યપ્રવાહ.",
        description: "દરેક એજન્ટની એક જ જવાબદારી હોય છે. સાથે મળીને તેઓ નાગરિક ઇનપુટને કાર્યક્ષમ બુદ્ધિમાં ફેરવે છે.",
        list: {
          vision: {
            title: "વિઝન એજન્ટ",
            responsibility: "નાગરિક અહેવાલોમાંથી ફોટા અને દ્રશ્ય પુરાવાઓનું વિશ્લેષણ કરે છે",
          },
          geo: {
            title: "જીઓ એજન્ટ",
            responsibility: "ચોક્કસ વોર્ડ સીમાઓ અને સીમાચિહ્નો માટે સમસ્યાઓ મેપ કરે છે",
          },
          trust: {
            title: "ટ્રસ્ટ એજન્ટ",
            responsibility: "સત્યતાની ચકાસણી કરે છે અને ડુપ્લિકેટ અથવા સ્પામ રિપોર્ટ્સને ફ્લેગ કરે છે",
          },
          priority: {
            title: "પ્રાયોરિટી એજન્ટ",
            responsibility: "ઝડપી પ્રતિભાવ માટે તાકીદ અને સામુદાયિક પ્રભાવને રેન્ક આપે છે",
          },
          prediction: {
            title: "પ્રેડિક્શન એજન્ટ",
            responsibility: "ઐતિહાસિક પેટર્નના આધારે ઉકેલની સમયરેખાની આગાહી કરે છે",
          },
          copilot: {
            title: "સામુદાયિક કોપાયલોટ",
            responsibility: "નાગરિકોને તેમની ભાષામાં માર્ગદર્શન આપે છે અને દરેક પગલું સમજાવે છે",
          },
        },
      },
      live_tracking: {
        eyebrow: "લાઇવ ટ્રેકિંગ પૂર્વાવલોકન",
        title: "દરેક રિપોર્ટ. દરેક સ્થિતિ. વાસ્તવિક સમયમાં.",
        description: "રહેવાસીઓ અને અધિકારીઓ એક પારદર્શક ડેશબોર્ડ શેર કરે છે—જેથી કોઈને પણ તેમની રિપોર્ટનું શું થયું તે પૂછવા માટે હેલ્પલાઈન પર કૉલ કરવો ન પડે.",
        sampleLabel: "નમૂના ડેશબોર્ડ પૂર્વાવલોકન",
        labels: {
          engineerStatus: "એન્જિનિયર સ્થિતિ",
          eta: "અંદાજિત સમય",
          verification: "સામુદાયિક ચકાસણી",
          progress: "પ્રગતિ",
        },
        issue: {
          category: "રસ્તા સમારકામ",
          ward: "વોર્ડ ૧૮",
          engineerStatus: "એન્જિનિયર નિયુક્ત — નિરીક્ષણ પૂર્ણ",
          eta: "અંદાજિત ઉકેલ: ૪ દિવસ",
          verification: "૫ માંથી ૩ પડોશીઓએ સ્થળ પર ચકાસણી કરી",
        },
      },
      twin: {
        eyebrow: "સામુદાયિક ડિજિટલ ટ્વીન",
        title: "તમારો પડોશ, માપવામાં આવેલ અને સમજાયેલ",
        description: "AI રિપોર્ટ્સ, રીઝોલ્યુશન અને સમુદાયના પ્રતિસાદને જીવંત આરોગ્ય સ્કોર્સમાં સંશ્લેષણ કરે છે—નેતાઓ અને રહેવાસીઓને નાગરિક સુખાકારીનું સહિયારું ચિત્ર આપે છે.",
        demoLabel: "AI-જનરેટેડ નમૂના સ્કોર્સ",
        scores: {
          infrastructure: {
            label: "ઇન્ફ્રાસ્ટ્રક્ચર",
            trend: "આ મહિને +3",
          },
          safety: {
            label: "સુરક્ષા",
            trend: "આ મહિને +5",
          },
          cleanliness: {
            label: "સ્વચ્છતા",
            trend: "આ મહિને +2",
          },
          water: {
            label: "પાણી",
            trend: "સ્થિર",
          },
          health: {
            label: "સામુદાયિક આરોગ્ય",
            trend: "આ મહિને +4",
          },
        },
      },
      google: {
        eyebrow: "ગૂગલ પર નિર્મિત",
        title: "એવા પ્લેટફોર્મ્સ દ્વારા સંચાલિત જેના પર સમુદાયો પહેલેથી જ વિશ્વાસ કરે છે",
        description: "કોમ્યુનિટી હીરો ગૂગલ ટેક્નોલોજીને શરૂઆતથી અંત સુધી સંકલિત કરે છે—જેથી બુદ્ધિમત્તા, ઇન્ફ્રાસ્ટ્રક્ચર અને આંતરદૃષ્ટિ એકસાથે સ્કેલ થાય.",
        technologies: {
          "ai-studio": {
            title: "ગૂગલ AI સ્ટુડિયો",
            description: "જેમિની દરેક એજન્ટના નિર્ણયને સંચાલિત કરે છે—વિઝન વિશ્લેષણથી લઈને સામુદાયિક કોપાયલોટ પ્રતિભાવો સુધી.",
          },
          firebase: {
            title: "ફાયરબેઝ",
            description: "ચકાસણી, રિયલ-ટાઇમ ડેટા સિંક અને સુરક્ષિત સ્ટોરેજ રિપોર્ટ્સને તરત જ વહેતા રાખે છે.",
          },
          maps: {
            title: "ગૂગલ મેપ્સ",
            description: "ચોક્કસ ભૌગોલિક સ્થાન, વોર્ડ મેપિંગ અને લાઇવ ઇશ્યૂ પિન રિપોર્ટને સ્થાનો સાથે જોડે છે.",
          },
          speech: {
            title: "સ્પીચ API",
            description: "વોઇસ-ટુ-ટેક્સ્ટ અને ટેક્સ્ટ-ટુ-સ્પીચ દરેક રહેવાસીને કુદરતી રીતે રિપોર્ટ કરવાની મંજૂરી આપે છે.",
          },
          translate: {
            title: "ગૂગલ ટ્રાન્સલેટ",
            description: "બહુભાષી સપોર્ટ એ સુનિશ્ચિત કરે છે કે ભાષાના કારણે કોઈ પાડોશી બાકાત ન રહે.",
          },
          analytics: {
            title: "ગૂગલ એનાલિટિક્સ",
            description: "ઉપયોગ અને પ્રભાવ મેટ્રિક્સ શહેરોને શું કામ કરી રહ્યું છે અને ક્યાં રોકાણ કરવું તે માપવામાં મદદ કરે છે.",
          },
        },
      },
      impact: {
        eyebrow: "સામુદાયિક પ્રભાવ",
        title: "પારદર્શકતાથી આવતો તફાવત",
        description: "જ્યારે નાગરિકો પ્રગતિ જુએ છે, ત્યારે તેઓ વધુ રિપોર્ટ કરે છે, વધુ સ્વયંસેવા કરે છે અને વધુ વિશ્વાસ કરે છે. આ આંકડા દર્શાવે છે કે શું શક્ય બને છે.",
        demoLabel: "પ્રદર્શન માટે નમૂના આંકડા",
        stats: {
          solved: {
            label: "સમસ્યાઓ ઉકેલાઈ",
          },
          citizens: {
            label: "નાગરિકોને મદદ કરી",
          },
          volunteer: {
            label: "સ્વયંસેવક કલાકો",
          },
          resolution: {
            label: "ઉકેલ દર",
          },
        },
      },
      final_cta: {
        title: "પ્રભાવ પાડવા માટે તૈયાર છો?",
        description: "આજે જ વધુ સ્વચ્છ, સુરક્ષિત અને વધુ પ્રતિભાવશીલ સમુદાય બનાવવામાં તમારા પડોશીઓ સાથે જોડાઓ.",
        ctas: {
          primary: "સમસ્યાની રિપોર્ટ કરો",
          secondary: "લાઇવ મેપ જુઓ",
        },
      },
    },
    dashboard: {
      title: "ડેશબોર્ડ",
      subtitle: "તમારો નાગરિક પ્રભાવ",
      description: "તમારી નવીનતમ પ્રસ્તુતિઓની સમીક્ષા કરો, સ્થિતિને ટ્રૅક કરો અને જુઓ કે તમારી રિપોર્ટ્સ સામુદાયિક પ્રક્રિયા દ્વારા કેવી રીતે આગળ વધી રહી છે.",
      stats: {
        totalReports: "કુલ અહેવાલો",
        pending: "વિલંબિત",
        assigned: "સોંપાયેલ",
        inProgress: "પ્રગતિમાં",
        resolved: "ઉકેલાયેલ",
      },
      gamification: {
        levelProgress: "આગલા સ્તર માટે પ્રગતિ",
        pointsRequired: "આગલા સ્તર {{level}} સુધી પહોંચવા માટે {{points}} પોઇન્ટ્સ જોઈએ",
        dailyStreak: "દૈનિક સ્ટ્રીક",
        streakDays: "{{days}} દિવસ",
        streakTip: "તમારી સ્ટ્રીક જાળવી રાખવા માટે રોજ લોગિન કરો!",
        badgesEarned: "મેળવેલા બેજ",
        badgesTip: "પોઇન્ટ્સ મેળવવા માટે સિદ્ધિઓ અનલૉક કરો!",
        cityRank: "શહેર રેન્ક",
        rankTip: "વૈશ્વિક બોર્ડ પર તમારું સ્થાન",
        badgesTitle: "નાગરિક બેજ",
        badgesSubtitle: "સામુદાયિક સ્વચ્છતા અને રિપોર્ટ ટ્રેકિંગમાં ફાળો આપીને બેજ મેળવો.",
        pts: "પોઇન્ટ્સ",
        badge: "બેજ",
        badges: "બેજ",
      },
      leaderboard: {
        title: "શહેર લીડરબોર્ડ",
        subtitle: "ટોચના 10 નાયકો",
        empty: "બોર્ડ પર હજી સુધી કોઈ નાયક નથી.",
        pts: "પોઇન્ટ્સ",
      },
      performance: {
        title: "પ્રદર્શન",
        description: "AI વિશ્લેષણ મેટ્રિક્સ અને પ્રાથમિકતા વિતરણ.",
        verifiedByAi: "AI દ્વારા ચકાસાયેલ",
        verifiedTip: "AI વિશ્લેષણ ધરાવતા રિપોર્ટ્સ",
        highPriority: "ઉચ્ચ પ્રાથમિકતા",
        highPriorityTip: "પ્રાથમિકતા સ્કોર ≥ 80",
        averagePriority: "સરેરાશ પ્રાથમિકતા",
        averagePriorityTip: "AI અહેવાલોનો સરેરાશ સ્કોર",
        averageConfidence: "સરેરાશ AI વિશ્વાસ",
        averageConfidenceTip: "AI પ્રોસેસિંગનો વિશ્વાસ",
      },
      recentReports: {
        title: "તાજેતરના અહેવાલો",
        subtitle: "તમારા દ્વારા સબમિટ કરાયેલી નવીનતમ સમસ્યાઓ.",
        loading: "તમારી રિપોર્ટ લોડ થઈ રહી છે...",
        empty: "હજી સુધી કોઈ રિપોર્ટ મળી નથી. પ્રગતિ ટ્રૅક કરવા માટે તમારી પ્રથમ રિપોર્ટ સબમિટ કરો.",
      },
    },
    reportForm: {
      title: "નાગરિક સમસ્યાની રિપોર્ટ કરો",
      description: "સમસ્યાનો ફોટો અથવા ટૂંકો વીડિયો અપલોડ કરો. અમારો AI પુરાવાઓનું વિશ્લેષણ કરશે અને યોગ્ય વિભાગની ભલામણ કરશે.",
      uploadTitle: "પુરાવા અપલોડ કરો",
      uploadTip: "સમર્થિત ફોર્મેટ્સ: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "વર્ણન",
      descPlaceholder: "નાગરિક સમસ્યાનું વર્ણન કરો... (તમે માઇક્રોફોન બટન પર ક્લિક કરીને પણ બોલી શકો છો)",
      categoryLabel: "શ્રેણી",
      locationStatus: "સ્થાનની સ્થિતિ",
      locationDetail: {
        waiting: "બ્રાઉઝર પરવાનગીની રાહ જોઈ રહ્યા છીએ...",
        denied: "સ્થાન પરવાનગી નકારી કાઢી. તમે હજી પણ સ્થાન વિના સબમિટ કરી શકો છો.",
        detected: "સ્થાન શોધાયું",
        requesting: "સ્થાનની વિનંતી કરી રહ્યા છીએ...",
      },
      locationCard: {
        address: "સરનામું",
        latitude: "અક્ષાંશ",
        longitude: "રેખાંશ",
        city: "શહેર",
        region: "રાજ્ય",
        accuracy: "સચોટતા: {{accuracy}} મીટર",
      },
      buttons: {
        analyze: "AI સાથે વિશ્લેષણ કરો",
        analyzing: "વિશ્લેષણ થઈ રહ્યું છે...",
        complete: "✓ AI વિશ્લેષણ પૂર્ણ",
        submit: "રિપોર્ટ સબમિટ કરો",
        submitting: "સબમિટ થઈ રહ્યું છે...",
        reset: "રીસેટ કરો",
      },
      speech: {
        start: "અવાજ રેકોર્ડિંગ શરૂ કરો",
        stop: "અવાજ રેકોર્ડિંગ બંધ કરો",
        unsupported: "વોઇસ-ટુ-ટેક્સ્ટ તમારા બ્રાઉઝર દ્વારા સમર્થિત નથી.",
      },
    },
    reports: {
      title: "મારી રિપોર્ટ્સ",
      subtitle: "અહેવાલ ઇતિહાસ",
      description: "તમે સબમિટ કરેલી દરેક સમસ્યા બ્રાઉઝ કરો અને સમુદાય સમીક્ષા પ્રક્રિયાના સ્થિતિ અપડેટ્સ જુઓ.",
      loading: "તમારી રિપોર્ટ લોડ થઈ રહી છે...",
      empty: {
        line1: "તમે હજી સુધી કોઈ રિપોર્ટ સબમિટ કરી નથી.",
        line2: "નવી સમસ્યા નોંધાવવા માટે રિપોર્ટ પૃષ્ઠ પર જાઓ.",
      },
    },
    reportDetail: {
      title: "રિપોર્ટ વિગતો",
      subtitle: "લાઇવ ટ્રેકિંગ",
      description: "આ રિપોર્ટ માટે વર્તમાન સ્થિતિ, વિશ્લેષણ, સમયરેખા અને વિભાગ સોંપણીની સમીક્ષા કરો.",
      created: "બનાવવામાં આવ્યું",
      lastUpdated: "છેલ્લે અપડેટ કરેલ",
      location: "સ્થાન",
      noLocation: "સ્થાન ઉપલબ્ધ નથી",
      assignedDept: "સોંપાયેલ વિભાગ",
      notAssigned: "સોંપાયેલ નથી",
      aiAnalysis: {
        title: "AI વિશ્લેષણ",
        category: "શ્રેણી",
        department: "વિભાગ",
        severity: "તીવ્રતા",
        priority: "પ્રાથમિકતા સ્કોર",
        confidence: "AI વિશ્વાસ",
        summary: "સારાંશ",
        empty: "આ રિપોર્ટ માટે કોઈ AI વિશ્લેષણ ઉપલબ્ધ નથી.",
        translating: "સારાંશનો અનુવાદ થઈ રહ્યો છે...",
      },
      speech: {
        read: "સામગ્રી મોટેથી વાંચો",
        stop: "વાંચવાનું બંધ કરો",
      },
      notFound: {
        title: "અહેવાલ મળ્યો નથી",
        description: "તમે જે રિપોર્ટ જોવાનો પ્રયાસ કરી રહ્યા છો તેનું અસ્તિત્વ નથી અથવા તમને તે જોવાની પરવાનગી નથી.",
        back: "રિપોર્ટ પર પાછા જાઓ",
      },
    },
    tracking: {
      progress: {
        title: "અહેવાલ પ્રગતિ",
        description: "તમારા અહેવાલના વર્તમાન તબક્કાને ટ્રૅક કરો.",
      },
      timeline: {
        title: "ટ્રૅકિંગ સમયરેખા",
        description: "તાજેતરના અપડેટ્સ સમય ક્રમ અનુસાર દર્શાવ્યા છે.",
      },
      status: {
        Pending: "વિલંબિત",
        Verified: "ચકાસાયેલ",
        Assigned: "સોંપાયેલ",
        "In Progress": "પ્રગતિમાં",
        Resolved: "ઉકેલાયેલ",
        "Issue submitted": "સમસ્યા નોંધવામાં આવી",
        "AI verification completed": "એઆઈ ચકાસણી પૂર્ણ થઈ",
        "Assigned to department": "વિભાગને સોંપવામાં આવી",
        "Work started": "કામ શરૂ થયું",
        "Issue resolved": "સમસ્યા ઉકેલાઈ",
      },
    },
    liveMap: {
      title: "લાઇવ સામુદાયિક નકશો",
      subtitle: "વાસ્તવિક સમયનું રિપોર્ટિંગ",
      description: "વાસ્તવિક સમયમાં સમગ્ર સમુદાયમાં ચાલતી નાગરિક સમસ્યાઓ જુઓ અને ટ્રૅક કરો.",
      statistics: "આંકડા",
      legend: "દંતકથા",
      filters: {
        category: "બધી શ્રેણીઓ",
        status: "બધી સ્થિતિઓ",
        all: "બધું",
      },
      popup: {
        department: "સોંપાયેલ વિભાગ",
        priority: "પ્રાથમિકતા સ્કોર",
        severity: "તીવ્રતા",
        confidence: "AI વિશ્વાસ",
        address: "સરનામું",
        time: "રિપોર્ટ કરાયેલ સમય",
        button: "લાઇવ ટ્રેકિંગ જુઓ →",
      },
      empty: {
        title: "કોઈ નાગરિક અહેવાલો ઉપલબ્ધ નથી.",
        description: "પસંદ કરેલા ફિલ્ટર્સ સાથે કોઈ સક્રિય રિપોર્ટ્સ મેળ ખાતા નથી અથવા તેમાં ભૌગોલિક સ્થાન વિગતો નથી. પછીથી ફરી તપાસો અથવા નવી રિપોર્ટ સબમિટ કરો.",
      },
      connecting: "ફાયરબેઝ સાથે કનેક્ટ થઈ રહ્યું છે...",
      loading: "ઇન્ટરેક્ટિવ નકશો લોડ થઈ રહ્યો છે...",
    },
    badges: {
      first_report: {
        name: "પ્રથમ રિપોર્ટ",
        description: "તમારો પ્રથમ નાગરિક રિપોર્ટ સબમિટ કર્યો.",
      },
      five_reports: {
        name: "5 રિપોર્ટ્સ",
        description: "પાંચ નાગરિક રિપોર્ટ્સ સબમિટ કર્યા.",
      },
      ten_reports: {
        name: "10 રિપોર્ટ્સ",
        description: "દસ નાગરિક રિપોર્ટ્સ સબમિટ કર્યા.",
      },
      points_100: {
        name: "100 હીરો પોઇન્ટ્સ",
        description: "100 હીરો પોઇન્ટ્સ સુધી પહોંચ્યા.",
      },
      points_500: {
        name: "500 હીરો પોઇન્ટ્સ",
        description: "500 હીરો પોઇન્ટ્સ સુધી પહોંચ્યા.",
      },
      streak_7: {
        name: "7 દિવસની સ્ટ્રીક",
        description: "7 દિવસની સક્રિય સ્ટ્રીક જાળવી રાખી.",
      },
      clean_city_hero: {
        name: "સ્વચ્છ શહેર નાયક",
        description: "શહેરને સ્વચ્છ રાખવામાં મદદ કરવા રિપોર્ટ સબમિટ કર્યો.",
      },
      traffic_guardian: {
        name: "ટ્રાફિક ગાર્ડિયન",
        description: "ટ્રાફિક સિગ્નલ અથવા સુરક્ષા સમસ્યાઓની રિપોર્ટ કરી.",
      },
      environment_protector: {
        name: "પર્યાવરણ રક્ષક",
        description: "પાણીના લીકેજ અથવા ગટરની સમસ્યાઓની રિપોર્ટ કરી.",
      },
      community_starter: {
        name: "કોમ્યુનિટી સ્ટાર્ટર",
      },
      civic_volunteer: {
        name: "ನಾಗರೀಕ ಸ್ವಯಂಸೇವಕ",
      },
      community_guardian: {
        name: "કોમ્યુનિટી ગાર્ડિયન",
      },
      city_hero: {
        name: "સિટી હીરો",
      },
      civic_champion: {
        name: "નાગરિક ચેમ્પિયન",
      },
      community_legend: {
        name: "કોમ્યુનિટી લેજન્ડ",
      },
    },
    toasts: {
      badgeUnlocked: "બેજ અનલૉક થયો",
      pointsAwarded: "+{{points}} હીરો પોઇન્ટ્સ",
    },
    categories: {
      Roads: "રસ્તાઓ",
      Garbage: "કચરો",
      Water: "પાણી",
      Traffic: "ટ્રાફિક",
      "Street Lights": "સ્ટ્રીટ લાઇટ્સ",
      Safety: "સુરક્ષા",
      Other: "અન્ય",
    },
    departments: {
      "Public Works Department": "લોકનિર્માણ વિભાગ",
      "Municipal Corporation": "મહાનગરપાલિકા",
      "Water Department": "જળ વિભાગ",
      "Traffic Police": "ટ્રાફિક પોલીસ",
      "Electricity Department": "વીજળી વિભાગ",
      "Public Safety": "જાહેર સુરક્ષા",
      "Environment Department": "પર્યાવરણ વિભાગ",
      "Awaiting Assignment": "સોંપણીની પ્રતીક્ષા છે",
    },
    severity: {
      Low: "ઓછું",
      Medium: "મધ્યમ",
      High: "ઉચ્ચ",
      Critical: "गंभीर",
      Pending: "વિલંબિત",
    },
  },
};

const mr = {
  translation: {
    common: {
      loading: "लोड होत आहे...",
      error: "त्रुटी",
      reset: "रीसेट करा",
      submit: "जमा करा",
      cancel: "रद्द करा",
      back: "मागे जा",
      retry: "पुन्हा प्रयत्न करा",
      progress: "प्रगती",
      chooseFile: "फाइल निवडा",
      camera: "कॅमेरा",
      dragDrop: "येथे प्रतिमा किंवा व्हिडिओ ड्रॅग आणि ड्रॉप करा",
      viewLiveTracking: "लाइव्ह ट्रॅकिंग पहा",
      play: "सुरू करा",
      pause: "थांबवा",
      resume: "पुन्हा सुरू करा",
      stop: "बंद करा",
      preview: "पूर्वावलोकन",
      remove: "काढून टाका",
    },
    navbar: {
      home: "होम",
      report: "तक्रार नोंदवा",
      map: "लाइव्ह मॅप",
      dashboard: "डॅशबोर्ड",
      myReports: "माझ्या तक्रारी",
      login: "गूगलसह साइन इन करा",
      logout: "लॉगआउट",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      privacy: "गोपनीयता",
      terms: "अटी",
      contact: "संपर्क",
      copyright: "© {{year}} कम्युनिटी हिरो. सर्व हक्क राखीव.",
    },
    landing: {
      hero: {
        eyebrow: "AI-चालित नागरी गुप्तहेर मंच",
        tagline: "एक तक्रार. सहा AI एजंट. एक मजबूत समुदाय.",
        headline: {
          before: "जेव्हा शेजारी एकत्र बोलतात, ",
          highlight: "तेव्हा समुदाय बदलतात.",
        },
        description: "कम्युनिटी हिरो एकाच फोटो आणि व्हॉइस नोटला सत्यापित, प्राधान्यीकृत, ट्रॅक करण्यायोग्य नागरी कृतीमध्ये रूपांतरित करतो—जेणेकरून प्रत्येक तक्रार योग्य प्राधिकरणापर्यंत पोहोचेल आणि प्रत्येक रहिवासी जागरूक राहील.",
        ctas: {
          primary: "तक्रार नोंदवा",
          secondary: "लाइव्ह मॅप पहा",
        },
        trust_badges: {
          "ai-powered": "AI चालित",
          "real-time": "रियल-टाइम ट्रॅकिंग",
          "multilingual": "बहुभाषिक समर्थन",
        },
      },
      problem: {
        eyebrow: "नागरी समस्या",
        title: "तक्रार नोंदवणे लोकांना जोडणारे असावे—कागदपत्रात बुडवणारे नाही",
        description: "बहुतांश शहरे अजूनही फॉर्म, phone ट्री आणि आशेवर चालतात. नागरिक एकदा तक्रार करतात, नंतर काहीच ऐकत नाहीत. विश्वास कमी होतो. समस्या वाढत जातात. कम्युनिटी हिरो हे अंतर भरून काढण्यासाठी आहे.",
        cards: {
          "black-hole": {
            title: "तक्रारी एका ब्लॅक होलमध्ये नाहीशा होतात",
            description: "नागरिक समस्या जमा करतात आणि कधीही कोणतेही अपडेट मिळवत नाहीत. पारदर्शकतेशिवाय, लोक तक्रार करणे थांबवतात—आणि समस्या अनिर्बंध वाढतात.",
          },
          "no-accountability": {
            title: "परिणामाची जबाबदारी कोणीही घेत नाही",
            description: "विभाग एकमेकांकडे तिकिटे वर्ग करतात. रहिवाशांना हे दिसत नाही की कोण जबाबदार आहे किंवा काम कधी सुरू होईल.",
          },
          "language-barrier": {
            title: "भाषा लोकांना बाहेर ठेवते",
            description: "अधिकृत पोर्टल्स इंग्रजीचे ज्ञान आणि डिजिटल साक्षरता गृहीत धरतात, ज्यामुळे ज्या समुदायांना मदतीची सर्वात जास्त गरज असते तेच वंचित राहतात.",
          },
          "slow-response": {
            title: "तातडी अदृश्य आहे",
            description: "स्प्रेडशीटमध्ये रस्त्यावरील खड्डा आणि गॅस गळती सारखीच दिसते. बुद्धिमान वर्गीकरणाशिवाय, महत्त्वाच्या समस्या रांगेत वाट पाहतात.",
          },
        },
      },
      solution: {
        eyebrow: "AI उपाय",
        title: "एका नागरिकाच्या तक्रारीपासून ते सामायिक निराकरणापर्यंत",
        description: "कम्युनिटी हिरो नागरी जीवनासाठी एक AI ऑपरेटिंग सिस्टम आहे. प्रत्येक तक्रार विशेष एजंट्सद्वारे प्रवाहित होते जे समजून घेतात, पडताळणी करतात, प्राधान्य देतात आणि समन्वय साधतात—त्यानंतर समुदायाला पुन्हा जोडतात.",
        flow: {
          citizen: {
            label: "नागरिक",
            detail: "फोटो काढतो, व्हॉइस नोट रेकॉर्ड करतो किंवा नकाशावर टॅप करतो",
          },
          agents: {
            label: "AI एजंट्स",
            detail: "सहा विशेष एजंट तक्रारीचे विश्लेषण, पडताळणी आणि वर्गीकरण करतात",
          },
          authorities: {
            label: "प्राधिकारी",
            detail: "वॉर्ड अभियंते आणि विभागांना प्राधान्यीकृत कामाचे आदेश मिळतात",
          },
          community: {
            label: "समुदाय",
            detail: "शेजारी मिळून प्रगतीचा मागोवा घेतात आणि समाधाची खात्री करतात",
          },
          resolution: {
            label: "निराकरण",
            detail: "पुराव्यांसह तक्रारी बंद होतात—आणि विश्वासाची निर्मिती घराघरात होते",
          },
        },
      },
      agents: {
        eyebrow: "AI एजंट पाइपलाइन",
        title: "सहा एजंट. एक समन्वित कार्यप्रवाह.",
        description: "प्रत्येक एजंटची एकच जबाबदारी असते. एकत्र मिळून ते नागरी इनपुटला कृतीक्षम माहितीमध्ये बदलतात.",
        list: {
          vision: {
            title: "व्हिजन एजंट",
            responsibility: "नागरी तक्रारींमधील फोटो आणि दृश्य पुराव्यांचे विश्लेषण करतो",
          },
          geo: {
            title: "जिओ एजंट",
            responsibility: "अचूक वॉर्ड सीमा आणि खुणांसाठी समस्यांचे मॅपिंग करतो",
          },
          trust: {
            title: "ट्रस्ट एजंट",
            responsibility: "सत्यतेची पडताळणी करतो आणि बनावट किंवा स्पॅम तक्रारी चिन्हांकट करतो",
          },
          priority: {
            title: "प्रायोरिटी एजंट",
            responsibility: "जलद प्रतिसादासाठी तातडी आणि सामायिक प्रभाव श्रेणीबद्ध करतो",
          },
          prediction: {
            title: "प्रेडिक्शन एजंट",
            responsibility: "ऐतिहासिक नमुन्यांच्या आधारे तक्रार निवारणाच्या वेळेचा अंदाज लावतो",
          },
          copilot: {
            title: "सामुदायिक कोपायलट",
            responsibility: "नागरिकांना त्यांच्या भाषेत मार्गदर्शन करतो आणि प्रत्येक पायरी स्पष्ट करतो",
          },
        },
      },
      live_tracking: {
        eyebrow: "लाइव्ह ट्रॅकिंग पूर्वदृश्य",
        title: "प्रत्येक तक्रार. प्रत्येक स्थिती. वास्तविक वेळेत.",
        description: "रहिवासी आणि अधिकारी एक पारदर्शक डॅशबोर्ड सामायिक करतात—जेणेकरून कोणालाही त्यांच्या तक्रारीचे काय झाले हे विचारण्यासाठी हेल्पलाईनवर कॉल करावा लागणार नाही.",
        sampleLabel: "नमुना डॅशबोर्ड पूर्वदृश्य",
        labels: {
          engineerStatus: "अभियंता स्थिती",
          eta: "अंदाजित वेळ",
          verification: "सामुदायिक पडताळणी",
          progress: "प्रगती",
        },
        issue: {
          category: "रस्ता दुरुस्ती",
          ward: "वॉर्ड १८",
          engineerStatus: "अभियंता नियुक्त — तपासणी पूर्ण",
          eta: "अंदाजित निवारण: ४ दिवस",
          verification: "५ पैकी ३ शेजाऱ्यांनी घटनास्थळी पडताळणी केली",
        },
      },
      twin: {
        eyebrow: "सामुदायिक डिजिटल ट्विन",
        title: "तुमचा परिसर, मोजलेला आणि समजलेला",
        description: "AI तक्रारी, निवारण आणि समुदाय अभिप्रायाला सक्रिय आरोग्य स्कोअरमध्ये एकत्रित करतो—नेते आणि रहिवाशांना नागरी कल्याणाचे एक सामायिक चित्र देतो.",
        demoLabel: "AI-व्युत्पन्न नमुना गुण",
        scores: {
          infrastructure: {
            label: "पायाभूत सुविधा",
            trend: "या महिन्यात +3",
          },
          safety: {
            label: "सुरक्षा",
            trend: "या महिन्यात +5",
          },
          cleanliness: {
            label: "स्वच्छता",
            trend: "या महिन्यात +2",
          },
          water: {
            label: "पाणी",
            trend: "स्थिर",
          },
          health: {
            label: "सामुदायिक आरोग्य",
            trend: "या महिन्यात +4",
          },
        },
      },
      google: {
        eyebrow: "गूगलवर आधारित",
        title: "समुदाय ज्या प्लॅटफॉर्मवर आधीच विश्वास ठेवतात त्यांच्याद्वारे समर्थित",
        description: "कम्युनिटी हिरो गूगल तंत्रज्ञान सुरुवातीपासून शेवटपर्यंत समाविष्ट करतो—जेणेकरून बुद्धिमत्ता, पायाभूत सुविधा आणि अंतर्दृष्टी एकत्र वाढतात.",
        technologies: {
          "ai-studio": {
            title: "गूगल AI स्टुडिओ",
            description: "जेमिनी प्रत्येक एजंटच्या निर्णयाला चालवतो—व्हिजन विश्लेषणापासून ते सामुदायिक कोपायलट प्रतिसादांपर्यंत.",
          },
          firebase: {
            title: "फायरबेस",
            description: "पडताळणी, रिअल-टाइम डेटा सिंक आणि सुरक्षित स्टोरेज तक्रारींना त्वरित प्रवाहित ठेवतात.",
          },
          maps: {
            title: "गूगल मॅप्स",
            description: "अचूक भौगोलिक स्थान, वॉर्ड मॅपिंग आणि लाइव्ह तक्रार पिन तक्रारींना ठिकाणांशी जोडतात.",
          },
          speech: {
            title: "स्पीच API",
            description: "व्हॉइस-टू-टेक्स्ट आणि टेक्स्ट-टू-स्पीच प्रत्येक रहिवाशाला नैसर्गिकरित्या तक्रार करण्याची परवानगी देतात.",
          },
          translate: {
            title: "गूगल ट्रान्सलेट",
            description: "बहुभाषिक समर्थन हे सुनिश्चित करते की भाषेमुळे कोणताही शेजारी वंचित राहणार नाही.",
          },
          analytics: {
            title: "गूगल अ‍ॅनालिटिक्स",
            description: "वापर आणि प्रभाव मेट्रिक्स शहरांना काय काम करत आहे आणि कुठे गुंतवणूक करावी हे मोजण्यात मदत करतात.",
          },
        },
      },
      impact: {
        eyebrow: "सामुदायिक प्रभाव",
        title: "पारदर्शकतेमुळे पडणारा फरक",
        description: "जब नागरिक प्रगती पाहतात, तेव्हा ते अधिक तक्रारी नोंदवतात, अधिक स्वयंसेवा करतात आणि अधिक विश्वास ठेवतात. हे आकडे काय शक्य होते ते दर्शवतात.",
        demoLabel: "दर्शवण्यासाठी नमुना आकडेवारी",
        stats: {
          solved: {
            label: "तक्रारी सोडवल्या",
          },
          citizens: {
            label: "नागरिकांना मदत केली",
          },
          volunteer: {
            label: "स्वयंसेवक तास",
          },
          resolution: {
            label: "निवारण दर",
          },
        },
      },
      final_cta: {
        title: "प्रभाव पाडण्यासाठी तयार आहात का?",
        description: "आजच अधिक स्वच्छ, सुरक्षित आणि अधिक प्रतिसाद देणारा समुदाय तयार करण्यात आपल्या शेजाऱ्यांसोबत सामील व्हा.",
        ctas: {
          primary: "तक्रार नोंदवा",
          secondary: "लाइव्ह मॅप पहा",
        },
      },
    },
    dashboard: {
      title: "डॅशबोर्ड",
      subtitle: "तुमचा नागरी प्रभाव",
      description: "तुमच्या नवीनतम तक्रारींचे पुनरावलोकन करा, प्रगतीचा मागोवा घ्या आणि तुमची तक्रार नागरी प्रक्रियेतून कशी पुढे जात आहे ते पहा.",
      stats: {
        totalReports: "एकूण तक्रारी",
        pending: "प्रलंबित",
        assigned: "नियुक्त",
        inProgress: "प्रगतीत",
        resolved: "निराकरण झाले",
      },
      gamification: {
        levelProgress: "पुढील स्तरासाठी प्रगती",
        pointsRequired: "पुढील स्तर {{level}} गाठण्यासाठी {{points}} गुण आवश्यक",
        dailyStreak: "दैनिक स्ट्रीक",
        streakDays: "{{days}} दिवस",
        streakTip: "तुमची स्ट्रीक कायम ठेवण्यासाठी दररोज लॉग इन करा!",
        badgesEarned: "मिळवलेले बॅज",
        badgesTip: "गुण मिळवण्यासाठी यश अनलॉक करा!",
        cityRank: "शहर रँक",
        rankTip: "वैश्विक बोर्डवर तुमचे स्थान",
        badgesTitle: "नागरी बॅज",
        badgesSubtitle: "सामुदायिक स्वच्छता आणि तक्रार ट्रॅकिंगमध्ये योगदान देऊन बॅज मिळवा.",
        pts: "गुण",
        badge: "बॅज",
        badges: "बॅज",
      },
      leaderboard: {
        title: "शहर लीडरबोर्ड",
        subtitle: "अव्वल १० नायक",
        empty: "बोर्डवर अजून कोणताही नायक नाही.",
        pts: "गुण",
      },
      performance: {
        title: "कामगिरी",
        description: "AI विश्लेषण मेट्रिक्स आणि प्राधान्य वितरण.",
        verifiedByAi: "AI द्वारे सत्यापित",
        verifiedTip: "AI विश्लेषण असलेल्या तक्रारी",
        highPriority: "उच्च प्राधान्य",
        highPriorityTip: "प्राधान्य स्कोअर ≥ 80",
        averagePriority: "सरेराश प्राधान्य",
        averagePriorityTip: "AI तक्रारींचा सरासरी स्कोअर",
        averageConfidence: "सरासरी AI विश्वास",
        averageConfidenceTip: "AI प्रक्रियेचा विश्वास",
      },
      recentReports: {
        title: "अलीकडील तक्रारी",
        subtitle: "तुमच्याद्वारे सबमिट केलेल्या नवीनतम समस्या.",
        loading: "तुमची तक्रार लोड होत आहे...",
        empty: "अद्याप कोणतीही तक्रार आढळली नाही. प्रगतीचा मागोवा घेण्यासाठी पहिली तक्रार सबमिट करा.",
      },
    },
    reportForm: {
      title: "नागरी समस्या नोंदवा",
      description: "समस्येचा फोटो किंवा लहान व्हिडिओ अपलोड करा. आमचे AI पुराव्यांचे विश्लेषण करेल आणि योग्य विभागाची शिफारस करेल.",
      uploadTitle: "पुरावा अपलोड करा",
      uploadTip: "समर्थित स्वरूप: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "वर्णन",
      descPlaceholder: "नागरी समस्येचे वर्णन करा... (तुम्ही मायक्रोफोन बटणावर क्लिक करून देखील बोलू शकता)",
      categoryLabel: "श्रेणी",
      locationStatus: "स्थानाची स्थिती",
      locationDetail: {
        waiting: "ब्राउझर परवानगीची वाट पाहत आहे...",
        denied: "स्थान परवानगी नाकारली. तुम्ही अद्याप स्थानाशिवाय सबमिट करू शकता.",
        detected: "स्थान आढळले",
        requesting: "स्थानाची विनंती करत आहे...",
      },
      locationCard: {
        address: "पत्ता",
        latitude: "अक्षांश",
        longitude: "रेखांश",
        city: "शहर",
        region: "राज्य",
        accuracy: "अचूकता: {{accuracy}} मीटर",
      },
      buttons: {
        analyze: "AI सह विश्लेषण करा",
        analyzing: "विश्लेषण होत आहे...",
        complete: "✓ AI विश्लेषण पूर्ण",
        submit: "तक्रार सबमिट करा",
        submitting: "सबमिट होत आहे...",
        reset: "रीसेट करा",
      },
      speech: {
        start: "आवाज रेकॉर्डिंग सुरू करा",
        stop: "आवाज रेकॉर्डिंग बंद करा",
        unsupported: "व्हॉइस-टू-टेक्स्ट तुमच्या ब्राउझरद्वारे समर्थित नाही.",
      },
    },
    reports: {
      title: "माझ्या तक्रारी",
      subtitle: "तक्रार इतिहास",
      description: "तुम्ही सबमिट केलेली प्रत्येक समस्या ब्राउझ करा आणि समुदाय पुनरावलोकन प्रक्रियेतील प्रगती पहा.",
      loading: "तुमची तक्रार लोड होत आहे...",
      empty: {
        line1: "तुम्ही अद्याप कोणतीही तक्रार सबमिट केलेली नाही.",
        line2: "नवीन समस्या नोंदवण्यासाठी तक्रार पृष्ठावर जा.",
      },
    },
    reportDetail: {
      title: "तक्रारीचा तपशील",
      subtitle: "लाइव्ह ट्रॅकिंग",
      description: "या तक्रारीसाठी सद्य स्थिती, विश्लेषण, समयरेखा आणि विभाग नियुक्तीचे पुनरावलोकन करा.",
      created: "तयार केले",
      lastUpdated: "अंतिम अद्यतन",
      location: "स्थान",
      noLocation: "स्थान उपलब्ध नाही",
      assignedDept: "नियुक्त विभाग",
      notAssigned: "नियुक्त नाही",
      aiAnalysis: {
        title: "AI विश्लेषण",
        category: "श्रेणी",
        department: "विभाग",
        severity: "तीव्रता",
        priority: "प्राधान्य स्कोअर",
        confidence: "AI विश्वास",
        summary: "सारांश",
        empty: "या तक्रारीसाठी कोणतेही AI विश्लेषण उपलब्ध नाही.",
        translating: "सारांश भाषांतरित होत आहे...",
      },
      speech: {
        read: "मजकूर मोठ्याने वाचा",
        stop: "वाचन थांबवा",
      },
      notFound: {
        title: "तक्रार आढळली नाही",
        description: "तुम्ही जी तक्रार पाहण्याचा प्रयत्न करत आहात ती अस्तित्वात नाही किंवा ती पाहण्याची तुम्हाला परवानगी नाही.",
        back: "तक्रारींवर परत जा",
      },
    },
    tracking: {
      progress: {
        title: "तक्रार प्रगती",
        description: "तुमच्या तक्रारीचा सद्य टप्पा ट्रॅक करा.",
      },
      timeline: {
        title: "ट्रॅकिंग टाइमलाइन",
        description: "अलीकडील अपडेट कालक्रमानुसार दाखवले आहेत.",
      },
      status: {
        Pending: "प्रलंबित",
        Verified: "सत्यापित",
        Assigned: "नियुक्त",
        "In Progress": "प्रगतीत",
        Resolved: "निराकरण झाले",
        "Issue submitted": "तक्रार नोंदवली",
        "AI verification completed": "एआय पडताळणी पूर्ण झाली",
        "Assigned to department": "विभागाकडे वर्ग केले",
        "Work started": "काम सुरू झाले",
        "Issue resolved": "तक्रार सुटली",
      },
    },
    liveMap: {
      title: "लाइव्ह नागरी नकाशा",
      subtitle: "रिअल-टाइम रिपोर्टिंग",
      description: "वास्तविक वेळेत संपूर्ण परिसरातील चालू नागरी समस्या पहा आणि ट्रॅक करा.",
      statistics: "आकडेवारी",
      legend: "दंतकथा",
      filters: {
        category: "सर्व श्रेणी",
        status: "सर्व स्थिती",
        all: "सर्व",
      },
      popup: {
        department: "नियुक्त विभाग",
        priority: "प्राधान्य स्कोअर",
        severity: "तीव्रता",
        confidence: "AI विश्वास",
        address: "पत्ता",
        time: "नोंदवलेली वेळ",
        button: "लाइव्ह ट्रॅकिंग पहा →",
      },
      empty: {
        title: "कोणत्याही नागरी तक्रारी उपलब्ध नाहीत.",
        description: "चयनित फिल्टरशी कोणतीही सक्रिय तक्रार जुळत नाही किंवा त्यात भौगोलिक स्थान तपशील नाही. नंतर पुन्हा तपासा किंवा नवीन तक्रार सबमिट करा.",
      },
      connecting: "फायरबेसशी कनेक्ट करत आहे...",
      loading: "परस्परसंवादी नकाशा लोड होत आहे...",
    },
    badges: {
      first_report: {
        name: "पहिली तक्रार",
        description: "तुमची पहिली नागरी तक्रार सबमिट केली.",
      },
      five_reports: {
        name: "५ तक्रारी",
        description: "पाच नागरी तक्रारी सबमिट केल्या.",
      },
      ten_reports: {
        name: "१० तक्रारी",
        description: "दहा नागरी तक्रारी सबमिट केल्या.",
      },
      points_100: {
        name: "१०० हिरो गुण",
        description: "१०० हिरो गुणांपर्यंत पोहोचले.",
      },
      points_500: {
        name: "५०० हिरो गुण",
        description: "५०० हिरो गुणांपर्यंत पोहोचले.",
      },
      streak_7: {
        name: "७ दिवसांची स्ट्रीक",
        description: "७ दिवसांची सक्रिय स्ट्रीक राखली.",
      },
      clean_city_hero: {
        name: "स्वच्छ शहर नायक",
        description: "शहर स्वच्छ ठेवण्यास मदत करण्यासाठी तक्रार सबमिट केली.",
      },
      traffic_guardian: {
        name: "वाहतूक रक्षक",
        description: "वाहतूक संकेत किंवा सुरक्षा समस्यांची तक्रार केली.",
      },
      environment_protector: {
        name: "पर्यावरण रक्षक",
        description: "पाणी गळती किंवा सांडपाण्याच्या समस्यांची तक्रार केली.",
      },
      community_starter: {
        name: "कम्युनिटी स्टार्टर",
      },
      civic_volunteer: {
        name: "नागरी स्वयंसेवक",
      },
      community_guardian: {
        name: "कम्युनिटी गार्डियन",
      },
      city_hero: {
        name: "सिटी हिरो",
      },
      civic_champion: {
        name: "नागरी चॅम्पियन",
      },
      community_legend: {
        name: "कम्युनिटी लेजंड",
      },
    },
    toasts: {
      badgeUnlocked: "बॅज अनलॉक झाला",
      pointsAwarded: "+{{points}} हिरो गुण",
    },
    categories: {
      Roads: "रस्ते",
      Garbage: "कचरा",
      Water: "पाणी",
      Traffic: "वाहतूक",
      "Street Lights": "स्ट्रीट लाईट्स",
      Safety: "सुरक्षा",
      Other: "इतर",
    },
    departments: {
      "Public Works Department": "सार्वजनिक बांधकाम विभाग",
      "Municipal Corporation": "महानगरपालिका",
      "Water Department": "पाणी विभाग",
      "Traffic Police": "वाहतूक पोलीस",
      "Electricity Department": "विद्युत विभाग",
      "Public Safety": "सार्वजनिक सुरक्षा",
      "Environment Department": "पर्यावरण विभाग",
      "Awaiting Assignment": "नियुक्तीची प्रतीक्षा आहे",
    },
    severity: {
      Low: "कमी",
      Medium: "मध्यम",
      High: "उच्च",
      Critical: "गंभीर",
      Pending: "प्रलंबित",
    },
  },
};

const bn = {
  translation: {
    common: {
      loading: "লোড হচ্ছে...",
      error: "ত্রুটি",
      reset: "রিসেট করুন",
      submit: "জমা দিন",
      cancel: "বাতিল করুন",
      back: "ফিরে যান",
      retry: "আবার চেষ্টা করুন",
      progress: "অগ্রগতি",
      chooseFile: "ফাইল বেছে নিন",
      camera: "ক্যামেরা",
      dragDrop: "এখানে একটি ছবি বা ভিডিও টেনে আনুন",
      viewLiveTracking: "লাইভ ট্র্যাকিং দেখুন",
      play: "চালান",
      pause: "বিরতি দিন",
      resume: "আবার শুরু করুন",
      stop: "থামান",
      preview: "পূর্বরূপ",
      remove: "সরান",
    },
    navbar: {
      home: "হোম",
      report: "অভিযোগ করুন",
      map: "লাইভ ম্যাপ",
      dashboard: "ড্যাশবোর্ড",
      myReports: "আমার অভিযোগ সমূহ",
      login: "গুগল দিয়ে সাইন ইন করুন",
      logout: "লগআউট",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      privacy: "গোপনীয়তা",
      terms: "শর্তাবলী",
      contact: "যোগাযোগ",
      copyright: "© {{year}} কমিউনিটি হিরো। সর্বস্বত্ব সংরক্ষিত।",
    },
    landing: {
      hero: {
        eyebrow: "AI-চালিত নাগরিক বুদ্ধিমত্তা প্ল্যাটফর্ম",
        tagline: "একটি রিপোর্ট। ছয়টি AI এজেন্ট। একটি শক্তিশালী সম্প্রদায়।",
        headline: {
          before: "যখন প্রতিবেশীরা সোচ্চার হয়, ",
          highlight: "তখন সম্প্রদায় বদলে যায়।",
        },
        description: "কমিউনিটি হিরো একটিমাত্র ছবি এবং ভয়েস নোটকে একটি যাচাইকৃত, অগ্রাধিকারপ্রাপ্ত এবং ট্র্যাকযোগ্য নাগরিক পদক্ষেপে রূপান্তর করে—যাতে প্রতিটি রিপোর্ট সঠিক কর্তৃপক্ষের কাছে পৌঁছায় এবং প্রতিটি বাসিন্দা অবহিত থাকে।",
        ctas: {
          primary: "অভিযোগ জানান",
          secondary: "লাইভ ম্যাপ দেখুন",
        },
        trust_badges: {
          "ai-powered": "AI চালিত",
          "real-time": "রিয়েল-টাইম ট্র্যাকিং",
          "multilingual": "বহুভাষিক সহায়তা",
        },
      },
      problem: {
        eyebrow: "নাগরিক সমস্যা",
        title: "রিপোর্টিং মানুষকে সংযুক্ত করার জন্য হওয়া উচিত—কাগজপত্রের নিচে কবর দেওয়ার জন্য নয়",
        description: "অধিকাংশ শহর এখনও ফর্ম, ফোন কল এবং আশার ওপর চলে। নাগরিকরা একবার রিপোর্ট করে, তারপর আর কিছুই শুনতে পায় না। বিশ্বাস নষ্ট হয়। সমস্যা বাড়তে থাকে। কমিউনিটি হিরো এই দূরত্ব দূর করার জন্য তৈরি হয়েছে।",
        cards: {
          "black-hole": {
            title: "রিপোর্টগুলো ব্ল্যাক হোলে হারিয়ে যায়",
            description: "নাগরিকরা সমস্যা জমা দেয় কিন্তু কোনো আপডেট পায় না। স্বচ্ছতা না থাকায় মানুষ রিপোর্ট করা বন্ধ করে দেয়—এবং সমস্যাগুলো ক্রমাগত বাড়তে থাকে।",
          },
          "no-accountability": {
            title: "ফলাফলের দায়িত্ব কেউ নেয় না",
            description: "বিভাগগুলো টিকিটগুলো একে অপরের কাছে স্থানান্তর করে। বাসিন্দারা দেখতে পান না কে দায়ী বা কাজ কখন শুরু হবে।",
          },
          "language-barrier": {
            title: "ভাষা মানুষকে বাইরে রাখে",
            description: "অফিসিয়াল পোর্টালগুলো ইংরেজি দক্ষতা এবং ডিজিটাল সাক্ষরতা ধরে নেয়, যার ফলে সাহায্য প্রয়োজন এমন সম্প্রদায়গুলোই বাদ পড়ে যায়।",
          },
          "slow-response": {
            title: "জরুরি অবস্থা অদৃশ্য থাকে",
            description: "স্প্রেডশীটে একটি গর্ত এবং গ্যাস লিক একই রকম দেখায়। বুদ্ধিমান বাছাই না থাকলে, জরুরি সমস্যাগুলো লাইনে অপেক্ষা করতে থাকে।",
          },
        },
      },
      solution: {
        eyebrow: "AI সমাধান",
        title: "নাগরিক রিপোর্ট থেকে সামাজিক সমাধান পর্যন্ত",
        description: "কমিউনিটি হিরো নাগরিক জীবনের জন্য একটি AI অপারেটিং সিস্টেম। প্রতিটি রিপোর্ট বিশেষায়িত এজেন্টের মধ্য দিয়ে প্রবাহিত হয় যা বোঝে, যাচাই করে, অগ্রাধিকার দেয় এবং সমন্বয় করে—তারপর সম্প্রদায়কে পুনরায় সংযুক্ত করে।",
        flow: {
          citizen: {
            label: "নাগরিক",
            detail: "একটি ছবি তোলে, ভয়েস নোট রেকর্ড করে, অথবা ম্যাপে ট্যাপ করে",
          },
          agents: {
            label: "AI এজেন্টস",
            detail: "ছয়টি বিশেষায়িত এজেন্ট রিপোর্ট বিশ্লেষণ, যাচাই এবং রুট করে",
          },
          authorities: {
            label: "কর্তৃপক্ষ",
            detail: "ওয়ার্ড ইঞ্জিনিয়ার এবং বিভাগগুলো অগ্রাধিকারপ্রাপ্ত কাজের অর্ডার পায়",
          },
          community: {
            label: "সম্প্রদায়",
            detail: "প্রতিবেশীরা অগ্রগতি ট্র্যাক করে এবং সমাধান যাচাই করে",
          },
          resolution: {
            label: "সমাধান",
            detail: "প্রমাণের সাথে সমস্যা বন্ধ হয়—এবং বিশ্বাস প্রতিটি ব্লকে পুনরায় গড়ে ওঠে",
          },
        },
      },
      agents: {
        eyebrow: "AI এজেন্ট পাইপলাইন",
        title: "ছয়টি এজেন্ট। একটি সমন্বিত কর্মপ্রবাহ।",
        description: "প্রতিটি এজেন্টের একটি মাত্র দায়িত্ব থাকে। একসাথে তারা নাগরিক ইনপুটকে কার্যকর বুদ্ধিমত্তায় রূপান্তর করে।",
        list: {
          vision: {
            title: "ভিশন এজেন্ট",
            responsibility: "নাগরিক রিপোর্ট থেকে ছবি এবং ভিজ্যুয়াল প্রমাণের বিশ্লেষণ করে",
          },
          geo: {
            title: "জিও এজেন্ট",
            responsibility: "নির্দিষ্ট ওয়ার্ড সীমানা এবং ল্যান্ডমার্কে সমস্যা ম্যাপ করে",
          },
          trust: {
            title: "ট্রাস্ট এজেন্ট",
            responsibility: "যাচাই করে এবং ডুপ্লিকেট বা স্প্যাম রিপোর্ট চিহ্নিত করে",
          },
          priority: {
            title: "প্রায়োরিটি এজেন্ট",
            responsibility: "দ্রুত প্রতিক্রিয়ার জন্য জরুরি অবস্থা এবং সামাজিক প্রভাবকে র্যাঙ্ক করে",
          },
          prediction: {
            title: "প্রেডিকশন এজেন্ট",
            responsibility: "ঐতিহাসিক প্যাটার্নের ভিত্তিতে সমাধানের সময়সীমা পূর্বাভাস দেয়",
          },
          copilot: {
            title: "কমিউনিটি কোপাইলট",
            responsibility: "নাগরিকদের তাদের নিজস্ব ভাষায় গাইড করে এবং প্রতিটি ধাপ ব্যাখ্যা করে",
          },
        },
      },
      live_tracking: {
        eyebrow: "লাইভ ট্র্যাকিং পূর্বরূপ",
        title: "প্রতিটি রিপোর্ট। প্রতিটি স্ট্যাটাস। রিয়েল টাইমে।",
        description: "বাসিন্দা এবং কর্মকর্তারা একটি স্বচ্ছ ড্যাশবোর্ড ভাগ করে নেন—যাতে কাউকে অভিযোগের কী হলো তা জানতে হেল্পলাইনে কল করতে না হয়।",
        sampleLabel: "নমুনা ড্যাশবোর্ড পূর্বরূপ",
        labels: {
          engineerStatus: "ইঞ্জিনিয়ার স্ট্যাটাস",
          eta: "আনুমানিক সময়",
          verification: "সামাজিক যাচাইকরণ",
          progress: "অগ্রগতি",
        },
        issue: {
          category: "রাস্তা মেরামত",
          ward: "ওয়ার্ড ১৮",
          engineerStatus: "ইঞ্জিনিয়ার নিযুক্ত — পরিদর্শন সম্পন্ন",
          eta: "Estimated resolution: 4 days",
          verification: "৫ জনের মধ্যে ৩ জন প্রতিবেশী ঘটনাস্থলে যাচাই করেছেন",
        },
      },
      twin: {
        eyebrow: "কমিউনিটি ডিজিটাল টুইন",
        title: "আপনার প্রতিবেশী এলাকা, পরিমাপকৃত এবং অনুধাবিত",
        description: "AI রিপোর্ট, সমাধান এবং সামাজিক প্রতিক্রিয়াকে সচল স্বাস্থ্য স্কোরে রূপান্তরিত করে—নেতা ও বাসিন্দাদের নাগরিক কল্যাণের একটি যৌথ চিত্র প্রদান করে।",
        demoLabel: "AI-উৎপন্ন নমুনা স্কোর",
        scores: {
          infrastructure: {
            label: "অবকাঠামো",
            trend: "এই মাসে +৩",
          },
          safety: {
            label: "নিরাপত্তা",
            trend: "এই মাসে +৫",
          },
          cleanliness: {
            label: "পরিচ্ছন্নতা",
            trend: "এই মাসে +২",
          },
          water: {
            label: "জল সরবরাহ",
            trend: "স্থিতিশীল",
          },
          health: {
            label: "সামাজিক স্বাস্থ্য",
            trend: "এই মাসে +৪",
          },
        },
      },
      google: {
        eyebrow: "গুগলের ওপর নির্মিত",
        title: "সম্প্রদায়গুলো ইতিমধ্যে বিশ্বাস করে এমন প্ল্যাটফর্ম দ্বারা চালিত",
        description: "কমিউনিটি হিরো গুগলের প্রযুক্তিগুলোকে শুরু থেকে শেষ পর্যন্ত সংহত করে—যাতে বুদ্ধিমত্তা, অবকাঠামো এবং অন্তর্দৃষ্টি একসঙ্গে বৃদ্ধি পায়।",
        technologies: {
          "ai-studio": {
            title: "গুগল AI স্টুডিও",
            description: "জেমিনি প্রতিটি এজেন্টের সিদ্ধান্তকে চালিত করে—ভিশন বিশ্লেষণ থেকে শুরু করে কমিউনিটি কোপাইলটের প্রতিক্রিয়া পর্যন্ত।",
          },
          firebase: {
            title: "ফায়ারবেস",
            description: "যাচাইকরণ, রিয়েল-টাইম ডেটা সিঙ্ক এবং সুরক্ষিত স্টোরেজ রিপোর্টগুলোকে তাৎক্ষণিকভাবে সচল রাখে।",
          },
          maps: {
            title: "গুগল ম্যাপস",
            description: "সঠিক ভূ-অবস্থান, ওয়ার্ড ম্যাপিং এবং লাইভ সমস্যা পিন রিপোর্টগুলোকে স্থানগুলোর সাথে যুক্ত করে।",
          },
          speech: {
            title: "স্পিচ API",
            description: "ভয়েস-টু-টেক্সট এবং টেক্সট-টু-স্পিচ প্রত্যেক বাসিন্দাকে স্বাভাবিকভাবে রিপোর্ট করার অনুমতি দেয়।",
          },
          translate: {
            title: "গুগল ট্রান্সলেট",
            description: "বহুভাষিক সহায়তা নিশ্চিত করে যে ভাষার কারণে কোনো প্রতিবেশী যেন বাদ না পড়ে।",
          },
          analytics: {
            title: "গুগল অ্যানালিটিক্স",
            description: "ব্যবহার এবং প্রভাবের মেট্রিক্স শহরগুলোকে কী কাজ করছে এবং কোথায় বিনিয়োগ করতে হবে তা পরিমাপ করতে সহায়তা করে।",
          },
        },
      },
      impact: {
        eyebrow: "সামাজিক প্রভাব",
        title: "স্বচ্ছতা যে পরিবর্তন আনে",
        description: "যখন নাগরিকরা অগ্রগতি দেখে, তখন তারা আরও বেশি রিপোর্ট করে, আরও বেশি স্বেচ্ছাসেবা দেয় এবং আরও বেশি বিশ্বাস করে। এই সংখ্যাগুলো দেখায় কী সম্ভব হতে পারে।",
        demoLabel: "প্রদর্শনের জন্য নমুনা পরিসংখ্যান",
        stats: {
          solved: {
            label: "সমস্যা সমাধান হয়েছে",
          },
          citizens: {
            label: "নাগরিকদের সাহায্য করা হয়েছে",
          },
          volunteer: {
            label: "স্বেচ্ছাসেবক ঘন্টা",
          },
          resolution: {
            label: "সমাধানের হার",
          },
        },
      },
      final_cta: {
        title: "প্রভাব ফেলতে প্রস্তুত তো?",
        description: "আজই একটি পরিচ্ছন্ন, নিরাপদ এবং আরও প্রতিক্রিয়াশীল সম্প্রদায় গড়ে তুলতে আপনার প্রতিবেশীদের সাথে যোগ দিন।",
        ctas: {
          primary: "অভিযোগ জানান",
          secondary: "লাইভ ম্যাপ দেখুন",
        },
      },
    },
    dashboard: {
      title: "ড্যাশবোর্ড",
      subtitle: "আপনার নাগরিক প্রভাব",
      description: "আপনার সর্বশেষ জমা দেওয়া রিপোর্টগুলি পর্যালোচনা করুন, অগ্রগতি ট্র্যাক করুন এবং দেখুন কীভাবে আপনার রিপোর্ট সামাজিক প্রক্রিয়ার মাধ্যমে এগিয়ে চলছে।",
      stats: {
        totalReports: "মোট রিপোর্ট",
        pending: "মুলতুবি",
        assigned: "বরাদ্দকৃত",
        inProgress: "প্রক্রিয়াধীন",
        resolved: "সমাধানকৃত",
      },
      gamification: {
        levelProgress: "পরবর্তী স্তরের জন্য অগ্রগতি",
        pointsRequired: "পরবর্তী স্তর {{level}} এ পৌঁছানোর জন্য {{points}} পয়েন্ট প্রয়োজন",
        dailyStreak: "দৈনিক স্ট্রিক",
        streakDays: "{{days}} দিন",
        streakTip: "আপনার স্ট্রিক বজায় রাখতে প্রতিদিন লগ ইন করুন!",
        badgesEarned: "অর্জিত ব্যাজ",
        badgesTip: "পয়েন্ট অর্জন করতে অর্জনগুলি আনলক করুন!",
        cityRank: "শহর র্যাঙ্ক",
        rankTip: "গ্লোবাল বোর্ডে আপনার অবস্থান",
        badgesTitle: "নাগরিক ব্যাজ",
        badgesSubtitle: "সামাজিক পরিচ্ছন্নতা এবং রিপোর্ট ট্র্যাকিংয়ে অবদান রেখে ব্যাজ অর্জন করুন।",
        pts: "পয়েন্ট",
        badge: "ব্যাজ",
        badges: "ব্যাজ",
      },
      leaderboard: {
        title: "শহর লিডারবোর্ড",
        subtitle: "সেরা ১০ নায়ক",
        empty: "বোর্ডে এখনো কোনো নায়ক নেই।",
        pts: "পয়েন্ট",
      },
      performance: {
        title: "কর্মক্ষমতা",
        description: "AI বিশ্লেষণ মেট্রিক্স এবং অগ্রাধিকার বণ্টন।",
        verifiedByAi: "AI দ্বারা যাচাইকৃত",
        verifiedTip: "AI বিশ্লেষণ সম্বলিত রিপোর্ট",
        highPriority: "উচ্চ অগ্রাধিকার",
        highPriorityTip: "অগ্রাধিকার স্কোর ≥ ৮০",
        averagePriority: "গড় অগ্রাধিকার",
        averagePriorityTip: "AI রিপোর্টের গড় স্কোর",
        averageConfidence: "গড় AI আত্মবিশ্বাস",
        averageConfidenceTip: "AI প্রক্রিয়াকরণের আত্মবিশ্বাস",
      },
      recentReports: {
        title: "সাম্প্রতিক রিপোর্টগুলি",
        subtitle: "আপনার জমা দেওয়া সর্বশেষ সমস্যাগুলি।",
        loading: "আপনার রিপোর্ট লোড হচ্ছে...",
        empty: "এখনো কোনো রিপোর্ট পাওয়া যায়নি। অগ্রগতি ট্র্যাক করতে আপনার প্রথম রিপোর্ট জমা দিন।",
      },
    },
    reportForm: {
      title: "একটি নাগরিক সমস্যা রিপোর্ট করুন",
      description: "সমস্যার একটি ছবি বা ছোট ভিডিও আপলোড করুন। আমাদের AI প্রমাণ বিশ্লেষণ করবে এবং উপযুক্ত বিভাগের সুপারিশ করবে।",
      uploadTitle: "প্রমাণ আপলোড করুন",
      uploadTip: "সমর্থিত ফর্ম্যাট: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "বর্ণন",
      descPlaceholder: "নাগরিক সমস্যাটি বর্ণনা করুন... (আপনি মাইক্রোফোন বোতামে ক্লিক করেও বলতে পারেন)",
      categoryLabel: "শ্রেণী",
      locationStatus: "অবস্থানের অবস্থা",
      locationDetail: {
        waiting: "ব্রাউজার অনুমতির জন্য অপেক্ষা করা হচ্ছে...",
        denied: "অবস্থানের অনুমতি প্রত্যাখ্যান করা হয়েছে। আপনি এখনও অবস্থান ছাড়াই জমা দিতে পারেন।",
        detected: "অবস্থান সনাক্ত করা হয়েছে",
        requesting: "অবস্থানের অনুরোধ করা হচ্ছে...",
      },
      locationCard: {
        address: "ঠিকানা",
        latitude: "অক্ষরেখা",
        longitude: "দ্রাঘিমারেখা",
        city: "শহর",
        region: "রাজ্য",
        accuracy: "সঠিকতা: {{accuracy}} মিটার",
      },
      buttons: {
        analyze: "AI দিয়ে বিশ্লেষণ করুন",
        analyzing: "বিশ্লেষণ করা হচ্ছে...",
        complete: "✓ AI বিশ্লেষণ সম্পন্ন",
        submit: "রিপোর্ট জমা দিন",
        submitting: "জমা দেওয়া হচ্ছে...",
        reset: "রিসেট করুন",
      },
      speech: {
        start: "ভয়েস রেকর্ডিং শুরু করুন",
        stop: "ভয়েস রেকর্ডিং বন্ধ করুন",
        unsupported: "ভয়েস-টু-টেক্সট আপনার ব্রাউজারে সমর্থিত নয়।",
      },
    },
    reports: {
      title: "আমার অভিযোগ সমূহ",
      subtitle: "রিপোর্টের ইতিহাস",
      description: "আপনার জমা দেওয়া প্রতিটি সমস্যা ব্রাউজ করুন এবং সম্প্রদায় পর্যালোচনা প্রক্রিয়ার স্থিতি আপডেট দেখুন।",
      loading: "আপনার রিপোর্ট লোড হচ্ছে...",
      empty: {
        line1: "আপনি এখনও কোনো রিপোর্ট জমা দেননি।",
        line2: "একটি নতুন সমস্যা নথিভুক্ত করতে রিপোর্ট পৃষ্ঠায় যান।",
      },
    },
    reportDetail: {
      title: "রিপোর্টের বিবরণ",
      subtitle: "লাইভ ট্র্যাকিং",
      description: "এই রিপোর্টের বর্তমান স্থিতি, বিশ্লেষণ, সময়রেখা এবং বিভাগ বরাদ্দ পর্যালোচনা করুন।",
      created: "তৈরি করা হয়েছে",
      lastUpdated: "সর্বশেষ আপডেট",
      location: "অবস্থান",
      noLocation: "অবস্থান উপলব্ধ নেই",
      assignedDept: "বরাদ্দকৃত বিভাগ",
      notAssigned: "বরাদ্দ করা হয়নি",
      aiAnalysis: {
        title: "AI বিশ্লেষণ",
        category: "শ্রেণী",
        department: "বিভাগ",
        severity: "তীব্রতা",
        priority: "অগ্রাধিকার স্কোর",
        confidence: "AI আত্মবিশ্বাস",
        summary: "সারসংক্ষেপ",
        empty: "এই রিপোর্টের জন্য কোনো AI বিশ্লেষণ উপলব্ধ নেই।",
        translating: "সারসংক্ষেপ অনুবাদ করা হচ্ছে...",
      },
      speech: {
        read: "বিষয়বস্তু জোরে পড়ুন",
        stop: "পড়া বন্ধ করুন",
      },
      notFound: {
        title: "রিপোর্ট পাওয়া যায়নি",
        description: "আপনি যে রিপোর্টটি দেখার চেষ্টা করছেন তা বিদ্যমান নেই বা এটি দেখার অনুমতি আপনার নেই।",
        back: "রিপোর্টে ফিরে যান",
      },
    },
    tracking: {
      progress: {
        title: "রিপোর্টের অগ্রগতি",
        description: "আপনার রিপোর্টের বর্তমান ধাপ ট্র্যাক করুন।",
      },
      timeline: {
        title: "ট্র্যাকিং টাইমলাইন",
        description: "সাম্প্রতিক আপডেটগুলি কালানুক্রমিক ক্রমে দেখানো হয়েছে।",
      },
      status: {
        Pending: "মুলতুবি",
        Verified: "যাচাইকৃত",
        Assigned: "বরাদ্দকৃত",
        "In Progress": "প্রক্রিয়াধীন",
        Resolved: "সমাধানকৃত",
        "Issue submitted": "সমস্যা জমা দেওয়া হয়েছে",
        "AI verification completed": "এআই যাচাইকরণ সম্পন্ন হয়েছে",
        "Assigned to department": "বিভাগে বরাদ্দ করা হয়েছে",
        "Work started": "কাজ শুরু হয়েছে",
        "Issue resolved": "সমস্যা সমাধান হয়েছে",
      },
    },
    liveMap: {
      title: "লাইভ সামাজিক মানচিত্র",
      subtitle: "রিয়েল-টাইম রিপোর্টিং",
      description: "বাস্তব সময়ে সম্প্রদায় জুড়ে চলমান নাগরিক সমস্যাগুলি দেখুন এবং ট্র্যাক করুন।",
      statistics: "পরিসংখ্যান",
      legend: "নির্দেশিকা",
      filters: {
        category: "সমস্ত শ্রেণী",
        status: "সমস্ত স্থিতি",
        all: "সব",
      },
      popup: {
        department: "বরাদ্দকৃত বিভাগ",
        priority: "অগ্রাধিকার স্কোর",
        severity: "তীব্রতা",
        confidence: "AI আত্মবিশ্বাস",
        address: "ঠিকানা",
        time: "রিপোর্ট করার সময়",
        button: "লাইভ ট্র্যাকিং দেখুন →",
      },
      empty: {
        title: "কোনো নাগরিক রিপোর্ট উপলব্ধ নেই।",
        description: "নির্বাচিত ফিল্টারের সাথে কোনো সক্রিয় রিপোর্ট মিলছে না বা এতে ভৌগোলিক অবস্থানের তথ্য নেই। পরে আবার দেখুন বা নতুন রিপোর্ট জমা দিন।",
      },
      connecting: "ফায়ারবেসের সাথে সংযুক্ত হচ্ছে...",
      loading: "ইন্টারেক্টিভ মানচিত্র লোড হচ্ছে...",
    },
    badges: {
      first_report: {
        name: "প্রথম রিপোর্ট",
        description: "আপনার প্রথম নাগরিক রিপোর্ট জমা দিয়েছেন।",
      },
      five_reports: {
        name: "৫টি রিপোর্ট",
        description: "পাঁচটি নাগরিক রিপোর্ট জমা দিয়েছেন।",
      },
      ten_reports: {
        name: "১০টি রিপোর্ট",
        description: "দশটি নাগরিক রিপোর্ট জমা দিয়েছেন।",
      },
      points_100: {
        name: "১০০ হিরো পয়েন্ট",
        description: "১০০ হিরো পয়েন্টে পৌঁছেছেন।",
      },
      points_500: {
        name: "৫০০ হিরো পয়েন্ট",
        description: "৫০০ হিরো পয়েন্টে পৌঁছেছেন।",
      },
      streak_7: {
        name: "৭ দিনের স্ট্রিক",
        description: "৭ দিনের সক্রিয় স্ট্রিক বজায় রেখেছেন।",
      },
      clean_city_hero: {
        name: "পরিচ্ছন্ন শহর নায়ক",
        description: "শহর পরিষ্কার রাখতে সাহায্য করার জন্য রিপোর্ট জমা দিয়েছেন।",
      },
      traffic_guardian: {
        name: "ট্রাফিক গার্ডিয়ান",
        description: "ট্রাফিক সিগন্যাল বা নিরাপত্তা সংক্রান্ত সমস্যার রিপোর্ট করেছেন।",
      },
      environment_protector: {
        name: "পরিবেশ রক্ষক",
        description: "জল অপচয় বা নর্দমার সমস্যার রিপোর্ট করেছেন।",
      },
      community_starter: {
        name: "কমিউনিটি স্টার্টার",
      },
      civic_volunteer: {
        name: "নাগরিক স্বেচ্ছাসেবক",
      },
      community_guardian: {
        name: "কমিউনিটি গার্ডিয়ান",
      },
      city_hero: {
        name: "সিটি হিরো",
      },
      civic_champion: {
        name: "নাগরিক চ্যাম্পিয়ন",
      },
      community_legend: {
        name: "কমিউনিটি লেজেন্ড",
      },
    },
    toasts: {
      badgeUnlocked: "ব্যাজ আনলক হয়েছে",
      pointsAwarded: "+{{points}} হিরো পয়েন্ট",
    },
    categories: {
      Roads: "রাস্তাঘাট",
      Garbage: "আবর্জনা",
      Water: "জল",
      Traffic: "ট্রাফিক",
      "Street Lights": "স্ট্রিট লাইট",
      Safety: "নিরাপত্তা",
      Other: "অন্যান্য",
    },
    departments: {
      "Public Works Department": "গণপূর্ত বিভাগ",
      "Municipal Corporation": "পৌরসভা",
      "Water Department": "জল বিভাগ",
      "Traffic Police": "ট্রাফিক পুলিশ",
      "Electricity Department": "বিদ্যুৎ বিভাগ",
      "Public Safety": "জননিরাপত্তা",
      "Environment Department": "পরিবেশ বিভাগ",
      "Awaiting Assignment": "বরাদ্দের অপেক্ষায়",
    },
    severity: {
      Low: "निम्न",
      Medium: "মাঝারি",
      High: "উচ্চ",
      Critical: "সংকটজনক",
      Pending: "মুলতুবি",
    },
  },
};

const ta = {
  translation: {
    common: {
      loading: "ஏற்றப்படுகிறது...",
      error: "பிழை",
      reset: "மீட்டமை",
      submit: "சமர்ப்பி",
      cancel: "ரத்து செய்",
      back: "பின்னால் செல்",
      retry: "மீண்டும் முயற்சி செய்",
      progress: "முன்னேற்றம்",
      chooseFile: "கோப்பைத் தேர்ந்தெடு",
      camera: "கேமரா",
      dragDrop: "படம் அல்லது வீடியோவை இங்கே இழுத்து விடவும்",
      viewLiveTracking: "நேரடி கண்காணிப்பைக் காண்க",
      play: "இயக்கு",
      pause: "நிறுத்து",
      resume: "மீண்டும் தொடங்கு",
      stop: "முடி",
      preview: "முன்னோட்டம்",
      remove: "நீக்கு",
    },
    navbar: {
      home: "முகப்பு",
      report: "புகார் செய்",
      map: "லைவ் மேப்",
      dashboard: "டேஷ்போர்டு",
      myReports: "எனது புகார்கள்",
      login: "கூகுள் மூலம் உள்நுழைக",
      logout: "வெளியேறு",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      privacy: "தனியுரிமை",
      terms: "விதிமுறைகள்",
      contact: "தொடர்பு",
      copyright: "© {{year}} கம்யூனிட்டி ஹீரோ. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
    landing: {
      hero: {
        eyebrow: "AI-ஆல் இயங்கும் குடிமை நுண்ணறிவு தளம்",
        tagline: "ஒரு அறிக்கை. ஆறு AI முகவர்கள். ஒரு வலிமையான சமூகம்.",
        headline: {
          before: "அண்டை வீட்டாரும் குரல் எழுப்பும்போது, ",
          highlight: "சமூகங்கள் மாறுகின்றன.",
        },
        description: "கம்யூனிட்டி ஹீரோ ஒரு புகைப்படம் மற்றும் குரல் குறிப்பை சரிபார்க்கப்பட்ட, முன்னுரிமை அளிக்கப்பட்ட, கண்காணிக்கக்கூடிய குடிமைச் செயலாக மாற்றுகிறது—இதனால் ஒவ்வொரு புகாரும் சரியான அதிகாரியைச் சென்றடைகிறது மற்றும் ஒவ்வொரு குடியிருப்பாளரும் தகவலறிந்து இருக்கிறார்கள்.",
        ctas: {
          primary: "புகாரைப் பதிவுசெய்",
          secondary: "லைவ் மேப்பை ஆராய்",
        },
        trust_badges: {
          "ai-powered": "AI-ஆல் இயங்குகிறது",
          "real-time": "நிகழ்நேர கண்காணிப்பு",
          "multilingual": "பன்மொழி ஆதரவு",
        },
      },
      problem: {
        eyebrow: "குடிமைப் பிரச்சனை",
        title: "புகார் செய்வது மக்களை இணைக்க வேண்டும்—அவர்களை காகித வேலைகளில் புதைக்கக் கூடாது",
        description: "பெரும்பாலான நகரங்கள் இன்னும் படிவங்கள், தொலைபேசி அழைப்புகள் மற்றும் நம்பிக்கையில் இயங்குகின்றன. குடிமக்கள் ஒரு முறை புகார் செய்கிறார்கள், பிறகு எதுவும் கேட்பதில்லை. நம்பிக்கை குறைகிறது. பிரச்சினைகள் குவிகின்றன. கம்யூனிட்டி ஹீரோ இந்த இடைவெளியை அடைக்க உள்ளது.",
        cards: {
          "black-hole": {
            title: "புகார்கள் கருந்துளைக்குள் மறைந்து விடுகின்றன",
            description: "குடிமக்கள் பிரச்சினைகளைச் சமர்ப்பிக்கிறார்கள் மற்றும் எந்தப் புதுப்பிப்பையும் பெறுவதில்லை. தெரிவுநிலை இல்லாமல், மக்கள் புகார் செய்வதை நிறுத்துகிறார்கள்—மற்றும் பிரச்சினைகள் சரிபார்க்கப்படாமல் வளர்கின்றன.",
          },
          "no-accountability": {
            title: "முடிவுக்கு யாரும் பொறுப்பேற்பதில்லை",
            description: "துறைகள் டிக்கெட்டுகளை ஒருவருக்கொருவர் மாற்றித் தருகின்றன. யார் பொறுப்பு அல்லது எப்போது வேலை தொடங்கும் என்பதை குடியிருப்பாளர்களால் பார்க்க முடியாது.",
          },
          "language-barrier": {
            title: "மொழி மக்களைத் தடுக்கிறது",
            description: "அதிகாரப்பூர்வ இணையதளங்கள் ஆங்கிலப் புலமை மற்றும் டிஜிட்டல் கல்வியறிவை அனுமானிக்கின்றன, இதனால் உதவி மிகவும் தேவைப்படும் சமூகங்களை ஒதுக்கி வைக்கின்றன.",
          },
          "slow-response": {
            title: "அவசரம் கண்ணுக்குத் தெரிவதில்லை",
            description: "ஒரு விரிதாளில் ஒரு பள்ளமும் ஒரு எரிவாயு கசிவும் ஒரே மாதிரியாகத் தெரிகின்றன. முக்கிய பிரச்சினைகள் வரிசையில் காத்திருக்கின்றன.",
          },
        },
      },
      solution: {
        eyebrow: "AI தீர்வு",
        title: "ஒரு குடிமகன் புகாரிலிருந்து சமூகத் தீர்வு வரை",
        description: "கம்யூனிட்டி ஹீரோ என்பது குடிமை வாழ்விற்கான ஒரு AI இயக்க முறைமையாகும். ஒவ்வொரு புகாரும் புரிந்து கொள்ளும், சரிபார்க்கும், முன்னுரிமை அளிக்கும் மற்றும் ஒருங்கிணைக்கும் சிறப்பு முகவர்கள் வழியாக பாய்கிறது—பின்னர் சமூகத்தை மீண்டும் இணைக்கிறது.",
        flow: {
          citizen: {
            label: "குடிமகன்",
            detail: "புகைப்படம் எடுக்கிறார், குரல் குறிப்பை பதிவு செய்கிறார் அல்லது வரைபடத்தில் தட்டுகிறார்",
          },
          agents: {
            label: "AI முகவர்கள்",
            detail: "ஆறு சிறப்பு முகவர்கள் புகாரை பகுப்பாய்வு செய்து, சரிபார்த்து, வழியமைக்கிறார்கள்",
          },
          authorities: {
            label: "அதிகாரிகள்",
            detail: "வார்டு பொறியாளர்கள் மற்றும் தகுந்த துறைகள் முன்னுரிமை அளிக்கப்பட்ட பணி ஆணைகளைப் பெறுகின்றன",
          },
          community: {
            label: "சமூகம்",
            detail: "அண்டை வீட்டார் இணைந்து முன்னேற்றத்தைக் கண்காணித்து தீர்வுகளைச் சரிபார்க்கிறார்கள்",
          },
          resolution: {
            label: "தீர்வு",
            detail: "சான்றுகளுடன் பிரச்சினைகள் தீர்க்கப்படுகின்றன—மேலும் நம்பிக்கை மீண்டும் கட்டியெழுப்பப்படுகிறது",
          },
        },
      },
      agents: {
        eyebrow: "AI முகவர் தடம்",
        title: "ஆறு முகவர்கள். ஒரு ஒருங்கிணைந்த பணிப்பாய்வு.",
        description: "ஒவ்வொரு முகவருக்கும் ஒரு பொறுப்பு உள்ளது. ஒன்றாக அவர்கள் குடிமகனின் உள்ளீட்டைச் செயல் நுண்ணறிவாக மாற்றுகிறார்கள்.",
        list: {
          vision: {
            title: "விஷன் முகவர்",
            responsibility: "புகைப்படங்கள் மற்றும் காட்சி ஆதாரங்களை பகுப்பாய்வு செய்கிறார்",
          },
          geo: {
            title: "ஜியோ முகவர்",
            responsibility: "வார்டு எல்லைகள் மற்றும் அடையாளங்களுக்கு பிரச்சினைகளை வரைபடமாக்குகிறார்",
          },
          trust: {
            title: "டிரஸ்ட் முகவர்",
            responsibility: "நகல் அல்லது ஸ்பேம் புகார்களைக் கொடிவிடுகிறார்",
          },
          priority: {
            title: "முன்னுரிமை முகவர்",
            responsibility: "அவசரநிலை மற்றும் சமூக தாக்கத்தை வரிசைப்படுத்துகிறார்",
          },
          prediction: {
            title: "கணிப்பு முகவர்",
            responsibility: "வரலாற்று வடிவங்களின் அடிப்படையில் தீர்வுக்கான காலக்கெடுவைக் கணிக்கிறார்",
          },
          copilot: {
            title: "சமூக வழிகாட்டி",
            responsibility: "குடிமக்களுக்கு அவர்களின் மொழியில் வழிகாட்டுகிறார்",
          },
        },
      },
      live_tracking: {
        eyebrow: "லைவ் ட்ரேக்கிங் முன்னோட்டம்",
        title: "ஒவ்வொரு புகாரும். ஒவ்வொரு நிலையும். நிகழ்நேரத்தில்.",
        description: "குடியிருப்பாளர்களும் அதிகாரிகளும் ஒரு வெளிப்படையான டாஷ்போர்டைப் பகிர்ந்து கொள்கிறார்கள்.",
        sampleLabel: "டாஷ்போர்டு மாதிரி முன்னோட்டம்",
        labels: {
          engineerStatus: "பொறியாளர் நிலை",
          eta: "மதிப்பிடப்பட்ட நேரம்",
          verification: "சமூக சரிபார்ப்பு",
          progress: "முன்னேற்றம்",
        },
        issue: {
          category: "சாலை பழுதுபார்ப்பு",
          ward: "வார்டு 18",
          engineerStatus: "பொறியாளர் நியமிக்கப்பட்டுள்ளார் — ஆய்வு முடிந்தது",
          eta: "Estimated resolution: 4 days",
          verification: "5 இல் 3 அண்டை வீட்டார் தளத்தில் சரிபார்த்துள்ளனர்",
        },
      },
      twin: {
        eyebrow: "சமூக டிஜிட்டல் இரட்டை",
        title: "உங்கள் அக்கம், அளவிடப்பட்டு புரிந்துகொள்ளப்பட்டது",
        description: "AI புகார்கள், தீர்வுகள் மற்றும் சமூகக் கருத்துக்களை ஒரு நேரடி சுகாதார மதிப்பெண்ணில் ஒருங்கிணைக்கிறது.",
        demoLabel: "AI-ஆல் உருவாக்கப்பட்ட மாதிரி மதிப்பெண்கள்",
        scores: {
          infrastructure: {
            label: "கட்டமைப்பு",
            trend: "இந்த மாதம் +3",
          },
          safety: {
            label: "பாதுகாப்பு",
            trend: "இந்த மாதம் +5",
          },
          cleanliness: {
            label: "சுகாதாரம்",
            trend: "இந்த மாதம் +2",
          },
          water: {
            label: "தண்ணீர்",
            trend: "நிலையானது",
          },
          health: {
            label: "சமூக ஆரோக்கியம்",
            trend: "இந்த மாதம் +4",
          },
        },
      },
      google: {
        eyebrow: "கூகுளில் கட்டமைக்கப்பட்டது",
        title: "சமூகங்கள் ஏற்கனவே நம்பும் தளங்களால் இயக்கப்படுகிறது",
        description: "கம்யூனிட்டி ஹீரோ கூகுள் தொழில்நுட்பங்களை தொடக்கம் முதல் முடிவு வரை ஒருங்கிணைக்கிறது.",
        technologies: {
          "ai-studio": {
            title: "கூகுள் AI ஸ்டுடியோ",
            description: "ஜெமினி ஒவ்வொரு முகவரின் முடிவையும் இயக்குகிறது.",
          },
          firebase: {
            title: "ஃபயர்பேஸ்",
            description: "சரிபார்ப்பு, நிகழ்நேர தரவு ஒத்திசைவு மற்றும் பாதுகாப்பான சேமிப்பு.",
          },
          maps: {
            title: "கூகுள் மேப்ஸ்",
            description: "துல்லியமான புவிஇருப்பிடம், வார்டு மேப்பிங் மற்றும் நேரடி பிரச்சினை பின்கள்.",
          },
          speech: {
            title: "ஸ்பீச் API",
            description: "குரல்-ஒலி உரை மாற்றம் மற்றும் உரை-குரல் ஒலி மாற்றம்.",
          },
          translate: {
            title: "கூகுள் மொழியாக்கம்",
            description: "பன்மொழி ஆதரவு மொழியின் காரணமாக எந்த அண்டை வீட்டாரும் தவிர்க்கப்பட மாட்டார்கள்.",
          },
          analytics: {
            title: "கூகுள் அனலிட்டிக்ஸ்",
            description: "பயன்பாடு மற்றும் தாக்க அளவீடுகள்.",
          },
        },
      },
      impact: {
        eyebrow: "சமூக தாக்கம்",
        title: "வெளிப்படைத்தன்மை ஏற்படுத்தும் வேறுபாடு",
        description: "மக்களின் நம்பிக்கைக்கு சான்றாக இவை விளங்குகின்றன.",
        demoLabel: "விளக்கத்திற்கான மாதிரி புள்ளிவிவரங்கள்",
        stats: {
          solved: {
            label: "தீர்க்கப்பட்டவை",
          },
          citizens: {
            label: "உதவிபெற்ற குடிமக்கள்",
          },
          volunteer: {
            label: "சுயசேவை நேரம்",
          },
          resolution: {
            label: "தீர்வு விகிதம்",
          },
        },
      },
      final_cta: {
        title: "தாக்கத்தை ஏற்படுத்தத் தயாரா?",
        description: "இன்றே தூய்மையான, பாதுகாப்பான மற்றும் விரைந்து செயல்படும் சமூகத்தை உருவாக்குங்கள்.",
        ctas: {
          primary: "புகார் செய்",
          secondary: "லைவ் மேப் காண்",
        },
      },
    },
    dashboard: {
      title: "டாஷ்போர்டு",
      subtitle: "உங்களது குடிமை தாக்கம்",
      description: "உங்களது சமீபத்திய புகார்களை மதிப்பாய்வு செய்யவும், முன்னேற்றத்தைக் கண்காணிக்கவும், பார்க்கவும்.",
      stats: {
        totalReports: "மொத்த புகார்கள்",
        pending: "நிலுவையில்",
        assigned: "ஒதுக்கப்பட்டது",
        inProgress: "செயல்பாட்டில்",
        resolved: "தீர்க்கப்பட்டது",
      },
      gamification: {
        levelProgress: "அடுத்த நிலைக்கு முன்னேற்றம்",
        pointsRequired: "அடுத்த நிலையை {{level}} எட்ட இன்னும் {{points}} புள்ளிகள் தேவை",
        dailyStreak: "தினசரி தொடர்ச்சி",
        streakDays: "{{days}} நாட்கள்",
        streakTip: "உங்களது தொடர்ச்சியைத் தக்கவைக்க தினமும் உள்நுழையவும்!",
        badgesEarned: "பெற்ற பேட்ஜ்கள்",
        badgesTip: "புள்ளிகளைப் பெற சாதனைகளைத் திறக்கவும்!",
        cityRank: "நகரத் தரம்",
        rankTip: "உலகளாவிய பலகையில் உங்களது நிலை",
        badgesTitle: "குடிமை பேட்ஜ்கள்",
        badgesSubtitle: "சமூகத் தூய்மை மற்றும் புகார் கண்காணிப்பில் பேட்ஜ்களைப் பெறுங்கள்.",
        pts: "புள்ளிகள்",
        badge: "பேட்ஜ்",
        badges: "பேட்ஜ்கள்",
      },
      leaderboard: {
        title: "நகரத் தரவரிசை",
        subtitle: "சிறந்த 10 வீரர்கள்",
        empty: "பலகையில் இன்னும் எந்த வீரரும் இல்லை.",
        pts: "புள்ளிகள்",
      },
      performance: {
        title: "செயல்திறன்",
        description: "AI பகுப்பாய்வு அளவீடுகள் மற்றும் முன்னுரிமை விநியோகம்.",
        verifiedByAi: "AI-ஆல் சரிபார்க்கப்பட்டது",
        verifiedTip: "AI பகுப்பாய்வு கொண்ட புகார்கள்",
        highPriority: "உயர் முன்னுரிமை",
        highPriorityTip: "முன்னுரிமை மதிப்பெண் ≥ 80",
        averagePriority: "சராசரி முன்னுरीமை",
        averagePriorityTip: "AI புகார்களின் சராசரி மதிப்பெண்",
        averageConfidence: "சராசரி AI நம்பிக்கை",
        averageConfidenceTip: "AI செயலாக்கத்தின் நம்பிக்கை நிலை",
      },
      recentReports: {
        title: "சமீபத்திய புகார்கள்",
        subtitle: "உங்களால் சமர்ப்பிக்கப்பட்ட சமீபத்திய பிரச்சினைகள்.",
        loading: "உங்களது புகார் ஏற்றப்படுகிறது...",
        empty: "இன்னும் எந்தப் புகாரும் காணப்படவில்லை. உங்களது முதல் புகாரைச் சமர்ப்பிக்கவும்.",
      },
    },
    reportForm: {
      title: "ஒரு குடிமைப் பிரச்சினையைப் புகார் செய்",
      description: "பிரச்சினையின் புகைப்படம் அல்லது குறுகிய வீடியோவை பதிவேற்றவும்.",
      uploadTitle: "ஆதாரங்களைப் பதிவேற்று",
      uploadTip: "ஆதரிக்கப்படும் வடிவங்கள்: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "விளக்கம்",
      descPlaceholder: "குடிமைப் பிரச்சினையை விவரிக்கவும்... (மைக்ரோஃபோன் பொத்தானைக் கிளிக் செய்வதன் மூலமும் நீங்கள் பேசலாம்)",
      categoryLabel: "வகை",
      locationStatus: "இருப்பிட நிலை",
      locationDetail: {
        waiting: "உலாவி அனுமதிக்காகக் காத்திருக்கிறது...",
        denied: "இருப்பிட அனுமதி மறுக்கப்பட்டது.",
        detected: "இருப்பிடம் கண்டறியப்பட்டது",
        requesting: "இருப்பிடத்தைக் கோருகிறது...",
      },
      locationCard: {
        address: "முகவரி",
        latitude: "அட்சரேகை",
        longitude: "தீர்க்கரேகை",
        city: "நகரம்",
        region: "மாநிலம்",
        accuracy: "துல்லியம்: {{accuracy}} மீட்டர்கள்",
      },
      buttons: {
        analyze: "AI மூலம் பகுப்பாய்வு செய்",
        analyzing: "பகுப்பாய்வு செய்யப்படுகிறது...",
        complete: "✓ AI பகுப்பாய்வு முடிந்தது",
        submit: "புகாரைச் சமர்ப்பி",
        submitting: "சமர்ப்பிக்கப்படுகிறது...",
        reset: "மீட்டமை",
      },
      speech: {
        start: "குரல் பதிவைத் தொடங்கு",
        stop: "குரல் பதிவை நிறுத்து",
        unsupported: "குரல் உரை மாற்றம் உங்களது உலாவியால் ஆதரிக்கப்படவில்லை.",
      },
    },
    reports: {
      title: "எனது புகார்கள்",
      subtitle: "புகார் வரலாறு",
      description: "நீங்கள் சமர்ப்பித்த பிரச்சினைகளை ஆராயுங்கள்.",
      loading: "உங்களது புகார் ஏற்றப்படுகிறது...",
      empty: {
        line1: "நீங்கள் இன்னும் எந்தப் புகாரையும் சமர்ப்பிக்கவில்லை.",
        line2: "புதிய பிரச்சினையைப் பதிவு செய்ய புகார் பக்கத்திற்குச் செல்லவும்.",
      },
    },
    reportDetail: {
      title: "புகார் விவரங்கள்",
      subtitle: "நேரடி கண்காணிப்பு",
      description: "இந்த புகாருக்கான தற்போதைய நிலை மற்றும் துறை ஒதுக்கீட்டை மதிப்பாய்வு செய்யவும்.",
      created: "உருவாக்கப்பட்டது",
      lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது",
      location: "இருப்பிடம்",
      noLocation: "இருப்பிடம் கிடைக்கவில்லை",
      assignedDept: "ஒதுக்கப்பட்ட துறை",
      notAssigned: "ஒதுக்கப்படவில்லை",
      aiAnalysis: {
        title: "AI பகுப்பாய்வு",
        category: "வகை",
        department: "துறை",
        severity: "தீவிரம்",
        priority: "முன்னுரிமை மதிப்பெண்",
        confidence: "AI நம்பிக்கை",
        summary: "சுருக்கம்",
        empty: "இந்த புகாருக்கு AI பகுப்பாய்வு எதுவும் கிடைக்கவில்லை.",
        translating: "சுருக்கம் மொழிபெயர்க்கப்படுகிறது...",
      },
      speech: {
        read: "உள்ளடக்கத்தை சத்தமாக வாசி",
        stop: "வாசிப்பதை நிறுத்து",
      },
      notFound: {
        title: "புகார் காணப்படவில்லை",
        description: "நீங்கள் பார்க்க முயற்சிக்கும் புகார் இல்லை.",
        back: "புகார்களுக்குத் திரும்பு",
      },
    },
    tracking: {
      progress: {
        title: "புகார் முன்னேற்றம்",
        description: "உங்களது புகாரின் தற்போதைய நிலையை கண்காணிக்கவும்.",
      },
      timeline: {
        title: "கண்காணிப்பு காலவரிசை",
        description: "சமீபத்திய புதுப்பிப்புகள் காலவரிசை வரிசையில் காட்டப்படுகின்றன.",
      },
      status: {
        Pending: "நிலுவையில்",
        Verified: "சரிபார்க்கப்பட்டது",
        Assigned: "ஒதுக்கப்பட்டது",
        "In Progress": "செயல்பாட்டில்",
        Resolved: "தீர்க்கப்பட்டது",
        "Issue submitted": "பிரச்சனை சமர்ப்பிக்கப்பட்டது",
        "AI verification completed": "AI சரிபார்ப்பு முடிந்தது",
        "Assigned to department": "துறைக்கு ஒதுக்கப்பட்டது",
        "Work started": "வேலை தொடங்கப்பட்டது",
        "Issue resolved": "பிரச்சனை தீர்க்கப்பட்டது",
      },
    },
    liveMap: {
      title: "நேரடி சமூக வரைபடம்",
      subtitle: "நிகழ்நேர புகார்",
      description: "நிகழ்நேரத்தில் குடிமைப் பிரச்சினைகளைக் கண்டு கண்காணிக்கவும்.",
      statistics: "புள்ளிவிவரங்கள்",
      legend: "குறியீடுகள் விளக்கம்",
      filters: {
        category: "அனைத்து வகைகள்",
        status: "அனைத்து நிலைகள்",
        all: "அனைத்தும்",
      },
      popup: {
        department: "ஒதுக்கப்பட்ட துறை",
        priority: "முன்னுரிமை மதிப்பெண்",
        severity: "தீவிரம்",
        confidence: "AI நம்பிக்கை",
        address: "முகவரி",
        time: "புகார் செய்யப்பட்ட நேரம்",
        button: "நேரடி கண்காணிப்பைக் காண் →",
      },
      empty: {
        title: "குடிமைப் புகார்கள் எதுவும் இல்லை.",
        description: "பயனர்கள் சமர்ப்பித்த பின்னர் மீண்டும் பார்க்கவும்.",
      },
      connecting: "ஃபயர்பேஸுடன் இணைக்கப்படுகிறது...",
      loading: "வரைபடம் ஏற்றப்படுகிறது...",
    },
    badges: {
      first_report: {
        name: "முதல் புகார்",
        description: "உங்களது முதல் குடிமைப் புகாரைச் சமர்ப்பித்துள்ளீர்கள்.",
      },
      five_reports: {
        name: "5 புகார்கள்",
        description: "ஐந்து குடிமைப் புகார்களைச் சமர்ப்பித்துள்ளீர்கள்.",
      },
      ten_reports: {
        name: "10 புகார்கள்",
        description: "பத்து குடிமைப் புகார்களைச் சமர்ப்பித்துள்ளீர்கள்.",
      },
      points_100: {
        name: "100 ஹீரோ புள்ளிகள்",
        description: "100 ஹீரோ புள்ளிகளை எட்டியுள்ளீர்கள்.",
      },
      points_500: {
        name: "500 ஹீரோ புள்ளிகள்",
        description: "500 ஹீரோ புள்ளிகளை எட்டியுள்ளீர்கள்.",
      },
      streak_7: {
        name: "7 நாள் தொடர்ச்சி",
        description: "7 நாட்கள் தீவிரமாகப் பங்களித்துள்ளீர்கள்.",
      },
      clean_city_hero: {
        name: "தூய்மை நகர ஹீரோ",
        description: "நகரத்தைத் தூய்மைப்படுத்த ஒரு புகாரைச் சமர்ப்பித்துள்ளீர்கள்.",
      },
      traffic_guardian: {
        name: "போக்குவரத்து காவலர்",
        description: "போக்குவரத்து சிக்னல் பிரச்சினையைப் புகார் செய்துள்ளீர்கள்.",
      },
      environment_protector: {
        name: "சுற்றுச்சூழல் பாதுகாவலர்",
        description: "நீர் கசிவு அல்லது கழிவுநீர் பிரச்சினையைப் புகார் செய்துள்ளீர்கள்.",
      },
      community_starter: {
        name: "சமூகத் தொடக்க வீரர்",
      },
      civic_volunteer: {
        name: "குடிமைத் தன்னார்வலர்",
      },
      community_guardian: {
        name: "சமூகப் பாதுகாவலர்",
      },
      city_hero: {
        name: "நகர ஹீரோ",
      },
      civic_champion: {
        name: "குடிமைச் சாம்பியன்",
      },
      community_legend: {
        name: "சமூக லெஜண்ட்",
      },
    },
    toasts: {
      badgeUnlocked: "பேட்ஜ் திறக்கப்பட்டது",
      pointsAwarded: "+{{points}} ஹீரோ புள்ளிகள்",
    },
    categories: {
      Roads: "சாலைகள்",
      Garbage: "குப்பை",
      Water: "தண்ணீர்",
      Traffic: "போக்குவரத்து",
      "Street Lights": "தெரு விளக்குகள்",
      Safety: "பாதுகாப்பு",
      Other: "பிற",
    },
    departments: {
      "Public Works Department": "பொதுப்பணித்துறை",
      "Municipal Corporation": "மாநகராட்சி",
      "Water Department": "குடிநீர் வாரியம்",
      "Traffic Police": "போக்குவரத்து காவல்துறை",
      "Electricity Department": "மின்சார வாரியம்",
      "Public Safety": "பொது பாதுகாப்பு",
      "Environment Department": "சுற்றுச்சூழல் துறை",
      "Awaiting Assignment": "ஒதுக்கீட்டிற்காக காத்திருக்கிறது",
    },
    severity: {
      Low: "குறைந்த",
      Medium: "நடுத்தர",
      High: "உயர்",
      Critical: "தீவிர",
      Pending: "நிலுவையில்",
    },
  },
};

const te = {
  translation: {
    common: {
      loading: "లోడ్ అవుతోంది...",
      error: "లోపం",
      reset: "రీసెట్",
      submit: "సమర్పించు",
      cancel: "రద్దు చేయి",
      back: "వెనుకకు",
      retry: "మళ్ళీ ప్రయత్నించు",
      progress: "పురోగతి",
      chooseFile: "ఫైల్ ఎంచుకోండి",
      camera: "కెమెరా",
      dragDrop: "ఇక్కడ చిత్రం లేదా వీడియోను లాగండి మరియు వదలండి",
      viewLiveTracking: "లైవ్ ట్రాకింగ్ చూడండి",
      play: "ప్లే చేయి",
      pause: "పాజ్ చేయి",
      resume: "మళ్ళీ ప్రారంభించు",
      stop: "ఆపు",
      preview: "ముందుచూపు",
      remove: "తీసివేయి",
    },
    navbar: {
      home: "హోమ్",
      report: "సమస్యను నివేదించు",
      map: "లైవ్ మ్యాప్",
      dashboard: "డ్యాష్‌బోర్డ్",
      myReports: "నా నివేదికలు",
      login: "గూగుల్‌తో సైన్ ఇన్ చేయండి",
      logout: "లాగ్ అవుట్",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      privacy: "గోప్యత",
      terms: "నిబంధనలు",
      contact: "సంప్రదించండి",
      copyright: "© {{year}} కమ్యూనిటీ హీరో. సర్వ హక్కులు ప్రత్యేకించబడినవి.",
    },
    landing: {
      hero: {
        eyebrow: "AI-ఆధారిత పౌర మేధో ప్లాట్‌ఫాం",
        tagline: "ఒక నివేదిక. ఆరు AI ఏజెంట్లు. ఒక బలమైన సంఘం.",
        headline: {
          before: "పొరుగువారు గళమెత్తినప్పుడు, ",
          highlight: "సంఘాలు రూపాంతరం చెందుతాయి.",
        },
        description: "కమ్యూనిటీ హీరో ఒకే ఒక ఫోటో మరియు వాయిస్ నోట్‌ను ధృవీకరించబడిన, ప్రాధాన్యత కలిగిన, ట్రాక్ చేయదగిన పౌర చర్యగా మారుస్తుంది.",
        ctas: {
          primary: "సమస్యను నివేదించు",
          secondary: "లైవ్ మ్యాప్‌ను అన్వేషించు",
        },
        trust_badges: {
          "ai-powered": "AI ఆధారితం",
          "real-time": "రియల్ టైమ్ ట్రాకింగ్",
          "multilingual": "బహుభాషా మద్దతు",
        },
      },
      problem: {
        eyebrow: "పౌర సమస్య",
        title: "నివేదించడం ప్రజలను కలపాలి—కాగితపు పనుల్లో ముంచెత్తకూడదు",
        description: "పౌరులు ఒకసారి నివేదిస్తారు, ఆ తర్వాత ఏ సమాచారమూ ఉండదు. నమ్మకం దెబ్బతింటుంది.",
        cards: {
          "black-hole": {
            title: "నివేదికలు బ్లాక్ హోల్‌లో అదృశ్యమవుతాయి",
            description: "పౌరులు సమస్యలను సమర్పిస్తారు మరియు ఎటువంటి అప్‌డేట్లను పొందరు.",
          },
          "no-accountability": {
            title: "ఫలితానికి ఎవరూ బాధ్యత వహించరు",
            description: "బాధ్యులు ఎవరో లేదా పని ఎప్పుడు ప్రారంభమవుతుందో నివాసితులు చూడలేరు.",
          },
          "language-barrier": {
            title: "భాష ప్రజలను దూరం చేస్తుంది",
            description: "అధికారిక పోర్టల్స్ ఇంగ్లీష్ పరిజ్ఞానం మరియు డిజిటల్ అక్షరాస్యతను ఊహిస్తాయి.",
          },
          "slow-response": {
            title: "అత్యవసరం కనిపించదు",
            description: "బుద్ధిమంతమైన వర్గీకరణ లేకపోతే, అత్యవసర సమస్యలు వరుసలో వేచి ఉంటాయి.",
          },
        },
      },
      solution: {
        eyebrow: "AI పరిష్కారం",
        title: "ఒక పౌర నివేదిక నుండి సామాజిక పరిష్కారం వరకు",
        description: "కమ్యూనిటీ హీరో అనేది పౌర జీవితం కోసం ఒక AI ఆపరేటింగ్ సిస్టమ్.",
        flow: {
          citizen: {
            label: "పౌరుడు",
            detail: "ఫోటో తీస్తారు, వాయిస్ నోట్ రికార్డ్ చేస్తారు లేదా మ్యాప్ పైన నొక్కుతారు",
          },
          agents: {
            label: "AI ఏజెంట్లు",
            detail: "ఆరు ప్రత్యేక ఏజెంట్లు నివేదికను విశ్లేషించి, ధృవీకరించి, రూట్ చేస్తారు",
          },
          authorities: {
            label: "అధికారులు",
            detail: "వార్డు ఇంజనీర్లు మరియు విభాగాలు ప్రాధాన్యత కలిగిన పని ఉత్తర్వులను పొందుతారు",
          },
          community: {
            label: "సంఘం",
            detail: "పొరుగువారు కలిసి పురోగతిని ట్రాక్ చేస్తారు మరియు పరిష్కారాలను ధృవీకరిస్తారు",
          },
          resolution: {
            label: "పరిష్కారం",
            detail: "ఆధారాలతో సమస్యలు మూసివేయబడతాయి—మరియు ప్రతి వీధిలో నమ్మకం తిరిగి ఏర్పడుతుంది",
          },
        },
      },
      agents: {
        eyebrow: "AI ఏజెంట్ పైప్‌లైన్",
        title: "ఆరుగురు ఏజెంట్లు. ఒక సమన్వయ పనితీరు.",
        description: "కలిసి వారు పౌరుల ఇన్‌పుట్‌ను కార్యాచరణ మేధస్సుగా మారుస్తారు.",
        list: {
          vision: {
            title: "విజన్ ఏజెంట్",
            responsibility: "ఫోటోలు మరియు దృశ్య ఆధారాలను విశ్లేషిస్తారు",
          },
          geo: {
            title: "జియో ఏజెంట్",
            responsibility: "వార్డు సరిహద్దులు మరియు ల్యాండ్‌మార్క్‌లకు సమస్యలను మ్యాప్ చేస్తారు",
          },
          trust: {
            title: "ట్రస్ట్ ఏజెంట్",
            responsibility: "నిజాయితీని ధృవీకరిస్తారు మరియు నకిలీ లేదా స్పామ్ నివేదికలను ఫ్లాగ్ చేస్తారు",
          },
          priority: {
            title: "ప్రాధాన్యత ఏజెంట్",
            responsibility: "వేగవంతమైన ప్రతిస్పందన కోసం అత్యవసర పరిస్థితిని మరియు సామాజిక ప్రభావాన్ని ర్యాంక్ చేస్తారు",
          },
          prediction: {
            title: "అంచనా ఏజెంట్",
            responsibility: "చారిత్రక నమూనాల ఆధారంగా పరిష్కార కాలపరిమితిని అంచనా వేస్తారు",
          },
          copilot: {
            title: "కమ్యూనిటీ కోపైలట్",
            responsibility: "పౌరులకు వారి స్వంత భాషలో మార్గదర్శకత్వం ఇస్తారు",
          },
        },
      },
      live_tracking: {
        eyebrow: "లైవ్ ట్రాకింగ్ ప్రివ్యూ",
        title: "ప్రతి నివేదిక. ప్రతి స్థితి. నిజ సమయంలో.",
        description: "నివాసితులు మరియు అధికారులు ఒక పారదర్శక డాష్‌బోర్డ్‌ను పంచుకుంటారు.",
        sampleLabel: "డాష్‌బోర్డ్ నమూనా ప్రివ్యూ",
        labels: {
          engineerStatus: "ఇంజనీర్ స్థితి",
          eta: "అంచనా సమయం",
          verification: "సామాజిక ధృవీకరణ",
          progress: "పురోగతి",
        },
        issue: {
          category: "రహదారి మరమ్మత్తు",
          ward: "వార్డు 18",
          engineerStatus: "ఇంజనీర్ కేటాయించబడ్డారు — తనిఖీ పూర్తయింది",
          eta: "Estimated resolution: 4 days",
          verification: "5 మందిలో 3 పొరుగువారు సైట్‌లో ధృవీకరించారు",
        },
      },
      twin: {
        eyebrow: "సంఘం డిజిటల్ ట్విన్",
        title: "మీ పొరుగు ప్రాంతం, కొలవబడి మరియు అర్థం చేసుకోబడింది",
        description: "AI నివేదికలను, పరిష్కారాలను మరియు సంఘం అభిప్రాయాన్ని ప్రత్యక్ష ఆరోగ్య స్కోర్‌లో క్రోడీకరిస్తుంది.",
        demoLabel: "AI-ఉత్పన్న నమూనా స్కోర్లు",
        scores: {
          infrastructure: {
            label: "మౌలిక సదుపాయాలు",
            trend: "ఈ నెలలో +3",
          },
          safety: {
            label: "భద్రత",
            trend: "ఈ నెలలో +5",
          },
          cleanliness: {
            label: "పరిశుభ్రత",
            trend: "ఈ నెలలో +2",
          },
          water: {
            label: "నీరు",
            trend: "స్థిరంగా ఉంది",
          },
          health: {
            label: "సామాజిక ఆరోగ్యం",
            trend: "ఈ నెలలో +4",
          },
        },
      },
      google: {
        eyebrow: "గూగుల్ ఆధారితం",
        title: "సంఘాలు ఇప్పటికే విశ్వసించే ప్లాట్‌ఫారమ్‌ల ద్వారా నడపబడుతుంది",
        description: "కమ్యూనిటీ హీరో గూగుల్ సాంకేతికతలను ప్రారంభం నుండి ముగింపు వరకు అనుసంధానిస్తుంది.",
        technologies: {
          "ai-studio": {
            title: "గూగుల్ AI స్టూడియో",
            description: "జెమినీ ప్రతి ఏజెంట్ నిర్ణయాన్ని నడిపిస్తుంది.",
          },
          firebase: {
            title: "ఫైర్‌బేస్",
            description: "ధృవీకరణ, నిజ-సమయ డేటా సమకాలీకరణ మరియు సురక్షిత నిల్వ.",
          },
          maps: {
            title: "గూగుల్ మ్యాప్స్",
            description: "ఖచ్చితమైన భౌగోళిక స్థానం, వార్డు మ్యాపింగ్ మరియు ప్రత్యక్ష సమస్య పిన్స్.",
          },
          speech: {
            title: "స్పీచ్ API",
            description: "వాయిస్-టు-టెక్స్ట్ మరియు టెక్స్ట్-టు-స్పీచ్.",
          },
          translate: {
            title: "గూగుల్ అనువాదం",
            description: "బహుభాషా మద్దతు భాష కారణంగా ఏ పొరుగువారూ నిరాశకు గురికాకుండా చూస్తుంది.",
          },
          analytics: {
            title: "గూగుల్ అనలిటిక్స్",
            description: "వినియోగం మరియు ప్రభావ కొలతలు.",
          },
        },
      },
      impact: {
        eyebrow: "సామాజిక ప్రభావం",
        title: "పారదర్శకత చూపించే తేడా",
        description: "ఈ సంఖ్యలు ఏమి సాధ్యమో చూపిస్తాయి.",
        demoLabel: "వివరణ కోసం నమూనా గణాంకాలు",
        stats: {
          solved: {
            label: "సమస్యలు పరిష్కరించబడ్డాయి",
          },
          citizens: {
            label: "పౌరులకు సహాయం అందింది",
          },
          volunteer: {
            label: "స్వచ్ఛంద గంటలు",
          },
          resolution: {
            label: "పరిష్కార రేటు",
          },
        },
      },
      final_cta: {
        title: "ప్రభావం చూపడానికి సిద్ధంగా ఉన్నారా?",
        description: "ఈరోజే క్లీనర్, సురక్షితమైన మరియు వేగంగా స్పందించే సంఘాన్ని నిర్మించడంలో మీ పొరుగువారితో చేరండి.",
        ctas: {
          primary: "సమస్యను నివేదించు",
          secondary: "లైవ్ మ్యాప్ చూడు",
        },
      },
    },
    dashboard: {
      title: "డ్యాష్‌బోర్డ్",
      subtitle: "మీ పౌర ప్రభావం",
      description: "మీ తాజా నివేదికలను సమీక్షించండి, పురోగతిని ట్రాక్ చేయండి మరియు మీ నివేదికలు సామాజిక ప్రక్రియ ద్వారా ఎలా కదులుతున్నాయో చూడండి.",
      stats: {
        totalReports: "మొత్తం నివేదికలు",
        pending: "పెండింగ్",
        assigned: "కేటాయించబడింది",
        inProgress: "పురోగతిలో ఉంది",
        resolved: "పరిష్కరించబడింది",
      },
      gamification: {
        levelProgress: "తదుపరి స్థాయికి పురోగతి",
        pointsRequired: "తదుపరి స్థాయి {{level}} చేరుకోవడానికి ఇంకా {{points}} పాయింట్లు అవసరం",
        dailyStreak: "రోజువారీ కొనసాగింపు",
        streakDays: "{{days}} రోజులు",
        streakTip: "మీ కొనసాగింపును నిలుపుకోవడానికి ప్రతిరోజూ లాగిన్ చేయండి!",
        badgesEarned: "పొందిన బ్యాడ్జీలు",
        badgesTip: "పాయింట్లు పొందడానికి విజయాలను అన్‌లాక్ చేయండి!",
        cityRank: "నగర ర్యాంకు",
        rankTip: "గ్లోబల్ బోర్డులో మీ స్థానం",
        badgesTitle: "పౌర బ్యాడ్జీలు",
        badgesSubtitle: "సామాజిక పరిశుభ్రత మరియు నివేదిక ట్రాకింగ్‌లో సహకరించడం ద్వారా బ్యాడ్జీలను పొందండి.",
        pts: "పాయింట్లు",
        badge: "బ్యాడ్జ్",
        badges: "బ్యాడ్జీలు",
      },
      leaderboard: {
        title: "నగర ర్యాంకులు",
        subtitle: "టాప్ 10 హీరోలు",
        empty: "బోర్డులో ఇంకా ఎవరూ లేరు.",
        pts: "పాయింట్లు",
      },
      performance: {
        title: "పనితీరు",
        description: "AI విశ్లేషణ కొలతలు మరియు ప్రాధాన్యత పంపిణీ.",
        verifiedByAi: "AI ద్వారా ధృవీకరించబడింది",
        verifiedTip: "AI విశ్లేషణ కలిగిన నివేదికలు",
        highPriority: "అత్యధిక ప్రాధాన్యత",
        highPriorityTip: "ప్రాధాన్యత స్కోరు ≥ 80",
        averagePriority: "సగటు ప్రాధాన్యత",
        averagePriorityTip: "AI నివేదికల సగటు స్కోరు",
        averageConfidence: "సగటు AI విశ్వాసం",
        averageConfidenceTip: "AI ప్రాసెసింగ్ యొక్క విశ్వాసం",
      },
      recentReports: {
        title: "ఇటీవలి నివేదికలు",
        subtitle: "మీరు సమర్పించిన తాజా సమస్యలు.",
        loading: "మీ నివేదిక లోడ్ అవుతోంది...",
        empty: "ఇంకా ఎటువంటి నివేదికలూ కనుగొనబడలేదు. పురోగతిని ట్రాక్ చేయడానికి మీ మొదటి నివేదికను సమర్పించండి.",
      },
    },
    reportForm: {
      title: "ఒక పౌర సమస్యను నివేదించండి",
      description: "సమస్య యొక్క ఫోటో లేదా చిన్న వీడియోను అప్‌లోడ్ చేయండి. మా AI ఆధారాలను విశ్లేషించి తగిన విభాగాన్ని సిఫార్సు చేస్తుంది.",
      uploadTitle: "ఆధారాలను అప్‌లోడ్ చేయండి",
      uploadTip: "మద్దతు ఇచ్చే ఫార్మాట్లు: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "వివరణ",
      descPlaceholder: "పౌర సమస్యను వివరించండి... (మీరు మైక్రోఫోన్ బటన్ నొక్కి కూడా మాట్లాడవచ్చు)",
      categoryLabel: "वर्गीकरण",
      locationStatus: "స్థాన స్థితి",
      locationDetail: {
        waiting: "బ్రౌజర్ అనుమతి కోసం వేచి ఉంది...",
        denied: "స్థాన అనుమతి నిరాకరించబడింది. మీరు ఇప్పటికీ స్థానం లేకుండా సమర్పించవచ్చు.",
        detected: "స్థానం కనుగొనబడింది",
        requesting: "స్థానాన్ని అభ్యర్థిస్తోంది...",
      },
      locationCard: {
        address: "చిరునామా",
        latitude: "అక్షాంశం",
        longitude: "రేఖాంశం",
        city: "నగరం",
        region: "రాష్ట్రం",
        accuracy: "ఖచ్చితత్వం: {{accuracy}} మీటర్లు",
      },
      buttons: {
        analyze: "AIతో విశ్లేషించు",
        analyzing: "విశ్లేషిస్తోంది...",
        complete: "✓ AI విశ్లేషణ పూర్తయింది",
        submit: "निवेదికను సమర్పించు",
        submitting: "సమర్పిస్తోంది...",
        reset: "రీసెట్",
      },
      speech: {
        start: "వాయిస్ రికార్డింగ్ ప్రారంభించండి",
        stop: "వాయిస్ రికార్డింగ్ ఆపండి",
        unsupported: "వాయిస్-టు-టెక్స్ట్ మీ బ్రౌజర్ ద్వారా మద్దతు ఇవ్వబడదు.",
      },
    },
    reports: {
      title: "నా నివేదికలు",
      subtitle: "నివేదిక చరిత్ర",
      description: "మీరు సమర్పించిన ప్రతి సమస్యను బ్రౌజ్ చేయండి మరియు సంఘం సమీక్ష ప్రక్రియ నుండి స్థితి నవీకరణలను చూడండి.",
      loading: "నా నివేదికలు లోడ్ అవుతోంది...",
      empty: {
        line1: "మీరు ఇంకా ఎటువంటి నివేదికలనూ సమర్పించలేదు.",
        line2: "కొత్త సమస్యను నమోదు చేయడానికి నివేదిక పేజీకి వెళ్లండి.",
      },
    },
    reportDetail: {
      title: "నివేదిక వివరాలు",
      subtitle: "ప్రత్యక్ష ట్రాకింగ్",
      description: "ఈ నివేదిక కోసం ప్రస్తుత స్థితి, విశ్లేషణ, కాలక్రమం మరియు విభాగం కేటాయింపును సమీక్షించండి.",
      created: "సృష్టించబడింది",
      lastUpdated: "చివరిగా నవీకరించబడింది",
      location: "స్థానం",
      noLocation: "స్థానం అందుబాటులో లేదు",
      assignedDept: "కేటాయించిన విభాగం",
      notAssigned: "కేటాయించబడలేదు",
      aiAnalysis: {
        title: "AI విశ్లేషణ",
        category: "వర్గం",
        department: "విభాగం",
        severity: "తీవ్రత",
        priority: "ప్రాధాన్యత స్కోరు",
        confidence: "AI విశ్వాసం",
        summary: "సారాంశం",
        empty: "ఈ నివేదిక కోసం ఎటువంటి AI విశ్లేషణ అందుబాటులో లేదు.",
        translating: "సారాంశం అనువదించబడుతోంది...",
      },
      speech: {
        read: "కంటెంట్‌ను గట్టిగా చదవండి",
        stop: "చదవడం ఆపండి",
      },
      notFound: {
        title: "నివేదిక కనుగొనబడలేదు",
        description: "మీరు చూడటానికి ప్రయత్నిస్తున్న నివేదిక లేదు లేదా అది చూడటానికి మీకు అనుమతి లేదు.",
        back: "నివేదికలకు తిరిగి వెళ్ళండి",
      },
    },
    tracking: {
      progress: {
        title: "నివేదిక పురోగతి",
        description: "మీ నివేదిక యొక్క ప్రస్తుత దశను ట్రాక్ చేయండి.",
      },
      timeline: {
        title: "ట్రాకింగ్ టైమ్‌లైన్",
        description: "ఇటీవలి నవీకరణలు కాలక్రమ వరుసలో చూపబడ్డాయి.",
      },
      status: {
        Pending: "పెండింగ్",
        Verified: "ధృవీకరించబడింది",
        Assigned: "కేటాయించబడింది",
        "In Progress": "పురోగతిలో ఉంది",
        Resolved: "పరిష్కరించబడింది",
        "Issue submitted": "సమస్య సమర్పించబడింది",
        "AI verification completed": "AI ధృవీకరణ పూర్తయింది",
        "Assigned to department": "విభాగానికి కేటాయించబడింది",
        "Work started": "పని ప్రారంభమైంది",
        "Issue resolved": "సమస్య పరిష్కరించబడింది",
      },
    },
    liveMap: {
      title: "ప్రత్యక్ష సామాజిక మ్యాప్",
      subtitle: "నిజ-సమయ నివేదిక",
      description: "నిజ సమయంలో సంఘం అంతటా జరుగుతున్న పౌర సమస్యలను చూడండి మరియు ట్రాక్ చేయండి.",
      statistics: "గణాంకాలు",
      legend: "సూచిక వివరణ",
      filters: {
        category: "అన్ని వర్గాలు",
        status: "అన్ని స్థితులు",
        all: "అన్నీ",
      },
      popup: {
        department: "కేటాయించిన విభాగం",
        priority: "ప్రాధాన్యత స్కోరు",
        severity: "తీవ్రత",
        confidence: "AI విశ్వాసం",
        address: "చిరునామా",
        time: "నివేదించబడిన సమయం",
        button: "ప్రత్యక్ష ట్రాకింగ్ చూడు →",
      },
      empty: {
        title: "పౌర నివేదికలు ఏవీ అందుబాటులో లేవు.",
        description: "ఏ కొత్త నివేదికలూ లేవు.",
      },
      connecting: "ఫైర్‌బేస్‌తో అనుసంధానించబడుతోంది...",
      loading: "మ్యాప్ లోడ్ అవుతోంది...",
    },
    badges: {
      first_report: {
        name: "మొదటి నివేదిక",
        description: "మీ మొదటి పౌర నివేదికను సమర్పించారు.",
      },
      five_reports: {
        name: "5 నివేదికలు",
        description: "ಐದು పౌర నివేదికలను సమర్పించారు.",
      },
      ten_reports: {
        name: "10 నివేదికలు",
        description: "పది పౌర నివేదికలను సమర్పించారు.",
      },
      points_100: {
        name: "100 హీరో పాయింట్లు",
        description: "100 హీరో పాయింట్లను చేరుకున్నారు.",
      },
      points_500: {
        name: "500 హీరో పాయింట్లు",
        description: "500 హీరో పాయింట్లను చేరుకున్నారు.",
      },
      streak_7: {
        name: "7 రోజుల కొనసాగింపు",
        description: "7 రోజుల పాటు చురుకుగా సహకరించారు.",
      },
      clean_city_hero: {
        name: "క్లీన్ సిటీ హీరో",
        description: "నగరాన్ని శుభ్రంగా ఉంచడంలో సహాయపడటానికి నివేదికను సమర్పించారు.",
      },
      traffic_guardian: {
        name: "ట్రాఫిక్ గార్డియన్",
        description: "ట్రాఫిక్ సిగ్నల్ లేదా భద్రతా సమస్యలను నివేదించారు.",
      },
      environment_protector: {
        name: "పరియావరణ రక్షకుడు",
        description: "నీటి లీకేజీలు లేదా మురుగునీటి సమస్యలను నివేదించారు.",
      },
      community_starter: {
        name: "కమ్యూనిటీ స్టార్టర్",
      },
      civic_volunteer: {
        name: "పౌర స్వచ్ఛంద సేవకుడు",
      },
      community_guardian: {
        name: "కమ్యూనిటీ గార్డియన్",
      },
      city_hero: {
        name: "సిటీ హీరో",
      },
      civic_champion: {
        name: "పౌర ఛాంపియన్",
      },
      community_legend: {
        name: "కమ్యూనిటీ లెజెండ్",
      },
    },
    toasts: {
      badgeUnlocked: "బ్యాడ్జ్ అన్‌లాక్ చేయబడింది",
      pointsAwarded: "+{{points}} హీరో పాయింట్లు",
    },
    categories: {
      Roads: "రహదారులు",
      Garbage: "చెత్త",
      Water: "నీరు",
      Traffic: "ట్రాఫిక్",
      "Street Lights": "వీధి దీపాలు",
      Safety: "భద్రత",
      Other: "ఇతర",
    },
    departments: {
      "Public Works Department": "పబ్లిక్ వర్క్స్ డిపార్ట్‌మెంట్",
      "Municipal Corporation": "మున్సిపల్ కార్పొరేషన్",
      "Water Department": "నీటి విభాగం",
      "Traffic Police": "ట్రాఫిక్ పోలీస్",
      "Electricity Department": "విద్యుత్ విభాగం",
      "Public Safety": "ప్రజా భద్రత",
      "Environment Department": "పర్యావరణ విభాగం",
      "Awaiting Assignment": "కేటాయింపు కోసం వేచి ఉంది",
    },
    severity: {
      Low: "తక్కువ",
      Medium: "మధ్యస్థం",
      High: "ఎక్కువ",
      Critical: "క్లిష్టమైనది",
      Pending: "పెండింగ్",
    },
  },
};

const kn = {
  translation: {
    common: {
      loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      error: "ದೋಷ",
      reset: "ಮರುಹೊಂದಿಸಿ",
      submit: "ಸಲ್ಲಿಸು",
      cancel: "ರದ್ದುಮಾಡು",
      back: "ಹಿಂದಕ್ಕೆ ಹೋಗು",
      retry: "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸು",
      progress: "ಪ್ರಗತಿ",
      chooseFile: "ಫೈಲ್ ಆಯ್ಕೆಮಾಡಿ",
      camera: "ಕ್ಯಾಮೆರಾ",
      dragDrop: "ಚಿತ್ರ ಅಥವಾ ವೀಡಿಯೊವನ್ನು ಇಲ್ಲಿ ಎಳೆದು ಹಾಕಿ",
      viewLiveTracking: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ವೀಕ್ಷಿಸಿ",
      play: "ಪ್ಲೇ ಮಾಡಿ",
      pause: "ವಿರಾಮಗೊಳಿಸಿ",
      resume: "ಮತ್ತೆ ಪ್ರಾರಂಭಿಸಿ",
      stop: "ನಿಲ್ಲಿಸಿ",
      preview: "ಮುನ್ನೋಟ",
      remove: "ತೆಗೆದುಹಾಕಿ",
    },
    navbar: {
      home: "ಮುಖಪುಟ",
      report: "ಸಮಸ್ಯೆ ವರದಿ ಮಾಡಿ",
      map: "ಲೈವ್ ನಕ್ಷೆ",
      dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      myReports: "ನನ್ನ ವರದಿಗಳು",
      login: "ಗೂಗಲ್ ಮೂಲಕ ಸೈನ್ ಇನ್ ಮಾಡಿ",
      logout: "ಲಾಗ್ ಔಟ್",
      languages: {
        en: "English",
        hi: "हिन्दी",
        gu: "ગુજરાતી",
        mr: "मराठी",
        bn: "বাংলা",
        ta: "தமிழ்",
        te: "తెలుగు",
        kn: "ಕನ್ನಡ",
      },
    },
    footer: {
      privacy: "ಗೌಪ್ಯತೆ",
      terms: "ನಿಯಮಗಳು",
      contact: "ಸಂಪರ್ಕಿಸಿ",
      copyright: "© {{year}} ಕಮ್ಯೂನಿಟಿ ಹೀರೋ. ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    },
    landing: {
      hero: {
        eyebrow: "AI-ಚಾಲಿತ ನಾಗರಿಕ ಗುಪ್ತಚರ ವೇದಿಕೆ",
        tagline: "ಒಂದು ವರದಿ. ಆರು AI ಏಜೆಂಟ್‌ಗಳು. ಒಂದು ಬಲಿಷ್ಠ ಸಮುದಾಯ.",
        headline: {
          before: "ನೆರೆಹೊರೆಯವರು ಧ್ವನಿ ಎತ್ತಿದಾಗ, ",
          highlight: "ಸಮುದಾಯಗಳು ಬದಲಾಗುತ್ತವೆ.",
        },
        description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಕೇವಲ ಒಂದು ಫೋಟೋ ಮತ್ತು ಧ್ವನಿ ಟಿಪ್ಪಣಿಯನ್ನು ಪರಿಶೀಲಿಸಿದ ನಾಗರಿಕ ಕ್ರಿಯೆಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತದೆ.",
        ctas: {
          primary: "ಸಮಸ್ಯೆಯನ್ನು ವರದಿ ಮಾಡಿ",
          secondary: "ಲೈವ್ ನಕ್ಷೆ ಅನ್ವೇಷಿಸಿ",
        },
        trust_badges: {
          "ai-powered": "AI ಚಾಲಿತ",
          "real-time": "ನೈಜ-ಸಮಯದ ಟ್ರ್ಯಾಕಿಂಗ್",
          "multilingual": "ಬಹುವಿಧ ಭಾಷಾ ಬೆಂಬಲ",
        },
      },
      problem: {
        eyebrow: "ನಾಗರಿಕ ಸಮಸ್ಯೆ",
        title: "ವರದಿ ಮಾಡುವುದು ಜನರನ್ನು ಸಂಪರ್ಕಿಸಬೇಕು—ಕಾಗದದ ಕೆಲಸಗಳಲ್ಲಿ ಮುಳುಗಿಸಬಾರದು",
        description: "ನಾಗರಿಕರು ಒಮ್ಮೆ ವರದಿ ಮಾಡುತ್ತಾರೆ, ಆ ನಂತರ ಯಾವುದೇ ಮಾಹಿತಿ ಇರುವುದಿಲ್ಲ. ನಂಬಿಕೆ ಕುಸಿಯುತ್ತದೆ.",
        cards: {
          "black-hole": {
            title: "ವರದಿಗಳು ಕಪ್ಪುಕುಳಿಯಲ್ಲಿ ಕಣ್ಮರೆಯಾಗುತ್ತವೆ",
            description: "ನಾಗರಿಕರು ಸಮಸ್ಯೆಗಳನ್ನು ಸಲ್ಲಿಸುತ್ತಾರೆ ಆದರೆ ಯಾವುದೇ ನವೀಕರಣಗಳನ್ನು ಪಡೆಯುವುದಿಲ್ಲ.",
          },
          "no-accountability": {
            title: "ಫಲಿತಾಂಶಕ್ಕೆ ಯಾರೂ ಜವಾಬ್ದಾರರಲ್ಲ",
            description: "ಜವಾಬ್ದಾರರು ಯಾರು ಅಥವಾ ಕೆಲಸ ಯಾವಾಗ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ ಎಂಬುದನ್ನು ನಿವಾಸಿಗಳು ನೋಡಲು ಸಾಧ್ಯವಿಲ್ಲ.",
          },
          "language-barrier": {
            title: "ಭಾಷೆ ಜನರನ್ನು ದೂರವಿಡುತ್ತದೆ",
            description: "ಅಧಿಕೃತ ಪೋರ್ಟಲ್‌ಗಳು ಇಂಗ್ಲಿಷ್ ಭಾಷೆಯ ಜ್ಞಾನ ಮತ್ತು ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆಯನ್ನು ಊಹಿಸುತ್ತವೆ.",
          },
          "slow-response": {
            title: "ತುರ್ತು ಪರಿಸ್ถಿತಿ ಗೋಚರಿಸುವುದಿಲ್ಲ",
            description: "ಬುದ್ಧಿವಂತ ಆದ್ಯತೆಯ ವರ್ಗೀಕರಣವಿಲ್ಲದೆ, ಪ್ರಮುಖ ಸಮಸ್ಯೆಗಳು ಸಾಲಿನಲ್ಲಿ ಕಾಯುತ್ತವೆ.",
          },
        },
      },
      solution: {
        eyebrow: "AI ಪರಿಹಾರ",
        title: "ಒಂದು ನಾಗರಿಕ ವರದಿಯಿಂದ ಸಮುದಾಯ ಪರಿಹಾರದವರೆಗೆ",
        description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ನಾಗರಿಕ ಜೀವನಕ್ಕಾಗಿ ಒಂದು AI ಆಪರೇಟಿಂಗ್ ಸಿಸ್ಟಮ್ ಆಗಿದೆ.",
        flow: {
          citizen: {
            label: "ನಾಗರಿಕ",
            detail: "ಫೋಟೋ ತೆಗೆಯುತ್ತಾರೆ, ಧ್ವನಿ ಟಿಪ್ಪಣಿ ರೆಕಾರ್ಡ್ ಮಾಡುತ್ತಾರೆ ಅಥವಾ ನಕ್ಷೆಯನ್ನು ಟ್ಯಾಪ್ ಮಾಡುತ್ತಾರೆ",
          },
          agents: {
            label: "AI ಏಜೆಂಟ್‌ಗಳು",
            detail: "ಆರು ವಿಶೇಷ ಏಜೆಂಟ್‌ಗಳು ವರದಿಯನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ಪರಿಶೀಲಿಸಿ, ರೂಟ್ ಮಾಡುತ್ತಾರೆ",
          },
          authorities: {
            label: "ಅಧಿಕಾರಿಗಳು",
            detail: "ವಾರ್ಡ್ ಎಂಜಿನಿಯರ್‌ಗಳು ಮತ್ತು ಇಲಾಖೆಗಳು ಆದ್ಯತೆ ನೀಡಿದ ಕೆಲಸದ ಆದೇಶಗಳನ್ನು ಪಡೆಯುತ್ತವೆ",
          },
          community: {
            label: "ಸಮುದಾಯ",
            detail: "ನೆರೆಹೊರೆಯವರು ಒಟ್ಟಾಗಿ ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುತ್ತಾರೆ ಮತ್ತು ಪರಿಹಾರಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತಾರೆ",
          },
          resolution: {
            label: "ಪರಿಹಾರ",
            detail: "ಆಧಾರಗಳೊಂದಿಗೆ ಸಮಸ್ಯೆಗಳು ಮುಚ್ಚಲ್ಪಡುತ್ತವೆ—ಮತ್ತು ನಂಬಿಕೆಯು ಪ್ರತಿ ಬ್ಲಾಕ್‌ನಲ್ಲೂ ಮರುನಿರ್ಮಾಣಗೊಳ್ಳುತ್ತದೆ",
          },
        },
      },
      agents: {
        eyebrow: "AI ಏಜೆಂಟ್ ಪೈಪ್‌ಲೈನ್",
        title: "ಆರು ಏಜೆಂಟ್‌ಗಳು. ಒಂದು ಸಂಘಟಿತ ಕಾರ್ಯಪ್ರವಾಹ.",
        description: "ಕಲಿಶಿ ಅವರು ನಾಗರಿಕರ ಇನ್‌ಪುಟ್ ಅನ್ನು ಕಾರ್ಯಸಾಧ್ಯವಾದ ಬುದ್ಧಿಮತ್ತೆಯಾಗಿ ಪರಿವರ್ತಿಸುತ್ತಾರೆ.",
        list: {
          vision: {
            title: "ವಿಷನ್ ಏಜೆಂಟ್",
            responsibility: "ಫೋಟೋಗಳು ಮತ್ತು ದೃಶ್ಯ ಪುರಾವೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ",
          },
          geo: {
            title: "ಜಿಯೋ ಏಜೆಂಟ್",
            responsibility: "ವಾರ್ಟ್ ಗಡಿಗಳು ಮತ್ತು ಹೆಗ್ಗುರುತುಗಳಿಗೆ ಸಮಸ್ಯೆಗಳನ್ನು ಮ್ಯಾಪ್ ಮಾಡುತ್ತದೆ",
          },
          trust: {
            title: "ಟ್ರಸ್ಟ್ ಏಜೆಂಟ್",
            responsibility: "ನಕಲಿ ಅಥವಾ ಸ್ಪ್ಯಾಮ್ ವರದಿಗಳನ್ನು ಫ್ಲ್ಯಾಗ್ ಮಾಡುತ್ತದೆ",
          },
          priority: {
            title: "ಪ್ರಯಾರಿಟಿ ಏಜೆಂಟ್",
            responsibility: "ತುರ್ತು ಪರಿಸ್ถಿತಿ ಮತ್ತು ಸಾಮಾಜಿಕ ಪ್ರಭಾವವನ್ನು ಶ್ರೇಣೀಕರಿಸುತ್ತದೆ",
          },
          prediction: {
            title: "ಮುನ್ಸೂಚನೆ ಏಜೆಂಟ್",
            responsibility: "ವರದಿ ಪರಿಹಾರದ ಸಮಯದ ಚೌಕಟ್ಟನ್ನು ಮುನ್ಸೂಚಿಸುತ್ತದೆ",
          },
          copilot: {
            title: "ಕಮ್ಯೂನಿಟಿ ಕೋಪೈಲಟ್",
            responsibility: "ನಾಗರಿಕರಿಗೆ ಅವರದೇ ಭಾಷೆಯಲ್ಲಿ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತದೆ",
          },
        },
      },
      live_tracking: {
        eyebrow: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಪೂರ್ವವೀಕ್ಷಣೆ",
        title: "ಪ್ರತಿ ವರದಿ. ಪ್ರತಿ ಸ್ಥಿತಿ. ನೈಜ ಸಮಯದಲ್ಲಿ.",
        description: "ನಿವಾಸಿಗಳು ಮತ್ತು ಅಧಿಕಾರಿಗಳು ಪಾರದರ್ಶಕ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಅನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತಾರೆ.",
        sampleLabel: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಮಾದರಿ ಪೂರ್ವವೀಕ್ಷಣೆ",
        labels: {
          engineerStatus: "ಎಂಜಿನಿಯರ್ ಸ್ಥಿತಿ",
          eta: "ಅಂದಾಜು ಸಮಯ",
          verification: "ಸಮುದಾಯ ಪರಿಶೀಲನೆ",
          progress: "ಪ್ರಗತಿ",
        },
        issue: {
          category: "ರಸ್ತೆ ದುರಸ್ತಿ",
          ward: "ವಾರ್ಡ್ 18",
          engineerStatus: "ಎಂಜಿನಿಯರ್ ನಿಯೋಜಿಸಲಾಗಿದೆ — ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
          eta: "Estimated resolution: 4 days",
          verification: "5 ರಲ್ಲಿ 3 ನೆರೆಹೊರೆಯವರು ಸ್ಥಳದಲ್ಲೇ ಪರಿಶೀಲಿಸಿದ್ದಾರೆ",
        },
      },
      twin: {
        eyebrow: "ಸಮುದಾಯ ಡಿಜಿಟಲ್ ಟ್ವಿನ್",
        title: "ನಿಮ್ಮ ನೆರೆಹೊರೆ, ಅಳೆಯಲ್ಪಟ್ಟಿದೆ ಮತ್ತು ಅರ್ಥೈಸಲ್ಪಟ್ಟಿದೆ",
        description: "AI ವರದಿಗಳು, ಪರಿಹಾರಗಳು ಮತ್ತು ಸಮುದಾಯದ ಪ್ರತಿಕ್ರಿಯೆಯನ್ನು ಸಕ್ರಿಯ ಆರೋಗ್ಯ ಸ್ಕೋರ್‌ನಲ್ಲಿ ಸಂಯೋಜಿಸುತ್ತದೆ.",
        demoLabel: "AI-ರಚಿಸಿದ ಮಾದರಿ ಸ್ಕೋರ್‌ಗಳು",
        scores: {
          infrastructure: {
            label: "ಮೂಲಸೌಕರ್ಯ",
            trend: "ಈ ತಿಂಗಳು +3",
          },
          safety: {
            label: "ಸುರಕ್ಷತೆ",
            trend: "ಈ ತಿಂಗಳು +5",
          },
          cleanliness: {
            label: "ಸ್ವಚ್ಛತೆ",
            trend: "ಈ ತಿಂಗಳು +2",
          },
          water: {
            label: "ನೀರು",
            trend: "ಸ್ಥಿರವಾಗಿದೆ",
          },
          health: {
            label: "ಸಮುದಾಯ ಆರೋಗ್ಯ",
            trend: "ಈ ತಿಂಗಳು +4",
          },
        },
      },
      google: {
        eyebrow: "ಗೂಗಲ್‌ನಲ್ಲಿ ನಿರ್ಮಿಸಲಾಗಿದೆ",
        title: "ಸಮುದಾಯಗಳು ಈಗಾಗಲೇ ನಂಬುವ ವೇದಿಕೆಗಳಿಂದ ಚಾಲಿತವಾಗಿದೆ",
        description: "ಕಮ್ಯೂನಿಟಿ ಹೀರೋ ಗೂಗಲ್ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ಆರಂಭದಿಂದ ಕೊನೆಯವರೆಗೆ ಸಂಯೋಜಿಸುತ್ತದೆ.",
        technologies: {
          "ai-studio": {
            title: "ಗೂಗಲ್ AI ಸ್ಟುಡಿಯೋ",
            description: "ಜೆಮಿನಿ ಪ್ರತಿ ಏಜೆಂಟ್ ನಿರ್ಧಾರವನ್ನು ನಡೆಸುತ್ತದೆ.",
          },
          firebase: {
            title: "ಫೈರ್‌ಬೇಸ್",
            description: "ಪರಿಶೀಲನೆ, ನೈಜ-ಸಮಯದ ಡೇಟಾ ಸಿಂಕ್ ಮತ್ತು ಸುರಕ್ಷಿತ ಸಂಗ್ರಹಣೆ.",
          },
          maps: {
            title: "ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್",
            description: "ನಿಖರವಾದ ಜಿಯೋಲೋಕಲೈಸೇಶನ್, ವಾರ್ಡ್ ಮ್ಯಾಪಿಂಗ್ ಮತ್ತು ಲೈವ್ ಸಮಸ್ಯೆ ಪಿನ್‌ಗಳು.",
          },
          speech: {
            title: "ಸ್ಪೀಚ್ API",
            description: "ಧ್ವನಿ-ಇಂದ-ಪಠ್ಯ ಮತ್ತು ಪಠ್ಯ-ಇಂದ-ಧ್ವನಿ.",
          },
          translate: {
            title: "ಗೂಗಲ್ ಅನುವಾದ",
            description: "ಬಹುವಿಧ ಭಾಷಾ ಬೆಂಬಲ ಭಾಷೆಯ ಕಾರಣದಿಂದಾಗಿ ಯಾರೂ ಹೊರಗುಳಿಯದಂತೆ ನೋಡಿಕೊಳ್ಳುತ್ತದೆ.",
          },
          analytics: {
            title: "ಗೂಗಲ್ ಅನಾಲಿಟಿಕ್ಸ್",
            description: "ಬಳಕೆ ಮತ್ತು ಪ್ರಭಾವದ ಮೆಟ್ರಿಕ್‌ಗಳು.",
          },
        },
      },
      impact: {
        eyebrow: "ಸಮುದಾಯ ಪ್ರಭಾವ",
        title: "ಪಾರದರ್ಶಕತೆ ತರುವ ವ್ಯತ್ಯಾಸ",
        description: "ಈ ಸಂಖ್ಯೆಗಳು ಏನು ಸಾಧ್ಯ ಎಂಬುದನ್ನು ತೋರಿಸುತ್ತವೆ.",
        demoLabel: "ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಮಾದರಿ ಅಂಕಿಅಂಶಗಳು",
        stats: {
          solved: {
            label: "ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸಲಾಗಿದೆ",
          },
          citizens: {
            label: "ನಾಗರಿಕರಿಗೆ ಸಹಾಯ ಮಾಡಲಾಗಿದೆ",
          },
          volunteer: {
            label: "ಸ್ವಯಂಸೇವಕ ಗಂಟೆಗಳು",
          },
          resolution: {
            label: "ಪರಿಹಾರ ದರ",
          },
        },
      },
      final_cta: {
        title: "ಪ್ರಭಾವ ಬೀರಲು ಸಿದ್ಧರಿದ್ದೀರಾ?",
        description: "ಇಂದೇ ಸ್ವಚ್ಛವಾದ, ಸುರಕ್ಷಿತವಾದ ಮತ್ತು ಹೆಚ್ಚು ಸ್ಪಂದಿಸುವ ಸಮುದಾಯವನ್ನು ನಿರ್ಮಿಸುವಲ್ಲಿ ನಿಮ್ಮ ನೆರೆಹೊರೆಯವರೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ.",
        ctas: {
          primary: "ಸಮಸ್ಯೆಯನ್ನು ವರದಿ ಮಾಡಿ",
          secondary: "ಲೈವ್ ನಕ್ಷೆ ನೋಡಿ",
        },
      },
    },
    dashboard: {
      title: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      subtitle: "ನಿಮ್ಮ ನಾಗರಿಕ ಪ್ರಭಾವ",
      description: "ನಿಮ್ಮ ಇತ್ತೀಚಿನ ವರದಿಗಳನ್ನು ಪರಿಶೀಲಿಸಿ, ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ ಮತ್ತು ನಿಮ್ಮ ವರದಿಗಳು ಸಾಮಾಜಿಕ ಪ್ರಕ್ರಿಯೆಯ ಮೂಲಕ ಹೇಗೆ ಚಲಿಸುತ್ತಿವೆ ಎಂಬುದನ್ನು ನೋಡಿ.",
      stats: {
        totalReports: "ಒಟ್ಟು ವರದಿಗಳು",
        pending: "ಬಾಕಿ ಇದೆ",
        assigned: "ನಿಯೋಜಿಸಲಾಗಿದೆ",
        inProgress: "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
        resolved: "ಪರಿಹರಿಸಲಾಗಿದೆ",
      },
      gamification: {
        levelProgress: "ಮುಂದಿನ ಹಂತಕ್ಕೆ ಪ್ರಗತಿ",
        pointsRequired: "ಮುಂದಿನ ಹಂತ {{level}} ತಲುಪಲು ಇನ್ನು {{points}} ಪಾಯಿಂಟ್‌ಗಳು ಬೇಕು",
        dailyStreak: "ದೈನಂದಿನ ಸರಣಿ",
        streakDays: "{{days}} ದಿನಗಳು",
        streakTip: "ನಿಮ್ಮ ಸರಣಿಯನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಲು ಪ್ರತಿದಿನ ಲಾಗ್ ಇನ್ ಮಾಡಿ!",
        badgesEarned: "ಗಳಿಸಿದ ಬ್ಯಾಡ್ಜ್‌ಗಳು",
        badgesTip: "ಪಾಯಿಂಟ್‌ಗಳನ್ನು ಗಳಿಸಲು ಸಾಧನೆಗಳನ್ನು ಅನ್‌ಲಾಕ್ ಮಾಡಿ!",
        cityRank: "ನಗರಿ ಶ್ರೇಣಿ",
        rankTip: "ಜಾಗತಿಕ ಬೋರ್ಡ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಸ್ಥಾನ",
        badgesTitle: "ನಾಗರಿಕ ಬ್ಯಾಡ್ಜ್‌ಗಳು",
        badgesSubtitle: "ಸಾಮಾಜಿಕ ಸ್ವಚ್ಛತೆ ಮತ್ತು ವರದಿ ಟ್ರ್ಯಾಕಿಂಗ್‌ನಲ್ಲಿ ಕೊಡುಗೆ ನೀಡುವ ಮೂಲಕ ಬ್ಯಾಡ್ಜ್‌ಗಳನ್ನು ಗಳಿಸಿ.",
        pts: "ಪಾಯಿಂಟ್‌ಗಳು",
        badge: "ಬ್ಯಾಡ್ಜ್",
        badges: "ಬ್ಯಾಡ್ಜ್‌ಗಳು",
      },
      leaderboard: {
        title: "ನಗರ ಶ್ರೇಣಿ ಪಟ್ಟಿ",
        subtitle: "ಅಗ್ರ 10 ಹೀರೋಗಳು",
        empty: "ಬೋರ್ಡ್‌ನಲ್ಲಿ ಇನ್ನೂ ಯಾರೂ ಇಲ್ಲ.",
        pts: "ಪಾಯಿಂಟ್‌ಗಳು",
      },
      performance: {
        title: "ಕಾರ್ಯಕ್ಷಮತೆ",
        description: "AI ವಿಶ್ಲೇಷಣೆ ಮೆಟ್ರಿಕ್‌ಗಳು ಮತ್ತು ಆದ್ಯತೆಯ ವಿತರಣೆ.",
        verifiedByAi: "AI ಮೂಲಕ ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
        verifiedTip: "AI ವಿಶ್ಲೇಷಣೆ ಹೊಂದಿರುವ ವರದಿಗಳು",
        highPriority: "ಹೆಚ್ಚಿನ ಆದ್ಯತೆ",
        highPriorityTip: "ಆದ್ಯತೆಯ ಸ್ಕೋರು ≥ 80",
        averagePriority: "ಸರಾಸರಿ ಆದ್ಯತೆ",
        averagePriorityTip: "AI ವರದಿಗಳ ಸರಾಸರಿ ಸ್ಕೋರು",
        averageConfidence: "ಸರಾಸರಿ AI ವಿಶ್ವಾಸ",
        averageConfidenceTip: "AI ಪ್ರಕ್ರಿಯೆಯ ವಿಶ್ವಾಸಾರ್ಹತೆ",
      },
      recentReports: {
        title: "ಇತ್ತೀಚಿನ ವರದಿಗಳು",
        subtitle: "ನೀವು ಸಲ್ಲಿಸಿದ ಇತ್ತೀಚಿನ ಸಮಸ್ಯೆಗಳು.",
        loading: "ನಿಮ್ಮ ವರದಿ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
        empty: "ಇನ್ನೂ ಯಾವುದೇ ವರದಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ. ಪ್ರಗತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ನಿಮ್ಮ ಮೊದಲ ವರದಿಯನ್ನು ಸಲ್ಲಿಸಿ.",
      },
    },
    reportForm: {
      title: "ನಾಗರಿಕ ಸಮಸ್ಯೆಯನ್ನು ವರದಿ ಮಾಡಿ",
      description: "ಸಮಸ್ಯೆಯ ಫೋಟೋ ಅಥವಾ ಸಣ್ಣ ವೀಡಿಯೊವನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ನಮ್ಮ AI ಪುರಾವೆಗಳನ್ನು ವಿಶ್ಲೇಷಿಸುತ್ತದೆ ಮತ್ತು ಸೂಕ್ತವಾದ ಇಲಾಖೆಯನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ.",
      uploadTitle: "ಪುರಾವೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",
      uploadTip: "ಬೆಂಬಲಿತ ಫಾರ್ಮ್ಯಾಟ್‌ಗಳು: JPG, PNG, WEBP, MP4, MOV, WEBM",
      descLabel: "ವಿವರಣೆ",
      descPlaceholder: "ನಾಗರಿಕ ಸಮಸ್ಯೆಯನ್ನು ವಿವರಿಸಿ... (ನೀವು ಮೈಕ್ರೊಫೋನ್ ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ ಮಾತನಾಡಬಹುದು)",
      categoryLabel: "ವರ್ಗ",
      locationStatus: "ಸ್ಥಳದ ಸ್ಥಿತಿ",
      locationDetail: {
        waiting: "ಬ್ರೌಸರ್ ಅನುಮತಿಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ...",
        denied: "ಸ್ಥಳದ ಅನುಮತಿಯನ್ನು ನಿರಾಕರಿಸಲಾಗಿದೆ. ನೀವು ಇನ್ನೂ ಸ್ಥಳವಿಲ್ಲದೆ ಸಲ್ಲಿಸಬಹುದು.",
        detected: "ಸ್ಥಳ ಪತ್ತೆಯಾಗಿದೆ",
        requesting: "ಸ್ಥಳವನ್ನು ವಿನಂತಿಸಲಾಗುತ್ತಿದೆ...",
      },
      locationCard: {
        address: "ವಿಳಾಸ",
        latitude: "ಅಕ್ಷಾಂಶ",
        longitude: "ರೇಖಾಂಶ",
        city: "ನಗರ",
        region: "ರಾಜ್ಯ",
        accuracy: "ನಿಖರತೆ: {{accuracy}} ಮೀಟರ್‌ಗಳು",
      },
      buttons: {
        analyze: "AI ನೊಂದಿಗೆ ವಿಶ್ಲೇಷಿಸಿ",
        analyzing: "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ...",
        complete: "✓ AI ವಿಶ್ಲೇಷಣೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
        submit: "ವರದಿ ಸಲ್ಲಿಸಿ",
        submitting: "ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...",
        reset: "ಮರುಹೊಂದಿಸಿ",
      },
      speech: {
        start: "ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ",
        stop: "ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ನಿಲ್ಲಿಸಿ",
        unsupported: "ಧ್ವನಿಯಿಂದ ಪಠ್ಯಕ್ಕೆ ಬದಲಾಯಿಸುವುದನ್ನು ನಿಮ್ಮ ಬ್ರೌಸರ್ ಬೆಂಬಲಿಸುವುದಿಲ್ಲ.",
      },
    },
    reports: {
      title: "ನನ್ನ ವರದಿಗಳು",
      subtitle: "ವರದಿ ಇತಿಹಾಸ",
      description: "ನೀವು ಸಲ್ಲಿಸಿದ ಪ್ರತಿಯೊಂದು ಸಮಸ್ಯೆಯನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ ಮತ್ತು ಸಮುದಾಯ ಪರಿಶೀಲನಾ ಪ್ರಕ್ರಿಯೆಯಿಂದ ಸ್ಥಿತಿ ನವೀಕರಣಗಳನ್ನು ನೋಡಿ.",
      loading: "ನಿಮ್ಮ ವರದಿ ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
      empty: {
        line1: "ನೀವು ಇನ್ನೂ ಯಾವುದೇ ವರದಿಯನ್ನು ಸಲ್ಲಿಸಿಲ್ಲ.",
        line2: "ಹೊಸ ಸಮಸ್ಯೆಯನ್ನು ದಾಖಲಿಸಲು ವರದಿ ಪುಟಕ್ಕೆ ಹೋಗಿ.",
      },
    },
    reportDetail: {
      title: "ವರದಿ ವಿವರಗಳು",
      subtitle: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್",
      description: "ಈ ವರದಿಗಾಗಿ ಪ್ರಸ್ತುತ ಸ್ಥಿತಿ, ವಿಶ್ಲೇಷಣೆ, ಸಮಯದ ಸಾಲು ಮತ್ತು ಇಲಾಖೆಯ ನಿಯೋಜನೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.",
      created: "ರಚಿಸಲಾಗಿದೆ",
      lastUpdated: "ಕೊನೆಯದಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ",
      location: "ಸ್ಥಳ",
      noLocation: "ಸ್ಥಳ ಲಭ್ಯವಿಲ್ಲ",
      assignedDept: "ನಿಯೋಜಿಸಲಾದ ಇಲಾಖೆ",
      notAssigned: "ನಿಯೋಜಿಸಲಾಗಿಲ್ಲ",
      aiAnalysis: {
        title: "AI ವಿಶ್ಲೇಷಣೆ",
        category: "ವರ್ಗ",
        department: "ಇಲಾಖೆ",
        severity: "ತೀವ್ರತೆ",
        priority: "ಆದ್ಯತೆಯ ಸ್ಕೋರು",
        confidence: "AI ವಿಶ್ವಾಸ",
        summary: "ಸಾರಾಂಶ",
        empty: "ಈ ವರದಿಗಾಗಿ ಯಾವುದೇ AI ವಿಶ್ಲೇಷಣೆ ಲಭ್ಯವಿಲ್ಲ.",
        translating: "ಸಾರಾಂಶವನ್ನು ಅನುವಾದಿಸಲಾಗುತ್ತಿದೆ...",
      },
      speech: {
        read: "ವಿಷಯವನ್ನು ಜೋರಾಗಿ ಓದಿ",
        stop: "ಓದುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
      },
      notFound: {
        title: "ವರದಿ ಕಂಡುಬಂದಿಲ್ಲ",
        description: "ನೀವು ನೋಡಲು ಪ್ರಯತ್ನಿಸುತ್ತಿರುವ ವರದಿಯು ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ ಅಥವಾ ಅದನ್ನು ನೋಡಲು ನಿಮಗೆ ಅನುಮತಿ ಇಲ್ಲ.",
        back: "ವರದಿಗಳಿಗೆ ಹಿಂತಿರುಗಿ",
      },
    },
    tracking: {
      progress: {
        title: "ವರದಿ ಪ್ರಗತಿ",
        description: "ನಿಮ್ಮ ವರದಿಯ ಪ್ರಸ್ತುತ ಹಂತವನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
      },
      timeline: {
        title: "ಟ್ರ್ಯಾಕಿಂಗ್ ಟೈಮ್‌ಲೈನ್",
        description: "ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳು ಕಾಲಾನುಕ್ರಮದ ಕ್ರಮದಲ್ಲಿ ತೋರಿಸಲಾಗಿದೆ.",
      },
      status: {
        Pending: "ಬಾಕಿ ಇದೆ",
        Verified: "ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
        Assigned: "ನಿಯೋಜಿಸಲಾಗಿದೆ",
        "In Progress": "ಪ್ರಗತಿಯಲ್ಲಿದೆ",
        Resolved: "ಪರಿಹರಿಸಲಾಗಿದೆ",
        "Issue submitted": "ಸಮಸ್ಯೆ ಸಲ್ಲಿಸಲಾಗಿದೆ",
        "AI verification completed": "AI ಪರಿಶೀಲನೆ ಪೂರ್ಣಗೊಂಡಿದೆ",
        "Assigned to department": "ಇಲಾಖೆಗೆ ನಿಯೋಜಿಸಲಾಗಿದೆ",
        "Work started": "ಕೆಲಸ ಪ್ರಾರಂಭವಾಗಿದೆ",
        "Issue resolved": "ಸಮಸ್ಯೆ ಪರಿಹರಿಸಲಾಗಿದೆ",
      },
    },
    liveMap: {
      title: "ಲೈವ್ ಸಮುದಾಯ ನಕ್ಷೆ",
      subtitle: "ನೈಜ-ಸಮಯದ ವರದಿ",
      description: "ನೈಜ ಸಮಯದಲ್ಲಿ ಸಮುದಾಯದಾದ್ಯಂತ ನಡೆಯುತ್ತಿರುವ ನಾಗರಿಕ ಸಮಸ್ಯೆಗಳನ್ನು ನೋಡಿ ಮತ್ತು ಟ್ರ್ಯಾಕ್ ಮಾಡಿ.",
      statistics: "ಅಂಕಿಅಂಶಗಳು",
      legend: "ಸೂಚಕ ವಿವರಣೆ",
      filters: {
        category: "ಎಲ್ಲಾ ವರ್ಗಗಳು",
        status: "ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳು",
        all: "ಎಲ್ಲಾ",
      },
      popup: {
        department: "ನಿಯೋಜಿಸಲಾದ ಇಲಾಖೆ",
        priority: "ಆದ್ಯತೆಯ ಸ್ಕೋರು",
        severity: "ತೀವ್ರತೆ",
        confidence: "AI ವಿಶ್ವಾಸ",
        address: "ವಿಳಾಸ",
        time: "ವರದಿಯಾದ ಸಮಯ",
        button: "ಲೈವ್ ಟ್ರ್ಯಾಕಿಂಗ್ ನೋಡಿ →",
      },
      empty: {
        title: "ಯಾವುದೇ ನಾಗರಿಕ ವರದಿಗಳು ಲಭ್ಯವಿಲ್ಲ.",
        description: "ಯಾವುದೇ ಹೊಸ ವರದಿಗಳಿಲ್ಲ.",
      },
      connecting: "ಫೈರ್‌ಬೇಸ್‌ಗೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ...",
      loading: "ನಕ್ಷೆಯನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ...",
    },
    badges: {
      first_report: {
        name: "ಮೊದಲ ವರದಿ",
        description: "ನಿಮ್ಮ ಮೊದಲ ನಾಗರಿಕ ವರದಿಯನ್ನು ಸಲ್ಲಿಸಿದ್ದೀರಿ.",
      },
      five_reports: {
        name: "5 ವರದಿಗಳು",
        description: "ಐದು ನಾಗರಿಕ ವರದಿಗಳನ್ನು ಸಲ್ಲಿಸಿದ್ದೀರಿ.",
      },
      ten_reports: {
        name: "10 ವರದಿಗಳು",
        description: "ಹತ್ತು ನಾಗರಿಕ ವರದಿಗಳನ್ನು ಸಲ್ಲಿಸಿದ್ದೀರಿ.",
      },
      points_100: {
        name: "100 ಹೀರೋ ಪಾಯಿಂಟ್‌ಗಳು",
        description: "100 ಹೀರೋ ಪಾಯಿಂಟ್‌ಗಳನ್ನು ತಲುಪಿದ್ದೀರಿ.",
      },
      points_500: {
        name: "500 ಹೀರೋ ಪಾಯಿಂಟ್‌ಗಳು",
        description: "500 ಹೀರೋ ಪಾಯಿಂಟ್‌ಗಳನ್ನು ತಲುಪಿದ್ದೀರಿ.",
      },
      streak_7: {
        name: "7 ದಿನಗಳ ಸರಣಿ",
        description: "7 ದಿನಗಳ ಕಾಲ ಸಕ್ರಿಯವಾಗಿ ಸಹಕರಿಸಿದ್ದೀರಿ.",
      },
      clean_city_hero: {
        name: "ಸ್ವಚ್ಛ ನಗರ ಹೀರೋ",
        description: "ನಗರವನ್ನು ಸ್ವಚ್ಛವಾಗಿಡಲು ಸಹಾಯ ಮಾಡಲು ವರದಿಯನ್ನು ಸಲ್ಲಿಸಿದ್ದೀರಿ.",
      },
      traffic_guardian: {
        name: "ಟ್ರಾಫಿಕ್ ಗಾರ್ಡಿಯನ್",
        description: "ಟ್ರಾಫಿಕ್ ಸಿಗ್ನಲ್ ಅಥವಾ ಸುರಕ್ಷತಾ ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಿದ್ದೀರಿ.",
      },
      environment_protector: {
        name: "ಪರಿಸರ ರಕ್ಷಕ",
        description: "ನೀರಿನ ಸೋರಿಕೆ ಅಥವಾ ಒಳಚರಂಡಿ ಸಮಸ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡಿದ್ದೀರಿ.",
      },
      community_starter: {
        name: "ಕಮ್ಯೂನಿಟಿ ಸ್ಟಾರ್ಟರ್",
      },
      civic_volunteer: {
        name: "ನಾಗರಿಕ ಸ್ವಯಂಸೇವಕ",
      },
      community_guardian: {
        name: "ಕಮ್ಯೂನಿಟಿ ಗಾರ್ಡಿಯನ್",
      },
      city_hero: {
        name: "ಸಿಟಿ ಹೀರೋ",
      },
      civic_champion: {
        name: "ನಾಗರಿಕ ಚಾಂಪಿಯನ್",
      },
      community_legend: {
        name: "ಕಮ್ಯೂನಿಟಿ ಲೆಜೆಂಡ್",
      },
    },
    toasts: {
      badgeUnlocked: "ಬ್ಯಾಡ್ಜ್ ಅನ್‌ಲಾಕ್ ಆಗಿದೆ",
      pointsAwarded: "+{{points}} ಹೀರೋ ಪಾಯಿಂಟ್‌ಗಳು",
    },
    categories: {
      Roads: "ರಸ್ತೆಗಳು",
      Garbage: "ಕಸ",
      Water: "ನೀರು",
      Traffic: "ಸಂಚಾರ",
      "Street Lights": "ಬೀದಿ ದೀಪಗಳು",
      Safety: "ಸುರಕ್ಷತೆ",
      Other: "ಇತರೆ",
    },
    departments: {
      "Public Works Department": "ಲೋಕೋಪಯೋಗಿ ಇಲಾಖೆ",
      "Municipal Corporation": "ಮಹಾನಗರ್ ಪಾಲಿಕೆ",
      "Water Department": "ಜಲ ಇಲಾಖೆ",
      "Traffic Police": "ಸಂಚಾರ ಪೊಲೀಸ್",
      "Electricity Department": "ವಿದ್ಯುತ್ ಇಲಾಖೆ",
      "Public Safety": "ಸಾರ್ವಜನಿಕ ಸುರಕ್ಷತೆ",
      "Environment Department": "ಪರಿಸರ ಇಲಾಖೆ",
      "Awaiting Assignment": "ನಿಯೋಜನೆಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ",
    },
    severity: {
      Low: "ಕಡಿಮೆ",
      Medium: "ಮಧ್ಯಮ",
      High: "ಹೆಚ್ಚಿನ",
      Critical: "ನಿರ್ಣಾಯಕ",
      Pending: "ಬಾಕಿ ಇದೆ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources: {
    en,
    hi,
    gu,
    mr,
    bn,
    ta,
    te,
    kn,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
