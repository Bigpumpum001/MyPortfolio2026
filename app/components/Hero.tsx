"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Github, Linkedin, Download } from "lucide-react";

function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const texts = [
    "Web Developer",
    "Full Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <div
      id="home"
      className="w-full min-h-screen flex items-center justify-center py-8"
    >
      <div className="space-y-8 px-4 sm:px-6 sm:px-0 lg:space-y-12  my-10 py-4 lg:py-6 md:py-8  flex flex-col lg:flex-row items-center justify-center  z-10 max-w-7xl mx-auto w-full">
        <div className="  flex flex-1 flex-col space-y-4 justify-center px-4 md:px-8">
          <h2 className="text-4xl font-extrabold">Hello, It&apos;s Me</h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r bg-clip-text from-sky-500 to-blue-800 text-transparent">
            Sutthiporn Ruangtham
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            And {""}
            <span className="text-sky-400">I&apos;m a {displayText}</span>
            <span className="typing-cursor text-slate-300">|</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl pt-2 font-bold leading-relaxed">
            I&apos;m 23 years old. My nickname is Big. I&apos;m passionate about
            app and web development and enjoy working on projects. I&apos;m
            determined and intended to producing quality work. I&apos;m eager to
            learn new things and grow within an organization. &quot;Some tasks
            may be difficult, but difficult does not mean impossible.&quot;
          </p>
          <div className="flex px-2 mt-6 space-x-4">
            <a
              href="https://github.com/Bigpumpum001"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full p-3 sm:p-2 border-sky-700/90 hover:border-sky-900 border-2 transition-all duration-300"
            >
              <Github className="text-sky-400/90 group-hover:text-sky-700 transition h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/sutthiporn-ruangtham"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full p-3 sm:p-2 border-sky-700/90 hover:border-sky-900 border-2 transition-all duration-300"
            >
              <Linkedin className="text-sky-400/90 group-hover:text-sky-700 transition h-6 w-6 sm:h-8 sm:w-8" />
            </a>
            
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/images/profile/pic-ori-crop.png"
            width={300}
            height={300}
            alt="Picture of author"
            className="rounded-4xl brightness-80 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
