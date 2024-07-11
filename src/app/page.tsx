"use client";
import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import Image from "next/image";
import Link from "next/link";

const desktopImages = [
  { src: "/IMG_5153.webp", title: "House" },
  { src: "/IMG_5156.webp", title: "House" },
  { src: "/221A3ACF-6A5E-4389-A557-D105842E77AD.webp", title: "Concrete" },
  { src: "/8BBC1AC0-BECA-4C89-B097-03E7A2DA364E.webp", title: "Concrete" },
  { src: "/IMG_5086.webp", title: "Pavers" },
  { src: "/IMG_5107.webp", title: "Pavers" },
  { src: "/IMG_4832.webp", title: "Fences" },
  { src: "/IMG_4836.webp", title: "Fences" },
  { src: "/IMG_6817.webp", title: "Roof" },
  { src: "/IMG_6816.webp", title: "Roof" },
];

const mobileImages = {
  before: [
    { src: "/IMG_5153.webp", title: "House" },
    { src: "/221A3ACF-6A5E-4389-A557-D105842E77AD.webp", title: "Concrete" },
    { src: "/IMG_5086.webp", title: "Pavers" },
    { src: "/IMG_4832.webp", title: "Fences" },
    { src: "/IMG_6817.webp", title: "Roof" },
  ],
  after: [
    { src: "/IMG_5156.webp", title: "House" },
    { src: "/8BBC1AC0-BECA-4C89-B097-03E7A2DA364E.webp", title: "Concrete" },
    { src: "/IMG_5107.webp", title: "Pavers" },
    { src: "/IMG_4836.webp", title: "Fences" },
    { src: "/IMG_6816.webp", title: "Roof" },
  ],
};
const services = [
  "HOUSE WASHES",
  "PATIO WASH",
  "WALKWAY WASHES",
  "DECK WASHES",
  "ROOF WASH",
  "CONCRETE WASHES",
  "BRICK WASHES",
  "PAVER WASHES",
  "WOOD WASHES AND RESTORATION",
  "STONE WASHES",
  "RUST RESTORATION",
  "WINDOW CLEANING",
  "DRIVEWAY CLEANING",
  "RESANDING",
  "AND MORE!",
];

export default function Home() {
  return (
    <main className="flex-grow">
      <div className="hidden sm:grid sm:grid-cols-2 gap-4 p-4">
        <div className="text-center mb-4 bg-blue-500 text-white rounded-full py-2 px-4 sm:inline-block text-xl">
          Before
        </div>
        <div className="text-center mb-4 bg-blue-500 text-white rounded-full py-2 px-4 sm:inline-block text-xl">
          After
        </div>
      </div>
      <div className="hidden content-center relative overflow-auto sm:grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        {desktopImages.map(({ src, title }, index) => (
          <div key={index} className="flex flex-col items-center h-full">
            <div
              className={`text-lg font-bold mb-2 w-full text-left ${
                index % 2 === 0 ? "" : "invisible"
              }`}
            >
              <span className="border border-white bg-gray-600 px-5">
                {title}
              </span>
            </div>
            <div className="mx-auto">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={500}
                height={300}
                className="rounded-lg hover:opacity-75"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="sm:hidden grid grid-cols-1 gap-4 p-4">
        <div className="text-center mb-4 bg-blue-500 text-white rounded-full py-2 px-4 inline-block text-xl">
          Before
        </div>
      </div>
      <div className="content-center relative overflow-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:hidden">
        {mobileImages.before.map(({ src, title }, index) => (
          <div key={index} className="flex flex-col items-center h-full">
            <div className="text-lg font-bold mb-2 text-left w-full">
              <span className="border border-white bg-gray-600 px-5">
                {title}
              </span>
            </div>
            <div className="mx-auto">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={500}
                height={300}
                className="rounded-lg hover:opacity-75"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="sm:hidden grid grid-cols-1 gap-4 p-4">
        <div className="text-center mb-4 bg-blue-500 text-white rounded-full py-2 px-4 inline-block text-xl">
          After
        </div>
      </div>
      <div className="content-center relative overflow-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4 sm:hidden">
        {mobileImages.after.map(({ src, title }, index) => (
          <div key={index} className="flex flex-col items-center h-full">
            <div className="text-lg font-bold mb-2 text-left w-full">
              <span className="border border-white bg-gray-600 px-5">
                {title}
              </span>
            </div>
            <div className="mx-auto">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                width={500}
                height={300}
                className="rounded-lg hover:opacity-75"
              />
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-3xl font-bold mb-4 text-center pt-5">Services</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-slate-600 shadow rounded p-4 m-2 col-span-1 ${
              index % 4 === 0 ? "sm:col-span-2 md:col-span-1" : ""
            } ${index % 7 === 0 ? "lg:col-span-2" : ""} ${
              index % 9 === 0 ? "xl:col-span-3" : ""
            } hover:bg-slate-700`}
          >
            <h3 className="text-lg font-semibold">{service}</h3>
          </div>
        ))}
      </div>
      <div className="bg-blue-500 text-white text-center p-4 leading-relaxed font-semibold rounded-lg shadow-md mt-5">
        <p>From house washes to resanding, we take care of it all!</p>
        <p>Your satisfaction is our number 1 priority!</p>
        <Link
          href="/quote"
          className="mt-4 inline-block bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-100 transition-colors cursor-pointer"
        >
          Request a Free Quote Today!
        </Link>
      </div>
      <div className="fixed bg-red-500 z-50 py-1 px-4 border-black border right-0 bottom-40 sm:right-auto sm:bottom-auto sm:top-0 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-0 sm:max-w-xs">
        <a
          href="tel:+12014770965"
          onClick={() =>
            sendGAEvent({ event: "conversion", value: "tel:+12014770965" })
          }
        >
          201-477-0965
        </a>
        <div>Call today!</div>
      </div>
      <GoogleAnalytics gaId="AW-10945209180/QpeuCN3Rh6EZENzGiuMo" />
    </main>
  );
}
