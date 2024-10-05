import React from "react";

export default function FrontBanner() {
  return (
    <div className="bg-[#0A1A3A] h-[200px] flex items-center justify-between px-8">
      <h1 className="text-white text-4xl font-bold">Ceylon Ambassador</h1>
      <div className="flex items-center">
        <img
          src="/placeholder.svg?height=50&width=200"
          alt="Ceylon Ambassador Logo"
          className="h-[50px] w-[200px] object-contain"
        />
      </div>
    </div>
  );
}
