import { useState } from "react";
import { TabItems } from "../../utils/define";

const ChromeWeb = () => {
  const [isActive, setIsActive] = useState(TabItems[0].key);

  const activeTab = TabItems.find((item) => item.key === isActive);

  return (
    <div className="w-full bg-[#111111] h-full overflow-hidden">
      <div className="flex items-center mx-5 gap-2">
        {TabItems.map((tab) => (
          <div
            key={tab.key}
            onClick={() => setIsActive(tab.key)}
            className={`p-1 cursor-pointer text-white/60 rounded-t-sm w-[150px] overflow-hidden line-clamp-1 transition-all duration-800 mt-1 ${
              isActive === tab.key ? "bg-[#47484a] text-white/100" : ""
            }`}
          >
            <p className="text-sm">{tab.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full h-full overflow-auto relative">
        {activeTab && (
          <div className="flex flex-col">
            <div className="bg-[#47484a] sticky -top-1 left-0 w-full flex justify-center">
              <input
                className="px-2 mx-auto w-[90%] m-2 bg-[#282828] rounded-full text-white/70 py-1"
                type="text"
                value={activeTab.link}
              />
            </div>
            <div className="px-10 flex flex-col gap-4">
              <div className="text-white text-6xl font-bold italic mt-5">
                {activeTab.name}
              </div>
              <div className="flex w-full justify-between">
                <div className="text-white/80">{activeTab.description}</div>
                <div className="text-white/80">{activeTab.date}</div>
              </div>
              <div className="flex gap-2 items-center">
                <a
                  href={activeTab.github}
                  target="_blank"
                  className="text-black p-2 bg-white rounded-2xl"
                >
                  Link Github
                </a>
                <a
                  href={activeTab.link}
                  target="_blank"
                  className="text-black p-2 bg-white rounded-2xl"
                >
                  Link Vercel
                </a>
              </div>
              <span className="whitespace-pre-line text-white">
                {activeTab.content}
              </span>
            </div>
            <h1 className="text-4xl text-white px-10 my-5 font-bold italic">
              Video Demo
            </h1>
            <video
              src="/videos/example.mp4"
              controls
              className="w-[94%] mx-auto mt-5 mb-20 rounded-sm"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChromeWeb;
