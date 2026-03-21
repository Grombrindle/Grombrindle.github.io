// ========== CONFIGURATION FILE ==========
// Edit this file to update personal info, contact links, projects, etc.

const config = {
    // Personal
    name: "Haydra Ali",
    title: "Information Technology Engineer",
    location: "Damascus, Syria / Remote",
    email: "haydraali0000@gmail.com",
    phone: "+963 997 149 930",  // placeholder – replace with real number if desired
    github: "https://github.com/Grombrindle",
    linkedin: "https://www.linkedin.com/in/haydra-ali-3a500b285",
    
    // Hero text for typed animation
    typedStrings: ["Full‑Stack Developer", "Backend Engineer", "DevOps Architect",  "Laravel Specialist","AI Integrator"],
    
    // Expertise descriptions
    expertiseDesc: "Full‑stack development, backend architecture, DevOps automation, and AI integration – delivering robust, scalable solutions.",
    
    // Backend technologies list (for expertise card)
    backendTechs: ["Laravel / PHP", "Node.js / Express.js", "Java / Spring Boot", "Go (Golang)", ".NET / C#"],
    devopsTechs: ["Docker & GitHub Actions", "Server Administration", "Linux & Scripting", "CI/CD Pipelines"],
    aiTechs: ["OpenAI API", "Prompt Engineering", "Intelligent Task Automation"],
    
    // Skills bars (label, percent, color class)
    skillBars: [
        { label: "Backend (Laravel, .NET, Java, Node.js)", percent: 92, color: "primary" },
        { label: "DevOps & Cloud", percent: 85, color: "secondary" },
        { label: "Database Optimization", percent: 90, color: "tertiary" }
    ],
    
    // Tech stack cloud (grouped)
    techStackGroups: [
        { title: "Languages & Frameworks", items: ["PHP / Laravel", "Node.js / Express.js", "Go (Golang)", "C# / .NET", "Java / Spring Boot", "NestJS"], color: "primary-dim" },
        { title: "DevOps & Databases", items: ["Docker", "GitHub Actions", "MySQL / PostgreSQL", "SQL Server", "Linux Administration"], color: "secondary" }
    ],
    
    // Featured projects (displayed in grid)
    featuredProjects: [
        {
            title: "Gouri Distributions",
            desc: "B2B e‑commerce platform (Google Play) with Stripe integration. Full-stack from DB planning to deployment.",
            tech: ["Laravel", "Flutter", "Stripe"],
            repo: "https://gouridistribution.com",
            private: true,
            image: "https://gouridistribution.com/static/media/logo.2f1e3fe1ea12c5ad0704.png"
        },
        {
            title: "TugOnn Schweiz",
            desc: "Social Networking Platforms.",
            tech: ["DevOps", "GitHub Actions", "QA", "Docker"],
            repo: "https://www.linkedin.com/company/tugonn/posts/?feedView=all",
            private: true,
            image: "https://media.licdn.com/dms/image/v2/D4D10AQHNtEI_xVtoBQ/image-shrink_800/B4DZiDTQ9UHsAg-/0/1754549523197?e=1774699200&v=beta&t=Q2mf72gpIQV7gkH4CdCXc6ffINESD8elghHwHSwfIYU"
        },
        {
            title: "AI-Integrated Task Manager",
            desc: "Intelligent task system using AI prompt engineering to convert notes into actionable tasks with role assignment.",
            tech: ["Laravel", "OpenAI", "MySQL"],
            repo: "https://github.com/Grombrindle/AI_integrated_task_manager",
            private: false,
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format"
        },
        {
            title: "BlueBuySale Marketplace",
            desc: "Marketplace & job platform with real‑time WhatsApp‑like messaging using Laravel Reverb.",
            tech: ["Laravel", "Reverb", "WebSockets"],
            repo: "https://www.bluebuysale.com/en",
            private: true,
            image: "https://www.bluebuysale.com/assets/footerLogo-B0TOTv9S.svg"
        },
    ],
    
    // Additional projects for slider (with private flag)
    moreProjects: [
        { title: "Chery Iraq", desc: "Official Chery automobiles website – overhaul and feature enhancements for Laravel-based platform.", tech: ["Laravel", "Blade", "Tailwind"], repo: "https://www.cheryiraq.com", private: false},
        { title: "Dr Calories", desc: "Calorie & nutrient tracking app with meal planning and ingredient management. Complete dashboard redesign.", tech: ["Livewire", "Laravel", "Filament"], repo: "https://github.com/Grombrindle/dr-calories", private: true, privateNote: "Internal company project" },
        { title: "Fingerprint Gym System", desc: ".NET desktop app with fingerprint authentication for gym membership management.", tech: ["C#", ".NET", "SQL Server"], repo: "https://github.com/Grombrindle/fingerprint-gym", private: true,privateNote: "Internal company project" },
        { title: "Pdf Extraction App", desc: "Annotate Edit Extract From pdfs all in the browser.", tech: ["Laravel", "Pdf.js", "JavaScript"], repo: "https://github.com/Grombrindle/pdf_extraction_app", private: false},
        { title: "Cisco Packet Tracer", desc: "Simple Network in CiscoPacketTracer.", tech: ["Cisco", "Network Engineering", "SSH"], repo: " https://github.com/Grombrindle/CiscoPacketTracerProject", private: false},
        { title: "Messenger", desc: "Whatsapp like  Messenger App in laravel using WebSocket.", tech: ["Laravel", "Reverb", "WebSockets"], repo: " https://github.com/Grombrindle/Messenger", private: false},
        { title: "Free Games Scraper", desc: "Automation Script to get the free games from epic games store weekly.", tech: ["Go", "Web Scraping", "Automation"], repo: "https://github.com/Grombrindle/freeGamesScraperGo", private: false},
        { title: "SpringBoot AppointmentSystem", desc: "Library management App.", tech: ["SpringBoot", "Java", "AI-Integration"], repo: "https://github.com/Grombrindle/AppointmentSystem", private: false },
        { title: "Self-Hosted Server", desc: "Personal server automation with Linux, Docker, and open‑source tools for task scheduling and efficiency.", tech: ["Linux", "Docker", "Bash"], repo: "https://github.com/Grombrindle/self-hosted-lab", private: true, privateNote: "Personal Project" },
        { title: "NestJS REST APIs", desc: "Scalable TypeScript APIs with JWT authentication and PostgreSQL.", tech: ["NestJS", "TypeScript", "PostgreSQL"], repo: "https://github.com/Grombrindle/NestJSSpotifyClone", private: false },
        { title: "Velvet", desc: "E-commerce Platform to sell cloths.", tech: ["Livewire", "Filament", "Mysql"], repo: "https://github.com/Grombrindle/livewire-components", private: true, privateNote: "Internal company project" },
        { title: "Bazaria", desc: "B2C e‑commerce plat Full-stack from DB planning to deployment.", tech: ["Laravel", "Flutter", "Livewire"], repo: "#", private: true, privateNote: "Internal company project" }
    ]
};