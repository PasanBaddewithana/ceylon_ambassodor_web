import React from "react";
import modernWarehouseVideo from "../../../assets/ourClients/Our Clients.mp4"; // Replace with your video path

function HeroImage() {
  return (
    <div className="relative h-screen w-full">
      {/* Full-screen background video */}
      <video
        src={modernWarehouseVideo}
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      />

      <div className="absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black bg-opacity-10">
        <h1 className="text-white text-7xl font-bold font font-MontserratMedium">
          Our Clients
        </h1>
      </div>
    </div>
  );
}

export default HeroImage;
