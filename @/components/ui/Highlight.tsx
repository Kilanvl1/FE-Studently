import Image from "next/image";
type HighlightProps = {
  className?: string;
  image: any;
  title: string;
  subTitle: string;
  alt: string;
};

export const Highlight = ({
  className,
  image,
  title,
  subTitle,
  alt,
}: HighlightProps) => {
  return (
    <div className="flex flex-col rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#E7F5F6] py-5 px-3 2xl:flex-row 2xl:py-12 2xl:px-10 2xl:gap-x-20 2xl:justify-between max-w-96">
      <Image
        src={image}
        alt={alt}
        className="mb-4 2xl:order-last 2xl:h-10 2xl:w-10"
      />
      <div>
        <h1 className="font-bold mb-2">{title}</h1>
        <p className="font-normal text-sm">{subTitle}</p>
      </div>
    </div>
  );
};
