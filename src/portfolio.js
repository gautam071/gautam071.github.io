/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Gautam Rajesh",
  logo_name: "Gautam Rajesh",
  nickname: null,
  subTitle:
    "An aspiring developer who loves to take on new projects that challenges his analytical and technological capacities.",
  resumeLink:
    "https://drive.google.com/file/d/18DiarGWMjm1gdziDuWs93DNXXORU1CXx/view?usp=sharing",
  portfolio_repository: "https://github.com/gautam071",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/gautam071",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gautam-r-5066b7182/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=grslm071@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Software Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website using PHP, Laravel, Wordpress, Vuejs, CodeIgnitor, Shopify and etc",
        "⚡ Implementing secure access to database",
        "⚡ Implemeting Secure Devops for the Application",
        "⚡ Implementing dynamic script execution defined by user",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJs",
          fontAwesomeClassname: "akar-icons:nextjs-fill",
          style: {
            color: "#626262",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "mdi:php",
          style: {
            color: "#5C2D91",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MY SQL",
          fontAwesomeClassname: "tabler:sql",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "skill-icons:docker",
          style: {
            color: "#c42626",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "file-icons:tailwind",
          style: {
            color: "#38bdf8",
          },
        },
      ],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "60%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "PHP",
      progressPercentage: "90%",
    },
    {
      Stack: "VueJs",
      progressPercentage: "70%",
    },
    {
      Stack: "JavaScript",
      progressPercentage: "80%",
    },
    {
      Stack: "HTML",
      progressPercentage: "80%",
    },
    {
      Stack: "SQL", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "CSS/SASS",
      progressPercentage: "80%",
    },
    {
      Stack: "NodeJs",
      progressPercentage: "40%",
    },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Git",
      progressPercentage: "80%",
    },
    {
      Stack: "AWS", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Docker", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Visual Studio Code", //Insert stack or technology you have experience in
      progressPercentage: "95%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Visual Studio ", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MS SQL Server", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MySQL", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Firebase", //Insert stack or technology you have experience in
      progressPercentage: "50%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MongoDB", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/tasin95",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Sri Krishna Institue of Information and Technology",
      subtitle: "B.Tech. in Information and Technology",
      logo_path: "aust_logo.png",
      alt_name: "SKCET CBE",
      duration: "March 2017 - January 2021",
      cgpa: "3.655 / 4.00",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OOP, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning and Full Stack Development.",
        "⚡ Placed 4th in my class.",
        "⚡ Elected as the team leader in all the group projects.",
      ],
      website_link: "https://skcet.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python Data Structures",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/259bcebba35c1ba43934608a5fab9907",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work",
  description:
    "Fullstack Developer with 2+ years of experience working with React, .Net and NodeJs in an agile environment. Experience in leading a 5 member frontend team to achieve concrete goals on a strict deadline in a large scale project consisting over millions of records of drivers all throughout North America.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Gautam.jpeg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Basic Programming, ML, AI, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to write about the projects I've worked on, my current work and discuss my latest foundings. You are most welcome to input your thoughts on my projects.",
    link: "https://miftaulmannan.wordpress.com/projects/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Salem, TamilNadu",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/M2Sei7HPuFXpxvZf7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9597342871",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
