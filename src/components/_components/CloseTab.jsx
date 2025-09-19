import { Maximize, XIcon } from "lucide-react";

const CloseTab = ({ imageString, text, onClose, open }) => {
  return (
    <div className="flex w-full justify-between px-2 bg-[#2b3f53] py-1">
      <div className="flex gap-2 items-center">
        <img src={imageString} alt="File Explorer" className="size-6" />
        <p className="text-white text-[12px]">{text}</p>
      </div>
      <div className="flex items-center gap-2 cursor-pointer">
        <Maximize onClick={open} className="text-white" />
        <XIcon onClick={onClose} className="text-white" />
      </div>
    </div>
  );
};

export default CloseTab;
