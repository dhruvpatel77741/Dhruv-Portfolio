import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Dhruv Patel',
  title: "Hi all, I'm Dhruv",
  description:
    "A passionate software developer, your fellow coder, and a proud tech geek. Let's chat about all things tech and explore the latest innovations together. Keep scrolling to discover more about me.",
  resumeLink:
    'https://drive.google.com/file/d/1p7Qt0rUXi3JmL3Cl_STtv_EvHZqCyEk3/view',
};

export const openSource = {
  githubUserName: 'dhruvpatel77741',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: '',
  linkedin: 'https://www.linkedin.com/in/dhruvpatel77741/',
  github: 'https://github.com/dhruvpatel77741/',
  gmail: 'dhruvpatel77741@gmail.com'
};

export const skillsSection: SkillsSectionType = {
  title: 'WHAT I DO',
  subTitle: 'SOFTWARE DEVELOPER WHO LOVES TECH',
  data: [
    {
      title: 'Full Stack Developer',
      lottieAnimationFile: './lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building RESTful APIs in NodeJs Framework'),
        emoji('⚡ Building responsive websites using React.js'),
        emoji('⚡ Working with Continuous Integration and Deployment (CI/CD) Pipelines'),
        emoji('⚡ Handling Data Validation, Sanitization, and Error Handling Effectively'),
        
      ],
      softwareSkills: [
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'TypeScript',
          iconifyTag: 'logos:typescript-icon',
        },
        {
          skillName: 'React',
          iconifyTag: 'logos:react',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Django',
          iconifyTag: 'vscode-icons:file-type-django',
        },
        {
          skillName: 'CPP',
          iconifyTag: 'mdi:language-cpp',
        },
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'MaterialUI',
          iconifyTag: 'logos:material-ui',
        },
        {
          skillName: 'Mongo',
          iconifyTag: 'devicon:mongodb-wordmark',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: './lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Sql',
          iconifyTag: 'logos:mysql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'TypeScript|JavaScript (ReactJs)', 
    progressPercentage: '80', 
  },
  {
    Stack: 'Python (Django, Flask, Numpy, Pandas)',
    progressPercentage: '80',
  },
  {
    Stack: 'C++',
    progressPercentage: '90',
  },
  {
    Stack: 'AWS (EC2, ES, S3, SQS, Lambda, SNS)',
    progressPercentage: '80',
  },
  {
    Stack: 'Database (MongoDB, MySQL, Postgres)',
    progressPercentage: '85',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Illinois Institute of Technology',
    subHeader: 'Master in Computer Science',
    duration: 'August 2024 - May 2026',
    desc: '',
    companyLogo: './img/icons/common/iit-logo.svg',
    descBullets: [
    ],
  },
  {
    schoolName: 'Dharmsinh Desai Univeristy',
    subHeader: 'B.Tech. in Computer Engineering',
    duration: 'July 2019 - May 2023',
    companyLogo: './img/icons/common/ddu-logo.png',
    desc: '',
    descBullets: [],
  },

  
];

export const experience: ExperienceType[] = [
  {
    role: 'Graduate Teaching Assistant',
    company: 'Illinois Institute of Technology',
    companyLogo: './img/icons/common/iit-logo.svg',
    date: 'Aug 2025 – Dec 2025',
    desc: 'Standardize complex distributed architectures and serverless paradigms for large developer teams while enforcing enterprise SLA standards. Engineer containerized microservices using Docker to streamline CI/CD pipelines and improve deployment efficiency by 25%. Evaluate full-stack system architectures and design automated regression testing suites to reduce integration defects and bugs by 30%.',
  },
  {
    role: 'Frontend Developer',
    company: 'Uveaa Australia Pty. Ltd.',
    companyLogo: './img/icons/common/uveaa-logo3.svg',
    date: 'Jan 2024 – Jul 2024',
    desc: 'Engineered a responsive, highly accessible web application, boosting user engagement by 15%. Collaborated with UX and backend teams to implement performant UI modules and data-fetching strategies, reducing production defects by 20%. Employed agile methodologies, accelerating feature deployment timelines by 15%.',
  },
  {
    role: 'Software Developer',
    company: 'Insignia Technolabs',
    companyLogo: './img/icons/common/insignia-logo2.png',
    date: 'Jul 2023 – Jul 2024',
    desc: 'Led the optimization and security of enterprise-level MySQL databases and RESTful APIs for 1,000+ active users. Conducted technical root-cause investigations and debugging to isolate performance anomalies, ensuring high-quality system performance. Played a key role in Git-based code reviews and agile cycles, driving a 25% improvement in user platform adoption.',
  },
  // {
  //   role: 'Administrative and Operations Coordinator',
  //   company: 'Shiv Immigration',
  //   companyLogo: './img/icons/common/shiv-logo.jpg',
  //   date: 'May 2023 – Dec 2023',
  //   desc: 'Managed financial transactions, including budgeting, expense tracking, and financial reporting. Oversaw daily operations, ensuring smooth functioning of the institution and resolving any operational issues. Led and supervised teams to optimize workflows, enforce compliance, and achieve organizational goals.',
  // },
  {
    role: 'Project Intern',
    company: 'Institute for Plasma Research',
    companyLogo: './img/icons/common/ipr-logo2.png',
    date: 'Dec 2022 – Apr 2023',
    desc: 'Developed a centralized Authentication System providing Single Sign-On (SSO) services. Designed and tested API endpoints using Postman, optimizing authentication workflows. Collaborated with IT teams to deploy and troubleshoot IAM solutions, reducing authentication issues by 30%.',
  }
];

export const projects: ProjectType[] = [
  {
    name: 'Medical NLP Service - Diagnostic Report Processor',
    companyLogo: './img/icons/common/ECommerce-logo.png',
    desc: 'Built an enterprise-grade cloud medical NLP service using Python and Hugging Face for tokenization and sequence classification. Integrated a performant cloud API gateway within sandboxed execution boundaries, reducing data latency by 80% while safeguarding strict medical data residency rules. Developed multi-label correlation pipelines to process patient data streams, improving diagnostic matching accuracy by 25%. Implemented secure data management across infrastructure for all patient medical records.',
    github: 'https://github.com/dhruvpatel77741/CS595-NLP_Extraction.git',
  },
  {
    name: 'EliteCare - Health Assistant',
    companyLogo: './img/icons/common/covid19.jpg',
    desc: 'Developed an AI-powered healthcare and order management assistant using React.js, Node.js, Rasa AI, and MongoDB. It provides personalized medication recommendations, dosage guidance, and side-effect analysis, along with drug interaction safety checks. Implemented Rasa NLU for fraud detection using OCR, enabling automated refund and replacement decisions based on user verification. Designed a conversational AI with advanced NLU and dialogue management, enhancing user experience and efficiency.',
    github: 'https://github.com/dhruvpatel77741/EliteCare-HealthAssistant',
  },
  {
    name: 'SmartHomes - Online Retailer Platform',
    companyLogo: './img/icons/common/ECommerce-logo.png',
    desc: 'Built an e-commerce platform with category-based shopping, order tracking, and cancellations. Integrated Elasticsearch within Docker for semantic search, improving accuracy. Developed an AI-driven ticketing system using OpenAI and base64 image processing for defect analysis. Implemented role-based access control for Store Managers, Salesmen, and Customers, enabling CRUD operations and AI-powered product generation. Also AI based product generation. Used MySQL for all data and MongoDB for Customer Reviews.',
    github: 'https://github.com/dhruvpatel77741/SmartHomes',
  },
  // {
  //   name: 'Currency-Converter',
  //   companyLogo: './img/icons/common/currency-converter-logo2.png',
  //   desc: 'A user-friendly Currency Converter application that enables seamless currency conversion between different currencies. With real-time exchange rates fetched from an external API, the app provides dynamic results. It also showcases a visually appealing interface with country flags for each currency, offering a smooth user experience. The application gives conversions, ensuring users have the latest data at their fingertips.',
  //   github: 'https://github.com/dhruvpatel77741/Currency-Converter',
  // },
  {
    name: 'Insta Reels',
    companyLogo: './img/icons/common/insta-logo.svg',
    desc: 'Created a web application inspired by TikTok and Instagram Reels, allowing users to scroll through short videos with the ability to perform CRUD operations. Utilized Firebase for backend management and implemented the  Intersection Observer API to track scroll percentages and dynamically determine which video should play based on user interaction.',
    github: 'https://github.com/dhruvpatel77741/Insta-Reels',
  },
];

// option to hide or show the ContactUs component
// export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Dhruv Patel',
  description:
    'A passionate Software Developer.',
  author: 'Dhruv Patel',
  keywords: [
    'Dhruv',
    'Dhruv Patel',
    '@dhruvpatel77741',
    'dhruvpatel77741',
    'Portfolio',
    'Dhruv Portfolio',
    'Dhruv Patel Portfolio',
  ],
};
