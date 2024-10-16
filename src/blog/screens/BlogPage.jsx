import React from "react";
import TopHeader from "../../screens/Homepage/component/TopHeader";
import Navbar from "../../screens/Homepage/component/Navbar";
import Footer from "../../screens/faq/component/Footer";
import BlogPost from "../components/BlogComponent";

import blog1_img from "../../assets/blog/blog1.jpg";
import blog2_img from "../../assets/blog/blog2.jpg";
import blog3_img from "../../assets/blog/blog3.jpg";

// Array of blog post data
const blogPosts = [
  {
    date: "August 9, 2024",
    title: "Exploring Ceylon Ambassador's Global Reach and Impact",
    description:
      "Ceylon Ambassador operates across multiple continents, with a strong presence in Asia, Europe, North America, and the Middle East. This extensive network allows the company to seamlessly manage logistics...",
    imageUrl: blog1_img,
  },
  {
    date: "August 9, 2024",
    title: "Exploring Ceylon Ambassador's Global Reach and Impact",
    description:
      "Ceylon Ambassador has established itself as a leader in the global market, offering premium freight and logistics services...",
    imageUrl: blog2_img,
  },
  {
    date: "August 9, 2024",
    title: "Exploring Ceylon Ambassador's Global Reach and Impact",
    description:
      "Ceylon Ambassador has established itself as a leader in the global market, offering premium freight and logistics services...",
    imageUrl: blog3_img,
  },
];

function BlogPage() {
  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <div className="mt-10 ">
        {/* Map over the blogPosts array to render BlogPost components */}
        {blogPosts.map((post, index) => (
          <BlogPost
            key={index} // use a unique key for each element
            date={post.date}
            title={post.title}
            description={post.description}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
