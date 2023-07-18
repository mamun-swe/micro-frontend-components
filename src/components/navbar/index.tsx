import React from "react";

type PropsTypes = {
  title?: string;
};

export const Navbar: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <div className="p-3 border-b bg-white">
      <p className="text-lg font-medium text-gray-500">
        {props.title || "Navbar"}
      </p>
    </div>
  );
};
