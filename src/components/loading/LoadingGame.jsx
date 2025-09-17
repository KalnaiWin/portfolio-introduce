import { useGSAP } from "@gsap/react";
import ShinyText from "../ui/ShinyText";
import { useRef } from "react";
import gsap from "gsap";

const LoadingGame = () => {
  const StartRef = useRef(null);
  const blackScreen = useRef(null);

  useGSAP(() => {
    blackScreen.current;
    // gsap.set(blackScreen.current, ({ paused: true }));
    gsap
    //   .from(blackScreen.current, {
    //     duration: 4,
    //     ease: "power2.inOut",
    //   })
      .from(
        StartRef.current,
        {
          y: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "<+4"
      );
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

export default LoadingGame;
