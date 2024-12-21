// import React from "react";
// import khermgate from "../../../../assets/khmergate.png";
// import runaway from "../../../../assets/Khmergate/khon-is-art-culture-thailand-dancing-masked-tossakan-hanuman-are-fighting-literature.jpg";

// const KhmergateSecond = () => {
//   return (
//     <div className="bg-[#015B02] w-full h-[550px] flex justify-center items-center relative">
//       {/* Left part */}
//       <div className="w-1/2 h-full flex flex-col justify-center items-center ">
//         <div className="flex flex-col justify-center items-start">
//           <img src={khermgate} alt="logo" className="w-[300px] h-auto mb-9" />
//           <p className="text-white text-[28px] font-bold" data-aos="fade-up" data-aos-duration="1000">"Your Gateway to </p>
//           <p className="text-white text-[28px] font-bold mb-5" data-aos="fade-up" data-aos-duration="1500">
//             Extraordinary Experiences"
//           </p>
//           <div className="h-[2px] w-[500px] bg-[#605645] "></div>
//           <p className="text-white text-[14px] mt-4 w-[390px]" data-aos="fade-up" data-aos-duration="2000">
//             At KhmerGate, we believe that travel is more than just visiting
//             places—it's about creating memories, discovering new cultures, and
//             experiencing life in its most authentic form. As Cambodia's premier
//             travel and tourism company, we offer a curated selection of tours
//             and services that showcase the beauty, history, and culture of
//             Cambodia, as well as global destinations. Whether you're seeking a
//             serene retreat in the heart of nature, an immersive cultural
//             experience, or an adventurous journey across borders, KhmerGate is
//             your gateway to the world.
//           </p>
//         </div>
//       </div>

//       {/* Divider: Vertical White Line */}
//       <div className="h-[480px] w-[2px] bg-[#BC9C61] "></div>

//       {/* Right part */}
//       <div className="w-1/2 h-full flex justify-center items-center">
//         <p className="text-white text-[24px] p-12">
//           <img src={runaway} />
//         </p>
//       </div>
//     </div>
//   );
// };

// export default KhmergateSecond;
import React from "react";
import khermgate from "../../../../assets/khmergate.png";
import runaway from "../../../../assets/Khmergate/khon-is-art-culture-thailand-dancing-masked-tossakan-hanuman-are-fighting-literature.jpg";
const KhmergateSecond = () => {
  //background color to blue
  return (
    //height to half of the screen 051e4a
    <div className="flex flex-col md:flex-row h-1/2 bg-[#015B02]">
      {/* Left side (Text and small image) align tecxt ot left  add 30 px padding */}
      <div className="flex-1 pr-5 pl-20 pb-16">
        <img
          src={khermgate}
          alt="warehouse"
          className="mb-4 w-full md:w-1/2 transform scale-50"
        />

        
        <p className="text-white text-[28px] font-bold font-MontserratMedium "data-aos="fade-up" data-aos-duration="1000">
        "Your Gateway to
          </p>
          <p className="text-white text-[28px] font-bold mb-5 font-MontserratMedium "data-aos="fade-up" data-aos-duration="1500">
          Extraordinary Experiences"
          </p>

        <div className="w-3/4 bg-[#c6a664] h-[2px] mb-3"></div>
        <p className="text-s text-white font-Montserrat lg:pr-20 lg:mt-5" data-aos="fade-up" data-aos-duration="3000">
        At KhmerGate, we believe that travel is more than just visiting
           places—it's about creating memories, discovering new cultures, and
             experiencing life in its most authentic form. As Cambodia's premier
             travel and tourism company, we offer a curated selection of tours
             and services that showcase the beauty, history, and culture of            Cambodia, as well as global destinations. Whether you're seeking a
             serene retreat in the heart of nature, an immersive cultural
            experience, or an adventurous journey across borders, KhmerGate is
            your gateway to the world.

        </p>
      </div>

      {/* Middle (Vertical line)  align center */}
      <div className="hidden md:flex items-center justify-center">
        <div className="w-[2px] h-3/4 bg-[#c6a664]"></div>
      </div>

      {/* Right side (Image only) */}
      <div className="flex-1 items-center justify-center hidden md:flex">
        <img
          src={runaway}
          alt="warehouse large"
          className="object-cover h-3/4 w-4/5"
        />
      </div>
    </div>
  );
};

export default KhmergateSecond;

