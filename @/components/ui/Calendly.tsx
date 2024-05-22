"use client";
import { Suspense, useEffect } from "react";

export const Calendly = () => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    head.appendChild(script);
  }, []);
  return (
    <Suspense>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/studently-nl/consultation-meeting"
        style={{ minWidth: "320px", height: "580px" }}
      ></div>
    </Suspense>
  );
};
