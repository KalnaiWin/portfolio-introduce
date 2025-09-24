import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const LoadingGame = () => {
  const containerRef = useRef(null);
  const firstScreen = useRef(null);
  const textRef = useRef(null);
  const secondScreen = useRef(null);

  useGSAP(() => {
    gsap.set([firstScreen.current, textRef.current, secondScreen.current], {
      autoAlpha: 0,
    });

    const tl = gsap.timeline();

    tl.to([firstScreen.current, textRef.current], {
      autoAlpha: 1,
      duration: 2,
    })
      .to(firstScreen.current, {
        autoAlpha: 0,
      })
      .to(secondScreen.current, {
        autoAlpha: 1,
        duration: 0.05,
        delay: 0,
      });
  });

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black text-white z-50"
      ref={containerRef}
    >
      <div
        className="absolute inset-0 flex items-center justify-center bg-black"
        ref={firstScreen}
      >
        <p
          ref={textRef}
          className="italic font-bold text-5xl bg-red-900 p-3 text-white"
        >
          Nguyễn Huỳnh Bảo Phúc
        </p>
      </div>

      <div
        ref={secondScreen}
        className="absolute inset-0 flex items-center justify-center bg-[#E78C1E]"
      >
        <p className="italic font-bold text-4xl text-white">
          Welcome To My Portfolio
        </p>
      </div>
    </div>
  );
};

export default LoadingGame;
