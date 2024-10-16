import React from "react";
import TopHeader from "../../screens/Homepage/component/TopHeader";
import Navbar from "../../screens/Homepage/component/Navbar";
import Footer from "../../screens/faq/component/Footer";

// Array of blog post data
const blogPosts = [
  {
    date: "August 9, 2024",
    title: "Exploring Ceylon Ambassador's Global Reach and Impact",
    description:
      "Ceylon Ambassador operates across multiple continents, with a strong presence in Asia, Europe, North America, and the Middle East. This extensive network allows the company to seamlessly manage logistics...",
    imageUrl: "/path/to/image1.jpg",
  },
  {
    date: "August 9, 2024",
    title: "Exploring Ceylon Ambassador's Global Reach and Impact",
    description:
      "Ceylon Ambassador has established itself as a leader in the global market, offering premium freight and logistics services...",
    imageUrl: "/path/to/image2.jpg",
  },
  {
    date: "August 9, 2024",
    title: "Exploring Ceylon Ambassador's Global Reach and Impact",
    description:
      "Ceylon Ambassador has established itself as a leader in the global market, offering premium freight and logistics services...",
    imageUrl: "/path/to/image3.jpg",
  },
];

function BlogPage() {
  return (
    <div className="relative">
      <TopHeader />
      <Navbar />
      <div className="bg-white">
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
