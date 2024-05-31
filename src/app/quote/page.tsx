"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

const services = [
  { id: 0, type: "House Wash (VINYL/BRICK/STUCCO/SHAKES)" },
  { id: 1, type: "Roof Wash (Asphalt/Tile/Slate)" },
  { id: 2, type: "Concrete Wash (Patio/Driveway/Sidewalk)" },
  { id: 3, type: "Paver Wash (Patio/Driveway/Sidewalk)" },
  { id: 4, type: "Deck Wash (Wood/Trex)" },
  { id: 5, type: "Fence Wash (Vinyl/Wood)" },
  { id: 6, type: "Window Cleaning" },
  { id: 7, type: "Other" },
];

type FormDataState = {
  name: string;
  serviceType: number[];
  address: string;
  extraNotes: string;
  dateTime: Date;
};

const Loader = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
  </div>
);

export default function Quote() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    serviceType: [0],
    address: "",
    extraNotes: "",
    dateTime: new Date(),
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, checked, type } = e.target as HTMLInputElement;
    if (type === "checkbox" && name === "serviceType") {
      let newServices;
      if (checked) {
        // If the checkbox is checked, add the value to the array
        newServices = [...formData.serviceType, parseInt(value)];
      } else {
        // If the checkbox is unchecked, remove the value from the array
        newServices = formData.serviceType.filter(
          (item) => item !== parseInt(value)
        );
      }
      setFormData({
        ...formData,
        serviceType: newServices,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const formBuilder = () => {
    const finalForm = new FormData();
    finalForm.append("name", formData.name);
    finalForm.append("address", formData.address);
    finalForm.append("dateTime", formData.dateTime.toISOString());
    finalForm.append(
      "serviceType",
      formData.serviceType.map((id) => services[id].type).join(", ") || "None"
    );
    finalForm.append("extraNotes", formData.extraNotes);

    return finalForm;
  };

  const sendEmail = async () => {
    setLoading(true);
    try {
      await fetch(`/api/send-quote`, {
        method: "POST",
        body: formBuilder(),
        redirect: "follow",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission
    console.log(formData);
    sendEmail();
    // router.push("/thankyou");
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
            {loading ? (
              <Loader />
            ) : (
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
                    placeholder="Your Full Name"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="address"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Address:
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Your Address"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="quoteDate"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Quote Date and Time:
                  </label>
                  <input
                    aria-label="Date and time"
                    type="datetime-local"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={handleChange}
                    value={formData.dateTime.toISOString().slice(0, 16)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="serviceType"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Services:
                  </label>
                  {services.map((service) => (
                    <div key={service.id}>
                      <input
                        type="checkbox"
                        id={service.id.toString()}
                        name="serviceType"
                        value={service.id}
                        className="mr-2 leading-tight"
                        checked={formData.serviceType
                          .toString()
                          .includes(service.id.toString())}
                        onChange={handleChange}
                      />
                      <label
                        htmlFor={service.id.toString()}
                        className="text-gray-700"
                      >
                        {service.type}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Additional Notes:
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
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
