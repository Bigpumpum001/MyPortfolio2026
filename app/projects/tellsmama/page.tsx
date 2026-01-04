import Image from "next/image";
import {
  Calendar,
  Clock,
  Computer,
  History,
  Home,
  Settings,
  Star,
  User,
} from "lucide-react";

import {
  FaRobot,
  FaLayerGroup,
  FaCartPlus,
  FaProductHunt,
} from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    category: "Frontend",
    technologies: "React, Axios, React Router, CSS Modules, Bootstrap",
  },
  {
    category: "Backend",
    technologies: "Node.js, Express.js, MongoDB",
  },
  {
    category: "Authentication",
    technologies: "JWT, bcryptjs",
  },
  {
    category: "Image Upload",
    technologies: "Multer, Cloudinary",
  },
  {
    category: "Cloud & Containerization",
    technologies: "Google Cloud Run, Docker, Docker Compose",
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
              Tellsmama
            </h1>
            <p className="text-xl sm:text-3xl font-bold text-slate-100 ">
              Home Essentials E-commerce App
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              Tellsmama is an online store application that I designed and
              developed using the MERN Stack technology. It serves as a
              user-friendly and convenient platform for people looking for home
              essentials such as kitchen supplies, cleaning products, and
              household tools. This app was created to simulate a full-featured
              e-commerce platform, with product management capabilities for
              admins and a smooth shopping experience for general users.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-center  gap-2 bg-gradient-to-r bg-clip-text from-blue-600 to-sky-500 text-transparent">
              <Star className="text-amber-600" />
              <p className=" font-bold text-xl sm:text-3xl text-amber-300">
                Key Features
              </p>
            </div>
            <div className="flex justify-start my-6">
              <Image
                src="/images/projects/tellsmama/RegisterPage.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <User className="" />
              <p className=" font-bold text-xl sm:text-2xl">
                Register / Login System
              </p>
            </div>
            <div className="space-y-2">
              <p>- Register / login using JSON Web Token</p>
              <p>- Passwords are securely hashed with bcryptjs</p>
              <p>- Role-based access control</p>
              <p className="indent-8">
                User: Search products, add to cart, manage their own items in
                the Dashboard
              </p>
              <p className="indent-8">
                Admin: Full access to product and category management pages
              </p>
            </div>
            
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                src="/images/projects/toothtoday/book-real2.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                src="/images/projects/tellsmama/cart.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <Image
                src="/images/projects/tellsmama/cart.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="flex justify-start my-6">
              <Image
                src="/images/projects/tellsmama/EditProduct.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <FaProductHunt className="" />
              <p className=" font-bold text-xl sm:text-2xl">Product</p>
            </div>
            <div className="space-y-2">
              <p>- Add new products with image upload via Cloudinary</p>
              <p>- Search products using Search Bar and filter by category</p>
              <p>
                - View, edit, or delete products directly from the Dashboard
              </p>
            </div>
            <div className="flex justify-start my-6">
              <Image
                src="/images/projects/tellsmama/cart.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <FaCartPlus className="" />
              <p className=" font-bold text-xl sm:text-2xl">Cart</p>
            </div>
            <div className="space-y-2"></div>
            <p>
              - Users can add items to their cart in preparation for checkout
            </p>
            <div className="flex justify-start my-6">
              <Image
                src="/images/projects/tellsmama/productmanage.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <Settings />
              <p className=" font-bold text-xl sm:text-2xl">
                Manage (for Admin)
              </p>
            </div>
            <div className="space-y-2">
              <p>- Create / Edit / Delete categories and subcategories</p>
              <p>- Edit / Delete products</p>
              <p>
                - Admin pages are protected by middleware that verifies token
                authentication
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <Computer />
              <p className=" font-bold text-xl sm:text-2xl">Responsive</p>
            </div>
            <div className="space-y-2">
              <p>
                - Responsive layout designed for mobile, tablet, and desktop
                screens
              </p>
            </div>
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
