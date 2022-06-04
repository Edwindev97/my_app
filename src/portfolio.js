/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss f

import emoji from "react-easy-emoji";

// Summary And Greeting Section

// const illustration = {
//   animated: true // Set to false to use static SVG
// };

const greeting = {
  username: "Edwin Raj D",
  title: "Hi all, I'm Raj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1hWEmfI0iYCsGWwwNBKBSFNiThK2u2e_Ix1KcBedzBjQ/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Edwinstr97",
  linkedin: "https://www.linkedin.com/in/edwin-raj-314636151/",
  gmail: "edwindev97@gmail.com",
  gitlab: "https://github.com/Edwinstr97",
  facebook: "https://www.facebook.com/profile.php?id=100079118214624",
  medium: "https://medium.com/@edwindev97/gmail-api-40f17a8315a2",
  stackoverflow: "https://stackoverflow.com/users/18480114/edwin-raj?tab=profile",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
    // <i class="fa-solid fa-mobile"></i>
    // {
    //   skillName: "flutter",
    //   fontAwesomeClassname: "fab fa-mobile"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bangalore City College",
      logo: require("./assets/images/BangaloreCityCollege.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "March 2022 - Presented",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "St Joseph's University",
      logo: require("./assets/images/stJosephs.jpeg"),
      subHeader: "Bachelor of Science in Computer Application",
      duration: "June 2015 - April 2018",
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    // {
    //   role: "Software Engineer",
    //   company: "Facebook",
    //   companylogo: require("./assets/images/facebookLogo.png"),
    //   date: "June 2018 – Present",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      role: "Mobile Application Developer",
      company: "Zibtek",
      companylogo: require("./assets/images/zibtek.jpeg"),
      date: "Jul 2020 – Present",
      desc: "Working as an Hybrid Mobile developer"
    },
    {
      role: "Associate Software Engineer",
      company: "Swayaan",
      companylogo: require("./assets/images/swayaan.jpeg"),
      date: "Sep 2019 – Jul 2020",
      desc: "Worked as Native Android Developer."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/code_green.png"),
      projectName: "Go Green",
      projectDesc: "An app for gated communities encouraging them to plant saplings and earn rewards from community members",
      // footerLink: [
      //   {
      //     name: "View Website",
      //     url: "http://saayahealth.com/"
      //   },
      //   // {
      //   //   name: "Visit Website",
      //   //   url: "http://saayahealth.com/"
      //   // }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/arkue.png"),
      projectName: "AKrue",
      projectDesc: "An affiliate marketing for athletes and reviewing sports products",
      // footerLink: [
      //   {
      //     name: "View Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },

    {
      image: require("./assets/images/Battlz.png"),
      projectName: "Battlz",
      projectDesc: "Engaging rappers and vocal artists to share and allow users to upvote the best artist "
      ,
      // footerLink: [
      //   {
      //     name: "View Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/Farm_plus_logo.png"),
      projectName: "Farm System",
      projectDesc: "An hybrid app that works as an alternate for twitter applications to gated communities. ",
      // footerLink: [
      //   {
      //     name: "View Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },


    {
      image: require("./assets/images/Flea.png"),
      projectName: "Flea",
      projectDesc: "One stop marketplace app that helps user sell products on multiple ecommerce platforms like eBay, Etsy and Facebook Marketplace",
      // footerLink: [
      //   {
      //     name: "View More ",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/Legacy.png"),
      projectName: "Legacy Foundations",
      projectDesc: "An app that helps coordinate between construction workers and contractors , building invoices and project blueprint. ",
      // footerLink: [
      //   {
      //     name: "View More",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/NDHS.png"),
      projectName: "New Design High School",
      projectDesc: "Manages schedule and mails ,alerts about upcoming events and seminars for college students"
      ,
      // footerLink: [
      //   {
      //     name: "View More",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/litLogo.png"),
      projectName: "Lit-Unlit",
      projectDesc: "A simple social media app that promotes posts based on lit and unlit factors .",
      // footerLink: [
      //   {
      //     name: "View More",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/relai.png"),
      projectName: "Relai",
      projectDesc: "An app that manages local exchange  warehouses to promote shopping for local shops to provide within an hour delivery.",
      // footerLink: [
      //   {
      //     name: "View More",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/tipsterLogo.png"),
      projectName: "Tipster",
      projectDesc: "An app that provides public safety tips and code of conduct for law enforcement officers.",
      // footerLink: [
      //   {
      //     name: "View More",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/peoplepedia_logo.jpg"),
      projectName: "Peoplepedia",
      projectDesc: "A super app that helps making meaningful connections based on the personality of an individual.",
      // footerLink: [
      //   {
      //     name: "View More",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },









  
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "The Complete iOS App Development Bootcamp",
      subtitle: "Completed Certifcation from Udemy for iOS App Development",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        {
          name: " View Certification",
          url: "https://user-images.githubusercontent.com/56911453/158331595-f8b21e6a-74d7-4a42-9e98-4cca2e20a782.jpg"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "International Journal of Engineering and Techinques",
      subtitle:
        "Submitted Research paper at IJET on governing CyberLaws concerning India",
      image: require("./assets/images/title_good1.jpg"),
      footerLink: [
        {
          name: "View Research Paper",
          url: "http://www.ijetjournal.org/Special-Issues/NCCRICS/NCCRICS107.pdf"
        }
      ]
    },

    {
      title: "React Development",
      subtitle: "Completed Certifcation from Udemy for React Web App Development",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        { name: "View Certification", url: "https://user-images.githubusercontent.com/56911453/158331924-b8777892-2712-4baf-8f1d-5adc0cf2137e.jpg" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Complete Node Js ",
      subtitle: "Completed Certifcation from Udemy for Node Js Backend Development",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        { name: "View Certification", url: "https://user-images.githubusercontent.com/56911453/158332815-953e0df5-1511-4cf7-9843-20d024e0ae46.jpg" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Complete Flutter and Dart Developement ",
      subtitle: "Completed Certifcation from Udemy for Flutter App Development by Angela YU",
      image: require("./assets/images/udemy.png"),
      footerLink: [
        { name: "View Certification", url: " https://user-images.githubusercontent.com/56911453/158333756-3c2af9be-21d7-4f63-8164-0b5f75bc10be.jpg" },
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@edwindev97/gmail-api-40f17a8315a2",
      title: "Gmail Api Integration",
      description:
        "How to list Gmail Inbox Messages using Google Api ."
    },
    {
      url: "https://medium.com/@edwindev97/gmail-api-40f17a8315a2",
      title: "Gmail Reply Api",
      description:
        "Learn to display the messages from Gmail Inbox using Google Api."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9886561087",
  email_address: "edwindev97@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

//Testimonial Sections

const testimonialSection = {
  title: "Testimonials",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const testimonialSectionWord = {
  display: true, //Set it to true to show workExperiences Section
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  experience: [
    {
      role: "Satish Varghese",
      company: "Project Manager | Intel",
      companylogo: require("./assets/images/sathishVarghese.jpeg"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Hansel Geo Thomas",
      company: "Founder | Charis Vet Clinic",
      companylogo: require("./assets/images/HanselGeo.jpeg"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Santhosh K ",
      company: "Textile Exports| Bangladesh ",
      companylogo: require("./assets/images/Santhosh.jpg"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Deepka GT ",
      company: "Consultant | BlestTax ",
      companylogo: require("./assets/images/DeepakGt.jpeg"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};
export {

  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  testimonialSection,
  testimonialSectionWord
};
