"use client";
import Image from "next/image";

export default function Quote() {
  return (
    <main className="sm:min-h-[calc(100vh-269px)] min-h-[calc(100vh-248px)] content-center">
      <div className="container mx-auto relative">
        <div className="max-w-md mx-auto bg-white sm:rounded-lg sm:mb-52">
          <div className="p-4">
            <div className="flex justify-center">
              <Image
                src="/vetjetsfull.png"
                alt="VetJets Logo"
                width={350} // adjust as needed
                height={400} // adjust as needed
                priority
              />
            </div>
            <h1 className="text-xl font-bold mb-4 text-gray-700 text-center">
              Request your Quote!
            </h1>
            <p className="text-gray-700 text-sm text-center">
              Fill out the details and we&apos;ll get you to a specialized
              veteran promptly
            </p>
            <iframe
              id="markate-widget-contact-iframe"
              src="https://www.markate.com/public/widget/contact?id=afc94af1422f9ce3a1f2996136b5eb81:52831:59404eb3"
              width="100%"
              height="1800"
              scrolling="no"
              frameBorder="0"
              allowTransparency
              style={{ border: "none", overflow: "hidden" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
