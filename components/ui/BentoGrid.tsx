"use client";
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import {
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiSass,
} from "react-icons/di";
import {
  SiExpress,
  SiPrisma,
  SiReactrouter,
  SiStyledcomponents,
  SiTailwindcss,
  SiZod,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import SocialMedias from "../SocialMedias";
import { FaStripeS } from "react-icons/fa";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("walassi.b@gmail.com");
    setCopied(true);
  };

  const handleEnglishCv = () => {};

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const frontendSkills = [
    {
      id: "Next",
      name: "Next",
      icon: <RiNextjsFill/>,
      color: "text-[#fff]",
    },
    {
      id: "react",
      name: "React",
      icon: <DiReact />,
      color: "text-[#61dafb]",
    },
    {
      id: "zod",
      name: "Zod",
      icon: <SiZod />,
      color: "text-[#3068b7]",
    },
    {
      id: "react-router",
      name: "Router Dom",
      icon: <SiReactrouter />,
      color: "text-[#f44250]",
    },
    {
      id: "js",
      name: "JavaScript",
      icon: <DiJsBadge />,
      color: "text-[#f0db4f]",
    },
    {
      id: "ts",
      name: "TypeScript",
      icon: <BiLogoTypescript />,
      color: "text-[#3178c6]",
    },
    {
      id: "tailwind",
      name: "Tailwind",
      icon: <SiTailwindcss />,
      color: "text-[#38bdf8]",
    },

    { id: "sass", name: "Sass", icon: <DiSass />, color: "text-[#bf4080]" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, color: "text-[#1572b6]" },
    { id: "html", name: "HTML5", icon: <DiHtml5 />, color: "text-[#e44d26]" },
    {
      id: "styled",
      name: "Styled Components",
      icon: <SiStyledcomponents />,
      color: "text-[#98613b]",
    },
  ];

  const backendSkills = [
    {
      id: "pg",
      name: "postgreSQL",
      icon: <BiLogoPostgresql />,
      color: "text-[#31648c]",
    },
    {
      id: "prisma",
      name: "Prisma ORM",
      icon: <SiPrisma />,
      color: "text-[#fff]",
    },
    {
      id: "express",
      name: "Express",
      icon: <SiExpress />,
      color: "text-[#fff]",
    },
    { id: "git", name: "Git", icon: <DiGit />, color: "text-[#e44d26]" },
    {
      id: "github",
      name: "Github",
      icon: <DiGithubBadge />,
      color: "text-[#333]",
    },
    {
      id: "node",
      name: "Node.js",
      icon: <DiNodejsSmall />,
      color: "text-[#83cd29]",
    },
    {
      id: "stripe",
      name: "Stripe",
      icon: <FaStripeS />,
      color: "text-[#7a73ff]", 
    },
  ];

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center "} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              width={0}
              height={0}
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                `object-cover object-center size-full ${
                  id === 5 && "w-1/2 opacity-50"
                }`
              )}
            />
          )}
        </div>
        {id === 1 && (
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 ">
            {title}
          </div>
        )}
        <div className="">
          {id === 1 && (
            <div className="relative p-10 flex flex-col justify-center items-center gap-4 ">
              <h1 className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 ">
                Who is <span className="text-purple">Walassi</span>?
              </h1>
              <div className="flex flex-col gap-10 items-center">
                <div>
                  <p>
                   <span className="text-purple"> More than 2 year of experience in Web Development</span>, with
                    strong skills in developing Fullstack applications and
                    impactful, responsive systems, with knowledge in the{" "}
                    <span className="text-purple">following activities:</span>
                  </p>
                  <ul className="space-y-2 mt-2">
                    <li>
                      🔹 Development of applications and interfaces with Next.js
                      and React.js;
                    </li>
                    <li>🔹 Creation of REST APIs with Node.js and Express;</li>
                    <li>
                      🔹 State management with Zustand and Tanstack-query;
                    </li>
                    <li>
                      🔹 Database management with PostgreSQL and Prisma ORM;
                    </li>
                    <li>
                      🔹 Styling and responsiveness with TailwindCSS and Styled
                      Components;
                    </li>
                    <li>
                      🔹 Use of agile methodologies and project management tools
                      like ClickUp.
                    </li>
                  </ul>
                  <h4 className="mt-2 font-bold text-purple">Key Results:</h4>
                  <ul className="space-y-2 mt-2">
                    <li>
                      🔹 Built a complete financial application in 60 days
                      <span className="text-purple">saving up to 60% on premium subscriptions</span>;
                    </li>
                    <li>
                      🔹 <span className="text-purple">Developed an API for event management</span>, with capacity of
                      register over 1000 participants and badge generation;
                    </li>
                    <li>
                      🔹 Reduced complaints and <span className="text-purple">increased operational efficiency
                      by 20%</span> by managing teams and reorganizing workflows;
                    </li>
                    <li>
                      🔹 Automated calculations for <span className="text-purple">over 50 monthly
                      spreadsheets</span>;
                    </li>
                    <li>🔹 Managed over 3,000 clients and 50 partners;</li>
                    <li>
                      🔹 Implemented improvements in administrative workflows,
                      <span className="text-purple"> reducing report creation time by 200%.</span> 
                    </li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <img
                src="./exp1.svg"
                alt="backgound"
                className="absolute -z-[1] -bottom-32 lg:top-0 right-0 w-full opacity-20"
              />
              <div></div>
            </div>
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-10"
          }`}
        >
          {spareImg && (
            <Image
              width={0}
              height={0}
              src={spareImg}
              alt={spareImg}
              className={"object-cover object-center "}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10 ">
            {title}
          </div>
          <div className=" font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          {id === 5 && <GridGlobe />}

          {id === 2 && (
            // <div className="flex lg:mt-10 gap-1 lg:gap-5 w-fit -right-3 lg:-right-2">
            // <div className="flex flex-wrap gap-5  lg:gap-8">
            <div className="">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-y-3 mt-4 p-4">
                {frontendSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className={cn(
                      `relative flex items-center flex-col gap-1 text-xs opacity-100 text-center ${skill.color}`
                    )}
                  >
                    <span className="*:size-10 rounded-lg p-2 bg-[#10132e]">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {id === 3 && (
            <div className="">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-y-3 mt-4">
                {backendSkills.map((skill) => (
                  <div
                    key={skill.id}
                    className={cn(
                      `relative flex items-center flex-col gap-1 text-xs opacity-100 text-center ${skill.color}`
                    )}
                  >
                    <span className="*:size-10 rounded-lg p-2 bg-[#10132e]">
                      {skill.icon}
                    </span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit  -right-3 lg:-right-2 ">
              <div className="flex flex-wrap gap-3 ">
                {[
                  "Node.js",
                  "PostGreSQL",
                  "Express",
                  "PrismaORM",
                  "Git",
                  "GitHub",
                ].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )} */}

          {id === 4 && (
            <div className="flex flex-col gap-4 mt-4 md:gap-0 md:mt-0">
              <form
                method="get"
                action="/walassi_silva_cv_en.pdf"
                className="text-center"
              >
                <MagicButton
                  title="English"
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                />
              </form>
              <form
                method="get"
                action="/walassi_silva_cv.pdf"
                className="text-center"
              >
                <MagicButton
                  title="Português"
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="!bg-[#161a31]"
                  handleClick={handleCopy}
                />
              </form>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative mx-auto">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <SocialMedias />

              {/*  */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
