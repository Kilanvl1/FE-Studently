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
