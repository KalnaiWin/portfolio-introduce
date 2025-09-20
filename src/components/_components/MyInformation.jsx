import { XIcon } from "lucide-react";
import React from "react";
import { randomImage } from "../../utils/define";

const MyInformation = ({ onToggle }) => {
  const indexImage = Math.floor(Math.random() * randomImage.length);
  const currentImage = randomImage[indexImage];

  return (
    <div className="w-full h-full bg-[#3a3a3a] text-white rounded-md">
      <div className="flex w-full justify-between p-1">
        <p>My Information</p>
        <XIcon className="size-6" onClick={onToggle} />
      </div>
      <img
        src={currentImage.href}
        alt={currentImage.alt}
        className="object-cover object-center w-full h-[40%]"
      />
      <div className="absolute top-45 flex items-center justify-center gap-2 bg-white p-2 rounded-2xl">
        <img
          src="/assets/zaloAccount.png"
          alt=""
          className="rounded-full size-12"
        />
        <div className="flex flex-col">
          <p className="text-md text-black font-medium">
            Nguyễn Huỳnh Bảo Phúc
          </p>
          <p className="text-sm text-gray-600">
            A junior of VNU - University of Information Technology
          </p>
        </div>
      </div>
      <div className="bg-gray-400 w-full h-0.5 mt-16" />
      <div className="px-4 py-2 text-sm">
        <p>Gender: Male</p>
        <p>Date of birth: 22 / 04 / 2006</p>
        <p>Zalo: ### ### ### 950</p>
        <p>Phone Number: #### ### ###</p>
      </div>
    </div>
  );
};

export default MyInformation;
