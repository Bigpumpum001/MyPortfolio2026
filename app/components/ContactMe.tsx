"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Clipboard, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
function ContactMe() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("sutthiporn.ruan@gmail.com");
    toast.success("Email copied to clipboard!", {
      style: {
        background: "#009966",
        color: "white",
        border: "1px solid #009966",
        fontSize: "15px",
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://formspree.io/f/xkogppbl", {
        email: formData.email,
        message: `Subject: ${formData.subject}\n\nMessage: ${formData.message}`
      });
      toast.success("Message sent successfully! I'll get back to you soon.", {
        style: {
          background: "#009966",
          color: "white",
          border: "1px solid #009966",
          fontSize: "15px",
        },
      });
      
      // Reset form only on success
      setFormData({
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.", {
        style: {
          background: "#e74753",
          color: "white",
          border: "1px solid #e74753",
          fontSize: "15px",
        },
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div id="contact" className="w-full lg:p-6 md:p-8 p-4 py-24 min-h-[70vh] z-10">
        <div className="p-4 md:p-6 lg:p-8 space-y-8 lg:space-y-10 rounded-2xl">
          <div className="flex flex-col items-center justify-center space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r bg-clip-text from-sky-500 to-blue-800 text-transparent">
              Get In Touch
            </h1>

            <div className="flex flex-col justify-center items-center w-full sm:w-3/4 lg:w-1/2 mx-auto space-y-4 sm:space-y-5">
              <p className="text-base sm:text-lg text-center">
                Feel free to contact me directly at
                <button
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors duration-300 text-decoration-2 mx-2"
                >
                  <span className="font-semibold">
                    sutthiporn.ruan@gmail.com
                  </span>
                  <Clipboard className="w-4 h-4" />
                </button>
                or through this form
              </p>

              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 h-12 text-sm sm:text-base md:text-lg bg-slate-500/10 border border-slate-700 placeholder:text-slate-400"
                  required
                />

                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 h-12 text-sm sm:text-base md:text-lg bg-slate-500/10 border border-slate-700 placeholder:text-slate-400"
                  required
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 text-sm sm:text-base md:text-lg min-h-[120px] sm:min-h-[140px] resize-none bg-slate-500/10 border border-slate-700 placeholder:text-slate-400"
                  required
                />

                <Button
                  type="submit"
                  className="w-full px-4 text-base sm:text-lg bg-blue-700/90 hover:bg-blue-600 transition-colors duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
