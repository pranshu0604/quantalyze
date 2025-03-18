import Image from "next/image";
import React from "react";

export default function Home() {
  return (
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
  );
}