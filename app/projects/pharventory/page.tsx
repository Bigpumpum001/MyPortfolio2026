import Image from "next/image";
import {
  BicepsFlexed,
  Calculator,
  Calendar,
  Clock,
  Code,
  Computer,
  CreditCard,
  Database,
  DollarSign,
  History,
  Home,
  LineChart,
  Lock,
  Receipt,
  Settings,
  Share,
  Star,
  User,
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
import { RiStockFill } from "react-icons/ri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const techStacks = [
  {
    category: "Front-End",
    technologies: "React (Next.js), TypeScript, Tailwind CSS,React Query ",
  },
  {
    category: "Back-End",
    technologies: "NestJS",
  },
  {
    category: "Database & ORM",
    technologies: "PostgreSQL (Supabase),TypeORM ",
  },
  {
    category: "Cloud",
    technologies: "Google Cloud Run, Google Cloud Storage",
  },
  {
    category: "Containerization",
    technologies: "Docker, Docker Compose",
  },
  {
    category: "Others",
    technologies: "shadcn/ui, Chartjs, Lucide React ",
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
              Pharventory{" "}
            </h1>
            <p className="text-xl sm:text-3xl font-bold text-slate-100 ">
              Pharmacy Inventory System{" "}
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              Pharventory is a pharmacy inventory management system designed to
              simplify and optimize medication management for pharmacies and
              hospitals. The system addresses complex stock management
              challenges, minimizes human error, and improves operational
              efficiency by providing real-time tracking, expiration control,
              and business data analytics.
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
              <p className=" font-bold text-xl sm:text-3xl">
                Dashboard Overview
              </p>
            </div>
            <div className="flex justify-center w-full max-w-4xl">
              <Image
                src="/images/projects/pharventory/dashboard.png"
                width={1920}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>- Sales Analytics </p>
              <p className="indent-8">Sales Trend (date range selectable)</p>
              <p className="indent-8">
                Top 10 Products (by Revenue / Units Sold)
              </p>

              <p>- Stock Status Overview</p>
              <p className="indent-8">Out of Stock</p>
              <p className="indent-8">Critical Stock (&lt; 25)</p>
              <p className="indent-8">Low Stock (&lt; 100)</p>
              <p className="indent-8">Expired / Expiring Batches</p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">
                Inventory Management{" "}
              </p>
            </div>
            <Carousel className="w-full max-w-4xl">
              <CarouselContent className="">
                <CarouselItem className="flex justify-center ">
                  <Image
                    src="/images/projects/pharventory/inventory.png"
                    width={1920}
                    height={1920}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                  />
                </CarouselItem>

                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/pharventory/editmedicine.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/pharventory/inventory_batch_show.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-contain"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-sky-600" />
              <CarouselNext className="text-sky-600  " />
            </Carousel>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>- Search & Filtering</p>
              <p className="indent-8">
                Filter by stock status (Normal, Low Stock, Critical Stock, Out
                of Stock)
              </p>
              <p className="indent-8">
                Separate views for expired and near-expiry medicines
              </p>
              <p>- Medicine List Management</p>
              <p>- Create/read/update operations for medicines and batches</p>
              <p>- Medicine image upload (Google Cloud Storage)</p>
              <p>- Category & Unit can be created if they do not exist</p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Stock Log</p>
            </div>
            <div className="flex justify-center w-full max-w-4xl">
              <Image
                src="/images/projects/pharventory/stocklogs.png"
                width={1920}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-2 max-w-2xl text-lg">
              <p>- Stock movement tracking (IN, OUT, ADJUST)</p>
              <p>- Linked medicine and batch details.</p>
              <p>- Operator tracking.</p>
              <p>-Timestamped transaction records.</p>
              
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Receipt History </p>
            </div>
            <div className="flex justify-center w-full max-w-4xl">
              <Image
                src="/images/projects/pharventory/receipt.png"
                width={1920}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              {/* <p>
                - This system reduces operational errors and supports future
                audit requirements.
              </p> */}
              <p>
                - View dispensed medicines, quantities, prices, patient names,
                and timestamps
              </p>
              <p>- Synchronized with dispensing systems.</p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">
                Dispensing System
              </p>
            </div>
            <div className="flex justify-center w-full max-w-4xl">
              <Image
                src="/images/projects/pharventory/Dispense.png"
                width={1920}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            {/* <Carousel className="w-full max-w-4xl">
              <CarouselContent className="">
                <CarouselItem className="flex justify-center ">
                  <Image
                    src="/images/projects/pharventory/Dispense.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                  />
                </CarouselItem>

                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/pharventory/Dispense_complete.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/pharventory/Dispense_receipt.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-contain"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-sky-600" />
              <CarouselNext className="text-sky-600  " />
            </Carousel> */}
            <div className="space-y-2 max-w-4xl text-lg">
              <p>
                - FEFO (First Expire First Out) – automatically selects batches
                with the nearest expiration date.
              </p>
              <p>- Automatic price and total calculation .</p>
              <p>- Transactional dispensing to ensure data consistency</p>
              <p>- Instant receipt generation and printable output</p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Security </p>
            </div>
            <div className="flex justify-center w-full max-w-4xl">
              <Image
                src="/images/projects/pharventory/login.png"
                width={1920}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>- JWT Authentication.</p>
              <p>- Secure password hashing with bcrypt.</p>
            </div>
            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Business Impact </p>
            </div>

            <div className="space-y-2 max-w-4xl text-lg">
              <p className="font-bold text-sky-400">Improved Efficiency</p>
              <p className="indent-8">- Reduced inventory management time</p>
              <p className="indent-8">
                - Fewer data entry and dispensing errors
              </p>

              <p className="indent-8">- Faster dispensing workflow</p>

              <p className="indent-8">
                - This system reduces operational errors and supports future
                audit requirements
              </p>

              {/* <p className="font-bold text-sky-400">Cost Reduction</p>

              <p className="indent-8">
                - Minimized losses from expired medicines
              </p>

              <p className="indent-8">- Improved staff productivity</p> */}
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
