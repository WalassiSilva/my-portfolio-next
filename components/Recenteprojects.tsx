import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

export default function RecentProjects() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading px-4">
        A small selection of{" "}
        <span className="text-purple"> recent projects</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className=" flex flex-col items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <PinContainer title={"visit"} href={link}>
              <div className=" flex relative items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden  ">
                <div
                  className="relative w-full h-full overflow-hidden rounded-3xl "
                  style={{ background: "#13162d" }}
                >
                  <img src="./bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute" />
              </div>
            </PinContainer>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 md:mt-20">
              {title}
            </h1>
            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 ">
              {des}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {iconLists.map((icon, index) => (
                  <div
                    key={icon}
                    className="border border-white/[0.2] rounded-full bg-black flex justify-center items-center lg:size-10 size-8"
                    style={{ transform: `translateX(-${5 * index * 2}px)` }}
                  >
                    <img src={icon} alt={icon} className="p-2 " />
                  </div>
                ))}
              </div>

              <a
                target="_blank"
                href={link}
                className="flex justify-center items-center"
              >
                <div className="border flex items-center px-2 md:px-4 py-2 rounded-md text-purple hover:text-white">
                  <p className="flex lg:text-xl md:text-xs text-sm">
                    Click here
                  </p>
                  <FaLocationArrow className="ms-3 " />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
