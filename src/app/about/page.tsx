"use client";

import Image from "next/image";

const Loader = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

export default function Quote() {
  return (
    <main className="sm:min-h-[calc(100vh-269px)] min-h-[calc(100vh-248px)]">
      <h1 className="text-4xl text-center font-bold">About Us</h1>
      <div className="container mx-auto relative flex mt-10 align-middle">
        <div className="w-1/2">
          <Image
            src="/IMG_4581.webp"
            alt="Vet Jets"
            width={350} // adjust as needed
            height={400} // adjust as needed
            priority
            className="rounded-lg mx-auto"
          />
        </div>
        <div className="w-1/2">
          <div className="text-center mb-4 bg-blue-500 text-white rounded-full py-2 px-4 inline-block">
            Owner/CEO
          </div>
          <p className="px-4">
            Hello I&apos;m Chris and this is Vet Jets Power Washing. We are a
            Veteran-Owned and based company ran by your local Contracted Army
            National Guardsmen Combat Medic. We&apos;re here not just to
            protect, but to serve you and give you satisfaction of having a
            sparkling new restored home! Your satisfaction is our #1 priority
            and our plan is to clean up the neighborhoods one house at a time.
            Our Before and Afters speak for themselves and we&apos;d love to
            include YOU in our gallery. Our reviews are known for our
            reliability and quality of work. Go ahead and request a quote for
            your home today!
          </p>
        </div>
      </div>
    </main>
  );
}
