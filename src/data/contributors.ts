import { TeamMember } from "@/interface/team";

const contributors: TeamMember[] = [
  {
    id: 1,
    name: "Sandip Gyawali",
    designation: "FullStack Dev (Website Designer & Core Developer)",
    image: "/contributors/sandip-gyawali.jpeg",
    teamTag: "",
    social: {
      github: "https://github.com/SandipGyawali",
      linkedin: "https://www.linkedin.com/in/sandip-gyawali-615681211/",
    },
  },
  {
    id: 2,
    name: "Sandesh Khadka (Team Lead)",
    designation: "Tech Lead",
    image: "/contributors/sandesh.jpg",
    teamTag: "", // You can update this if you have team tags
    social: {
      github: "https://github.com/sandeshkhadka",
      linkedin: "https://linkedin.com/in/sandeshkhadka",
    },
  },
  {
    id: 3,
    name: "Jeeni Shrestha",
    designation: "Developer",
    image: "/contributors/jeeni.webp",
    teamTag: "",
    social: {
      github: "https://github.com/jeeni",
      linkedin: "https://linkedin.com/in/jeeni",
    },
  },
];

export default contributors;
