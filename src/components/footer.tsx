"use client";
import { sendGAEvent } from "@next/third-parties/google";

export default function Footer() {
  return (
    <footer className="p-5 bg-black bottom-0 left-0 w-full relative">
      <div className="flex">
        <div className="flex-1">
          <p className="text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02z"></path>
            </svg>
            <a
              className="m-0 max-w-[30ch] text-sm opacity-50"
              href="tel:+12014770965"
              onClick={() =>
                sendGAEvent({ event: "conversion", value: "tel:+12014770965" })
              }
            >
              201-477-0965
            </a>
          </p>
          <p className="text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 6l8 5 8-5M4 6v10a2 2 0 002 2h12a2 2 0 002-2V6m0 0l-8 5-8-5"
              />
            </svg>
            <a
              className="m-0 max-w-[30ch] text-sm opacity-50"
              href="mailto:purepressurewashingllc1@gmail.com"
            >
              purepressurewashingllc1@gmail.com
            </a>
          </p>
        </div>
        <div className="flex">
          <p className="text-left">
            <a
              href="https://www.facebook.com/VetJetsPowerWashing"
              target="_blank"
            >
              <svg
                className="h-6 w-6 inline-block mr-1"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path>
              </svg>
            </a>
          </p>
          <p className="text-left">
            <a
              href="https://www.instagram.com/vetjetspowerwashing/"
              target="_blank"
            >
              <svg
                className="h-6 w-6 inline-block mr-1"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
              </svg>
            </a>
          </p>
        </div>
      </div>
      <br />
      <p className="font-mono text-center mt-5">
        &copy; {new Date().getFullYear()} Pure Pressure Washing LLC
      </p>
    </footer>
  );
}
