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
            <p className="text-xl mb-16 w-9/12">
              At Quantalyze, we are storytellers, strategists, and digital innovators passionate about helping brands thrive in the ever-evolving world of social media.
            </p>
            <p className="text-xl mb-16 w-9/12">
              Our mission is to connect brands with their audiences in meaningful ways, creating authentic and impactful digital experiences that drive engagement, loyalty, and growth.
            </p>
          </div>
          <div className="col-span-1 flex justify-center items-center">
            <h3 className="text-9xl font-bold text-[#111827] transform rotate-90 origin-center whitespace-pre">WHO WE{'\n'}ARE</h3>
          </div>
        </div>
        <div className="mt-40 w-10/12 px-20">
          <Image src="/ads.jpg" alt="Ads" width={1920} height={1080} className="w-full h-auto object-contain" />
        </div>
      </section>
      <section className="bg-white text-black flex flex-col items-center py-20">
        <h2 className="text-5xl font-bold mb-10">OUR SERVICES</h2>
        <div className="max-w-4xl text-left">
          <p className="text-2xl mb-8"><strong>SOCIAL MEDIA STRATEGY:</strong> CUSTOMIZED PLANS FOR CLIENTS TO GROW AND ENGAGE THEIR ONLINE COMMUNITY.</p>
          <p className="text-2xl mb-8"><strong>CONTENT CREATION:</strong> GRAPHIC DESIGN, COPYWRITING, PHOTOGRAPHY, AND VIDEO PRODUCTION.</p>
          <p className="text-2xl mb-8"><strong>PAID ADVERTISING:</strong> FACEBOOK ADS, INSTAGRAM ADS, GOOGLE ADS (SEARCH, DISPLAY, SHOPPING, ETC).</p>
          <p className="text-2xl mb-8"><strong>INFLUENCER MARKETING:</strong> COLLABORATIONS WITH INFLUENCERS TO BOOST BRAND VISIBILITY.</p>
          <p className="text-2xl mb-8"><strong>ANALYTICS & REPORTING:</strong> DETAILED ANALYSIS OF CAMPAIGN PERFORMANCE AND REGULAR REPORTING.</p>
          <p className="text-2xl mb-8"><strong>PINTEREST OPTIMIZATION & STRATEGY:</strong> DETAILED ANALYSIS OF CAMPAIGN PERFORMANCE AND REGULAR REPORTING.</p>
        </div>
        <div className="mt-10 w-10/12 px-20">
          <Image src="/services.jpeg" alt="Services" width={1920} height={1080} className="w-full h-auto object-contain" />
        </div>
      </section>
      <section className="bg-[#FFD700] text-black flex flex-col items-center py-20">
        <h2 className="text-5xl font-bold mb-10">WHY CHOOSE US</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl text-center mb-10">
          <div className="p-6 bg-white rounded-full shadow-md border-2 border-black"><strong>5+ YEARS OF EXPERIENCE</strong></div>
          <div className="p-6 bg-white rounded-full shadow-md border-2 border-black"><strong>SOCIAL MEDIA ANALYTICS</strong></div>
          <div className="p-6 bg-white rounded-full shadow-md border-2 border-black"><strong>PERFORMANCE MARKETING</strong></div>
          <div className="p-6 bg-white rounded-full shadow-md border-2 border-black"><strong>SEARCH ENGINE OPTIMIZATION</strong></div>
          <div className="p-6 bg-white rounded-full shadow-md border-2 border-black"><strong>CONTENT CREATION</strong></div>
          <div className="p-6 bg-white rounded-full shadow-md border-2 border-black"><strong>INFLUENCER PARTNERSHIPS</strong></div>
          <div className="p-6 bg-white rounded-full shadow-md border-2 border-black"><strong>COMMUNITY MANAGEMENT</strong></div>
          <div className="p-6 bg-white rounded-full shadow-md border-2 border-black"><strong>BRAND STORYTELLING</strong></div>
        </div>
        <div className="max-w-4xl text-left text-xl">
          <p className="mb-4">
            Choose us to experience a partnership that’s as committed to <strong>your brand’s success</strong> as you are.
          </p>
          <p className="mb-4">
            Since we recognize that each brand has its own distinct identity and goals. Our approach is rooted in tailoring <strong>strategies</strong> that not only align with your vision but amplify it.
          </p>
          <p>
            By leveraging the latest trends, data insights, and creative innovation, we ensure to convert your <strong>social presence</strong> into <strong>measurable results</strong>.
          </p>
        </div>
      </section>
    </>
  );
}