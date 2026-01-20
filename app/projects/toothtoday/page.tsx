"use client";
import Image from "next/image";
import { Clipboard, ExternalLink, Paperclip, Star } from "lucide-react";
import { toast } from "sonner";
import { FaLayerGroup } from "react-icons/fa";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
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
          <div className="flex flex-col items-center justify-center space-y-6 mt-10">
            <div className="flex items-center justify-center  gap-2 bg-gradient-to-r bg-clip-text from-blue-600 to-sky-500 text-transparent">
              <Star className="text-amber-600" />
              <p className=" font-bold text-xl sm:text-4xl text-amber-300">
                Key Features
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">General Users</p>
            </div>

            <div className="space-y-2 max-w-4xl text-lg">
              <p>- Register / Login</p>
              <p>
                - Book appointments (select service, date, time, doctor, upload
                images, notes)
              </p>
              <p>
                - View service and doctor details, booking instructions, daily
                doctor schedule, and slot status
              </p>
              <p>
                - Profile page to manage personal info, appointment history,
                LINE integration, and cancel appointment
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">
                Slot and Time Management
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
            <div className="space-y-2 max-w-4xl text-lg">
              <p>
                - Booking page shows slot status with colors: Available, Almost
                Full, Full, Closed
              </p>
              <p>
                - Each doctor&apos;s slot is 1 hour, allowing focused patient
                care with time for room prep and short breaks between
                appointments{" "}
              </p>
              <p></p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">
                Booking by Service Duration
              </p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg text-start">
              <p>
                {" "}
                Example scenario: slot status: [08:00 Available] [09:00 Full]
                (from DB){" "}
              </p>
              <p>- Booking a 1-hour service at [08:00] → Allowed</p>
              <p>
                - Booking a 1 hour 20 min service → Rounded to 2 hours → Not
                allowed, slot [09:00] is full
              </p>
              <p> - Booking a 1-hour service → Slot available normally</p>
              <p>When selecting time (e.g., slot 08:00) with 2 doctors:</p>
              <p>
                - If any doctor is available, booking is allowed but must select
                an available doctor
              </p>
              <p>
                - If all doctors are booked, the slot shows Full and cannot be
                booked{" "}
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">
                Appointment History
              </p>
            </div>
            <div className="flex justify-start my-6">
              <Image
                src="/images/projects/toothtoday/booking_history.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>View both current and past appointments</p>
              <p>- Cancel only if the appointment time has not passed </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">
                Line Notifications
              </p>
            </div>
            <div className="flex justify-start my-6">
              <Image
                src="/images/projects/toothtoday/line_noti.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
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
              <p className=" font-bold text-xl sm:text-3xl">Automatic Jobs</p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>
                - If the user does not confirm within 10 minutes of the slot →
                the slot is released for walk-in
              </p>
              <p>
                - Slots in progress are marked complete after the treatment ends
              </p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className="font-bold text-xl sm:text-3xl">Security</p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>- Authentication using JWT </p>
              <p>- Passwords hashed with bcrypt</p>
              <p>- Role-based access control (Admin permission verification)</p>
            </div>

            <div className="flex items-center text-center gap-2 text-sky-500 ">
              <p className="font-bold text-xl sm:text-3xl">Admin Panel</p>
            </div>

            <div className="space-y-2 max-w-4xl text-lg text-center">
              <p className=" text-md sm:text-xl font-semibold text-amber-300">
                Demo Admin Account
              </p>
              <span className="sm:text-base text-white">
                (Unlimited booking for testing purposes, Full access to the
                admin panel features)
              </span>

              <div className="flex justify-center">
                <Button
                  variant="link"
                  className=" flex items-center justify-center text-blue-300"
                >
                  <a
                    href="https://tooth-today.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <p className="">Live Demo</p>
                    <ExternalLink className="" />
                  </a>{" "}
                </Button>
                <Button
                  variant="link"
                  className=" flex items-center justify-center text-blue-300"
                  onClick={() => {
                    navigator.clipboard.writeText("admin@admin.com");
                    toast.success("Email copied to clipboard!", {
                      style: {
                        background: "#009966",
                        color: "white",
                        border: "1px solid #009966",
                        fontSize: "15px",
                      },
                    });
                  }}
                >
                  Email <Paperclip />
                </Button>
                <Button
                  variant="link"
                  className=" flex items-center justify-center text-blue-300"
                  onClick={() => {
                    navigator.clipboard.writeText("admintooth");
                    toast.success("Password copied to clipboard!", {
                      style: {
                        background: "#009966",
                        color: "white",
                        border: "1px solid #009966",
                        fontSize: "15px",
                      },
                    });
                  }}
                >
                  Password <Paperclip />
                </Button>
              </div>
              <p className=" text-lg sm:text-2xl font-semibold text-sky-300">
                Services Management
              </p>
              <Carousel className="w-full max-w-4xl my-6">
                <CarouselContent className="">
                  <CarouselItem className="flex justify-center ">
                    <Image
                      src="/images/projects/toothtoday/admin_service2.png"
                      width={1920}
                      height={1920}
                      alt="ToothToday booking interface"
                      className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                    />
                  </CarouselItem>

                  <CarouselItem className="flex justify-center">
                    <Image
                      src="/images/projects/toothtoday/admin_service_edit2.png"
                      width={1920}
                      height={600}
                      alt="ToothToday booking interface"
                      className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="text-sky-600" />
                <CarouselNext className="text-sky-600  " />
              </Carousel>
              <p className="indent-8">
                Manage dental services with pricing, duration, descriptions,
                images, price range validation, and detailed information
              </p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg text-center">
              <p className=" text-lg sm:text-2xl font-semibold text-sky-300">
                Doctors Management
              </p>
              <Carousel className="w-full max-w-4xl my-6">
                <CarouselContent className="">
                  <CarouselItem className="flex justify-center ">
                    <Image
                      src="/images/projects/toothtoday/admin_doctor1.png"
                      width={1920}
                      height={1920}
                      alt="ToothToday booking interface"
                      className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                    />
                  </CarouselItem>

                  <CarouselItem className="flex justify-center">
                    <Image
                      src="/images/projects/toothtoday/admin_doctor_edit.png"
                      width={1920}
                      height={600}
                      alt="ToothToday booking interface"
                      className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem className="flex justify-center">
                    <Image
                      src="/images/projects/toothtoday/admin_doctor_edit2.png"
                      width={1920}
                      height={600}
                      alt="ToothToday booking interface"
                      className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="text-sky-600" />
                <CarouselNext className="text-sky-600  " />
              </Carousel>
              <p className="indent-8">
                Manage doctor profiles (CRUD), upload profile images with
                preview, search & filter doctors, configure work schedules, and
                allow users to book appointments based on available time slots
              </p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg text-center">
              <p className=" text-lg sm:text-2xl font-semibold text-sky-300">
                Appointments Management
              </p>
              <Carousel className="w-full max-w-4xl my-6">
                <CarouselContent className="">
                  <CarouselItem className="flex justify-center ">
                    <Image
                      src="/images/projects/toothtoday/admin_queue.png"
                      width={1920}
                      height={1920}
                      alt="ToothToday booking interface"
                      className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                    />
                  </CarouselItem>

                  <CarouselItem className="flex justify-center">
                    <Image
                      src="/images/projects/toothtoday/admin_queue_update.png"
                      width={1920}
                      height={600}
                      alt="ToothToday booking interface"
                      className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="text-sky-600" />
                <CarouselNext className="text-sky-600  " />
              </Carousel>
              <p className="">
                Manage appointments: view and filter by date using calendar,
                update status, and soft delete
              </p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className="font-bold text-xl sm:text-3xl">Responsive Design</p>
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>
                - Responsive layout designed for mobile, tablet, and desktop
                screens
              </p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Business Impact </p>
            </div>

            <div className="space-y-2 max-w-4xl text-lg">
              {/* <p className="font-bold text-sky-400">Improved Efficiency</p> */}
              <p>
                - Reduced front-desk workload by replacing manual appointment
                booking with an automated system
              </p>
              <p>
                - Minimized double-booking issues through real-time slot
                management
              </p>
              <p>
                - Enabled patients to book appointments independently 24/7,
                improving accessibility and convenience
              </p>
              <p>
                - Decreased no-show rates with automated reminder and
                notification system
              </p>
              <p>
                - Improved doctor schedule management, allowing clinics to
                utilize time more efficiently
              </p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <FaLayerGroup className="text-xl sm:text-3xl" />
              <p className="font-bold text-xl sm:text-3xl">Tech Stack</p>
            </div>
            <div className="overflow-x-auto  w-full max-w-4xl">
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
