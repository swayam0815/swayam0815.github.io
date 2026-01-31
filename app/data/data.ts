import { ReactNode } from "react";

interface Project {
    title: string;
    body: string;
    demo: string;
    github: string;
    date: string;
    tech: string[];
}

interface navItems {
    title: string;
    path: string;
    icon: ReactNode;
}




export const courses = [
    "Computer Networks", "Database Management Systems (DBMS)", "Database Systems", "Network Protocols", "Network Security", "Object Oriented Programming (OOP)", "Operating Systems", "Relational Databases", "Software Engineering", "Systems Programming", "User Interface & User Experience (UI/UX)", "Web Development", "Data Structures and Algorithms (I, II)"]

export const skills = ["TypeScript", "JavaScript", "HTML/CSS", "Python", "Java", "Dart", "C", "C#", "C++", "SQL", "React", "Angular", "AWS (Lambda, DynamoDB, S3)", "Next.js"]



export const projects: Project[] = [

    {
        title: "Full-Full Stack Project",
        body: "Yes, you ready that correctly - a \"Full-Full\" stack project. A a project I'm undertaking where I'll be building out the hardware, networking, backend, and frontend of the project. The goal is to set up my own server with a custom API for the backend which will then be used by a custom website or app in the front-end.",
        demo: "",
        github: "",
        date: "",
        tech: ['Frontend', 'Backend', 'Networking', 'Mobile Dev'],
    },

    {
        title: "Sway-Works | Buildspace",
        body: "A project/initiative built during Buildspace S5. The goal was to create an initiative that would local businesses in creating a digital presence. The core idea was to apply the technical skills I have learned to help the local community which has helped me grow.",
        demo: "https://sway-works.vercel.app/",
        github: "https://github.com/swayam0815/swayam-works",
        date: "Sep. 2024",
        tech: ["Next.js", "Tailwind CSS", "TypeScript", "Design",],
    },


    {
        title: "Mobile Music Player app",
        body:
            "An tiny app I built to experiment with mobile development. The goal was to experiment with using different frameworks ()Flutter, Expo, and React Native) for front-end choices.",
        demo: "",
        github: "",
        date: "Experiment",
        tech: ["Flutter", "Expo", "React Native"],
    },

    {
        title: "Patient Plan",
        body: "A full-stack Medical office appointment scheduler help patients and caregivers schedule & manage appointments. It features SMS authentication, role-based access control, and a private database to store records. One of the projects I used to broaden my full-stack exposure.",
        demo: "https://medi-time.vercel.app/",
        github: "https://github.com/swayam0815/Medi-Time",
        date: "Summer 2024",
        tech: [
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "MongoDB",
        ],
    },
    {
        title: "Google Docs Clone",
        body: "A full-stack google docs clone featurning a rich text editor, real-time collaboration, and document sharing. This was a fun little way to explore the methodologies and tech that goes into power Google docs, albeit on a smaller scale. ",
        demo: "https://sway-docs.vercel.app/",
        github: "https://github.com/swayam0815/sway-docs",
        date: "Summer 2024",
        tech: [
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "MongoDB",
        ],
    },

    {
        title: "Cosmic Quest",
        body: "An educational game developed using Object-Oriented Design & Analysis, SOLID principles, and Design patterns with AGILE methodologies. An avenue into game development, design, and story building; The narrative and design of the project were put together by me and this helped direct the development.",
        demo: "https://www.youtube.com/watch?v=FJUNhNIPSKg&ab_channel=Diko",
        github: "https://github.com/swayam0815/CosmicQuest",
        date: "May 2024",
        tech: ["Java", "Wireframe", "Figma", "Git", "Jira", "Bitbucket"],
    },
    {
        title: "Project Lamda",
        body: "A research project that compares the performance of different navigation methods in CSGO (video game). We compared an AI navigationaal model vs path-finding algorithms. The results were published in a research paper.",
        demo: "https://github.com/michaelsalton/ProjectLambda/blob/main/Comparing_AI_Navigation_Methods_Using_Counter_Strike__Global_Offensive.pdf",
        github:
            "https://github.com/michaelsalton/ProjectLambda/blob/main/Comparing_AI_Navigation_Methods_Using_Counter_Strike__Global_Offensive.pdf",
        date: "May 2023",
        tech: ["Python", "Java", "Git", "Jira", "Bitbucket"],
    },
];