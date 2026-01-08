import Image from "next/image";
import {
  Calculator,
  Calendar,
  Clock,
  Code,
  CodeXml,
  Computer,
  Database,
  History,
  Home,
  Settings,
  Share,
  Star,
  User,
  Workflow,
} from "lucide-react";

import {
  FaRobot,
  FaLayerGroup,
  FaCartPlus,
  FaProductHunt,
  FaFileExcel,
} from "react-icons/fa";

import { FaLine } from "react-icons/fa6";

import { MdComputer, MdOutlineSecurity, MdPayment } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const techStacks = [
  {
    category: "Language",
    technologies: "C#, SQL, JavaScript, HTML/CSS",
  },
  {
    category: "Framework",
    technologies: "ASP.NET Core / MVC",
  },
  {
    category: "Database",
    technologies: "Microsoft SQL Server",
  },
  {
    category: "Tools",
    technologies: "Visual Studio, SSMS, Git, Excel",
  },
  {
    category: "Other",
    technologies: "jQuery, Bootstrap, SweetAlert",
  },
];
function page() {
  return (
    <>
      <div
        id="projects"
        className="w-full p-4 lg:p-6 md:p-8  my-10 z-10  flex items-center justify-center"
      >
        <div className="mx-auto max-w-7xl w-full space-y-5 bg-gray-900/50 border border-slate-800  p-10 rounded-2xl">
          <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-3xl sm:text-4xl  font-bold bg-gradient-to-r bg-clip-text from-blue-600 to-sky-500 text-transparent">
              Institutional Quality Evaluation & Monitoring System
            </h1>
            {/* <p className="text-xl sm:text-3xl font-bold text-slate-100 ">
              Home Essentials E-commerce App
            </p> */}
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              This system is designed to collect and manage evaluation and
              quality monitoring data for faculty members and internal
              departments within the university. It serves as a reporting tool
              for the Ministry of Higher Education, Science, Research, and
              Innovation (MHESI), which is the primary agency responsible for
              overseeing, monitoring, and evaluating the university’s
              performance on an annual basis.
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              This system includes an online form designed to allow internal
              units, such as faculties, to input data on activities or
              operations related to the development of faculty members and the
              university.
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              The system then follows a four-step process for data verification
              and approval:
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              1) Data Entry by Faculties/Units Internal units within the
              university (e.g., various faculties) fill out the form provided in
              the system with details of their activities or achievements.{" "}
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              2) Review by the Main Responsible Unit (Owner) The main
              responsible unit will review the data submitted by each faculty
              and decide whether to “include” or “exclude” it from the official
              report.{" "}
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              3) Request for Revision by Faculties (if excluded) If the
              submitted data is not included, the faculty may submit a revision
              or clarification request through the system.{" "}
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              4) Approval of Revision Requests by the Owner After the revision
              submission period ends, the responsible unit will approve or
              reject the revision requests submitted.
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              This project is part of the work I was assigned, where I was
              responsible for developing and maintaining the system
              using .NET MVC, jQuery, and SQL Server. SQL Server was used
              specifically for writing stored procedures to manage data
              according to the requirements provided by mentors and clients.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 mt-10">
            <div className="flex items-center justify-center  gap-2 bg-gradient-to-r bg-clip-text from-blue-600 to-sky-500 text-transparent">
              <Star className="text-amber-600" />
              <p className=" font-bold text-xl sm:text-3xl text-amber-300">
                Main Functions and Contributed Features
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <CodeXml className="" />
              <p className=" font-bold text-xl sm:text-2xl">.NET Development</p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>
                - Developed a Web Application for managing evaluation data using
                ASP.NET Core / MVC as the core technology and backend system.
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <Database className="" />
              <p className=" font-bold text-xl sm:text-2xl">
                Database Design & Integration
              </p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>
                - Designed a relational database (SQL Server) with stored
                procedures and views to support various system processes.
              </p>
              <p>
                - Created complex stored procedures to update main table data
                upon approval of edit requests.
              </p>
              <p>
                - Connected the database efficiently using Entity Framework.
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <FaFileExcel className="" />
              <p className=" font-bold text-xl sm:text-2xl">
                Import / Export & File Processing
              </p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>- Imported and read data from Excel files.</p>
              <p>
                - Checked for duplicate records from Excel and the database,
                highlighting duplicate rows in pink.
              </p>
              <p>
                - Created alerts to indicate success or failure of data import.
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <Workflow />
              <p className=" font-bold text-xl sm:text-2xl">
                Multi-Step Workflow Automation
              </p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>- Developed .NET MVC backend logic and Wrote stored procedures to support a 4-step workflow process.</p>
              <p>
                - Each step has dedicated screens based on user roles (e.g.,
                Faculty, Administrator), with appropriate access and editing
                permissions.
              </p>
              <p>
                - Developed a detailed edit approval system comparing
                &quot;Before&quot; and &quot;After&quot; data side-by-side.
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <Calculator />
              <p className=" font-bold text-xl sm:text-2xl">Summary</p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>- Created summary counts for each workflow step</p>
              <p>
                - Built summary dashboards and reports to track data status and
                performance per evaluation round
              </p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <FaLayerGroup className=" text-xl sm:text-3xl" />
              <p className=" font-bold text-xl sm:text-3xl">Tech Stack</p>
            </div>
            <div className="overflow-x-auto w-full max-w-4xl">
              <Table className="border border-slate-600 rounded-xl min-w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-sky-500 text-lg md:text-xl font-bold text-center border border-slate-600 whitespace-nowrap sm:min-w-[200px]">
                      Category
                    </TableHead>
                    <TableHead className="text-sky-500 text-lg md:text-xl w-auto font-bold text-center border border-slate-600 whitespace-nowrap w-full ">
                      Technologies
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {techStacks.map((techStack) => (
                    <TableRow key={techStack.category}>
                      <TableCell className="font-medium text-center border border-slate-600 whitespace-nowrap text-sm md:text-base">
                        {techStack.category}
                      </TableCell>
                      <TableCell className="text-center border border-slate-600 text-sm md:text-base break-words hyphens-auto">
                        {techStack.technologies}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
