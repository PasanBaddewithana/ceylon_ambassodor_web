import React from "react";

const TeamMemberProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-4">
        <a href="/" className="hover:underline">
          Home
        </a>{" "}
        /{" "}
        <a href="/team" className="hover:underline">
          Team
        </a>{" "}
        / Mary Simens
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Left Column */}
        <div className="lg:w-1/3 w-full">
          {/* Profile Image */}
          <img
            src="https://via.placeholder.com/150" // Replace this with the actual image source
            alt="Mary Simens"
            className="rounded-full w-36 h-36 object-cover mb-4"
          />

          {/* Name and Role */}
          <h1 className="text-2xl font-bold mb-2">Mary Simens</h1>
          <p className="text-gray-500 mb-4">Manager</p>

          {/* Contact Information */}
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Phone: </span> +1 (123)
            1800-567-8990
          </p>
          <p className="text-gray-700 mb-6">
            <span className="font-semibold">Email: </span>{" "}
            marysimens@example.com
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3 w-full">
          {/* Biography Section */}
          <p className="text-gray-700 mb-4">
            Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo. Non habent claritatem in sitamcon quat duis autem facilisis
            at vero eros nibh. Eiusmod tincidunt ut laoreet vel illum irure qui
            sequitur mutationem consuetud.
          </p>

          <p className="text-gray-700 mb-4">
            Nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum dolore eu feugiat nulla
            facilisis.
          </p>

          <p className="text-gray-700 mb-4">
            Iusto odio dignissim qui blandit praesent luptatum zzril delenit
            augue duis dolore te feugiat nulla facilisi. Lacerat facer possim
            assum.
          </p>

          {/* Divider */}
          <hr className="my-6" />

          {/* Specialty, Degrees, and Training Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Specialty</h3>
              <p className="text-gray-700">Leadership Development</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Degrees</h3>
              <p className="text-gray-700">M.D. of Business</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Training</h3>
              <p className="text-gray-700">
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
