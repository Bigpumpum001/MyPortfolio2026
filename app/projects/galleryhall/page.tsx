import Image from "next/image";
import { Star } from "lucide-react";

import { FaLayerGroup } from "react-icons/fa";

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
    category: "Front-End",
    technologies: "HTML5, CSS3, Bootstrap5, JavaScript, Font Awesome, Boxicons",
  },
  {
    category: "Back-End",
    technologies: "JavaScript",
  },
  {
    category: "Database",
    technologies: "Firebase",
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
              Gallery Hall Online
            </h1>
            <p className="text-xl sm:text-3xl font-bold text-slate-100 ">
              Art Auction Platform
            </p>
            <div className="flex justify-center">
              <Image
                src="/images/projects/gallery_hall_online/seehome.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover md:basis-1/2"
              />
            </div>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              Gallery Hall Online is a web-based art auction platform designed
              to serve as a central hub connecting artists, collectors, and art
              enthusiasts in a digital marketplace.
            </p>

            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              The platform was developed to build a community of creators and
              art lovers, providing an open space where users can easily and
              conveniently access and bid on various types of artworks.
            </p>
            <p className="sm:text-xl font-medium indent-8 leading-relaxed">
              The system supports real-time bidding, showcases diverse art
              collections, and includes comprehensive administrative tools to
              ensure efficient platform management.
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
                User Authentication & Profile Management
              </p>
            </div>
            <Carousel className="w-full max-w-4xl">
              <CarouselContent className="">
                <CarouselItem className="flex justify-center ">
                  <Image
                    src="/images/projects/gallery_hall_online/1.register.png"
                    width={800}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-cover md:basis-1/2"
                  />
                </CarouselItem>

                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/gallery_hall_online/2.login.png"
                    width={800}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-cover md:basis-1/2"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/gallery_hall_online/4.profile.png"
                    width={800}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-cover md:basis-1/2"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-sky-600" />
              <CarouselNext className="text-sky-600  " />
            </Carousel>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>- User registration & login system</p>
              <p>
                - Profile management: edit personal information, descriptions,
                and contact details
              </p>
              <p>
                - Age verification: minimum age requirement of 15 years to
                participate in bidding
              </p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">
                🎨 Core Auction System{" "}
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/projects/gallery_hall_online/add-auction.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover md:basis-1/2"
              />
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>Users can create auctions by providing:</p>
              <p className="indent-8">- Artwork name and artist name</p>
              <p className="indent-8">
                - Artwork category (Abstract, Painting, Sculpture, Others)
              </p>
              <p className="indent-8">- Image upload via URL</p>
              <p className="indent-8">
                - Starting price and minimum bid increment
              </p>
              <p className="indent-8">
                - Custom auction duration (hours, minutes, seconds)
              </p>
              <p className="indent-8">- Artwork description</p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Bidding System</p>
            </div>
            <div className="flex justify-center w-full max-w-4xl">
              <Image
                src="/images/projects/gallery_hall_online/homewithbid.png"
                width={1920}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover md:basis-1/2"
              />
            </div>
            <div className="space-y-2 max-w-4xl text-lg text-start">
              <p>- Instant bid updates</p>
              <p>- Bid validation to ensure higher than current price</p>
              <p>- Enforced minimum bid increments</p>
              <p> - Instant notifications for winning bids</p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">
                Auction Management
              </p>
            </div>
            <Carousel className="w-full max-w-4xl">
              <CarouselContent className="">
                <CarouselItem className="flex justify-center ">
                  <Image
                    src="/images/projects/gallery_hall_online/myauction.png"
                    width={800}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-cover md:basis-1/2"
                  />
                </CarouselItem>

                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/gallery_hall_online/winningauction.png"
                    width={800}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-cover md:basis-1/2"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-sky-600" />
              <CarouselNext className="text-sky-600  " />
            </Carousel>

            <div className="space-y-2 max-w-4xl text-lg">
              <p>- Automatic auction closure when time expires</p>
              <p>- Countdown timer display</p>
              <p>- Winner data recording</p>
              <p>- Auction status display (Active / Ended)</p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">
                Search & Filtering
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/projects/gallery_hall_online/gho-home.png"
                width={800}
                height={600}
                alt="ToothToday booking interface"
                className="rounded-lg shadow-lg max-w-full h-auto object-cover md:basis-1/2"
              />
            </div>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>- Filter by artwork category</p>
              <p>- Smart search by artwork name, artist, and description </p>
              <p>- Personalized views:</p>
              <p className="indent-8">
                {" "}
                My Auctions – view only user-created auctions
              </p>
              <p className="indent-8">End Auction – view completed auctions</p>
              <p className="indent-8">Global gallery view</p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">
                Communication & Social Features
              </p>
            </div>
            <Carousel className="w-full max-w-4xl">
              <CarouselContent className="">
                <CarouselItem className="flex justify-center ">
                  <Image
                    src="/images/projects/gallery_hall_online/chat.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-contain md:basis-1/2"
                  />
                </CarouselItem>

                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/gallery_hall_online/report.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-contain md:basis-1/2"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-sky-600" />
              <CarouselNext className="text-sky-600  " />
            </Carousel>
            <div className="space-y-2 max-w-4xl text-lg">
              {" "}
              <p>- Real-time chat between sellers and bidders </p>
              <p>- User profile search</p>
              <p>- Reporting system:</p>
              <p className="indent-8">Report inappropriate auctions</p>
              <p className="indent-8">Admin review and moderation workflow</p>
            </div>

            <div className="flex items-center text-start gap-2 text-sky-500">
              <p className="font-bold text-xl sm:text-3xl">Admin Dashboard</p>
            </div>
            <Carousel className="w-full max-w-4xl">
              <CarouselContent className="">
                <CarouselItem className="flex justify-center ">
                  <Image
                    src="/images/projects/gallery_hall_online/adminpanel.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-contain md:basis-1/2"
                  />
                </CarouselItem>

                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/gallery_hall_online/dashboard_usermanage.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-contain md:basis-1/2"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/gallery_hall_online/receipt_report.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-contain md:basis-1/2"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/gallery_hall_online/dashboard_usermanage.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-contain md:basis-1/2"
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <Image
                    src="/images/projects/gallery_hall_online/auction_manage.png"
                    width={1920}
                    height={600}
                    alt="ToothToday booking interface"
                    className="rounded-lg shadow-lg max-w-full h-auto object-contain md:basis-1/2"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="text-sky-600" />
              <CarouselNext className="text-sky-600  " />
            </Carousel>
            <div className="space-y-2 max-w-4xl text-lg">
              <p>Admin Panel Features</p>
              <p className="indent-8">- User management</p>
              <p className="indent-8">- Auction monitoring and control</p>
              <p className="indent-8">- Report management</p>

              <p className="indent-8">- Bid history tracking</p>

              <p className="indent-8">- Content moderation tools</p>
              <p>Admin Capabilities</p>

              <p className="indent-8">- Edit and delete auctions</p>

              <p className="indent-8">- Monitor bidding activities</p>
              <p className="indent-8">- Manage user accounts</p>

              <p className="indent-8">- Resolve reported cases</p>
            </div>

            {/* <div className="flex items-center text-start gap-2 text-sky-500">
              <p className=" font-bold text-xl sm:text-3xl">Business Impact </p>
            </div>

            <div className="space-y-2 max-w-4xl text-lg">
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
            </div> */}
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
