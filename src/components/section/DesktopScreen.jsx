import { Search, XIcon } from "lucide-react";
import { IconDefault, IconSystem } from "../../utils/define";
import { useNavigate } from "react-router";
import { useState } from "react";
import LoadingGame from "../loading/LoadingGame";
import FileExplorer from "./FileExplorer";
import ChromeWeb from "./ChromeWeb";
import ZaloApp from "./ZaloApp";
import CodeVS from "./CodeVS";
import WindowButton from "../_components/WindowButton";
import DateTimePage from "../_components/DateTimePage";
import CloseTab from "../_components/CloseTab";

const DesktopScreen = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [openWindows, setOpenWindows] = useState({
    isOpenFile: false,
    isOpenChrome: false,
    isOpenCode: false,
    isOpenZalo: false,
  });

  const handleIconClick = (stateKey) => {
    setOpenWindows((prev) => ({
      // ...prev,
      [stateKey]: !prev[stateKey],
    }));
  };

  const handleStart = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/cs2");
    }, 5000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {isLoading && <LoadingGame />}
      {openWindows.isOpenFile && (
        <div className="center-absolute z-1 border w-[80%] h-[80%]">
          <CloseTab
            imageString={"/assets/folder.png"}
            text={"File Explorer"}
            onClose={() =>
              setOpenWindows((prev) => ({
                ...prev,
                isOpenFile: false,
              }))
            }
          />
          <FileExplorer />
        </div>
      )}
      {openWindows.isOpenChrome && (
        <div className="center-absolute z-1 border w-[80%] h-[80%]">
          <CloseTab
            imageString={"/assets/chrome.png"}
            text={"Chrome"}
            onClose={() =>
              setOpenWindows((prev) => ({
                ...prev,
                isOpenChrome: false,
              }))
            }
          />
          <ChromeWeb />
        </div>
      )}
      {openWindows.isOpenZalo && (
        <div className="center-absolute z-1 border w-[80%] h-[80%]">
          <CloseTab
            imageString={"/assets/zalo.png"}
            text={"Zalo"}
            onClose={() =>
              setOpenWindows((prev) => ({
                ...prev,
                isOpenZalo: false,
              }))
            }
          />
          <ZaloApp />
        </div>
      )}
      {openWindows.isOpenCode && (
        <div className="center-absolute z-1 border w-[80%] h-[80%]">
          <CloseTab
            imageString={"/assets/vsc.png"}
            text={"Visual Studio Code"}
            onClose={() =>
              setOpenWindows((prev) => ({
                ...prev,
                isOpenCode: false,
              }))
            }
          />
          <CodeVS />
        </div>
      )}
      <div className="absolute w-full h-screen">
        <img
          src="/images/background-desktop.jpg"
          alt="Background Desktop"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-[50px] backdrop-blur-3xl bottom-0 mx-auto py-2 flex items-center">
        <div className="w-full flex items-center justify-center gap-3 absolute">
          <WindowButton />
          <div className="relative flex items-center overflow-hidden p-1">
            <div className="absolute left-3.5">
              <Search className="size-4 scale-x-[-1] text-white" />
            </div>
            <input
              type="text"
              className="w-[180px] bg-[#3c536a] rounded-full indent-7 placeholder:text-white text-sm p-1 text-white focus:bg-[#1e2a37]"
              placeholder="Search"
            />
            <div className="absolute right-1.5">
              <img
                src="/images/nature-input.svg"
                alt="Nature Input"
                className="size-9"
              />
            </div>
          </div>
          <div className="flex gap-2">
            {IconDefault.map((icon, index) => (
              <div
                className="relative group p-1 rounded-md hover:bg-gray-400 transition-all"
                key={index}
                onClick={() => handleIconClick(icon.state)}
              >
                <div>
                  <img src={icon.src} alt={icon.title} className="size-6" />
                </div>
                <span
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                   bg-black text-white text-xs rounded px-2 py-1 opacity-0
                   group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-1000 whitespace-nowrap"
                >
                  {icon.title}
                </span>
              </div>
            ))}
            <div
              className="relative group p-1 rounded-md hover:bg-gray-400 transition-all"
              onClick={handleStart}
            >
              <div>
                <img
                  src="/assets/cs2.webp"
                  alt="Counter Strike"
                  className="size-6"
                />
              </div>
              <span
                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2
                   bg-black text-white text-xs rounded px-2 py-1 opacity-0
                   group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-1000 whitespace-nowrap"
              >
                Counter Strike 2
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 w-[180px] absolute right-0">
          <div className="hover:bg-gray-400 px-1 m-1.5 rounded-md transition-all flex gap-2 items-center">
            {IconSystem.map((icon, index) => (
              <div className="group relative" key={index}>
                <img src={icon.src} alt={icon.alt} className="size-4.5" />
                <span className="absolute bottom-full text-xs bg-black text-white left-1/2 transform -translate-x-1/2 mb-2 rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-1000 whitespace-nowrap">
                  {icon.title}
                </span>
              </div>
            ))}
          </div>
          <DateTimePage />
        </div>
      </div>
    </div>
  );
};

export default DesktopScreen;
