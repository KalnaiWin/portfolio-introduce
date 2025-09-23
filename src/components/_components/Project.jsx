import { projectImages } from "../../utils/define";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Project = () => {
  useGSAP(() => {
    gsap.set(".info-overlay", { y: 100, autoAlpha: 0 });
  });

  const showOverlay = (card) => {
    const overlay = card.querySelector(".info-overlay");
    gsap.to(overlay, { y: 0, duration: 0.3, autoAlpha: 1 });
  };

  const hideOverlay = (card) => {
    const overlay = card.querySelector(".info-overlay");
    gsap.to(overlay, { y: 100, duration: 0.3, autoAlpha: 0 });
  };

  return (
    <div className="w-full h-full bg-[#282A36] overflow-y-auto">
      <div className="grid grid-cols-2 gap-4 mx-auto p-5 mb-50">
        {projectImages.map((image, index) => (
          <div
            key={index}
            className="flex justify-center relative overflow-hidden"
            onMouseEnter={(e) => showOverlay(e.currentTarget)}
            onMouseLeave={(e) => hideOverlay(e.currentTarget)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full"
            />
            <div className="absolute info-overlay w-full h-[80%] backdrop-brightness-30 bottom-0 flex flex-col justify-around text-white px-5 py-2">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p className="font-semibold">{image.title}</p>
                  <span className="text-sm text-gray-200">
                    {image.description}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <a
                    href={image.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black rounded-md px-2 font-semibold cursor-pointer"
                  >
                    Github
                  </a>
                  <a
                    href={image.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black rounded-md px-2 font-semibold cursor-pointer"
                  >
                    Vercel
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 w-full">
                {image.used.map((item, i) => (
                  <div
                    key={i}
                    className="w-fit bg-white text-black rounded-sm px-1 text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
