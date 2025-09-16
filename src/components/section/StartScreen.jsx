import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LoadingDesktop from "../loading/LoadingDesktop";

const StartScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const checkFullscreen = () => {
    setIsFullscreen(
      !!document.fullscreenElement ||
        window.innerHeight === window.screen.height
    );
  };

  useEffect(() => {
    checkFullscreen();
    window.addEventListener("resize", checkFullscreen);
    document.addEventListener("fullscreenchange", checkFullscreen);
    return () => {
      window.removeEventListener("resize", checkFullscreen);
      document.removeEventListener("fullscreenchange", checkFullscreen);
    };
  }, []);

  const handleStart = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigate("/desktop");
    }, 4000);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      {isLoading && <LoadingDesktop />}
      <button
        onClick={handleStart}
        disabled={!isFullscreen}
        className="px-4 py-2 bg-blue-500 rounded disabled:opacity-50"
      >
        Let's get started
      </button>
      {!isFullscreen && (
        <p className="mt-4">Press F11 or enter fullscreen to enable</p>
      )}
    </div>
  );
};

export default StartScreen;
