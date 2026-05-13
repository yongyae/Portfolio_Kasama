// ─── portfolioData.js ─────────────────────────────────────────────────────────
// Edit this file to update all portfolio content.
// Every text field supports { en: "...", th: "..." } for bilingual content.
// Images: use arrays of URLs. First image is the "cover"; rest shown in gallery.

import profileImg        from "./assets/img/profile_kasama_soisuwan.jpg";
import profileStdImg     from "./assets/img/profile_std.jpg";
import pramernImg        from "./assets/pramern/pramern_project.png";
import imgSaes5          from "./assets/img/img_saes5.jpg";
import certSaes5         from "./assets/cert/cert_saes5.jpg";
import imgCoopday12      from "./assets/img/img_coopday12.jpg";
import certBa            from "./assets/cert/cert_ba.png";
import certGooglePM      from "./assets/cert/cert_google_project_management.png";
import certCamp12        from "./assets/cert/cert_camp12.png";
import certIf            from "./assets/cert/cert_if.png";
import imgAi5            from "./assets/img/img_ai5.jpg";

export const PROFILE = {
  name: "Kasama Soisuwan",
  nameLocal: "กษมา สร้อยสุวรรณ",
  email: "kasama.soisuwan@gmail.com",
  phone: "+66 92 912 7114",
  location: { en: "Chonburi, Thailand", th: "ชลบุรี, ประเทศไทย" },
  avatars: [profileImg, profileStdImg],
  bio: {
    en: "Software Engineering graduate with hands-on BA experience delivering a production-deployed internal system at Siam Denso Manufacturing and leading requirements activities on a university-funded project. Skilled in owning the full requirements lifecycle from stakeholder interviews and SRS documentation to UAT sign-off while collaborating closely with development teams to deliver on time.",
    th: "บัณฑิตวิศวกรรมซอฟต์แวร์ที่มีประสบการณ์ BA จริงในการส่งมอบระบบที่ deploy จริงที่ Siam Denso Manufacturing และนำกิจกรรม requirements ในโปรเจกต์ที่ได้รับทุนจากมหาวิทยาลัย มีความเชี่ยวชาญในวงจรชีวิต requirements ตั้งแต่การสัมภาษณ์ผู้มีส่วนได้ส่วนเสียและการเขียน SRS จนถึงการ UAT",
  },
  skills: ["Requirements Gathering", "SRS Writing", "UAT", "Agile / Scrum", "Use Case Design","Activity Design", "ER Diagram", "UX/UI Design"],
  metrics: [
    { value: "B.Sc.", label: { en: "Software Engineering", th: "วิศวกรรมซอฟต์แวร์" } },
    { value: "3.83",  label: { en: "GPAX", th: "เกรดเฉลี่ย" } },
    { value: "2",     label: { en: "Projects Delivered", th: "โปรเจกต์ที่ส่งมอบ" } },
    { value: "6 mo.", label: { en: "BA Internship", th: "ฝึกงาน BA" } },
  ],
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/kasama-soisuwan" },
    { label: "GitHub",   url: "https://github.com/yongyae" },
    { label: "Email",    url: "mailto:kasama.soisuwan@gmail.com" },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title:    { en: "RaoChatHub", th: "RaoChatHub" },
    subtitle: { en: "Business Brotherhood 2026 · Feb 2026 – Present", th: "Business Brotherhood 2026 · ก.พ. 2569 – ปัจจุบัน" },
    role:     { en: "Business Analyst & Developer", th: "นักวิเคราะห์ธุรกิจ & นักพัฒนา" },
    status:   "Active",
    sl: { color: "#1e40af", bg: "#dbeafe" },
    sd: { color: "#93c5fd", bg: "#1e3a5f" },
    // Add more image URLs to this array for the gallery
    images: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&h=500&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&h=500&fit=crop",
    ],
    tags: ["Next.js", "Express.js", "TypeScript", "SRS", "BMC", "Figma"],
    problem: {
      en: "SME e-commerce businesses struggled to manage customer communications across multiple chat platforms simultaneously, leading to missed messages and lost sales opportunities.",
      th: "ธุรกิจ SME อีคอมเมิร์ซประสบปัญหาในการจัดการการสื่อสารกับลูกค้าผ่านหลายแพลตฟอร์มพร้อมกัน ทำให้พลาดข้อความและเสียโอกาสทางการขาย",
    },
    analysis: {
      en: "Elicited requirements from team lead and business stakeholders. Translated findings into a full SRS document covering 58 use cases across the entire system. Facilitated meetings with faculty advisors to develop the Business Model Canvas (BMC).",
      th: "รวบรวม requirements จากหัวหน้าทีมและผู้มีส่วนได้ส่วนเสียทางธุรกิจ แปลงผลลัพธ์เป็นเอกสาร SRS ครบถ้วนที่ครอบคลุม 58 use cases ทั่วทั้งระบบ อำนวยการประชุมกับอาจารย์ที่ปรึกษาเพื่อพัฒนา Business Model Canvas (BMC)",
    },
    solution: {
      en: "AI-powered unified chat platform aggregating multiple e-commerce messaging channels. Led BA activities within a 5-member team, decomposed requirements into actionable tasks, and coordinated sprint kick-off. Co-developed Account Management and Dashboard frontend/backend modules.",
      th: "แพลตฟอร์มแชทรวมศูนย์ที่ขับเคลื่อนด้วย AI รวบรวมช่องทางข้อความอีคอมเมิร์ซหลายช่องทาง นำกิจกรรม BA ภายในทีม 5 คน แยก requirements เป็นงานที่ปฏิบัติได้ และประสานงาน sprint kick-off",
    },
    impact: {
      en: ["Awarded THB 100,000 seed funding through Business Brotherhood 2026", "Full SRS document covering 58 use cases delivered on schedule", "5-member team coordinated through structured sprint planning"],
      th: ["ได้รับทุน 100,000 บาทจากโปรแกรม Business Brotherhood 2026", "ส่งมอบเอกสาร SRS ครบถ้วนครอบคลุม 58 use cases ตรงเวลา", "ประสานงานทีม 5 คนผ่านการวางแผน sprint อย่างเป็นระบบ"],
    },
    tech: ["Next.js", "Express.js", "TypeScript", "Figma", "Draw.io", "Visual Paradigm", "Miro"],
  },
  {
    id: 2,
    title:    { en: "Equipment Lending System", th: "ระบบยืมอุปกรณ์" },
    subtitle: { en: "Siam Denso Manufacturing · Jun 2025 – Apr 2026", th: "Siam Denso Manufacturing · มิ.ย. 2568 – เม.ย. 2569" },
    role:     { en: "Business Analyst & Developer (Internship & Senior Project)", th: "นักวิเคราะห์ธุรกิจ & นักพัฒนา (ฝึกงาน & Senior Project)" },
    status:   "Deployed",
    sl: { color: "#166534", bg: "#dcfce7" },
    sd: { color: "#86efac", bg: "#14532d" },
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=500&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=500&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=500&fit=crop",
    ],
    tags: ["Next.js", "Express", "Prisma", "SQL Server", "UAT", "Use Case"],
    problem: {
      en: "Manual equipment borrowing processes at Siam Denso Manufacturing with no visibility into availability, no formal approval chain, and no audit trail — causing double-booking and accountability gaps.",
      th: "กระบวนการยืมอุปกรณ์แบบ manual ที่ Siam Denso Manufacturing ไม่มีการมองเห็นความพร้อมใช้งาน ไม่มีลำดับการอนุมัติอย่างเป็นทางการ และไม่มี audit trail — ทำให้เกิดการจองซ้ำและช่องว่างด้านความรับผิดชอบ",
    },
    analysis: {
      en: "Conducted stakeholder interviews to gather, validate, and prioritise system requirements. Produced full system documentation: Use Case Diagrams, ER Diagrams, process flows, and approval forms. Coordinated sprint planning and reported progress to project stakeholders.",
      th: "สัมภาษณ์ผู้มีส่วนได้ส่วนเสียเพื่อรวบรวม ตรวจสอบ และจัดลำดับความสำคัญของ requirements ผลิตเอกสารระบบครบถ้วน: Use Case Diagrams, ER Diagrams, process flows และแบบฟอร์มการอนุมัติ",
    },
    solution: {
      en: "Owned the full BA lifecycle from discovery through UAT and handover. Delivered a production-deployed internal system with role-based approval flows, real-time notifications, and full audit trail. Led UAT sessions; documented defects and obtained sign-off for final delivery.",
      th: "เป็นเจ้าของ BA lifecycle ครบวงจรตั้งแต่การค้นพบจนถึง UAT และส่งมอบ ส่งมอบระบบภายในที่ deploy จริงพร้อม approval flows ตามบทบาท การแจ้งเตือนแบบ real-time และ audit trail ครบถ้วน นำ UAT sessions กับผู้ใช้ปลายทาง",
    },
    impact: {
      en: ["Production-deployed system used across Siam Denso departments", "Full documentation suite delivered: Use Cases, ER Diagrams, process flows", "UAT completed with formal sign-off obtained", "Full-stack development contribution supported on-time delivery"],
      th: ["ระบบ deploy จริงที่ใช้งานทั่วแผนกของ Siam Denso", "ส่งมอบชุดเอกสารครบถ้วน: Use Cases, ER Diagrams, process flows", "UAT เสร็จสมบูรณ์พร้อม formal sign-off", "การพัฒนา full-stack ช่วยสนับสนุนการส่งมอบตรงเวลา"],
    },
    tech: ["Next.js", "Express", "Prisma ORM", "SQL Server", "Visual Paradigm", "Draw.io", "Postman"],
  },
  {
    id: 3,
    title:    { en: "PRAMERN System", th: "ระบบ PRAMERN" },
    subtitle: { en: "92 Tech Co., Ltd. · Jul 2024 – Mar 2025", th: "92 Tech Co., Ltd. · ก.ค. 2567 – มี.ค. 2568" },
    role:     { en: "Planning Manager (11-member team)", th: "ผู้จัดการฝ่ายวางแผน (ทีม 11 คน)" },
    status:   "Delivered",
    sl: { color: "#374151", bg: "#f3f4f6" },
    sd: { color: "#d1d5db", bg: "#2a2a2a" },
    images: [pramernImg],
    tags: ["WBS", "Gantt Chart", "Scrum", "Burndown Chart", "Playwright"],
    problem: {
      en: "An 11-member academic team needed a structured planning framework to build a personnel performance evaluation system for educational institutions, with no existing coordination process.",
      th: "ทีมวิชาการ 11 คนต้องการกรอบการวางแผนอย่างมีโครงสร้างเพื่อสร้างระบบประเมินผลการปฏิบัติงานบุคลากรสำหรับสถาบันการศึกษา โดยไม่มีกระบวนการประสานงานที่มีอยู่",
    },
    analysis: {
      en: "Assessed team capacity across 11 members spanning design, development, and QA. Identified need for structured sprint cadence, milestone tracking, and clear task ownership to ensure all deliverables were met on schedule.",
      th: "ประเมินความสามารถของทีม 11 คน ทั้งด้าน design, development และ QA ระบุความต้องการ sprint cadence อย่างมีโครงสร้าง การติดตาม milestone และความเป็นเจ้าของงานที่ชัดเจนเพื่อให้ส่งมอบงานตรงเวลา",
    },
    solution: {
      en: "Created and maintained full planning artefacts: WBS, Milestone Charts, Gantt Charts, Velocity Charts, and Burndown Charts. Assigned tasks, tracked individual progress, managed meeting schedules, produced meeting minutes, and authored automated UI test cases for 1 module using Playwright.",
      th: "สร้างและดูแลเอกสารการวางแผนครบถ้วน: WBS, Milestone Charts, Gantt Charts, Velocity Charts และ Burndown Charts มอบหมายงาน ติดตามความคืบหน้า จัดการตารางประชุม และเขียน automated UI test cases สำหรับ 1 โมดูลด้วย Playwright",
    },
    impact: {
      en: ["All project milestones delivered on time across an 11-member team", "Full planning artefact suite maintained throughout the project lifecycle", "Automated UI test cases bridging requirements and QA validation", "Meeting minutes and requirements documentation kept current throughout"],
      th: ["milestone โปรเจกต์ทั้งหมดส่งมอบตรงเวลาในทีม 11 คน", "ดูแลชุดเอกสารการวางแผนครบถ้วนตลอดวงจรชีวิตโปรเจกต์", "Automated UI test cases เชื่อมโยง requirements กับการตรวจสอบ QA", "รักษา meeting minutes และเอกสาร requirements ให้ทันสมัยตลอด"],
    },
    tech: ["Playwright", "Jira", "Trello", "Monday.com", "Google Sheets", "Miro"],
  },
];

export const TRAININGS = [
  {
    year: "2026",
    title: { en: "Business Brotherhood Program", th: "โปรแกรม Business Brotherhood" },
    org:   "University Incubator",
    type:  "Program",
    description: {
      en: "Competitive startup incubator program. Led BA activities for RaoChatHub, securing THB 100,000 seed funding. Delivered SRS, BMC, and sprint roadmap for a 5-member product team.",
      th: "โปรแกรม incubator startup แบบแข่งขัน นำกิจกรรม BA สำหรับ RaoChatHub ได้รับทุน 100,000 บาท ส่งมอบ SRS, BMC และ sprint roadmap สำหรับทีมผลิตภัณฑ์ 5 คน",
    },
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&h=500&fit=crop",
    ],
  },
  {
    year: "2026",
    title: {
      en: "Faculty Award — Professional Excellence & Social Contribution",
      th: "รางวัลผู้สร้างผลงานและชื่อเสียงให้กับคณะวิทยาการสารสนเทศ",
    },
    org:  "Faculty of Informatics, Burapha University",
    type: "Award",
    description: {
      en: "Recognised for outstanding professional achievement and social contribution to the Faculty of Informatics, Burapha University.",
      th: "ได้รับการยกย่องด้านผลงานดีเด่นทางวิชาชีพและบำเพ็ญประโยชน์ต่อสังคมจากคณะวิทยาการสารสนเทศ มหาวิทยาลัยบูรพา",
    },
    images: [certIf],
  },
  {
    year: "2025",
    title: { en: "BA Internship — Siam Denso Manufacturing", th: "ฝึกงาน BA — Siam Denso Manufacturing" },
    org:   "Siam Denso Manufacturing Co., Ltd.",
    type:  "Internship",
    description: {
      en: "6-month internship embedded in the IT department. Owned the full BA lifecycle for the Equipment Lending System — from discovery interviews and SRS through sprint coordination, UAT, and production handover.",
      th: "ฝึกงาน 6 เดือนในฝ่าย IT เป็นเจ้าของ BA lifecycle ครบวงจรสำหรับ Equipment Lending System — ตั้งแต่การสัมภาษณ์เชิงสำรวจและ SRS จนถึงการประสาน sprint, UAT และการส่งมอบ production",
    },
    images: [imgCoopday12],
  },
  {
    year: "2025",
    title: {
      en: "BA Development & Career Opportunity Program",
      th: "โครงการพัฒนาทักษะและสร้างโอกาสการทำงาน สำหรับนักวิเคราะห์ธุรกิจรุ่นใหม่",
    },
    org:  "Alpha Counsellor Co., Ltd.",
    type: "Program",
    description: {
      en: "30-hour intensive training program developing practical Business Analyst skills and career readiness for new BA professionals. Held November 3–7, 2025.",
      th: "โปรแกรมฝึกอบรมเข้มข้น 30 ชั่วโมง พัฒนาทักษะ BA เชิงปฏิบัติและความพร้อมในการทำงานสำหรับนักวิเคราะห์ธุรกิจรุ่นใหม่ จัดขึ้น 3–7 พฤศจิกายน 2568",
    },
    images: [certBa],
  },
  {
    year: "2024",
    title: {
      en: "Google Project Management Professional Certificate",
      th: "Google Project Management Professional Certificate",
    },
    org:  "Google / Coursera",
    type: "Certificate",
    description: {
      en: "6-course professional certificate program covering the full project management lifecycle — initiating, planning, execution, quality management, Agile, and programme closure. Completed December 30, 2024.",
      th: "โปรแกรมใบรับรองวิชาชีพ 6 คอร์ส ครอบคลุมวงจรชีวิตการจัดการโปรเจกต์ครบถ้วน — การเริ่มต้น การวางแผน การดำเนินการ การจัดการคุณภาพ Agile และการปิดโปรแกรม สำเร็จเมื่อ 30 ธันวาคม 2567",
    },
    images: [certGooglePM],
  },
  {
    year: "2024",
    title: {
      en: "Open Source Software Developers Camp #12",
      th: "Open Source Software Developers Camp #12",
    },
    org:  "Faculty of Informatics, Burapha University",
    type: "Academic",
    description: {
      en: "Week-long immersive camp (April 6–12, 2024) focused on open source software development and hands-on collaboration within the Software Engineering program.",
      th: "ค่ายเข้มข้น 1 สัปดาห์ (6–12 เมษายน 2567) มุ่งเน้นการพัฒนาซอฟต์แวร์โอเพนซอร์สและการทำงานร่วมกันในโปรแกรมวิศวกรรมซอฟต์แวร์",
    },
    images: [certCamp12],
  },
];

export const COMPETITIONS = [
  {
    title:  { en: "Business Brotherhood 2026", th: "Business Brotherhood 2026" },
    org:    { en: "University Incubator Program", th: "โปรแกรมบ่มเพาะมหาวิทยาลัย" },
    result: { en: "Seed Funded — THB 100,000", th: "ได้รับทุน 100,000 บาท" },
    sl: { color: "#166534", bg: "#dcfce7" },
    sd: { color: "#86efac", bg: "#14532d" },
    year: "2026",
    description: {
      en: "Led BA activities for RaoChatHub — an AI-powered unified chat platform for SME e-commerce. Delivered full SRS (58 use cases), Business Model Canvas, and sprint coordination. Competed against multiple university teams to secure THB 100,000 seed funding.",
      th: "นำกิจกรรม BA สำหรับ RaoChatHub — แพลตฟอร์มแชทรวมศูนย์ที่ขับเคลื่อนด้วย AI สำหรับ SME อีคอมเมิร์ซ ส่งมอบ SRS ครบถ้วน (58 use cases), Business Model Canvas และการประสาน sprint แข่งขันกับทีมมหาวิทยาลัยหลายทีมเพื่อได้รับทุน 100,000 บาท",
    },
    images: [
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&h=500&fit=crop",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&h=500&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&h=500&fit=crop",
    ],
    tags: ["SRS", "BMC", "BA", "Startup", "AI Platform", "Seed Funding"],
  },
  {
    title:  { en: "Super AI Engineer Season 5", th: "Super AI Engineer Season 5" },
    org:    { en: "AIAT / NSTDA", th: "สมาคมปัญญาประดิษฐ์ประเทศไทย / สวทช." },
    result: { en: "Selected to Present Nationally", th: "ได้รับคัดเลือกนำเสนอระดับชาติ" },
    sl: { color: "#1e40af", bg: "#dbeafe" },
    sd: { color: "#93c5fd", bg: "#1e3a5f" },
    year: "2025",
    description: {
      en: "Selected to present RaoChatHub — an Intelligent AI Chat Platform by Computer Center BUU — at the Super AI Engineer Season 5 National AI Exhibition (October 23, 2025), organised by the Artificial Intelligence Association of Thailand (AIAT) and NSTDA.",
      th: "ได้รับคัดเลือกนำเสนอโปรเจกต์ RaoChatHub — Intelligent AI Chat Platform by Computer Center BUU — ในงาน National AI Exhibition Super AI Engineer Season 5 (23 ตุลาคม 2568) จัดโดยสมาคมปัญญาประดิษฐ์ประเทศไทย (AIAT) และ สวทช.",
    },
    images: [imgSaes5, imgAi5, certSaes5],
    tags: ["AI", "Chatbot", "NLP", "RaoChatHub", "AIAT", "Exhibition"],
  },
];

export const I18N = {
  en: {
    nav: ["About", "Projects", "Training", "Competitions"],
    role: "Business Analyst",
    selectedWork: "Skill",
    viewAll: "View all projects →",
    downloadCV: "Download CV",
    caseStudies: "Case Studies",
    projects: "Projects",
    learning: "Continuous Learning",
    training: "Training & Experience",
    achievements: "Achievements",
    competitions: "Competitions",
    back: "← Back",
    problem: "Problem",
    analysis: "Analysis",
    solution: "Solution",
    impact: "Impact",
    techStack: "Tech Stack",
    gallery: "Gallery",
    overview: "Overview",
    details: "Details",
    readMore: "View details →",
    close: "Close",
  },
  th: {
    nav: ["เกี่ยวกับ", "โปรเจกต์", "การอบรม", "การแข่งขัน"],
    role: "นักวิเคราะห์ธุรกิจ",
    selectedWork: "ทักษะ",
    viewAll: "ดูโปรเจกต์ทั้งหมด →",
    downloadCV: "ดาวน์โหลด CV",
    caseStudies: "กรณีศึกษา",
    projects: "โปรเจกต์",
    learning: "การเรียนรู้อย่างต่อเนื่อง",
    training: "การอบรมและประสบการณ์",
    achievements: "ความสำเร็จ",
    competitions: "การแข่งขัน",
    back: "← กลับ",
    problem: "ปัญหา",
    analysis: "การวิเคราะห์",
    solution: "แนวทางแก้ไข",
    impact: "ผลลัพธ์",
    techStack: "เทคโนโลยีที่ใช้",
    gallery: "แกลเลอรี่",
    overview: "ภาพรวม",
    details: "รายละเอียด",
    readMore: "ดูรายละเอียด →",
    close: "ปิด",
  },
};

export const SKILLS = [
  {
    category: { en: "Skills", th: "ทักษะ" },
    items: [
      "Requirements Gathering",
      "SRS Documentation",
      "Use Case Design",
      "ER Diagram",
      "UAT Planning & Sign-off",
      "Process Mapping",
      "Stakeholder Interviews",
      "Business Model Canvas",
      "Agile / Scrum",
      "Sprint Planning",
      "WBS & Gantt Chart",
      "UX/UI Design",
      "Team Coordination",
      "Meeting Facilitation",
      "Cross-functional Communication",
    ],
  },
  {
    category: { en: "Tools", th: "Tools" },
    items: [
      { name: "Figma",           slug: "figma" },
      { name: "Draw.io",         slug: "diagramsdotnet" },
      { name: "Visual Paradigm", slug: null },
      { name: "Miro",            slug: "miro" },
      { name: "Jira",            slug: "jira" },
      { name: "Trello",          slug: "trello" },
      { name: "Monday.com",      slug: null },
      { name: "Postman",         slug: "postman" },
      { name: "Google Sheets",   slug: "googlesheets" },
    ],
  },
  {
    category: { en: "Tech Stack", th: "Tech Stack" },
    items: [
      { name: "Next.js",        slug: "nextdotjs" },
      { name: "React",          slug: "react" },
      { name: "TypeScript",     slug: "typescript" },
      { name: "Node.js / Express", slug: "nodedotjs" },
      { name: "Prisma ORM",     slug: "prisma" },
      { name: "SQL Server",     slug: null },
      { name: "Playwright",     slug: null },
    ],
  },
];

export const TYPE_PALETTE = {
  light: {
    Program:    { c: "#166534", b: "#dcfce7" },
    Internship: { c: "#92400e", b: "#fef3c7" },
    Certificate:{ c: "#1e40af", b: "#dbeafe" },
    Course:     { c: "#374151", b: "#f3f4f6" },
    Bootcamp:   { c: "#6d28d9", b: "#ede9fe" },
    Academic:   { c: "#1e40af", b: "#dbeafe" },
    Award:      { c: "#854d0e", b: "#fef9c3" },
  },
  dark: {
    Program:    { c: "#86efac", b: "#14532d" },
    Internship: { c: "#fcd34d", b: "#451a03" },
    Certificate:{ c: "#93c5fd", b: "#1e3a5f" },
    Course:     { c: "#d1d5db", b: "#2d3748" },
    Bootcamp:   { c: "#c4b5fd", b: "#3b1f6e" },
    Academic:   { c: "#93c5fd", b: "#1e3a5f" },
    Award:      { c: "#fde047", b: "#422006" },
  },
};