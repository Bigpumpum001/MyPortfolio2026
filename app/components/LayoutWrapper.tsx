"use client";
import Particles from "@/components/ui/Particles";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
// import { NextIntlClientProvider } from "next-intl";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-slate-950">
      {/* Particles covering entire screen as background */}
      <div className="fixed inset-0 w-full h-full">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={500}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center text-white min-h-screen">
        <Navbar />
        <div className="flex-1 w-full mt-20">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
