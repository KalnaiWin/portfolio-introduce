import { ImageAssetsList } from "../../utils/define";

const AssetsImage = () => {
  return (
    <div className="grid grid-cols-5 gap-2 p-2 overflow-auto">
      {ImageAssetsList.map((image, index) => (
        <div key={index} className="border shadow-md bg-white flex items-center justify-center rounded-md p-2">
          <img src={image.href} alt={image.alt} className="size-16" />
        </div>
      ))}
    </div>
  );
};

export default AssetsImage;
