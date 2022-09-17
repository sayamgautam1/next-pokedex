import React from "react";

const Header = ({ title }) => {
  return (
    <div className="flex items-center justify-center my-5">
      <h1 className="text-4xl mb-2 text-center uppercase">{title}</h1>
    </div>
  );
};

export default Header;
