import { motion } from "framer-motion";
import { LampContainer } from "~/components/lamp";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "CapoCoco",
      description:
        "for a foreign client who to showcase there product range and details about products",
      imageUrl: "/projects/capococo.webp",
      link: "https://www.capococo.com",
    },
    {
      id: 2,
      title: "AIT Campus",
      description:
        "Project for AIT Campus to showcase there courses to students who link to join with them",
      imageUrl: "/projects/ait.webp",
      link: "https://www.aitcampus.com",
    },
    {
      id: 3,
      title: "Project M",
      description:
        "E-commerce project for Sri Lankan clothing brand what sell premium clothing.",
      imageUrl: "/projects/miecollection.webp",
      link: "https://www.miecollectionm.com/",
    },
    {
      id: 4,
      title: "Video App",
      description: "Project for video call company to showcase there services.",
      imageUrl: "/projects/videocall.webp",
      link: "",
    },
  ];

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
            Our Projects
          </div>
          <div className="text-white/60 text-base md:text-lg max-w-screen-sm text-center">
            We take pride in delivering innovative and impactful projects that
            push the boundaries of technology. Explore our diverse portfolio,
            showcasing solutions tailored to drive success and efficiency across
            industries.
          </div>
        </motion.div>
      </LampContainer>
      {/* Scrollable Right Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gridcards mx-5 relative">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="p-10 flex flex-col items-center justify-start border border-white/30 rounded-xl group bg-nexora-shadow/50  gridcard cursor-pointer"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="gap-5">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 aspect-square my-5 transition-all duration-300 "
                />
                <div className="flex flex-col justify-start items-start">
                  <div className="font-bold text-lg">{project.title}</div>
                  <div className="text-white/60 text-sm ">
                    {project.description}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
