export const TECH_SKILLS = [
  "Node.JS, TypeScript, Python, Rust",
  "Express, Next.JS, React, TailwindCSS, SCSS, Flask, Django",
  "tRPC, graphQL, REST",
  "Zustand, Redux, Zod, Three.JS, D3.JS, React Query, Apollo Client",
  "Eslint, Stylelint, Prettier, Husky, WebPack, Babel, Code Generator",
  "Prisma, Postgres, MySQL, Firestore, SQLAlchemy",
  "Docker, AWS, Google Cloud Console, Vercel, Netlify",
  "CI/CD, Github Actions",
  "Cypress, Jest, Enzyme, React Testing Library",
  "Figma",
];

export const INTRO = `I've spent the past decade developing client and server-side software and bringing it to life in production. Personally, I fancy good system design, talking to people and taking action. These three things have been key to my growth and increased responsibilities at various roles I've had.`;

export const EXPERIENCE = [
  `10+ yrs of experience with design and development of software systems`,
  `7+ yrs of production experience with JS, CSS/SCSS, Webpack and Babel`,
  `5+ yrs of production experience with React, Redux/Zustand and Micro-frontends architectures`,
  `5+ yrs of production experience with Node.js, Typescript and Microservices architectures`,
  `4+ yrs of experience with Figma and UI/UX Design`,
  `3.5+ yrs of production experience with Cypress, Jest, Enzyme and React Testing Library`,
  `3+ yrs of production experience with Prisma, tRPC and GraphQL`,
  `3+ yrs of production experience with Next.js, Vercel and Netlify`,
  `3+ yrs of production experience with Python, Django, Flask and SQLAlchemy`,
  `3+ yrs of experience with Docker and CI/CD pipelines`,
  `2+ yrs of experience with TailwindCSS, Three.js, React Three Fiber and D3.js`,
  `1.5+ yrs of experience with Rust`,
  `1 yr of experience within the Blockchain and Web3 space`,
];

export const WORK = [
  {
    position: "Senior Full-Stack Engineer",
    company: "Element Human",
    startDate: new Date("01/01/2024"),
    location: "remote",
    positionTec: [],
    points: [
      "Advancing efforts to expand and enhance Project Mercury",
      "Delivering on various real-life-like social environments to test human emotion against creative content.",
      {
        label: "YouTube Shorts",
        desc: ", newest social platform that allows benchmarking the human emotion behind creative content with real-life-like UX.",
        link: "https://cxmtoday.com/news/element-human-expands-influencer-ad-testing-platform-to-youtube-shorts/",
      },
    ],
  },
  {
    position: "Senior Full-Stack Engineer",
    company: "Clutchy",
    startDate: new Date("06/06/2023"),
    endDate: new Date("11/30/2023"),
    location: "remote",
    positionTec: [
      "Node.JS, GraphQL, Firebase",
      "React, TailwindCSS, Apollo Client",
      "Docker, AWS, GitLab CI",
      "NFTs, Sui blockchain",
    ],
    points: [
      "Streamlined community Bids process through strategic system design changes, resolving glitches and improving user experience, leading to a 65% decrease in support tickets and a 96% increase in successful bids",
      "Strategically led the management of listing and delisting processes within the NFT marketplace, successfully delivering key features. Achieved a 20% reduction in processing time, optimizing platform efficiency and enhancing overall user experience",
    ],
  },
  {
    position: "Senior Full-Stack Engineer",
    company: "Element Human",
    startDate: new Date("11/01/2020"),
    endDate: new Date("07/01/2023"),
    location: "remote",
    positionTec: [
      "TypeScript, Next.JS, Prisma, Zod, tRPC, Clerk",
      "React, Zustand, Redux, TailwindCSS, SCSS",
      "Jest, Enzyme, React Testing Library",
      "Webpack, Babel",
      "Python, Django, Flask, SQLAlchemy, PostgreSQL",
      "Docker, Google Cloud, GitLab CI",
      "Figma, Phrase",
      "Biometric, Timeseries and Human Emotion Data",
    ],
    points: [
      'Revamped the "survey engine" project by designing a new architecture and implementing it with the latest technologies, this resulted in enhanced efficiency, scalability and 100% reliability',
      "Established a scalable system architecture for periodically E2E testing multiple interconnected systems, resulting in continuous operational reliability throughout the years and 95% of bug spotting pre-release",
      "Led collaborative efforts with business partners, orchestrating the systematic collection of requirements and formulating strategic action plans for the design and development of innovative projects and features. Executed leadership strategies that ensured a 35% acceleration in project delivery, consistently meeting or exceeding established timelines. Explore short demos of a few of these achievements:",
      {
        label: "Project Mercury",
        desc: ", introduced completely new, subscription based, income stream for the business",
        link: "https://youtu.be/TfVUB5MJa0M",
      },
      {
        label: "TikTok",
        desc: ", enabled business partners to target more creators, resulting in £10k RMR",
        link: "https://www.youtube.com/watch?v=T8nb4XXc-2A",
      },
      {
        label: "Instagram",
        desc: ", fully configurable social environment and..",
        link: "https://www.youtube.com/watch?v=fJlZMWOqiNI",
      },
      {
        label: "Facebook",
        desc: ", for seamless ad campaign performance testing",
        link: "https://www.youtube.com/watch?v=u7UPbwO7Dd4",
      },
      {
        label: "Instagram Carousels",
        desc: ", the carousels feature elevated the competitive edge of our business partners",
        link: "https://www.youtube.com/watch?v=mJbLBIzQUKY",
      },
      "Significantly elevated observability for multiple micro-frontends by establishing uniform logging standards through the implementation of a custom abstraction layer atop Datadog. This strategic effort not only enhanced monitoring efficiency by 25% but also facilitated a more cohesive debugging process across diverse teams, fostering a collaborative and streamlined approach to issue resolution",
      "Implemented survey localization, empowering clients to extract metrics from new markets (Spain, Italy, Germany, France, South Korea), enhancing global reach and market insights, with a modest increase in overall costs by £2k per new survey",
    ],
  },
  {
    position: "Software Engineer",
    company: "Lotto Systems",
    startDate: new Date("08/01/2019"),
    endDate: new Date("11/01/2020"),
    location: "Chester, UK",
    positionTec: [
      "React, Redux, Chakra UI, SCSS",
      "Jest, Enzyme, React Testing Library",
      "TypeScript, Node.JS, PostgreSQL, Golang",
      "Docker, GitLab CI",
      "Figma",
    ],
    points: [
      "Designed and developed a captivating slot machine game deployed on 150 units, achieving a user engagement rate of 90% and contributing to a 15% increase in overall gaming revenue",
      "Collaborated on a horse betting platform, implementing a micro-frontend architecture that efficiently processed real-time horse racing data, resulting in a 25% improvement in platform responsiveness and a 20% reduction in data latency",
    ],
  },
  {
    position: "Software Engineer",
    company: "MWL Systems",
    startDate: new Date("10/01/2018"),
    endDate: new Date("08/01/2019"),
    location: "Wrexham, UK",
    positionTec: [
      "React, Redux, SCSS, LASS",
      "TypeScript, Node.JS, PostgreSQL, C# .NET, EntityFramework",
      "Webpack, Babel",
      "Jest, Enzyme",
      "GitLab CI",
      "Figma",
    ],
    points: [
      "Led the successful delivery of 15 critical features for existing projects, ensuring the satisfaction of 100% of client and business requests within specified timelines",
      "Effectively managed the intricate back-end operations of a monolith project, optimizing performance and reducing system response time by 20% through strategic enhancements",
    ],
  },
  {
    position: "Junior Software Engineer",
    company: "Daila srl.",
    startDate: new Date("05/01/2016"),
    endDate: new Date("09/01/2016"),
    location: "Osio Sotto, IT",
    positionTec: ["CSS, HTML, JavaScript, JQuery", "PHP, MySQL"],
    points: [
      "Developed a local comapny website and managed its SEO, driving traffic up by 40%",
    ],
  },
];

export const EDUCATION = [
  {
    title: "BSc of Computer Science - Computing, Networking & Security",
    entity: "Glyndwr University",
    startDate: new Date("09/01/2017"),
    endDate: new Date("04/09/2020"),
    location: "Chester, United Kingdom",
    lines: [
      { bold: "Major:", content: "Software Engineering" },
      {
        bold: "Thesis:",
        content:
          "Solution to the Traveling Salesman Problem with Dijkstra's algorithm and data from Google Maps. Implemented as a road trip planner in the form of a Web App:",
      },
    ],
    projects: [
      {
        title: "TravelBuddy",
        tech: ["React, Redux, SCSS, D3.JS", "Firebase"],
        links: {
          live: "https://kaloyanbozhkov.com/travelbuddy",
          git: "https://github.com/kaloyanBozhkov/TravelBuddy",
          demo: "https://youtu.be/k4oj9H-HHP0",
        },
      },
    ],
  },
  {
    title: "Computer Science & Technology",
    entity: "I.T.C. B. Belotti",
    startDate: new Date("09/09/2012"),
    endDate: new Date("07/09/2017"),
    location: "Bergamo, Italy",
    lines: [
      {
        bold: "Tech:",
        content: "PHP, MySQL, VB, JavaScript, JQuery, HTML, CSS",
      },
      {
        bold: "Thesis:",
        content:
          "E-commerce website for a local italian beauty company with 5k yearly organic traffic to this day:",
      },
    ],
    projects: [
      {
        title: "SvetlaEstetica",
        tech: ["HTML, CSS, JQuery, JavaScript", "PHP, MySQL"],
        links: {
          live: "https://svetlaestetica.com/",
        },
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Automated IG Reels & Posts",
    entity: "Daily AI-powered Content",
    startDate: new Date("11/11/2023"),
    endDate: new Date("12/12/2023"),
    tech: [
      "TypeScript, Next.JS, Prisma, Zod, REST",
      "React, Remotion, Tailwind",
      "Replicate, OpenAI, Meta Graph API",
      "Canvas, Skia",
      "AWS, QStash",
    ],
    repoUrl: "",
    projectLink: "https://www.instagram.com/aicaramba.io/",
    demoLink: "",
  },
  {
    title: "AICaramba",
    entity: "AI-powered E-Commerce Platform",
    startDate: new Date("12/12/2022"),
    tech: [
      "TypeScript, Next.JS, NextAuth, Prisma, tRPC, Zod",
      "React, Zustand, SCSS, Mantine UI",
      "ESLint, StyleLint & more",
      "DALL-E, Replicate, OpenAI, Stripe, Google Merchant",
      "Three.JS, Canvas",
      "AWS, Vercel, QStash",
    ],
    repoUrl: "",
    projectLink: "https://aicaramba.io/",
    demoLink: "",
  },
  {
    title: "SocksAI",
    entity: "Mystery Next-gen Footwear",
    startDate: new Date("10/10/2023"),
    tech: [
      "TypeScript, Next.JS",
      "React, Zustand, SCSS, Mantine UI",
      "ESLint, StyleLint & more",
      "Stripe",
      "Vercel",
    ],
    repoUrl: "",
    projectLink: "https://aicaramba.io/",
    demoLink: "",
  },
  {
    title: "EnryptVid",
    entity: "Image Manipulation & Rendering on the Edge",
    startDate: new Date("1/09/2022"),
    endDate: new Date("2/09/2022"),
    tech: ["FFMPEG-WASM, TypeScript", "React, Mantine UI, Canvas"],
    repoUrl: "https://github.com/kaloyanBozhkov/encrypt-vid",
    projectLink: "https://kaloyanbozhkov.com/encrypt-vid/",
    demoLink: "",
  },
  {
    title: "MindTrace",
    entity: "Sorting 3D Shapes",
    startDate: new Date("7/09/2023"),
    endDate: new Date("7/09/2023"),
    tech: [
      "React, Three.JS, SCSS/CSS3, Mantine UI",
      "Clerk, React Three Fiber",
    ],
    repoUrl: "https://github.com/kaloyanBozhkov/mindtrace",
    projectLink: "https://mindtrace-three.vercel.app/",
    demoLink: "",
  },
  {
    title: "Mini-Blockchain",
    entity: "Linked-List and Blockchain Hashing with Proof of Work",
    startDate: new Date("2/09/2020"),
    endDate: new Date("2/09/2020"),
    tech: ["React, SCSS"],
    repoUrl: "https://github.com/kaloyanBozhkov/blockchain",
    projectLink: "https://blockchain-ips8eji9n-kaloyanbozhkov.vercel.app/",
    demoLink: "https://www.youtube.com/watch?v=wNI-cohMxcc",
  },
  {
    title: "Game of Boz",
    entity: "Android Platformer Game",
    startDate: new Date("2/09/2015"),
    endDate: new Date("7/09/2015"),
    tech: ["Construct, JavaScript", "MoPub, Google Adsense"],
    repoUrl: "",
    projectLink:
      "https://m.apkpure.com/the-game-of-boz-godlike-moves/com.giocodiboz.versionedue",
    demoLink: "https://www.youtube.com/watch?v=p68tJGYXbpk",
  },
];

export const OTHER = [
  {
    link: "https://medium.com/@kaloyan_17221/fix-vercel-next-js-fetch-failed-from-undici-polyfill-8c66346c9c2f",
    linkLabel: "Article Link",
    title: "Next.JS + Vercel issue identified related to the undici polyfill",
    desc: "Helped 150+ engineers with solving an edge-case caused by an issue with the compiled undici polyfill used by Vercel and Next.JS",
  },
  {
    link: "https://medium.com/@kaloyan_17221/migrating-from-planetscale-to-neon-33e57fef36ae",
    linkLabel: "Article Link",
    title: "Migrating from PlanetScale to Neon, using Prisma and pgloader",
    desc: "Helped 57+ engineers with migrating from PlanetScale SQL to Neon PosgreSQL, following the announcement of the impending retirement of the PS Hobby plan.",
  },
];
