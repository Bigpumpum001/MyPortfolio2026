"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    // Check if we're on a project detail page
    setTimeout(() => {
      if (
        pathname.startsWith("/projects/") 
      ) {
        setActiveSection("projects");
        return;
      }
    }, 300);

    const handleScroll = () => {
      const sections = ["home", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = section;
            break;
          }
        }
      }

      // Special handling for when we're at the bottom of the page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const bottomThreshold = documentHeight - windowHeight - 100;
      
      if (window.scrollY >= bottomThreshold) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    // Only add scroll listener if we're on the home page
    if (pathname === "/") {
      // Initial check when component mounts
      handleScroll();
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "Skills", href: "/#skills", id: "skills" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <>
      <nav className="fixed flex justify-between items-center py-4 px-12 md:px-16 lg:px-20 w-full z-50 bg-slate-950/95 backdrop-blur-sm border-b-2 border-slate-800">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-3xl md:text-4xl font-bold text-slate-100 hover:text-sky-600"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={`px-5 text-lg md:text-xl font-semibold transition-colors duration-300 hover:bg-slate-900 active:bg-slate-800 ${
                        activeSection === item.id
                          ? "text-sky-400 hover:text-sky-600 font-extrabold"
                          : "text-slate-100 hover:text-sky-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-100 hover:text-blue-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-slate-950/95 "
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 right-0 bg-slate-950 border-b border-slate-800 shadow-xl transform transition-all duration-500 ease-in-out animate-in slide-in-from-top">
            <div className="p-4">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-slate-100">Menu</h2>
                <button
                  className="p-2 text-slate-100 hover:text-blue-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} />
                </button>
              </div>
              <ul className="flex flex-col space-y-4 px-2 ">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={`text-lg font-semibold transition-colors duration-300 py-3 px-4 rounded-lg  ${
                        activeSection === item.id
                          ? "text-sky-400 font-extrabold "
                          : "text-slate-300 hover:text-blue-500"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
