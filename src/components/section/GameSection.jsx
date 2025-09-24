import React from "react";

const GameSection = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <img
        src="/images/portfolio.png"
        alt="Portfolio"
        className="w-full h-full object-cover"
      />
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-7xl font-bold backdrop-blur-sm p-5">
        The End {":))))"}
      </p>{" "}
    </div>
  );
};

export default GameSection;
