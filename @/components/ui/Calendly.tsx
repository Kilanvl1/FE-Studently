"use client";
import { useEffect } from "react";

import { updateProfile } from "@/API/profile";

declare global {
  interface Window {
    Calendly: any;
  }
}

export type CalendlyComponentProps = { id: number };

// Calendly docs aren't great so I found this stack over flow link helpful
// https://stackoverflow.com/questions/72316716/embed-calendly-script-in-nextjs
export const CalendlyComponent = ({ id }: CalendlyComponentProps) => {
  let isFirstRender = true;
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;

      const head = document.querySelector("head");
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";

      script.onload = () => {
        // Add event listener for successful bookings
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/studently-nl/consultation-meeting",
          parentElement: document.getElementById("calendly-inline-widget"),
          prefill: {},
          utm: {},
        });

        window.addEventListener("message", (e) => {
          if (e.data.event && e.data.event.indexOf("calendly") === 0) {
            if (e.data.event === "calendly.event_scheduled") {
              updateProfile(id, { has_booked_appointment: true });
            }
          }
        });
      };

      head.appendChild(script);
    }
  }, [id]);

  return (
    <>
      <div
        id="calendly-inline-widget"
        style={{ minWidth: "320px", height: "580px" }}
      ></div>
    </>
  );
};
