import React from "react";
import Image from "next/image";

export default function Home() {
  const notices = [
    {
      text: "UNIQLO GATEWAY BANGSUE WILL BE CLOSED ON JANUARY 15, 2024. READMORE FOR DETAILS.",
    },
    {
      text: "JOIN UNIQLO'S FREE PRODUCT SAMPLING PROGRAM. GET A CHANCE TO WIN U CREW NECK SHORT SLEEVE T-SHIRT (100 PRIZES), CLICK!",
    },
  ];

  const benefits = [
    {
      image: "/benefits1.jpeg",
      title: "SAME DAY CLICK & COLLECT",
      description:
        "Get order at the store in the same day when select Click & Collect before 11 AM. *Only selected stores",
    },
    {
      image: "/benefits2.jpeg",
      title: "EXTRA SIZES FROM XS - 3XL",
      description:
        "You can find a wide range of extra size from XS - 3XL and 100cm for kids at online store.",
    },
    {
      image: "/benefits3.jpeg",
      title: "CHECK INVENTORY",
      description:
        "Scan barcodes to check your preferred color and size inventory, more product detail, extra size and more.",
    },
    {
      image: "/benefits4.jpeg",
      title: "EARLY ACCESS",
      description:
        "Get early access to new arrivals and special collections. Stay ahead of the fashion trends!",
    },
  ];

  return (
    <>
      <div
        className="snap-y snap-mandatory h-screen no-scrollbar"
        style={{ scrollSnapType: "y mandatory", overflowY: "scroll" }}
      >
        <section className="h-full snap-start">
          <video autoPlay loop muted className="w-screen h-full object-cover">
            <source src="/sample1.mp4" type="video/mp4" />
          </video>
        </section>

        <section className="h-full snap-start">
          <video autoPlay loop muted className="w-screen h-full object-cover">
            <source src="/sample2.mp4" type="video/mp4" />
          </video>
        </section>
      </div>

      <div className="flex flex-col mx-32 my-12">
        <div className="my-6">
          <div className="text-4xl font-extrabold">NOTICE</div>
          <div className="my-4">
            <ul className="flex flex-col gap-1 text-base list-disc">
              {notices.map((notice) => (
                <li>{notice.text}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-6">
          <div className="text-4xl font-extrabold">UNIQLO APP BENEFITS</div>
          <div className="flex flex-row my-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col w-[300px] gap-2">
                <Image
                  src={benefit.image}
                  width={300}
                  height={300}
                  alt={`Benefit ${index + 1}`}
                  className="my-2"
                />
                <div className="text-base font-extrabold">{benefit.title}</div>
                <div className="text-base">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
