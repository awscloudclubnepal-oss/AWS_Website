// src/constants/gallery.ts

export interface Category {
  id: string;
  label: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  card: string;
  category: string;
  images: string[];
}

export const categories: Category[] = [
  { id: "all", label: "ALL EVENTS" },
  { id: "community-meetup", label: "COMMUNITY MEETUPS" },
  { id: "workshops", label: "WORKSHOPS" },
  { id: "scd", label: "STUDENT COMMUNITY DAY" },
  // { id: "webinar", label: "WEBINARS" },
  { id: "upcoming", label: "UPCOMING EVENTS" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "AWS meetup at patan campus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    card: "/gallery_assests/Meetups/Meetup_front.jpg",
    category: "community-meetup",
    images: [
      "/gallery_assests/Meetups/Meetup_front.jpg",
      "/gallery_assests/Meetups/Meetup_1.jpg",
      "/gallery_assests/Meetups/Meetup_2.jpg",
      "/gallery_assests/Meetups/Meetup_3.jpg",
    ],
  },
  // {
  //   id: 2,
  //   title: "Community Meetup at Matka Tea",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   card: "/gallery/Community Meetup at Matka Tea/IMG_20240907_110522.jpg",
  //   category: "community-meetup",
  //   images: ["/gallery/Community Meetup at Matka Tea/IMG_20240907_110522.jpg"],
  // },
  {
    id: 3,
    title: "AWS Fundamentals workshops at KEC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    card: "/gallery_assests/Workshops/Aws_Fundamentals/KEC/KEC_front.jpg",
    category: "workshops",
    images: [
      "/gallery_assests/Workshops/Aws_Fundamentals/KEC/KEC_front.jpg",
      "/gallery_assests/Workshops/Aws_Fundamentals/KEC/KEC_1.jpg",
      "/gallery_assests/Workshops/Aws_Fundamentals/KEC/KEC_2.jpg",
      "/gallery_assests/Workshops/Aws_Fundamentals/KEC/KEC_3.jpg",
    ],
  },
  {
    id: 4,
    title: "AWS Fundamentals workshop at KMC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    card:"/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_front.jpg",
    category: "workshops",
    images: [
      "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_front.jpg",
      "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_1.jpg",
      "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_2.jpg",
      "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_3.jpg",
      "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_4.jpg",
      "/gallery_assests/Workshops/Aws_Fundamentals/KMC/KMC_5.jpg",
    ],
  },
  {
    id: 5,
    title: "AWS Fundamentals workshops at KhEC",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    card: "/gallery_assests/Workshops/Aws_Fundamentals/KhEC/KhEC_front.jpg",
    category: "workshops",
    images: [
       "/gallery_assests/Workshops/Aws_Fundamentals/KhEC/KhEC_front.jpg",
       "/gallery_assests/Workshops/Aws_Fundamentals/KhEC/KhEC_1.jpg",
       "/gallery_assests/Workshops/Aws_Fundamentals/KhEC/KhEC_2.jpg",
       "/gallery_assests/Workshops/Aws_Fundamentals/KhEC/KhEC_3.jpg",

    ],
  },
  {
    id: 6,
    title: "Student Community Day 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    card: "/gallery_assests/AWS_SCD_2024/SCD_Front.jpg",
    category: "scd",
    images: [
      "/gallery_assests/AWS_SCD_2024/SCD_1.jpg",
      "/gallery_assests/AWS_SCD_2024/SCD_2.jpg",
    ],
  },
  // {
  //   id: 7,
  //   title: "Training at Yeti International College",
  //   description: 
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   card: "/gallery/Training Session at Yeti International College/IMG_20240811_110720.jpg",
  //   category: "training",
  //   images: [
  //     "/gallery/Training Session at Yeti International College/IMG_20240811_110720.jpg",
  //     "/gallery/Training Session at Yeti International College/IMG_20240811_110723 (2).jpg",
  //     "/gallery/Training Session at Yeti International College/IMG_20240811_110942.jpg",
  //     "/gallery/Training Session at Yeti International College/IMG_20240811_110950.jpg",
  //   ],
  // },
  // {
  //   id: 8,
  //   title: "Linux Customization with GNOME DE",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   card: "/gallery/Training Session on Linux Customization with GNOME DE/IMG20240606163539.jpg",
  //   category: "training",
  //   images: [
  //     "/gallery/Training Session on Linux Customization with GNOME DE/IMG20240606163539.jpg",
  //     "/gallery/Training Session on Linux Customization with GNOME DE/IMG_20240606_163349.jpg",
  //     "/gallery/Training Session on Linux Customization with GNOME DE/IMG_20240606_163544.jpg",
  //     "/gallery/Training Session on Linux Customization with GNOME DE/IMG_20240606_163913.jpg",
  //     "/gallery/Training Session on Linux Customization with GNOME DE/IMG_20240606_180035_1.jpg",
  //   ],
  // },
  {
    id: 9,
    title: "Student Community Day 2025",
    description: 
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    card: "/gallery_assests/Upcoming/upcoming_front.jpg",
    category: "upcoming",
    images: [ "/gallery_assests/Upcoming/upcoming_front.jpg"],
  },
  // {
  //   id: 10,
  //   title: "Webinar: Open Source & GNOME",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  //   card: "/gallery/Webinar on Open Source & GNOME - Aryan Kaushik/Screenshot 2024-07-05 203156.png",
  //   category: "webinar",
  //   images: [
  //     "/gallery/Webinar on Open Source & GNOME - Aryan Kaushik/Screenshot 2024-07-05 203156.png",
  //   ],
  // },
];
