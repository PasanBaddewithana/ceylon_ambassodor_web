import fatherSonImage from "../../../assets/warehouse/father-son-standing-their-warehouse-with-helmets-their-heads-looking-package-prepared-transport-looking-proud-satisfied.jpg";
import UFSLogo from "../../../assets/ufs_logo.svg";
const ConnectingGlobal = () => {
  //background color to blue
  return (
    //height to half of the screen 051e4a
    <div className="flex flex-col md:flex-row h-1/2 bg-[#051e4a]">
      {/* Left side (Text and small image) align tecxt ot left  add 30 px padding */}
      <div className="flex-1 pr-5 pl-20 pb-16">
        <img
          src={UFSLogo}
          alt="warehouse"
          className="mb-4 w-full md:w-1/2 transform scale-50"
        />

        <h1 className="text-3xl font-bold mb-3 text-white font-MontserratMedium">
          "Connecting the Globe,
          <br /> One shipment at a Time"
        </h1>

        <div className="w-3/4 bg-[#c6a664] h-[2px] mb-3"></div>
        <p className="text-xs text-white font-Montserrat lg:pr-20 lg:mt-5">
          At KhmerGate, we believe that travel is more than just visiting
          places—it's about creating memories, discovering new cultures, and
          experiencing life in its most authentic form. As Cambodia's premier
          travel and tourism company, we offer a curated selection of tours and
          services that showcase the beauty, history, and culture of Cambodia,
          as well as global destinations. Whether you're seeking a serene
          retreat in the heart of nature, an immersive cultural experience, or
          an adventurous journey across borders, KhmerGate is your gateway to
          the world.
        </p>
      </div>

      {/* Middle (Vertical line)  align center */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-[2px] h-3/4 bg-[#c6a664]"></div>
      </div>

      {/* Right side (Image only) */}
      <div className="flex-1 items-center justify-center hidden md:flex">
        <img
          src={fatherSonImage}
          alt="warehouse large"
          className="object-cover h-3/4 w-4/5"
        />
      </div>
    </div>
  );
};

export default ConnectingGlobal;
