import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNode, FaDocker, FaAws, FaGitAlt, FaGithub, FaJenkins } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiKubernetes, SiTypescript, SiPostgresql, SiPrisma, SiRedux } from "react-icons/si";
import { MdWeb } from "react-icons/md";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
        sm:text-sm sm:py-1.5 sm:px-3 xs:text-sm xs:py-1.5 xs:px-3
        xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2
        className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32 
      sm:text-6xl sm:mt-32 xs:text-6xl xs:mt-32"
      >
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] md:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      xl:bg-circularLightLg
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      xs:bg-circularLightSm xs:dark:bg-circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 sm:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          <MdWeb className="text-lg hidden sm:block" /> Web
        </motion.div>
        <Skill name="Firebase" x="-30vw" y="-2vw" />
        <Skill name="Docker" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="15vw" y="7vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="MongoDB" x="12vw" y="-9vw" />
        <Skill name="ExpressJS" x="32vw" y="-5vw" />
        <Skill name="NodeJS" x="0vw" y="-20vw" />
        <Skill name="AWS" x="-20vw" y="15vw" />
        <Skill name="GitHub" x="15vw" y="-20vw" />
        <Skill name="Git" x="-12vw" y="8vw" />
        <Skill name="Jenkins" x="30vw" y="10vw"/>
        <Skill name="Kubernetes" x="18vw" y="18vw" />
        <Skill name="Tailwind CSS" x="-24vw" y="6vw" />
        <Skill name="PostgreSQL" x="-17vw" y="-5vw" />
        <Skill name="Prisma" x="19vw" y="0vw" />
      </div>

      {/* Grouped Icons Section */}
      <div className="flex flex-col items-center gap-8 mt-12 px-6 sm:px-4 xs:px-2">
        
        {/* Frontend Skills */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 sm:text-xl xs:text-lg">Frontend</h3>
          <div className="flex flex-wrap gap-6 justify-center sm:gap-3 xs:gap-2">
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <FaJs className="text-3xl text-yellow-500 xs:text-2xl" /> <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <SiTypescript className="text-3xl text-yellow-500 xs:text-2xl" /> <span>Typescript</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <FaReact className="text-3xl text-blue-500 xs:text-2xl" /> <span>ReactJS</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <SiNextdotjs className="text-3xl text-black xs:text-2xl" /> <span>NextJS</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <SiTailwindcss className="text-3xl text-teal-400 xs:text-2xl" /> <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <SiRedux className="text-3xl text-purple-600 xs:text-2xl" /> <span>Redux</span>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 sm:text-xl xs:text-lg">Backend</h3>
          <div className="flex flex-wrap gap-6 justify-center sm:gap-3 xs:gap-2">
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <FaNode className="text-3xl text-green-600 xs:text-2xl" /> <span>NodeJS</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <SiExpress className="text-3xl text-gray-700 xs:text-2xl" /> <span>ExpressJS</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <SiMongodb className="text-3xl text-green-500 xs:text-2xl" /> <span>MongoDB</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <SiPostgresql className="text-3xl text-blue-600 xs:text-2xl" /> <span>PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <SiPrisma className="text-3xl text-indigo-500 xs:text-2xl" /> <span>Prisma</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <SiFirebase className="text-3xl text-yellow-400 xs:text-2xl" /> <span>Firebase</span>
            </div>
          </div>
        </div>

        {/* DevOps Skills */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold mb-4 sm:text-xl xs:text-lg">DevOps</h3>
          <div className="flex flex-wrap gap-6 justify-center sm:gap-3 xs:gap-2">
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <FaDocker className="text-3xl text-blue-500 xs:text-2xl" /> <span>Docker</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <FaAws className="text-3xl text-orange-500 xs:text-2xl" /> <span>AWS</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <FaGitAlt className="text-3xl text-red-500 xs:text-2xl" /> <span>Git</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <FaGithub className="text-3xl text-black xs:text-2xl" /> <span>GitHub</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <FaJenkins className="text-3xl text-red-700 xs:text-2xl" /> <span>Jenkins</span>
            </div>
            <div className="flex items-center gap-2 text-base xs:text-sm">
              <SiKubernetes className="text-3xl text-blue-600 xs:text-2xl" /> <span>Kubernetes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
