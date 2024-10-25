import fatherSonImage from "../../../assets/warehouse/father-son-standing-their-warehouse-with-helmets-their-heads-looking-package-prepared-transport-looking-proud-satisfied.jpg";
import UFSLogo from "../../../assets/ufs_logo.svg";
const ConnectingGlobal = () => {
  //background color to blue
  return (
    //height to half of the screen 051e4a
    <div className="flex flex-col md:flex-row h-1/2 bg-[#051e4a]">
      {/* Left side (Text and small image) align tecxt ot left  add 30 px padding */}
      <div className="flex-1 pr-20 pl-20 pb-16">
        <img
          src={UFSLogo}
          alt="warehouse"
          className="mb-4 w-2/3 md:w-1/2 transform scale-50"
        />

        <h1 className="text-4xl font-bold mb-3 text-white">
          "Connecting the Globe,
          <br /> One shipment at a Time"
        </h1>

        <div className="w-3/4 bg-yellow-400 h-1 mb-3"></div>
        <p className="text-sm text-white">
        The beauty of nature is a source of endless inspiration. From the vibrant colors of a sunset to the soothing sound of a flowing river, the natural world has a way of captivating our senses. The sight of tall trees swaying in the breeze, the smell of fresh flowers blooming in the spring, and the feel of cool grass underfoot all contribute to the wonder and tranquility that nature provides. In today’s fast-paced world, taking the time to appreciate these simple yet profound moments can bring peace and balance to our lives. Nature, in its purest form, reminds us to slow down and connect with the world around us.
        </p>
      </div>

      {/* Middle (Vertical line)  align center */}
        <div className="hidden md:flex items-center justify-center">
            <div className="w-1 h-3/4 bg-yellow-400"></div>
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
