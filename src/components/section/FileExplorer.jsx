import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight, DotIcon } from "lucide-react";
import { useRef, useState } from "react";
import { imageFolder, ImageResources } from "../../utils/define";
import AssetsImage from "./AssetsImage";
import ImageSection from "./ImageSection";
import { Link } from "react-router";

const FileExplorer = () => {
  const icon = useRef(null);
  const listImage = useRef([]);
  const publicToggle = useRef(null);
  const [isOpenTab, setIsOpenTab] = useState({
    isOpenAssets: false,
    isOpenImages: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    gsap.set(listImage.current, {
      autoAlpha: 0,
      y: -30,
    });

    publicToggle.current = gsap
      .timeline({ paused: true })
      .to(icon.current, {
        rotate: 90,
        duration: 0.1,
      })
      .to(
        listImage.current,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.2,
          duration: 0.5,
        },
        0
      );
  }, []);

  const handleClick = (stateKey) => {
    setIsOpenTab((prev) => ({
      [stateKey]: !prev[stateKey],
    }));
  };
  const toggleImage = () => {
    if (isOpen) {
      publicToggle.current.reverse();
    } else {
      publicToggle.current.play();
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-full">
      <div className="w-1/4 bg-[#151f29] text-white">
        <div
          className="flex items-center p-3 cursor-pointer hover:bg-[#20303d]"
          onClick={toggleImage}
        >
          <ChevronRight
            ref={icon}
            className={`size-5 transform transition-transform duration-300 ${
              isOpen ? "rotate-90" : "rotate-0"
            }`}
          />
          <p>Public</p>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-2">
            {imageFolder.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(item.state)}
                ref={(el) => (listImage.current[index] = el)}
                className="flex items-center ml-[12%] transition-all cursor-pointer hover:bg-[#20303d] duration-300"
              >
                <DotIcon />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-white absolute bottom-0 ml-[2%]">
          <h1>Resources</h1>
          {ImageResources.map((image, index) => (
            <a
              key={index}
              target="_blank"
              href={image.link}
              className="flex items-center gap-2 underline my-1"
            >
              <img src={image.logo} alt="" className="size-5" />
              <p>{image.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="bg-[#152431] w-full relative">
        {(isOpenTab.isOpenAssets && <AssetsImage />) ||
          (isOpenTab.isOpenImages && <ImageSection />) || (
            <>
              <img
                src="/images/defaultFile.png"
                alt="Default"
                className="object-cover w-full h-full absolute"
              />
              <div className="text-black text-3xl w-1/2 h-full text-center font-bold absolute right-0 top-0 backdrop-blur-xl p-5 flex items-center">
                These are all images and icons I used for this project and some
                their resources. Some of those quite fade but I have fix it with figma and some tool convert image such as Convertio.io
              </div>
            </>
          )}
      </div>
    </div>
  );
};

export default FileExplorer;
