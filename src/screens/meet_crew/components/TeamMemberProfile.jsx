import React from "react";

const TeamMemberProfile = ({ name }) => {
  return (
    <div className="container max-w-screen-lg  mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:underline text-gray-600">
          Home
        </a>{" "}
        /{" "}
        <a href="/team" className="hover:underline text-gray-600">
          Team
        </a>{" "}
        <span className="font-bold text-gray-900">/ {name}</span>
      </div>

      <div className="mt-24 flex flex-col lg:flex-row gap-20">
        {/* Left Column */}
        <div className="lg:w-1/4 w-full">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start mb-6">
            <img
              src="https://via.placeholder.com/150" // Replace this with the actual image source
              alt="Mary Simens"
              className="rounded-full w-36 h-36 object-cover"
            />
          </div>

          {/* Name and Role */}
          <p className="text-gray-500 text-center lg:text-left mb-1">Manager</p>
          <h1 className="text-2xl font-bold  text-center lg:text-left mb-10">
            {name}
          </h1>

          {/* Contact Information */}
          <div className="border-t-2 border-b-2 border-gray-300 py-6">
            <p className="text-gray-700 text-center lg:text-left mb-1">
              +1 (123) 1800-567-8990
            </p>
          </div>
          <div className="border-b-2 border-gray-300 py-6">
            <p className="text-gray-700 text-center lg:text-left">
              marysimens@example.com
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-3/4 w-full font-Montserrat">
          {/* Biography Section */}
          <p className="text-gray-700 leading-relaxed mb-6">
            Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo. Non habent claritatem in sitamcon quat duis autem facilisis
            at vero eros nibh. Eiusmod tincidunt ut laoreet vel illum irure qui
            sequitur mutationem consuetud.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto. Dolore eu feugiat nulla
            facilisis at vero eros et accumsan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Iusto odio dignissim qui blandit praesent luptatum zzril delenit
            augue duis dolore te feugiat nulla facilisi. Lacerat facer possim
            assum.
          </p>

          {/* Divider */}
          <hr className="my-6 " />

          {/* Specialty, Degrees, and Training Section */}
          <div className="mt-8 space-y-8">
            {/* Specialty */}
            <div className="flex border-b-2 space-x-24 border-gray-300 pb-2">
              <h3 className="text-lg font-semibold mb-2 ">Specialty</h3>
              <p className="text-gray-700 text-sm">Leadership Development</p>
            </div>

            {/* Degrees */}
            <div className="flex border-b-2 space-x-24 items-center border-gray-300 pb-2">
              <h3 className="text-lg font-semibold mb-2 ">Degrees</h3>
              <p className="text-gray-700 text-sm  ">M.D. of Business</p>
            </div>

            {/* Training */}
            <div className="flex  space-x-24   border-b-2  border-gray-300 pb-2">
              <h3 className="text-lg font-semibold mb-2 ">Training</h3>
              <p className="text-gray-700 text-sm ">
                Typi non habent claritatem insitam; est usus legentis in iis qui
                facit eorum claritatem investigat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile;
