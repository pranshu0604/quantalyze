"use client"; 

import Image from "next/image";
import React from "react";
import { Sarabun, Kodchasan, Poppins } from "next/font/google";
import { Search, Edit, DollarSign, Users, BarChart2, Share2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaLinkedinIn, FaPinterest } from "react-icons/fa";

const sarabun = Sarabun({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "400"
});

const kodchasan = Kodchasan({
  variable: "--font-alata",
  subsets: ["latin"],
  weight: "400"
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "500"
});

export default function Home() {
  return (
    <>
      <section className="">
        <div className="flex flex-col items-center bg-black text-white w-screen min-h-screen">
          <h2 className={`text-5xl font-bold my-20 ${sarabun.className}`}>WELCOME TO</h2>
          <h1 className={`text-9xl font-bold ${kodchasan.className}`}>QUANTALYZE</h1>
          <h3 className={`text-5xl font-bold my-20 ${sarabun.className}`}>SOCIAL MEDIA MARKETING</h3>
          <div className="w-full h-auto">
            <Image src="/Hero.png" alt="Hero" width={1920} height={1080} className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
      <section className="bg-[#F4C430] text-[#111827] flex flex-col items-center py-48 relative">
        <div className="px-44 grid grid-cols-5 w-full min-h-[400px]">
          <div className={`col-span-4 text-2xl ${poppins.className}`}>
            <p className="mb-16 w-10/12">
              At Quantalyze, we are storytellers, strategists, and digital innovators passionate about helping brands thrive in the ever-evolving world of social media.
            </p>
            <p className="mb-16 w-10/12">
              Our mission is to connect brands with their audiences in meaningful ways, creating authentic and impactful digital experiences that drive engagement, loyalty, and growth.
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center -ml-10">
            <h3 className="text-9xl font-bold text-[#111827] transform rotate-90 origin-center whitespace-pre">WHO WE{'\n'}ARE</h3>
          </div>
        </div>
        <div className="mt-44 w-11/12 px-20">
          <div className="border-2 border-black p-[3px] rounded-2xl">
            <Image src="/ads.jpg" alt="Ads" width={1920} height={1080} className="w-full h-auto object-contain rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="bg-white text-black flex flex-col items-center py-20">
        <h2 className="text-9xl font-bold mb-20">OUR SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
          {[
            { icon: Search, title: "SOCIAL MEDIA STRATEGY", color: "bg-[#FFD700]" },
            { icon: Edit, title: "CONTENT CREATION", color: "bg-[#E7E5DF]" },
            { icon: DollarSign, title: "PAID ADVERTISING", color: "bg-[#E7E5DF]" },
            { icon: Users, title: "INFLUENCER MARKETING", color: "bg-[#FFD700]" },
            { icon: BarChart2, title: "ANALYTICS & REPORTING", color: "bg-[#FFD700]" },
            { icon: Share2, title: "PINTEREST OPTIMIZATION", color: "bg-[#E7E5DF]" },
            { icon: Search, title: "SEARCH ENGINE OPTIMIZATION", color: "bg-[#E7E5DF]" },
            { icon: MessageSquare, title: "COMMUNITY MANAGEMENT", color: "bg-[#FFD700]" },
          ].map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group relative cursor-pointer">
                <div className={`absolute inset-0 ${service.color} rounded-3xl transform -rotate-6 transition-transform group-hover:rotate-0`}></div>
                <div className="relative p-8 bg-white border-2 border-black rounded-3xl shadow-lg transform transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <Icon className="w-10 h-10" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-20 w-10/12 px-20">
          <div className="border-2 rounded-2xl p-[3px]">
            <Image src="/services.jpeg" alt="Services" width={1920} height={1080} className="w-full h-auto object-contain rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="bg-[#FFD700] text-black flex flex-col items-center py-20">
        <h2 className="text-9xl font-bold mb-20">WHY CHOOSE US</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-16 text-center mb-10 text-xl">
          <div className="p-10 bg-[#E7E5DF] rounded-full shadow-md border-2 border-black"><strong>5+ YEARS OF EXPERIENCE</strong></div>
          <div className="p-10 bg-[#E7E5DF] rounded-full shadow-md border-2 border-black"><strong>SOCIAL MEDIA ANALYTICS</strong></div>
          <div className="p-10 bg-[#E7E5DF] rounded-full shadow-md border-2 border-black"><strong>PERFORMANCE MARKETING</strong></div>
          <div className="p-10 bg-[#E7E5DF] rounded-full shadow-md border-2 border-black"><strong>SEARCH ENGINE OPTIMIZATION</strong></div>
          <div className="p-10 bg-[#E7E5DF] rounded-full shadow-md border-2 border-black"><strong>CONTENT CREATION</strong></div>
          <div className="p-10 bg-[#E7E5DF] rounded-full shadow-md border-2 border-black"><strong>INFLUENCER PARTNERSHIPS</strong></div>
          <div className="p-10 bg-[#E7E5DF] rounded-full shadow-md border-2 border-black"><strong>COMMUNITY MANAGEMENT</strong></div>
          <div className="p-10 bg-[#E7E5DF] rounded-full shadow-md border-2 border-black"><strong>BRAND STORYTELLING</strong></div>
        </div>
        <div className={`max-w-5xl text-left text-2xl ${poppins.className}`}>
          <p className="mb-4">
            Choose us to experience a partnership that&apos;s as committed to <strong>your brand&apos;s success</strong> as you are.
          </p>
          <p className="mb-4">
            Since we recognize that each brand has its own distinct identity and goals. Our approach is rooted in tailoring <strong>strategies</strong> that not only align with your vision but amplify it.
          </p>
          <p>
            By leveraging the latest trends, data insights, and creative innovation, we ensure to convert your <strong>social presence</strong> into <strong>measurable results</strong>.
          </p>
        </div>
      </section>
      <section className="bg-white text-black flex flex-col items-center py-20 overflow-hidden">
        <h2 className="text-9xl text-right mx-72 font-bold mb-10">BRANDS WE WORKED WITH</h2>
        
        {/* First row - scrolling left to right */}
        <div className="w-full relative overflow-hidden py-8">
          <motion.div 
            className="flex"
            animate={{ x: [0, -1500] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {Array.from({ length: 26 }, (_, i) => (
              <div key={i} className="flex-shrink-0 mx-6">
                <Image 
                  src={`/companies/${(i % 13) + 1}.jpeg`} 
                  alt={`Company ${(i % 13) + 1}`} 
                  width={180}  // Increased from 120
                  height={180}  // Increased from 120
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        {/* Second row - scrolling right to left */}
        <div className="w-full relative overflow-hidden py-8">
          <motion.div 
            className="flex"
            animate={{ x: [-1500, 0] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {Array.from({ length: 26 }, (_, i) => (
              <div key={i + 26} className="flex-shrink-0 mx-6">
                <Image 
                  src={`/companies/${(i % 13) + 14}.jpeg`} 
                  alt={`Company ${(i % 13) + 14}`} 
                  width={180}  // Increased from 120
                  height={180}  // Increased from 120
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="bg-white text-black flex flex-col items-center py-20">
        <div className="w-3/4 flex justify-center mb-10">
          <Image src="/getintouch.png" alt="Get in Touch" width={1920} height={1080} className="w-full h-auto object-contain" />
        </div>
        <div className="w-full text-2xl flex flex-col items-center space-y-4">
          <div className="bg-[#E7E5DF] text-center py-8 px-8 border-2 border-black w-3/4">
            CONTACTUS@QUANTALYZEMARKETER.COM
          </div>
          <div className="bg-[#E7E5DF] text-center py-8 px-8 border-2 border-black w-3/4">
            +91-9202509190
          </div>
        </div>
        
        {/* Social Media Links */}
        <div className="flex flex-row items-center justify-center space-x-8 mt-10">
          <a href="https://www.instagram.com/quantalyze_marketer?igsh=NTFnbjg3cjBudWtq" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 bg-[#E7E5DF] rounded-full hover:bg-[#FFD700] transition-colors duration-300">
            <FaInstagram size={32} />
          </a>
          
          <a href="https://www.facebook.com/share/1Hh9De7gfW/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 bg-[#E7E5DF] rounded-full hover:bg-[#FFD700] transition-colors duration-300">
            <FaFacebook size={32} />
          </a>
          
          <a href="https://www.linkedin.com/in/abhay-raj-a78210233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 bg-[#E7E5DF] rounded-full hover:bg-[#FFD700] transition-colors duration-300">
            <FaLinkedinIn size={32} />
          </a>
          
          <a href="https://pin.it/59YL9gBeo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-4 bg-[#E7E5DF] rounded-full hover:bg-[#FFD700] transition-colors duration-300">
            <FaPinterest size={32} />
          </a>
        </div>
        
        <div className="mt-[350px]">
          <Image src="/quantalyze.png" alt="Quantalyze" width={1920} height={1080} className="w-60 h-auto object-contain" />
        </div>
        <div className="text-center mt-10 text-2xl">
          <p>LEVEL UP YOUR BRAND&apos;S SOCIAL MEDIA GAME!</p>
          <p>CONNECT WITH US TODAY AND LET&apos;S CREATE A WINNING STRATEGY TOGETHER.</p>
        </div>
      </section>
    </>
  );
}