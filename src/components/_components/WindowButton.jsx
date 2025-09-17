import { Moon, Power, RotateCcw } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

const WindowButton = () => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative group p-1 rounded-md hover:bg-gray-400 transition-all">
      {isOpen && (
        <div className="absolute -top-26 -left-8">
          <ul className="flex flex-col gap-2 bg-gray-400 shadow-md p-1 rounded-md">
            <li>
              <Link to={"/desktop"} className="flex items-center gap-1">
                <Moon className="size-4" /> Sleep
              </Link>
            </li>
            <li>
              <Link to={"/"} className="flex items-center gap-1">
                <Power className="size-4" /> ShutDown
              </Link>
            </li>
            <li>
              <Link to={"/desktop"} className="flex items-center gap-1">
                <RotateCcw className="size-4" /> Restart
              </Link>
            </li>
          </ul>
        </div>
      )}
      <div onClick={() => setIsOpen(!isOpen)} ref={dropdownRef}>
        <img src="/assets/window.png" alt="Window" className="size-6" />
      </div>
      {!isOpen && (
        <span
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 
                   bg-black text-white text-xs rounded px-2 py-1 opacity-0 
                   group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-1000 whitespace-nowrap"
        >
          Start
        </span>
      )}
    </div>
  );
};

export default WindowButton;
