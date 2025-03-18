import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <section className="">
        <div className="flex flex-col items-center bg-black text-white w-screen min-h-screen">
          <h2 className="text-4xl font-bold my-20">WELCOME TO</h2>
          <h1 className="text-8xl font-bold">QUANTALYZE</h1>
          <h3 className="text-3xl font-bold my-20">SOCIAL MEDIA MARKETING</h3>
          <div className="w-full h-auto">
            <Image src="/Hero.png" alt="Hero" width={1920} height={1080} className="w-full h-auto object-contain" />
          </div>
        </div>
      </section>
      <section className="bg-[#F4C430] text-[#111827] flex flex-col items-center py-48 relative">
        <div className="grid grid-cols-5 w-full px-20 min-h-[400px]">
          <div className="col-span-4">
            <p className="text-xl mb-8">
              At Quantalyze, we are storytellers, strategists, and digital innovators passionate about helping brands thrive in the ever-evolving world of social media.
            </p>
            <p className="text-xl">
              Our mission is to connect brands with their audiences in meaningful ways, creating authentic and impactful digital experiences that drive engagement, loyalty, and growth.
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <h3 className="text-9xl font-bold text-[#111827] transform rotate-90 origin-center whitespace-pre">WHO WE{'\n'}ARE</h3>
          </div>
        </div>
        <div className="mt-40 w-full">
          <Image src="/ads.jpg" alt="Ads" width={1920} height={1080} className="w-full h-auto object-contain" />
        </div>
      </section>
    </>
  );
}