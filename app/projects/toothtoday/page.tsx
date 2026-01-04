import Image from "next/image";
import { Calendar, Clock, History, Star, User } from "lucide-react";

import { FaRobot, FaLayerGroup } from "react-icons/fa";

import { FaLine } from "react-icons/fa6";

import { MdComputer, MdOutlineSecurity } from "react-icons/md";
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
    category: "Front-End",
    technologies: "React (Next.js), TypeScript, Tailwind CSS",
  },
  {
    category: "Back-End",
    technologies: "GO (Gin Framework), LINE API",
  },
  {
    category: "Database",
    technologies: "PostgreSQL (Supabase)",
  },
  {
    category: "Authentication",
    technologies: "JWT, bcryptjs",
  },
  {
    category: "Cloud",
    technologies: "Google Cloud Run, Google Cloud Storage",
  },
  {
    category: "Containerization",
    technologies: "Docker, Docker Compose",
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text from-blue-600 to-sky-500 text-transparent">
              ToothToday
            </h1>
            <p className="text-xl sm:text-3xl font-bold text-slate-100 ">
              Online Dental Appointment System
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              ToothToday is an online dental appointment system that I designed
              and developed from scratch, simulating the workflow of a real
              dental clinic. It focuses on providing a smooth and user-friendly
              experience for both patients and administrators.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center  gap-2 bg-gradient-to-r bg-clip-text from-blue-600 to-sky-500 text-transparent">
              <Star className="text-amber-600" />
              <p className=" font-bold text-xl sm:text-3xl text-amber-300">
                Key Features
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <User className="" />
              <p className=" font-bold text-xl sm:text-2xl">General Users</p>
            </div>
            <div className="space-y-2">
              <p>- Register / Login</p>
              <p>
                - Book appointments (select service, date, time, doctor, upload
                images, notes)
              </p>
              <p>
                - View service and doctor details, booking instructions, daily
                doctor schedule, and slot technologies
              </p>
              <p>
                - Profile page to manage personal info, appointment history,
                LINE integration, and cancel appointment
              </p>
            </div>
            <div className="flex justify-start my-6">
              <Image
                src="/images/projects/toothtoday/book-real2.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <Clock className="" />
              <p className=" font-bold text-xl sm:text-2xl">
                Slot and Time Management
              </p>
            </div>
            <div className="space-y-2">
              <p>
                - Booking page shows slot technologies with colors: Available,
                Almost Full, Full, Closed
              </p>
              <p>
                - Each doctor&apos;s slot is 1 hour, allowing focused patient
                care with time for room prep and short breaks between
                appointments{" "}
              </p>
              <p></p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <Calendar className="" />
              <p className=" font-bold text-xl sm:text-2xl">
                Booking by Service Duration
              </p>
            </div>
            <div className="space-y-2"></div>
            <p>
              {" "}
              Example scenario: slot technologies: [08:00 Available] [09:00
              Full] (from DB){" "}
            </p>
            <p>- Booking a 1-hour service at [08:00] → Allowed</p>
            <p>
              - Booking a 1 hour 20 min service → Rounded to 2 hours → Not
              allowed, slot [09:00] is full
            </p>
            <p>
              {" "}
              - Booking a 1-hour service → Slot available normally When
              selecting time (e.g., slot 08:00) with 2 doctors:
            </p>
            <p>
              - If any doctor is available, booking is allowed but must select
              an available doctor{" "}
            </p>
            <p>
              - If all doctors are booked, the slot shows Full and cannot be
              booked{" "}
            </p>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <FaRobot />
              <p className=" font-bold text-xl sm:text-2xl">Automatic Jobs</p>
            </div>
            <div className="space-y-2">
              <p>
                - If the user does not confirm within 10 minutes of the slot →
                the slot is released for walk-in
              </p>
              <p>
                - Slots in progress are marked complete after the treatment ends
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <History />
              <p className=" font-bold text-xl sm:text-2xl">
                Appointment History
              </p>
            </div>
            <div className="space-y-2">
              <p>View both current and past appointments</p>
              <p>- Cancel only if the appointment time has not passed </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <FaLine />
              <p className=" font-bold text-xl sm:text-2xl">
                Line Notifications
              </p>
            </div>
            <div className="space-y-2">
              {" "}
              <p>- Connect / Disconnect Line </p>
              <p>- Appointment confirmed / Appointment canceled</p>
              <p>- No-show alert (10 min) / Service completed notification</p>
              <p>
                {" "}
                - Advance notifications before the appointment (1 hr / 24 hrs){" "}
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <MdOutlineSecurity />
              <p className="font-bold text-xl sm:text-2xl">Security</p>
            </div>
            <div className="space-y-2">
              <p>- Authentication using JWT </p>
              <p>- Passwords hashed with bcrypt</p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <MdComputer />
              <p className="font-bold text-xl sm:text-2xl">Responsive Design</p>
            </div>
            <div className="space-y-2">
              <p>
                - Responsive layout designed for mobile, tablet, and desktop
                screens
              </p>
            </div>
          </div>
          <div className="flex items-center text-start gap-2 text-sky-500">
            <FaLayerGroup />
            <p className="font-bold text-xl sm:text-2xl">Tech Stack</p>
          </div>
          <div className="overflow-x-auto">
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
    </>
  );
}

export default page;
