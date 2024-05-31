"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window?.scrollY > 50);
    };

    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 block z-50">
        <div className="flex items-center justify-between p-5 bg-transparent flex-row-reverse sm:flex-row">
          <div
            className="px-4 cursor-pointer md:hidden"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`w-6 h-6 ${isScrolled ? "text-black" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </div>
          <div className="hidden md:block">
            <Image
              className="relative"
              src="/vetjetslogo.png"
              alt="Vet Jets Logo"
              width={177}
              height={71}
              priority
            />
          </div>
          <div className="block md:hidden">
            <Image
              className="relative"
              src="/vetjetslogo.png"
              alt="Vet Jets Logo"
              width={122}
              height={50}
              priority
            />
          </div>
          <div className="hidden sm:flex">
            <Link href="/">
              <div className="p-2">Home</div>
            </Link>
            <Link href="/about">
              <div className="p-2">About</div>
            </Link>
            <Link href="/quote">
              <div className="p-2">Quote</div>
            </Link>
          </div>
        </div>
      </nav>
      <div
        ref={navRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "" : "hidden"
        } fixed top-0 left-0 w-screen h-screen bg-gray-700 text-white flex flex-col items-center justify-center z-10`}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Link href="/">
            <div className="p-2" onClick={() => setIsOpen(!isOpen)}>
              Home
            </div>
          </Link>
          <Link href="/about">
            <div className="p-2" onClick={() => setIsOpen(!isOpen)}>
              About
            </div>
          </Link>
          <Link href="/quote">
            <div className="p-2" onClick={() => setIsOpen(!isOpen)}>
              Quote
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
