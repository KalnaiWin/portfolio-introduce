import { useGSAP } from "@gsap/react";
import ShinyText from "../ui/ShinyText";
import { useRef } from "react";
import gsap from "gsap";

const LoadingDesktop = () => {
  const StartRef = useRef(null);

  useGSAP(() => {
    if (StartRef.current) {
      gsap.from(StartRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }
  });
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      <span className="ml-4" ref={StartRef}>
        <ShinyText text={"Portfolio Access"} disabled={false} speed={2} />
      </span>
    </div>
  );
};

export default LoadingDesktop;
