/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Aditya Oli",
  title: "Hello, I'm Adi",
  subTitle: emoji(
    "A passionate Platform & DevSecOps Engineer 🚀 having an experience of building secure infra, installing anything and maintaining applications on varied platforms."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nzineer",
  linkedin: "https://www.linkedin.com/in/adioli/",
  gmail: "adityaoligehu@gmail.com",
  medium: "https://medium.com/@adityaoli",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY PLATFORM ENGINEER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Curate Platform Architecture and Design for organizations applications and services."
    ),
    emoji("⚡ Standardize Platforms, Tooling and technologies to an optimal fine grain."),
    emoji(
      "⚡ Provide technical direction and mentorship to engineering teams, guiding them through complex platform-related challenges."
    ),
    emoji(
      "⚡ Ensure the platform is designed for high availability, fault tolerance, and scalability to meet the demands of growing user bases and traffic."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "artifactory",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "dynatrace",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "grafana",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "helm",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "jfrog",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "postman",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "prometheus",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "redhat",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "splunk",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "vault",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "vmware",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "consul",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "git",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "radar",
      fontAwesomeClassname: "" // Using custom SVG
    },
    {
      skillName: "python",
      fontAwesomeClassname: "" // Using custom SVG
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Graphic Era Hill University",
      logo: require("./assets/images/gehu.png"),
      subHeader: "Bachelor of Technology in Computer Science & Engineering",
      duration: "August 2012 - July 2016",
      desc: "Completed Engineering with Honors.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Countrywide Public School",
      logo: require("./assets/images/cps.png"),
      subHeader: "",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DevSecOps", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Kubernetes, Containerization and Orchestration",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "CI/CD Pipeline Management & Automation",
      progressPercentage: "80%"
    },
    {
      Stack: "Infrastructure as Code",
      progressPercentage: "75%"
    },
    {
      Stack: "Monitoring, Logging, and Incident Response",
      progressPercentage: "90%"
    },
    {
      Stack: "Security Automation and Compliance",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior DevSecOps Engineer",
      company: "Westpac New Zealand Limited",
      companylogo: require("./assets/images/westpac.jpg"),
      date: "May 2023 – Present",
      desc: "Accountable for different technology operations, and their standardization organization wide.",
      descBullets: [
        "Revived applications that were unstable for years. Upgraded, Maintained and Decommissioned numerous applications with an extensive blast radius. Estd cost savings of 0.25M$ per year.",
        "Decommissioned and Migrated Entire architectures across platforms.",
        "Co-Lead transformation in devops tooling, thereby stabilizing applications and enhancing reliability of critical platforms and applications. Reduced BAU timeframes from weeks to minutes."
      ]
    },
    {
      role: "Senior Platform Engineer",
      company: "Westpac New Zealand Limited",
      companylogo: require("./assets/images/westpac.jpg"),
      date: "May 2022 – May 2023",
      desc: "Lead the Tooling Squad for DevOps Tooling.",
      descBullets: [
        "Responsible for operational availability of Confluence, Bitbucket, Chef, Artifactory, Xray and Hashicorp Vault.",
        "Redesigned applications in a cost effective way thereby reducing financial pressure on the org.",
        "Designed Architectures and Built applications for various platforms.",
        "Coached teams and lead multiple parallel projects, delivering each with 0 recorded production incidents post release."
      ]
    },
    {
      role: "Intermediate Platform Engineer",
      company: "Westpac New Zealand Limited",
      companylogo: require("./assets/images/westpac.jpg"),
      date: "June 2021 – June 2022",
      desc: "Building resilient Applications and Infrastructure.",
      descBullets: [
        "Initiated standardization conversations with the business in terms of enhancing application stability.",
        "Curated automated deployment across various platforms and ensure applications are compliant.",
        "Built highly available applications on vSphere, Kubernetes, Docker including configurations on HSM, with disaster recovery mechanisms.",
        "Built Documentation and processes for SLA, SLOs and application architecture and maintenance, something that was non existent."
      ]
    },
    {
      role: "DevOps Engineer",
      company: "Infosys New Zealand Limited",
      companylogo: require("./assets/images/infosys.jpg"),
      date: "June 2020 – June 2021",
      desc: "Develop and Manage Highly available Platforms.",
      descBullets: [
        "Develop and execute complex pipelines and infrastructure that is highly reliable, to support consistenly growing telco needs.",
        "Manage a highly available and performant kubernetes environment.",
        "Mentor a team to onboard onto new technologies and build better DevOps practices in terms of automations, deployments and documentations."
      ]
    },
    {
      role: "Kubernetes Subject Matter Expert",
      company: "Infosys New Zealand Limited",
      companylogo: require("./assets/images/infosys.jpg"),
      date: "Feb 2019 – June 2020",
      desc: "Managed IBM Cloud Private handling complex production workloads",
      descBullets: [
          "Architected and implemented scalable Kubernetes clusters across on-premises, Integrated Kubernetes with CI/CD pipelines, automating deployments and reducing downtime for microservices.",
          "Implemented RBAC, network policies, and secret management, ensuring compliance and securing Kubernetes environments. Set up monitoring with Prometheus and Grafana, optimizing resource usage and improving application performance."

      ]
    },
    {
      role: "Senior Systems Engineer",
      company: "Infosys Limited",
      companylogo: require("./assets/images/infosys.jpg"),
      date: "March 2018 – Feb 2019",
      desc: "Created Interactive UIs and websites, java apps and aws deployments",
      descBullets: [
        "Worked on Agile Model, developing micro services in spring boot, JUnit testing with TDD, BDD with Serenity and JBehave, code deployment using Jenkins. Postman collection and performance, load test scripting for API management. Working on API.ai, Amazon Web Services, Developing Chatbots, Automated deployment using Jenkins, Agile SAFe, SONAR, ECLEMMA, JIRA, VSTS, Git.",
        "Provided a sandboxed solution using APIs for untrusted code execution.",
        "HTML5, CSS3, JavaScript, JQuery. Designed Posters, banners, certificates, emails in Adobe Photoshop for the Zero Bench team."
      ]
    },
    {
      role: "Systems Engineer",
      company: "Infosys Limited",
      companylogo: require("./assets/images/infosys.jpg"),
      date: "July 2016 – March 2018",
      desc: "Infosys Cornerstone Platform Development",
      descBullets: [
        "Developed a product from scratch. Handling End to End from the server to the client. Built the system on: SpringBoot, Drools, Jenkins,Nexus, ELK Stack,Apache Ignite, Apache Kafka, Git, Tensorflow, Python, HTML,CSS, Javascript, Bootstrap, Apache Flink.",
        "Helped develop the UI for Infosys Cornerstone Platform & Created Interactive User Interfaces and websites(Js frameworks React, Knockout, Angular, etc)"
      ]
    },
    {
      role: "Infosys Intern",
      company: "Infosys Limited",
      companylogo: require("./assets/images/infosys.jpg"),
      date: "Jan 2016 – June 2016",
      desc: "Learn programming and standards within organizations",
      descBullets: [
        "Designed a travel management platform using C#.Net MVC platform. User friendly front end designed in HTML5,CSS3,Bootstrap, Javascript, PHP, JQuery."
      ]
    },
    {
      role: "Intern",
      company: "RWX Technology Limited",
      companylogo: require("./assets/images/infosys.jpg"),
      date: "June 2015 – Aug 2015",
      desc: "Research on Jet tracking by a missile using the Kalman Filter",
      descBullets: [
        "Implemented tracking and predicting the next positions of an object in a static video using the Kalman Filter. This internship project was implemented in MATLAB and was based on studying the implementation of the Kalman Filter on bouncing bodies."
      ]
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
      image: require("./assets/images/westpac.png"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/westpac.png"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
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
      title: "Google Code-In Finalist",
      subtitle:
        "",
      image: require("./assets/images/westpac.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: ""
        }
      ]
    },

    {
      title: "",
      subtitle: "",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
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
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
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
      title: "How not to use Hashicorp Vault",
      subtitle: "Hashicorp User Group New Zealand 2023",
      slides_url: "",
      event_url: "https://www.linkedin.com/feed/update/urn:li:activity:7044504143780081664?utm_source=share&utm_medium=member_desktop"
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
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "+92-0000000000",
  email_address: "adityaoligehu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  isHireable,
  resumeSection
};
