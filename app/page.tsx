import React from "react";

export default function Home() {
  return (
    <main className="overflow-hidden w-screen pt-20">
      <video autoPlay loop muted className="w-full h-full">
        <source src="/sample1.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
