import {
  Blocks,
  CircleUser,
  Files,
  GitBranch,
  Play,
  Pyramid,
  Search,
  Settings,
} from "lucide-react";
import { useState } from "react";
import ReactPage from "../_components/ReactPage";
import NextjsPage from "../_components/NextjsPage";
import { TreeDataNextjs, TreeDataReact } from "../../utils/define";
import Education from "../_components/Education";
import Project from "../_components/Project";

const CodeVS = () => {
  const [isReactPage, setIsReactPage] = useState(true);
  const [togglePage, setTogglePage] = useState(true);

  return (
    <div className="bg-white w-full h-full flex">
      <div className="w-1/40 h-full bg-[#343746] flex flex-col justify-between">
        <div className="flex flex-col items-center text-white w-full">
          <Files className="bg-[#3C3D51] p-2 w-full size-8 border-l border-l-[#9E5B8B]" />
          <Search className="hover:bg-[#3C3D51] p-2 w-full size-8 hover:border-l hover:border-l-[#9E5B8B]" />
          <GitBranch className="hover:bg-[#3C3D51] p-2 w-full size-8 hover:border-l hover:border-l-[#9E5B8B]" />
          <Play className="hover:bg-[#3C3D51] p-2 w-full size-8 hover:border-l hover:border-l-[#9E5B8B]" />
          <Blocks className="hover:bg-[#3C3D51] p-2 w-full size-8 hover:border-l hover:border-l-[#9E5B8B]" />
          <Pyramid className="hover:bg-[#3C3D51] p-2 w-full size-8 hover:border-l hover:border-l-[#9E5B8B]" />
        </div>
        <div className="flex flex-col items-center text-white w-full">
          <CircleUser className="hover:bg-[#3C3D51] p-2 w-full size-8 hover:border-l hover:border-l-[#9E5B8B]" />
          <Settings className="hover:bg-[#3C3D51] p-2 w-full size-8 hover:border-l hover:border-l-[#9E5B8B]" />
        </div>
      </div>
      <div className="bg-[#262626] h-full w-6/40">
      <div className="flex w-full justify-center italic font-semibold text-emerald-600">
        My file structure
      </div>
        {/* Toggle Button */}
        <div className="w-full flex justify-center mt-2">
          <div
            onClick={() => setIsReactPage(!isReactPage)}
            className={`p-0.5 rounded-full  w-[25%] relative h-7 ${
              isReactPage ? "bg-gray-600" : "bg-gray-600"
            } `}
          >
            <img
              src={isReactPage ? "/assets/react.png" : "/assets/nextjs.png"}
              alt={isReactPage ? "React" : "Nextjs"}
              className={`
        size-5 absolute top-1/2 -translate-y-1/2 
        transition-all ${isReactPage ? "left-1" : "right-1"}
      `}
            />
          </div>
        </div>
        {isReactPage ? (
          <ReactPage data={TreeDataReact} />
        ) : (
          <NextjsPage data={TreeDataNextjs} />
        )}
      </div>
      <div className="w-33/40 h-full overflow-hidden">
        <div className="bg-[#191A21]">
          <div className={`flex items-center text-sm `}>
            <div
              className={`flex gap-2 items-center text-sm p-2 cursor-pointer ${
                togglePage
                  ? "bg-[#282A36] text-blue-500 border-t-2 border-t-[#9E5B8B]"
                  : "text-gray-500 bg-gray-900"
              }`}
              onClick={() => setTogglePage(!togglePage)}
            >
              <img
                src="/assets/icon-react.png"
                alt="Reactjs"
                className="size-5"
              />
              <p>Education.jsx</p>
            </div>
            <div
              className={`flex gap-2 items-center text-sm p-2 cursor-pointer ${
                !togglePage
                  ? "bg-[#282A36] text-blue-600 border-t-2 border-t-[#9E5B8B]"
                  : "text-gray-500 bg-gray-900"
              }`}
              onClick={() => setTogglePage(!togglePage)}
            >
              <img
                src="/assets/icon-react.png"
                alt="Reactjs"
                className="size-5"
              />
              <p>Projects.tsx</p>
            </div>
          </div>
        </div>
        {togglePage ? <Education /> : <Project />}
      </div>
    </div>
  );
};

export default CodeVS;
