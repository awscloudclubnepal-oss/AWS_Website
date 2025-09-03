export type ContributorType = {
  name: string;
  role?: string;
  image: string;
  github?: string;
  linkedin?: string;
};

const contributors: ContributorType[] = [
  {
    name: "Sandesh Khadka",
    role: "Tech Lead",
    image: "/contributors/sandesh.jpg",
    github: "https://github.com/sandeshkhadka",
    linkedin: "https://linkedin.com/in/sandeshkhadka",
  },
  {
    name: "Jeeni Shrestha",
    role: "Developer",
    image: '/contributors/jeeni.webp',
    github: "https://github.com/jeeni",
    linkedin: "https://linkedin.com/in/jeeni",
  },
  {
    name: "Sandip Gyawali",
    github: "https://github.com/SandipGyawali",
    linkedin: "https://www.linkedin.com",
    role: "Developer",
    image: '/contributors/jeeni.webp',
  },{
    name: "Sandesh Khadka",
    role: "Tech Lead",
    image: "/contributors/sandesh.jpg",
    github: "https://github.com/sandeshkhadka",
    linkedin: "https://linkedin.com/in/sandeshkhadka",
  },
  {
    name: "Jeeni Shrestha",
    role: "Developer",
    image: '/contributors/jeeni.webp',
    github: "https://github.com/jeeni",
    linkedin: "https://linkedin.com/in/jeeni",
  },
  {
    name: "Sandip Gyawali",
    github: "https://github.com/SandipGyawali",
    linkedin: "https://www.linkedin.com",
    role: "Developer",
    image: '/contributors/jeeni.webp',
  },
];

export default contributors;
