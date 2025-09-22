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

const CodeVS = () => {
  const [isReactPage, setIsReactPage] = useState(true);

  return (
    <div className="bg-white w-full h-full flex">
      <div className="w-1/40 h-full bg-[#343746] flex flex-col justify-between">
        <div className="flex flex-col items-center text-white w-full">
          <Files className="hover:bg-[#3C3D51] p-2 w-full size-8 hover:border-l hover:border-l-[#9E5B8B]" />
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
        {/* Toggle Button */}
        <div
          className="w-full flex justify-center mt-2"
          onClick={() => setIsReactPage(!isReactPage)}
        >
          <div
            className={`p-0.5 rounded-full  w-[25%] relative h-7 ${
              isReactPage ? "bg-gray-700" : "bg-white"
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
      <div></div>
    </div>
  );
};

export default CodeVS;
