import React from "react";
import TopHeader from "../../Homepage/component/TopHeader";
import Navbar from "../../Homepage/component/Navbar";
import TeamMemberProfile from "../components/TeamMemberProfile";
import MeetThePros from "../components/TeamMember_Friends";
import Footer from "../../faq/component/Footer";

import { useParams } from "react-router-dom";

const teamMembers = [
  { name: "Joel Yamaha", role: "Developer", img: "path_to_joel_image" },
  { name: "Mary Simens", role: "Manager", img: "path_to_mary_image" },
  { name: "Harley Russle", role: "Co Founder", img: "path_to_harley_image" },
  { name: "Nick Turner", role: "Developer", img: "path_to_nick_image" },
  { name: "Anna Nikson", role: "Manager", img: "path_to_anna_image" },
  { name: "Lana Kook", role: "Co Founder", img: "path_to_lana_image" },
  { name: "Jenna Olsen", role: "Web Designer", img: "path_to_jenna_image" },
  { name: "Rachel Gray", role: "Web Designer", img: "path_to_rachel_image" },
];

const ProfilePage = () => {
  const { name } = useParams();
  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <div className="mt-12">
        <TeamMemberProfile name={name} />
      </div>
      <div className="mt-16 mb-6">
        <MeetThePros />
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
