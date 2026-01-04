import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { ExternalLink, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import JavascriptOriginal from "react-devicons/javascript/original";
import TypescriptOriginal from "react-devicons/typescript/original";
import GoOriginalWordmark from "react-devicons/go/original-wordmark";
import CsharpOriginal from "react-devicons/csharp/original";
import ReactOriginal from "react-devicons/react/original";
import Html5Original from "react-devicons/html5/original";
import Css3Original from "react-devicons/css3/original";
import NextjsOriginal from "react-devicons/nextjs/original";
import TailwindcssPlain from "react-devicons/tailwindcss/original";
import { SiExpress, SiTypeorm } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaBootstrap, FaNodeJs, FaGithub } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import NestjsPlain from "react-devicons/nestjs/original";
import DotnetcoreOriginal from "react-devicons/dotnetcore/original";
import PostgresqlOriginal from "react-devicons/postgresql/original";
import MicrosoftsqlserverPlain from "react-devicons/microsoftsqlserver/plain";
import MongodbOriginal from "react-devicons/mongodb/original";
import GitOriginal from "react-devicons/git/original";
import DockerOriginal from "react-devicons/docker/original";
import GooglecloudOriginal from "react-devicons/googlecloud/original";
import AzureOriginal from "react-devicons/azure/original";
import { FaLine } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TechIcon = ({
  icon,
  name,
  size = 30,
}: {
  icon: React.ReactNode;
  name: string;
  size?: number;
}) => (
  <Tooltip>
    <TooltipTrigger>{icon}</TooltipTrigger>
    <TooltipContent>
      <p className="text-sm">{name}</p>
    </TooltipContent>
  </Tooltip>
);

function Project() {
  return (
    <>
      <div
        id="projects"
        className="w-full p-4 lg:p-6 md:p-8  my-10 z-10  flex items-center justify-center"
      >
        <div className="mx-auto max-w-7xl w-full">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r bg-clip-text from-blue-600 to-sky-500 text-transparent">
              Projects
            </h1>
          </div>
          <div className=" md:py-6 lg:py-8  flex items-center justify-center  space-y-8 lg:space-y-10 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-4 lg:gap-6 p-4 lg:p-6 rounded-xl">
              {/* Pharventory */}
              <Card className=" hover:border-sky-400 transform transition-transform duration-500 ease-in-out hover:scale-105 p-3 sm:p-4 md:p-5 lg:p-6 border-slate-700 border-2 rounded-2xl bg-slate-800/20 gap-y-3">
                <div className="flex items-center justify-center w-full">
                  <Image
                    src="/images/projects/pharventory_canva.png"
                    width={400}
                    height={300}
                    alt="Picture of author"
                    className="rounded-sm w-full h-auto"
                  />
                </div>

                <CardTitle className="flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-center text-sky-500 font-extrabold mt-2">
                  <p>Pharventory</p>
                  <Badge variant="secondary" className=" bg-slate-800/80">
                    <p className="text-sm font-extrabold text-cyan-500">
                      Side Project
                    </p>
                  </Badge>
                </CardTitle>
                <div className="flex items-center justify-center gap-1 sm:gap-2  flex-nowrap">
                  <TechIcon icon={<NextjsOriginal size={30} />} name="Nextjs" />
                  <TechIcon
                    icon={<TailwindcssPlain size={30} />}
                    name="Tailwind CSS"
                  />
                  <TechIcon icon={<NestjsPlain size={30} />} name="NestJS" />
                  <TechIcon
                    icon={<TypescriptOriginal size={30} />}
                    name="TypeScript"
                  />
                  <TechIcon
                    icon={<PostgresqlOriginal size={30} />}
                    name="PostgreSQL"
                  />
                  <TechIcon
                    icon={<RiSupabaseFill size={30} color="#36c98b" />}
                    name="Supabase"
                  />
                  <TechIcon icon={<DockerOriginal size={30} />} name="Docker" />
                  <TechIcon
                    icon={<GooglecloudOriginal size={30} />}
                    name="Google Cloud"
                  />
                </div>
                <CardDescription className="text-white">
                  <p className="sm:text-lg indent-8 leading-relaxed">
                    Pharmacy inventory management system with FEFO batch
                    control, stock movement tracking, and analytics dashboard.
                  </p>
                </CardDescription>
                <div className="grid grid-cols-2 mt-auto">
                  <CardDescription className="flex justify-center text-white gap-3">
                    <Button
                      variant="link"
                      className="text-amber-400 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="https://pharventory.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <p className="">Live Demo</p>
                        <ExternalLink className="sm:size-7" />
                      </a>
                    </Button>
                  </CardDescription>
                  <CardDescription className="flex justify-center text-white gap-3">
                    <Button
                      variant="link"
                      className="text-sky-500 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="/projects/pharventory"
                        className="flex items-center gap-2"
                      >
                        <p className="">View Details</p>
                        <Info className="sm:size-7" />
                      </a>
                    </Button>
                  </CardDescription>
                </div>
              </Card>

              {/* ToothToday */}
              <Card className=" hover:border-sky-400 transform transition-transform duration-500 ease-in-out hover:scale-105 p-6 border-slate-700 border-2 rounded-2xl bg-slate-800/20 gap-y-3">
                <div className="flex items-center justify-center w-full">
                  <Image
                    src="/images/projects/toothtoday_canva_1pic.png"
                    width={400}
                    height={300}
                    alt="Picture of author"
                    className="rounded-sm w-full h-auto"
                  />
                </div>

                <CardTitle className="flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-center text-sky-500 font-extrabold mt-2">
                  <p>ToothToday</p>

                  <Badge
                    variant="secondary"
                    className="bg-slate-800/80 shrink-0"
                  >
                    <p className="text-sm font-extrabold text-cyan-500 whitespace-nowrap">
                      Side Project
                    </p>
                  </Badge>
                </CardTitle>
                <div className="flex items-center justify-center gap-2 overflow-x-auto flex-nowrap">
                  <TechIcon icon={<NextjsOriginal size={30} />} name="Nextjs" />
                  <TechIcon
                    icon={<TailwindcssPlain size={30} />}
                    name="Tailwind CSS"
                  />
                  <TechIcon
                    icon={<GoOriginalWordmark size={30} />}
                    name="Golang"
                  />
                  <TechIcon
                    icon={<PostgresqlOriginal size={30} />}
                    name="PostgreSQL"
                  />
                  <TechIcon
                    icon={<RiSupabaseFill size={30} color="#36c98b" />}
                    name="Supabase"
                  />
                  <TechIcon icon={<DockerOriginal size={30} />} name="Docker" />
                  <TechIcon
                    icon={<GooglecloudOriginal size={30} />}
                    name="Google Cloud"
                  />
                  <TechIcon
                    icon={
                      <FaLine
                        size={30}
                        color="#29bc55"
                        className="bg-white rounded-4xl"
                      />
                    }
                    name="LINE API"
                  />
                </div>
                <CardDescription className="text-white">
                  <p className="sm:text-lg indent-8 leading-relaxed">
                    Dental Appointment Booking System Web-based platform for
                    managing appointments with real-time queue and history
                    tracking.
                  </p>
                </CardDescription>
                <div className="grid grid-cols-2 mt-auto">
                  <CardDescription className="flex justify-center text-white gap-3">
                    <Button
                      variant="link"
                      className="text-amber-400 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="https://tooth-today.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <p className="">Live Demo</p>
                        <ExternalLink className="sm:size-7" />
                      </a>
                    </Button>
                  </CardDescription>
                  <CardDescription className="flex justify-center text-white gap-3">
                    <Button
                      variant="link"
                      className="text-sky-500 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="/projects/toothtoday"
                        className="flex items-center gap-2"
                      >
                        <p className="">View Details</p>
                        <Info className="sm:size-7" />
                      </a>
                    </Button>
                  </CardDescription>
                </div>
              </Card>

              {/* Tellsmama */}
              <Card className=" hover:border-sky-400 transform transition-transform duration-500 ease-in-out hover:scale-105 p-6 border-slate-700 border-2 rounded-2xl bg-slate-800/20 gap-y-3">
                <div className="flex items-center justify-center w-full">
                  <Image
                    src="/images/projects/tellsmama_canva_1pic.png"
                    width={400}
                    height={300}
                    alt="Picture of author"
                    className="rounded-sm w-full h-auto"
                  />
                </div>

                <CardTitle className="flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-center text-sky-500 font-extrabold mt-2">
                  <p>Tellsmama</p>
                  <Badge
                    variant="secondary"
                    className="bg-slate-800/80 shrink-0"
                  >
                    <p className="text-sm font-extrabold text-cyan-500 whitespace-nowrap">
                      Side Project
                    </p>
                  </Badge>
                </CardTitle>
                <div className="flex items-center justify-center gap-2 overflow-x-auto flex-nowrap">
                  <TechIcon icon={<ReactOriginal size={30} />} name="React" />
                  <TechIcon
                    icon={<FaBootstrap size={30} color="#7111f5" />}
                    name="Bootstrap"
                  />
                  <TechIcon
                    icon={<JavascriptOriginal size={30} />}
                    name="JavaScript"
                  />
                  <TechIcon
                    icon={<FaNodeJs size={30} color="#83cd29" />}
                    name="Node.js"
                  />
                  <TechIcon
                    icon={<SiExpress size={30} className="text-white" />}
                    name="Express.js"
                  />
                  <TechIcon
                    icon={<MongodbOriginal size={30} />}
                    name="MongoDB"
                  />
                  <TechIcon icon={<DockerOriginal size={30} />} name="Docker" />
                  <TechIcon
                    icon={<GooglecloudOriginal size={30} />}
                    name="Google Cloud"
                  />
                </div>
                <CardDescription className="text-white">
                  <p className="sm:text-lg indent-8 leading-relaxed">
                    E-Commerce Application for Home Essentials Web-based
                    platform with category management, product listings with
                    images, shopping cart, and search/filter functionality.
                  </p>
                </CardDescription>
                <div className="grid grid-cols-2 mt-auto">
                  <CardDescription className="flex justify-center text-white gap-3">
                    <Button
                      variant="link"
                      className="text-amber-400 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="https://tellsmama.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <p className="">Live Demo</p>
                        <ExternalLink className="sm:size-7" />
                      </a>
                    </Button>
                  </CardDescription>
                  <CardDescription className="flex justify-center text-white gap-3">
                    <Button
                      variant="link"
                      className="text-sky-500 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="/projects/tellsmama"
                        className="flex items-center gap-2"
                      >
                        <p className="">View Details</p>
                        <Info className="sm:size-7" />
                      </a>
                    </Button>
                  </CardDescription>
                </div>
              </Card>

              {/* Eval Project */}
              <Card className=" hover:border-sky-400 transform transition-transform duration-500 ease-in-out hover:scale-105 p-6 border-slate-700 border-2 rounded-2xl bg-slate-800/20 gap-y-3">
                <div className="flex items-center justify-center w-full">
                  <Image
                    src="/images/projects/eval_canva.png"
                    width={400}
                    height={400}
                    alt="Picture of author"
                    className="rounded-sm w-full h-auto"
                  />
                </div>

                <CardTitle className="flex items-center justify-center text-lg sm:text-xl md:text-2xl text-center text-sky-500 font-extrabold mt-2">
                  <div className="">
                    <span className="md:text-lg">
                      Institutional Quality Evaluation & Monitoring System
                    </span>
                  </div>{" "}
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary" className=" bg-amber-400 ">
                    <p className="text-sm font-extrabold text-black whitespace-nowrap">
                      Intern Project
                    </p>
                  </Badge>
                  <TechIcon
                    icon={<DotnetcoreOriginal size={30} />}
                    name=".NET MVC"
                  />
                  <TechIcon icon={<CsharpOriginal size={30} />} name="C#" />
                  <TechIcon
                    icon={<MicrosoftsqlserverPlain size={30} />}
                    name="SQL Server & Store Procedure"
                  />
                </div>
                <CardDescription className="text-white">
                  <p className="sm:text-lg indent-8 leading-relaxed">
                    Contributed .NET MVC web forms and backend logic, designed
                    SQL Server tables and schema, and wrote Store Procedures to
                    process and validate data according to new requirements.
                  </p>
                </CardDescription>
                <div className="flex justify-center mt-auto">
                  <CardDescription className="flex justify-center text-white gap-3">
                    <Button
                      variant="link"
                      className="text-sky-500 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="/projects/eval"
                        className="flex items-center gap-2"
                      >
                        <p className="">View Details</p>
                        <Info className="sm:size-7" />
                      </a>
                    </Button>
                  </CardDescription>
                </div>
              </Card>

              {/* CuNurse */}
              <Card className=" hover:border-sky-400 transform transition-transform duration-500 ease-in-out hover:scale-105 p-6 border-slate-700 border-2 rounded-2xl bg-slate-800/20 gap-y-3">
                <div className="flex items-center justify-center w-full">
                  <Image
                    src="/images/projects/CuNurse_canva.png"
                    width={400}
                    height={300}
                    alt="Picture of author"
                    className="rounded-sm w-full h-auto"
                  />
                </div>

                <CardTitle className="flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-center text-sky-500 font-extrabold mt-2">
                  <p>CuNurse</p>

                  <Badge variant="secondary" className="bg-amber-400 ">
                    <p className="text-sm font-extrabold text-black whitespace-nowrap">
                      Intern Project
                    </p>
                  </Badge>
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <TechIcon
                    icon={<DotnetcoreOriginal size={30} />}
                    name=".NET MVC"
                  />
                  <TechIcon icon={<CsharpOriginal size={30} />} name="C#" />
                  <TechIcon
                    icon={<MicrosoftsqlserverPlain size={30} />}
                    name="SQL Server"
                  />
                </div>
                <CardDescription className="text-white">
                  <p className="sm:text-lg indent-8 leading-relaxed">
                    Contributed to role-based visibility and PersonnelID field
                    implementation on articles/research pages, ensuring users
                    see only their own content while admins access all records.
                  </p>
                </CardDescription>
              </Card>

              {/* Swensen's */}
              <Card className=" hover:border-sky-400 transform transition-transform duration-500 ease-in-out hover:scale-105 p-6 border-slate-700 border-2 rounded-2xl bg-slate-800/20 gap-y-3">
                <div className="flex items-center justify-center w-full">
                  <Image
                    src="/images/projects/swensen_canva_mockup.png"
                    width={400}
                    height={300}
                    alt="Picture of author"
                    className="rounded-sm w-full h-auto"
                  />
                </div>

                <CardTitle className="flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-center text-sky-500 font-extrabold mt-2">
                  <div className="">
                    <span>Simulated Swensen&apos;s Site</span>
                    <Badge
                      variant="secondary"
                      className="ms-3 bg-slate-800/80   "
                    >
                      <p className="text-sm font-extrabold text-cyan-500 whitespace-nowrap">
                        Side Project
                      </p>
                    </Badge>
                  </div>
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <TechIcon icon={<Html5Original size={30} />} name="HTML" />
                  <TechIcon
                    icon={<FaBootstrap size={30} color="#7111f5" />}
                    name="Bootstrap"
                  />
                  <TechIcon icon={<Css3Original size={30} />} name="CSS" />
                  <TechIcon
                    icon={<JavascriptOriginal size={30} />}
                    name="JavaScript"
                  />
                </div>
                <CardDescription className="text-white">
                  <p className="sm:text-lg indent-8 leading-relaxed">
                    Practice project inspired by Swensen&apos;s website,
                    developed to improve front-end web development skills with
                    focus on responsive design and UI replication.
                  </p>
                </CardDescription>
                <div className="flex justify-center mt-auto">
                  <CardDescription className="flex justify-center text-white gap-3">
                    <Button
                      variant="link"
                      className="text-amber-400 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="https://simulate-swensen-practice.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <p className="">Live Demo</p>
                        <ExternalLink className="sm:size-7" />
                      </a>
                    </Button>
                  </CardDescription>
                </div>
              </Card>

              {/* Gallery Hall Online */}
              <Card className=" hover:border-sky-400 transform transition-transform duration-500 ease-in-out hover:scale-105 p-6 border-slate-700 border-2 rounded-2xl bg-slate-800/20 gap-y-3">
                <div className="flex items-center justify-center w-full">
                  <Image
                    src="/images/projects/gho_mockup.png"
                    width={400}
                    height={300}
                    alt="Picture of author"
                    className="rounded-sm w-full h-auto"
                  />
                </div>

                <CardTitle className="flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-center text-sky-500 font-extrabold mt-2">
                  <p>Gallery Hall Online</p>
                  <Badge variant="secondary" className="bg-cyan-500 ">
                    <p className="text-sm font-extrabold text-black whitespace-nowrap">
                      Senior Project
                    </p>
                  </Badge>
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <TechIcon icon={<Html5Original size={30} />} name="HTML" />
                  <TechIcon
                    icon={<FaBootstrap size={30} color="#7111f5" />}
                    name="Bootstrap"
                  />
                  <TechIcon icon={<Css3Original size={30} />} name="CSS" />
                  <TechIcon
                    icon={<JavascriptOriginal size={30} />}
                    name="JavaScript"
                  />
                </div>
                <CardDescription className="text-white">
                  <p className="sm:text-lg indent-8 leading-relaxed">
                    Designed concept and frontend for an online art auction
                    platform, defining key features including bid functionality,
                    categories, admin dashboard, and auction history.
                  </p>
                </CardDescription>
                <div className="flex items-center justify-center mt-auto">
                  <CardDescription className="flex justify-center text-white gap-3">
                    <Button
                      variant="link"
                      className="text-amber-400 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="https://gho-project.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <p className="">Live Demo</p>
                        <ExternalLink className="sm:size-7" />
                      </a>
                    </Button>
                  </CardDescription>
                  <CardDescription className="flex justify-center text-white gap-3">
                    {/* <Button
                      variant="link"
                      className="text-sky-500 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="/projects/galleryhall"
                        className="flex items-center gap-2"
                      >
                        <p className="">View Details</p>
                        <Info className="sm:size-7" />
                      </a>
                    </Button> */}
                  </CardDescription>
                </div>
              </Card>

              {/* Animezone */}
              <Card className=" hover:border-sky-400 transform transition-transform duration-500 ease-in-out hover:scale-105 p-6 border-slate-700 border-2 rounded-2xl bg-slate-800/20 gap-y-3">
                <div className="flex items-center justify-center w-full">
                  <Image
                    src="/images/projects/animezone_crop.png"
                    width={600}
                    height={200}
                    alt="Picture of author"
                    className="rounded-sm w-full h-auto"
                  />
                </div>

                <CardTitle className="flex items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl text-center text-sky-500 font-extrabold mt-2">
                  <p>Animezone</p>
                  <Badge variant="secondary" className="bg-slate-800/80   ">
                    <p className="text-sm font-extrabold text-cyan-500 whitespace-nowrap">
                      Side Project
                    </p>
                  </Badge>
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <TechIcon
                    icon={<DotnetcoreOriginal size={30} />}
                    name=".NET Maui"
                  />
                  <TechIcon icon={<CsharpOriginal size={30} />} name="C#" />
                </div>
                <CardDescription className="text-white">
                  <p className="sm:text-lg indent-8 leading-relaxed">
                    Developed a cross-platform application using Xamarin and
                    .NET MAUI for ordering manga books.
                  </p>
                </CardDescription>
                <div className="flex justify-center mt-auto">
                  <CardDescription className="flex justify-center text-white gap-3">
                    <Button
                      variant="link"
                      className="text-sky-500 hover:text-sky-600 transition-colors duration-300 sm:text-lg font-bold"
                    >
                      <a
                        href="/projects/animezone"
                        className="flex items-center gap-2"
                      >
                        <p className="">View Details</p>
                        <Info className="sm:size-7" />
                      </a>
                    </Button>
                  </CardDescription>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
