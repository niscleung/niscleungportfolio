import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
// Removed dev SVG imports (ReactLight etc.) – not needed

export const DATA = {
  name: "Nicholas Leung",
  initials: "NL",
  url: "https://niscleungportfolio.vercel.app",
  location: "Hong Kong, HK",
  locationLink: "https://www.google.com/maps/place/Hong+Kong",
  description:
    "Law Student at the University of Warwick. Interested in Jurisprudence and Legal Theory. Foodie as a side hustle.",
  skills: [
    { name: "Legal Research & Analysis" },
    { name: "Jurisprudence & Legal Theory" },
    { name: "Academic Writing" },
    { name: "Criminal Law" },
    { name: "Tort Law" },
    { name: "Critical Theory" },
    { name: "Statistical Analysis" },
    { name: "Argument Construction & Deconstruction" },
    { name: "Literature Review" },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "nicholas.leung1015@gmail.com",
    tel: "+852 60879171",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nicholas-l-29a4a4153/",
        icon: Icons.linkedin,
        navbar: true,
      },
      // Add others if relevant (GitHub, X, etc.)
    },
  },
  work: [
    {
      company: "Warwick Law Society",
      href: "https://warwicklawsoc.com/",
      badges: ["Speakers Sub-Committee"],
      location: "Coventry, UK",
      title: "Speakers Sub-Committee Member",
      logoUrl: "/warwick-law-soc-logo.png",
      start: "Oct 2025",
      end: "Present",
      description:
        "Coordinating logistics and contributing to planning guest speaker events with representatives from leading law firms. Promoting events and increasing student engagement through targeted outreach across the university community.",
    },
    {
      company: "Critical Lawyers at Warwick (CLAW)",
      href: "https://clawwarwick.wixsite.com/claw",
      badges: ["Fresher's Representative"],
      location: "Coventry, United Kingdom",
      title: "Fresher's Representative",
      logoUrl: "/claw-logo.png",
      start: "Oct 2025",
      end: "Present",
      description:
        "Planning and delivering skill-building opportunities for CLAW members, including organising workshops, speaker events, panel discussions, and interdisciplinary skill-building sessions across a range of legal and interdisciplinary themes.",
    },
    {
      company: "7BR Barristers Chambers",
      href: "https://www.7br.co.uk/",
      badges: ["Mini Pupillage"],
      location: "London, United Kingdom",
      title: "Mini Pupillage",
      logoUrl: "/7br-logo.png",
      start: "Mar 2026",
      end: "Mar 2026",
      description: "Commencing March 2026.",
    },
    {
      company: "Central Chambers",
      href: "https://www.centralchambers.com.hk/",
      badges: ["Mini Pupillage"],
      location: "Admiralty, Hong Kong",
      title: "Mini Pupillage",
      logoUrl: "/central-logo.png",
      start: "Dec 2025",
      end: "Jan 2026",
      description:
        "Conducted legal research on regulatory offences concerning specialised products for use in counsel’s written submissions. Assisted in developing arguments for a criminal appeal case involving conspiracy to defraud and money laundering.",
    },
    {
      company: "Denis Chang's Chambers",
      href: "https://dcc.law/",
      badges: ["Mini Pupillage"],
      location: "Admiralty, Hong Kong",
      title: "Mini Pupillage",
      logoUrl: "/denis-chang-logo.png",
      start: "Jul 2025",
      end: "Jul 2025",
      description:
        "Under tutelage of Mr. Matthew H.B. Suen. Areas: International Arbitration, Contractual Disputes, Criminal Law.",
    },
  ],
  education: [
    {
      school: "University of Warwick",
      href: "https://warwick.ac.uk/fac/soc/law/",
      degree: "Bachelor of Laws (LLB)",
      logoUrl: "/public/warwick.png",
      start: "2025",
      end: "2028",
      description:
        "First Year. Activities and societies: Warwick Law Society, Warwick Bar Society, Warwick Philosophy Society, Think Tank Society, Critical Lawyers at Warwick, Warwick Run Club.",
    },
    {
      school: "ESF King George V School",
      href: "https://kgv.esf.edu.hk/",
      degree: "International Baccalaureate (IB Diploma)",
      logoUrl: "/public/kgv-logo.png",
      start: "2021",
      end: "2025",
      description:
        "Higher Level: Biology, Philosophy, Psychology. Standard Level: English Language & Literature, Mathematics Analysis & Approaches, Chinese B. Activities: ISSFHK Cross Country, Student Wellbeing Team.",
    },
  ],
  competitions: [
    {
      title: "Warwick First-Year Mooting Competition",
      dates: "Oct - Nov 2025",
      location: "University of Warwick",
      description: "Semi-Finalist. Ranked 3rd place out of 75+ competitors.",
    },
  ],
} as const;
