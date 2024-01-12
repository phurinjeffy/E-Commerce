"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const Path = () => {
  const pathname = usePathname();

  const formatPath = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    return segments.map((segment, index) => (
      <React.Fragment key={index}>
        <div className="text-gray-500 uppercase text-sm font-normal inline">
          {" / "}
        </div>
        <Link
          className="text-gray-500 uppercase text-sm font-normal hover:underline"
          href={`/${segments.slice(0, index + 1).join("/")}`}
        >
          {segment}
        </Link>
      </React.Fragment>
    ));
  };

  return (
    <div className="mb-2 my-8">
      <Link
        className="text-gray-500 uppercase text-sm font-normal hover:underline"
        href="/"
      >
        HOME PAGE
      </Link>
      {formatPath(pathname)}
    </div>
  );
};

export default Path;
