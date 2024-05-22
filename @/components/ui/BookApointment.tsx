import { Calendly } from "./Calendly";

export const BookApointment = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="font-bold text-2xl">Ready to get started?</h1>
      <p className="font-normal">
        Schedule your first session with us on Calendly to tailor your service
        and discuss your needs.
      </p>
      <Calendly />
    </div>
  );
};
