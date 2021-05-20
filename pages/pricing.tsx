import Link from "next/link";
import React from "react";

export interface PricingProps {}

const Pricing: React.FC<PricingProps> = () => {
  return (
    <section>
      <div className="container px-5 py-12 mx-auto lg:px-20">
        <div className="flex flex-col flex-wrap pb-6 mb-12 text-black ">
          <h1 className="mb-12 text-3xl font-extrabold text-black">Pricing</h1>
          <p className="text-base leading-relaxed font-semibold">
            Want a custom solution?
          </p>
        </div>
        <div className="flex flex-wrap items-end justify-start w-full transition duration-500 ease-in-out transform bg-white border-2 border-gray-600 rounded-lg hover:border-white ">
          <div className="w-full xl:w-1/4 md:w-1/4">
            <div className="relative flex flex-col h-full p-8 ">
              <h2 className="mb-4 font-semibold tracking-widest text-black uppercase text-2xl ">
                The Hobbyist
              </h2>
            </div>
          </div>
          <div className="w-full xl:w-1/4 md:w-1/4 lg:ml-auto">
            <div className="relative flex flex-col h-full p-8">
              <h1 className="flex items-end mx-auto text-3xl font-black leading-none text-black ">
                <span>FREE</span>
              </h1>
              <Link href="/">
                <button className="w-full px-4 py-2 mx-auto mt-3 text-black transition duration-500 ease-in-out transform border border-gray-900 rounded-lg text-md hover:bg-gray-900 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 focus:border-gray-700 focus:bg-gray-800 hover:text-white">
                  {" "}
                  Use Now
                </button>
              </Link>
              <p className="mx-auto mt-6 text-xs text-black">
                Forever free for non commercial use
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-start w-full mt-10 transition duration-500 ease-in-out transform bg-white border-2 border-gray-600 rounded-lg hover:border-white ">
          <div className="w-full xl:w-1/4 md:w-1/4">
            <div className="relative flex flex-col h-full p-8 ">
              <h2 className="mb-4 font-semibold tracking-widest text-black uppercase text-2xl">
                The Maestro
              </h2>
            </div>
          </div>
          <div className="w-full xl:w-1/4 md:w-1/4 lg:ml-auto">
            <div className="relative flex flex-col h-full p-8">
              <h1 className="flex items-end mx-auto text-3xl font-black leading-none text-black ">
                <span>Ask for a quote </span>
              </h1>
              <a href="mailto:contact@sagnikbiswas.tech?subject=Smallen%20Enquiry">
                <button className="w-full px-4 py-2 mx-auto mt-3 text-blue-100 transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md items-centerw-full text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800 ">
                  Contact
                </button>
              </a>
              <p className="mx-auto mt-6 text-xs text-black">
                One time payment for a custom solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
