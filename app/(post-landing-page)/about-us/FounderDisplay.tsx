import { Avatar, AvatarImage, AvatarFallback } from "app/_components/ui/avatar";

export type FounderDisplayProps = {
  avatarImage: string;
  founderName: string;
  properties: PropertyProps[];
};

export const FounderDisplay = ({
  avatarImage,
  founderName,
  properties,
}: FounderDisplayProps) => {
  return (
    <div className="rounded-xl bg-gradient-to-b from-[#FFFFFF] to-[#E7F5F6] py-5 px-3 max-w-96">
      <div className="flex items-center gap-x-3 mb-3 2xl:items-start">
        <Avatar className="2xl:w-32 2xl:h-32 w-16 h-16">
          <AvatarImage src={avatarImage} alt={founderName} />
          <AvatarFallback>{founderName}</AvatarFallback>
        </Avatar>
        <h3 className="font-bold text-xl">{founderName}</h3>
      </div>
      {properties.map((property) => (
        <Property key={property.description} {...property} />
      ))}
    </div>
  );
};

type PropertyProps = {
  icon: React.ReactNode;
  description: string;
};

export const Property = ({ icon, description }: PropertyProps) => {
  return (
    <div className="flex items-center gap-x-3 mb-2">
      {icon}
      <p>{description}</p>
    </div>
  );
};
