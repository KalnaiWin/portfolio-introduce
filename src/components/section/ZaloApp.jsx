import { MessageCircle, Settings } from "lucide-react";
import { useState } from "react";
import MyInformation from "../_components/MyInformation";
import ZaloContact from "../_components/ZaloContact";

const ZaloApp = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="flex h-full relative">
      {isToggle && (
        <>
          <div
            className="absolute inset-0 bg-black/50 z-10"
            onClick={handleClick}
          />
          <div className="center-absolute w-[30%] h-[80%] z-20">
            <MyInformation onToggle={handleClick} />
          </div>
        </>
      )}

      <div className="flex flex-col p-2 bg-black justify-between items-center gap-2">
        <div className="flex flex-col gap-2 items-center text-white">
          <img
            src="/assets/user.png"
            alt="Default"
            className="rounded-full size-10"
          />
          <MessageCircle className="size-10 p-2 rounded-xl bg-[#1E2022]" />
        </div>
        <div className="flex flex-col gap-2 text-white">
          <Settings
            className="size-10 p-2 rounded-xl hover:bg-[#1E2022]"
            onClick={handleClick}
          />
        </div>
      </div>
      <ZaloContact />
    </div>
  );
};

export default ZaloApp;
