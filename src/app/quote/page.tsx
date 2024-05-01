"use client";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const services = [
  { id: 0, type: "House Wash", value: ["1 story", "2 story", "3 story"] },
  {
    id: 1,
    type: "Paver/Brick wash",
    value: ["Patio", "Retaining Wall", "Driveway", "Sidewalk", "Other"],
  },
];

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    serviceType: "",
    details: "",
    address: "",
    extraNotes: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission
    console.log(formData);
  };
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
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="serviceType"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Service Type:
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.serviceType}
                  onChange={handleChange}
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="details"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Details:
                </label>
                <select
                  id="details"
                  name="details"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.details}
                  onChange={handleChange}
                >
                  {services[Number(formData.serviceType)].value.map(
                    (details, i) => (
                      <option key={`${details}-${i}`} value={details}>
                        {details}
                      </option>
                    )
                  )}
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Extra Details:
                </label>
                <textarea
                  id="extraNotes"
                  name="extraNotes"
                  rows={4}
                  placeholder="Extra Details and Notes"
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={formData.extraNotes}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
