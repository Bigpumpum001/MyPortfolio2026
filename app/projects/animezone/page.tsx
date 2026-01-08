"use client";
import Image from "next/image";
import { Star } from "lucide-react";

import {  FaLayerGroup } from "react-icons/fa";


// import { useTranslations } from "next-intl";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
const techStacks = [
  {
    category: "Platform",
    technologies: ".NET MAUI (Xamarin.Forms)",
  },
  {
    category: "Language",
    technologies: "C#",
  },
  {
    category: "Database",
    technologies: "SQlite",
  },
];
function Page() {
  // const t = useTranslations("animezone");

  return (
    <>
      <div
        id="projects"
        className="w-full p-4 lg:p-6 md:p-8  my-10 z-10  flex items-center justify-center"
      >
        <div className="mx-auto max-w-7xl w-full space-y-5 bg-gray-900/50 border border-slate-800  p-10 rounded-2xl">
          {/* <div className="flex justify-end gap-2">
            <Button
              variant="default"
              onClick={() =>
                (window.location.href = "/projects/animezone?lang=en")
              }
            >
              ENG
            </Button>
            <Button
              variant="default"
              onClick={() =>
                (window.location.href = "/projects/animezone?lang=th")
              }
            >
              TH
            </Button>
          </div> */}
          <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r bg-clip-text from-blue-600 to-sky-500 text-transparent">
              Animezone{" "}
            </h1>
            <p className="text-xl sm:text-3xl font-bold text-slate-100 ">
              Manga book ordering Application
            </p>
            {/* <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              ToothToday is an online dental appointment system that I designed
              and developed from scratch, simulating the workflow of a real
              dental clinic. It focuses on providing a smooth and user-friendly
              experience for both patients and administrators.
            </p> */}
            <div className="flex justify-center">
              <Image
                src="/images/projects/animezone/animezone_crop.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-6 mt-10 ">
            <div className="flex items-center justify-center  gap-2 bg-gradient-to-r bg-clip-text from-blue-600 to-sky-500 text-transparent">
              <Star className="text-amber-600" />
              <p className=" font-bold text-xl sm:text-4xl text-amber-300">
                Key Features
              </p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              {/* <User className="" /> */}
              <p className=" font-bold text-xl sm:text-3xl">Sign Up & Login</p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/projects/animezone/signup-loginpage.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-2 max-w-4xl">
              <p className="indent-8 leading-relaxed">
                The Sign Up or Registration page is the process new users must
                complete to create an account within the system. If a user
                already has an account, they can go to the Login page by
                clicking the Login button, and the system will then display the
                Login page for the user.
              </p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Home</p>
            </div>

            <div className="flex justify-start">
              <Image
                src="/images/projects/animezone/home.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-2 max-w-4xl">
              <p className="indent-8 leading-relaxed">
                The Home page will consist of recommended anime and trending
                anime. Users can click on each anime item to view more
                information. Additionally, there will be a Flyout menu displayed
                in the top-left corner for users to navigate to various pages.
              </p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Profile</p>
            </div>
            <div className="flex justify-start">
              <Image
                src="/images/projects/animezone/profile.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-2 max-w-4xl">
              <p className="indent-8 leading-relaxed">
                This is a page for users to manage their own user accounts. If a
                user wishes to edit their information, they must click the Edit
                button. Users can then edit their Name, Email, and Password.
                Additionally, users can also delete their user account by
                clicking the Delete button.
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Add to favorite</p>
            </div>
            <div className="flex justify-start">
              <Image
                src="/images/projects/animezone/favorite.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Character</p>
            </div>
            <div className="flex justify-start">
              <Image
                src="/images/projects/animezone/character.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Cart</p>
            </div>
            <div className="flex justify-start">
              <Image
                src="/images/projects/animezone/cart.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-2 max-w-4xl">
              <p className="indent-8 leading-relaxed">
                The Cart page displays the list of products and the total price
                of all items that the user has added. Users can increase and
                decrease the quantity of products by clicking the &quot;+&quot;
                or &quot;-&quot; buttons.
              </p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Payment</p>
            </div>
            <div className="flex justify-start">
              <Image
                src="/images/projects/animezone/payment.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>

            <div className="space-y-2 max-w-4xl">
              <p className="indent-8 leading-relaxed">
                This page displays all the information for the user to proceed
                with payment. Payment channels will be shown. Once the user has
                made the payment, they must send proof of payment via the
                shop&apos;s Line account before the order can be completed.
              </p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <FaLayerGroup className=" text-xl sm:text-3xl" />
              <p className=" font-bold text-xl sm:text-3xl">Tech Stack</p>
            </div>
            <div className="overflow-x-auto w-full max-w-4xl">
              <Table className=" border border-slate-600 rounded-xl min-w-full">
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
          <div className="flex items-center justify-center"></div>
        </div>
      </div>
    </>
  );
}

export default Page;
