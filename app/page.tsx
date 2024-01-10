"use client";
import React from "react";
import Image from "next/image";

export default function Home() {
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
              <li>
                UNIQLO GATEWAY BANGSUE WILL BE CLOSED ON JANUARY 15, 2024. READ
                MORE FOR DETAILS.
              </li>
              <li>
                JOIN UNIQLO'S FREE PRODUCT SAMPLING PROGRAM. GET A CHANCE TO WIN
                U CREW NECK SHORT SLEEVE T-SHIRT (100 PRIZES), CLICK!
              </li>
            </ul>
          </div>
        </div>

        <div className="my-6">
          <div className="text-4xl font-extrabold">UNIQLO APP BENEFITS</div>
          <div className="flex flex-row my-4">
            <div className="flex flex-col w-[300px] gap-2">
              <Image
                src="/benefits1.jpeg"
                width={300}
                height={300}
                alt="Benefits1"
                className="my-2"
              />
              <div className="text-base font-extrabold">
                SAME DAY CLICK & COLLECT
              </div>
              <div className="text-sm">
                Be the first to know when styles you want are available by
                becoming an app member and turn on notification.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
