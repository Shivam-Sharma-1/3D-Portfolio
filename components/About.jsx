import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div className="flex flex-col gap-3">
          <p>
            Hi, I&apos;m Shivam—a Software Engineer who enjoys turning complex
            problems into simple, reliable products.
          </p>
          <p>
            I&apos;m currently building full-stack and cloud-native applications
            at Nike, where I work with React, TypeScript, AWS, and modern web
            technologies. I enjoy owning the entire development journey, from
            understanding the problem and designing the right solution to
            building, testing, and shipping features that make a real impact.
          </p>
          <p>
            What motivates me most is solving challenging engineering problems.
            Whether it&apos;s architecting serverless APIs, building scalable
            frontend applications, or designing microfrontend platforms, I focus
            on creating solutions that are maintainable, performant, and easy
            for other developers to build upon.
          </p>
          <p>
            I&apos;m someone who enjoys asking &quot;why&quot; before jumping
            into &quot;how.&quot; I like working through ambiguity,
            collaborating with others, and continuously learning new
            technologies that help me build better software.
          </p>
          <p>
            Outside of work, you&apos;ll usually find me building side projects
            around AI, collaborative tools, and interactive web experiences. I
            enjoy experimenting with new ideas, exploring modern technologies,
            and creating products that combine thoughtful engineering with great
            user experiences.
          </p>
          <p>
            This portfolio is a collection of the projects, experiments, and
            lessons I&apos;ve gathered along that journey. Thanks for stopping
            by!
          </p>
          <p>Let&apos;s collaborate to bring your ideas to life!</p>
        </div>
        <div className="w-fit break-words">
          <Link
            href="mailto:shivamsharma77607@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            shivamsharma77607@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="document/Shivam_Sharma_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
