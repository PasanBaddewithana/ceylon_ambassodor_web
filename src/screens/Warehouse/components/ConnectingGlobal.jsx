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

        <h1 className="text-3xl font-bold mb-3 text-white font-MontserratMedium" data-aos="fade-up" data-aos-duration="1000">
        United Freight Solutions: Logistics with 
        Precision and Purpose
        </h1>

        <div className="w-3/4 bg-[#c6a664] h-[2px] mb-3"></div>
        <p className="text-s text-white font-Montserrat lg:pr-20 lg:mt-5" data-aos="fade-up" data-aos-duration="3000">
        At <strong>United Freight Solutions (UFS) </strong>, we believe that every shipment tells a story of growth, opportunity, and connection. 
        Whether you’re moving goods across continents or locally, our logistics solutions are designed to provide <strong>speed, efficiency, and reliability.</strong> 
        With UFS, you’re not just shipping products—you’re moving your business forward with a trusted partner committed to excellence.

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
