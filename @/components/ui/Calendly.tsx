"use client";
import { useState, useEffect } from "react";
import { Skeleton } from "./skeleton";

export const Calendly = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";

    script.onload = () => {
      setLoading(false);
    };
    head.appendChild(script);
  }, []);
  return (
    <>
      {loading && <CalendlySkeleton />}
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/studently-nl/consultation-meeting"
        style={{ minWidth: "320px", height: "580px" }}
      ></div>
    </>
  );
};

const CalendlySkeleton = () => {
  return <Skeleton className="h-[580px] w-[320px] bg-gray-400 mx-auto" />;
};
