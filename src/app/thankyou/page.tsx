import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-248px)] content-center">
      <div className="flex justify-center items-center overflow-hidden justify-items-center sm:grid sm:bg-responsive__main1">
        <Image
          src="/IMG_5107.jpeg"
          alt="VetJets Power Washing"
          width={1920}
          height={1080}
        />
        <p className="absolute inset-0 flex items-center justify-center text-center text-white text-lg sm:text-2xl">
          Thank you for request! <br />
          You&apos;ll hear from us shortly...
        </p>
      </div>
    </main>
  );
}
