import React, { useState } from "react";

// icons
import { FaJs, FaReact, FaWordpress, FaFigma } from "react-icons/fa";

import {
  SiNextdotjs,
  SiPhp,
  SiAdobephotoshop,
  SiPython,
  SiGatsby,
  SiLaravel,
  SiBootstrap,
  SiTailwindcss,
  SiCsharp,
  SiJquery,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiVisualstudiocode,
  SiCanva,
  SiJetbrains,
  SiPostman,
  SiGoogleanalytics,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          <FaJs key="js" />,
          <SiPhp key="php" />,
          <SiPython key="python" />,
          <SiCsharp key="csharp" />,
        ],
      },
      {
        title: "Frameworks",
        icons: [
          <SiNextdotjs key="nextjs" />,
          <SiGatsby key="gatsby" />,
          <SiLaravel key="laravel" />,
          <SiTailwindcss key="tailwind" />,
          <SiBootstrap key="bootstrap" />,
        ],
      },
      {
        title: "Libraries & CMS",
        icons: [
          <FaReact key="react" />,
          <SiJquery key="jquery" />,
          <FaWordpress key="wordpress" />,
        ],
      },
      {
        title: "Databases",
        icons: [<SiMysql key="mysql" />, <SiMongodb key="mongodb" />],
      },
      {
        title: "Tools",
        icons: [
          <SiVisualstudiocode key="vscode" />,
          <SiGithub key="github" />,
          <SiPostman key="postman" />,
          <FaFigma key="figma" />,
          <SiAdobephotoshop key="adobephotoshop" />,
          <SiCanva key="canva" />,
          <SiJetbrains key="jetbrains" />,
          <SiGoogleanalytics key="ganalytics" />,
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web Developer - SELISE Digital Platforms",
        stage: "2021 - 2022",
      },
      {
        title: "Intern WordPress Developer - weDevs",
        stage: "2021",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "The Frontend Developer Career Path - Scrimba",
        stage: "2023",
      },
      {
        title: "Meta Front-End Developer - Coursera",
        stage: "2023",
      },
      {
        title: "Computer Science Diploma - IsDB-BISEW, Bangladesh",
        stage: "2016",
      },
    ],
  },
  {
    title: "Approach",
    info: [
      {
        title:
          "Passionate about creating attractive and user-friendly websites.",
      },
      {
        title: "Committed to writing clean and maintainable code.",
      },
      {
        title:
          "Dedicated to continuous learning and exploring new technologies.",
      },
      {
        title: "Focused on delivering projects on time and within budget.",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/** avatar image */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex w-full h-full max-w-[537px] max-h-[513px] absolute -bottom-9 -left-[253px] mix-blend-hard-light"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center pt-12 xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Crafting <span className="text-accent">Innovative</span> Digital
            Solutions.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Passionate Web Developer with a flair for crafting dynamic and
            user-friendly websites. Strong problem-solving abilities, committed
            to delivering top-notch solutions, driven by a hunger for continuous
            learning and growth.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[365px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              const showDash = item.stage || item.icons;
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {showDash && <div className="hidden md:flex">-</div>}
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div key={iconIndex} className="text-2xl text-white">
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
