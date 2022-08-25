import React from "react";

interface TextType {
  text: string;
}

const Text = ({ text }: TextType) => {
  return (
    <p
      className="
        text-sm
        md:text-lg
        lg:text-xl
        xl:text-1xl
        sm:max-h-full
        text-gray-800
        mb-4
        md:mb-10
        "
    >
      {text}
    </p>
  );
};

export default Text;
