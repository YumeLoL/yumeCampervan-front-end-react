import React from "react";

const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container mx-48 my-20 px-4 flex justify-center">
      {children}
    </div>
  );
};

export default ResponsiveContainer;
