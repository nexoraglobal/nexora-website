import { motion } from "framer-motion";
import { LampContainer } from "~/components/lamp";
import { fetchAllMediumBlogPosts } from "~/services/blog-posts.services";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  try {
    const blogsList = await fetchAllMediumBlogPosts();
    return Response.json(blogsList || []);
  } catch (error) {
    console.error("Error fetching Medium posts:", error);
    return Response.json([]);
  }
};

const Blogs = () => {
  const posts = useLoaderData<IBlog[]>();

  return (
    <div className=" text-white max-w-screen-xl mx-auto pb-10">
      {/* Fixed Left Section */}
      <LampContainer className="">
        <motion.div
          initial={{ opacity: 0, y: 350 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" px-10 flex flex-col justify-center items-center gap-5 py-20 h-[10vh] lg:h-[60vh]"
        >
          <div className="text-3xl md:text-7xl font-bold font-glacier">
            Our Blogs
          </div>
          <div className="text-white/60 text-base md:text-lg max-w-screen-sm text-center">
            Explore our latest insights, industry trends, and expert
            perspectives. Stay informed with in-depth articles on technology,
            business growth, and innovation.
          </div>
        </motion.div>
      </LampContainer>

      {/* Scrollable Right Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gridcards mx-5 relative">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-10 flex flex-col items-center justify-start border border-white/30 rounded-xl group bg-nexora-shadow/50  gridcard cursor-pointer"
          >
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <div className="gap-5">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 aspect-square my-5 transition-all duration-300 "
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="font-bold text-lg">{post.title}</div>
                  <div className="text-white/60 text-sm ">
                    {post.content}...
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.categories.map((category, index) => (
                    <div
                      key={index}
                      className="text-xs text-white/40 border border-white/30 rounded-full keyfeature"
                    >
                      <div className="relative z-10 h-full w-full flex items-center">
                        {category}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
