// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// varients
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/** text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center pt-20 xl:pt-40 xl:text-left h-full container mx-auto">
          {/** title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Shaping Thoughts <br /> into{" "}
            <span className="text-accent">Digital Solutions</span>
          </motion.h1>
          {/** subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-13"
          >
            From idea to implementation, I shape thoughts into digital
            solutions, fusing imagination with technology to drive meaningful
            change and create transformative experiences.
          </motion.p>
          {/** button */}
          <div className="flex justify-center xl:hidden relative z-10">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/** image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/** bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/** particles */}
        <ParticlesContainer />
        {/** avatar image */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[537px] max-h-[513px] absolute -bottom-32 lg:bottom-0 lg:right-[6%] mix-blend-hard-light"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
