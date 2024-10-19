import React from "react";
import container_ship from "../../../assets/global_network/cargo-servicer-container-ship-docked-port-cargo-servicer-2-min.png";

function ContainerShipImage() {
  return (
    <div className="relative h-full w-full">
      <img
        src={container_ship} // Replace with your image path
        alt="Container Ship"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export default ContainerShipImage;
