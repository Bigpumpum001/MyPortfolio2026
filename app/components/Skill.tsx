import Image from "next/image";
import React from "react";
import JavascriptOriginal from "react-devicons/javascript/original";
import TypescriptOriginal from "react-devicons/typescript/original";
import GoOriginalWordmark from "react-devicons/go/original-wordmark";
import CsharpOriginal from "react-devicons/csharp/original";
import ReactOriginal from "react-devicons/react/original";
import Html5Original from "react-devicons/html5/original";
import Css3Original from "react-devicons/css3/original";
import NextjsOriginal from "react-devicons/nextjs/original";
import TailwindcssPlain from "react-devicons/tailwindcss/original";
import { SiExpress } from "react-icons/si";
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

function Skill() {
  return (
    <>
      <div id="skills" className="w-full lg:p-6 md:p-8 p-4 py-8 z-10">
        <div className="flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r bg-clip-text from-sky-500 to-blue-700 text-transparent">
            Skills
          </h1>
        </div>
        <div className="p-4 md:p-6 lg:p-8 md:px-15 flex items-center justify-center space-y-8 lg:space-y-10 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="space-y-3 lg:space-y-5 bg-slate-800/60 p-3 lg:p-5 rounded-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Language
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-2">
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0 group">
                  {/* <JavascriptOriginal size={50} className="transition-shadow group-hover:drop-shadow-[0_0_10px_rgb(59,130,246)] group-hover:border-2 group-hover:border-sky-400 transform transition-transform duration-500 ease-in-out group-hover:scale-110"/>
                  <p className="text-xs sm:text-sm whitespace-nowrap group-hover:text-sky-400 transition-shadow group-hover:drop-shadow-[0_0_10px_rgb(59,130,246)] transform transition-transform duration-500 ease-in-out group-hover:scale-105">JavaScript</p> */}
                  <JavascriptOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    JavaScript
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <TypescriptOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    TypeScript
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <GoOriginalWordmark size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">Golang</p>
                </div>

                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <CsharpOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">C#</p>
                </div>
              </div>
            </div>
            <div className="space-y-3 lg:space-y-5 bg-slate-800/60 p-3 lg:p-5 rounded-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Front-End
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-2">
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <Html5Original size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">HTML</p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <Css3Original size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">CSS</p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <ReactOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    React.js
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <NextjsOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    Next.js
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <Image
                    src="/images/skills/reactquery.png"
                    alt="Reactquery"
                    width={50}
                    height={50}
                  />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    React Query
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <TailwindcssPlain size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    Tailwind CSS
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <FaBootstrap size={50} color="#7111f5" />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    Bootstrap
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3 lg:space-y-5 bg-slate-800/60 p-3 lg:p-5 rounded-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Back-End
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-2">
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <FaNodeJs size={50} color="#83cd29" />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    Node.js
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <SiExpress size={50} className="text-white" />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    Express.js
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <NestjsPlain size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">NestJS</p>
                </div>

                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <Image
                    src="/images/skills/ginlogo.png"
                    alt="Gin Framework"
                    width={38}
                    height={40}
                  />
                  <p className="text-xs sm:text-sm whitespace-nowrap">Gin</p>
                </div>

                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  {" "}
                  <DotnetcoreOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">.NET</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-5 bg-slate-800/60 p-3 lg:p-5 rounded-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Database & ORM
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-2">
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  {" "}
                  <PostgresqlOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    PostgreSQL
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <RiSupabaseFill size={50} color="#36c98b" />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    Supabase
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <MicrosoftsqlserverPlain size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    SQL Server
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <MongodbOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    MongoDB
                  </p>
                </div>

                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <Image
                    src="/images/skills/typeorm.png"
                    alt="swagger"
                    width={50}
                    height={50}
                  />{" "}
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    TypeORM
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-5 bg-slate-800/60 p-3 lg:p-5 rounded-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold">Tools</p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-2">
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <DiVisualstudio size={50} color="#29a9f1" />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    VS Code
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <DiVisualstudio size={50} color="#7757ae" />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    Visual Studio
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <GitOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">Git</p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <FaGithub size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">Github</p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <Image
                    src="/images/skills/Postman2.png"
                    alt="Postman"
                    width={50}
                    height={50}
                    className="bg-white"
                  />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    Postman
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <Image
                    src="/images/skills/swagger_ui.png"
                    alt="swagger"
                    width={50}
                    height={50}
                  />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    Swagger
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3 lg:space-y-5 bg-slate-800/60 p-3 lg:p-5 rounded-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold">
                DevOps & Cloud
              </p>
              <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 overflow-x-auto pb-2">
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <DockerOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">Docker</p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <GooglecloudOriginal size={50} color="#36c98b" />
                  <p className="text-xs sm:text-sm whitespace-nowrap">
                    Google Cloud
                  </p>
                </div>
                <div className="flex flex-col items-center gap-1 w-16 sm:w-20 shrink-0">
                  <AzureOriginal size={50} />
                  <p className="text-xs sm:text-sm whitespace-nowrap">Azure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
