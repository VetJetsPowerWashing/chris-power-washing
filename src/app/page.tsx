"use client";
import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-248px)] content-center">
      <div className="flex justify-center items-center overflow-hidden justify-items-center sm:grid sm:bg-responsive__main1">
        <div className="flex flex-col items-center fixed top-28 md:top-8 bg-red-500 z-50 py-1 px-4 border-black border">
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
        <video
          controls
          className="max-w-full sm:w-1/3 lg:w-1/3 xl:w-1/3 object-contain mx-auto"
          poster="/cover.jpeg"
        >
          <source src="/IMG_0902.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <GoogleAnalytics gaId="AW-10945209180/QpeuCN3Rh6EZENzGiuMo" />
    </main>
  );
}
