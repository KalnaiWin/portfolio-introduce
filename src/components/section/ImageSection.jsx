import { ImageList } from "../../utils/define";

const ImageSection = () => {
  return (
    <div className="grid grid-cols-3 gap-2 p-2 h-full overflow-y-auto">
      {ImageList.map((image, index) => (
        <div
          key={index}
          className="border shadow-md bg-white flex items-center justify-center rounded-md p-2"
        >
          <img src={image.href} alt={image.alt} className="object-cover w-full h-full" />
        </div>
      ))}
    </div>
  );
};

export default ImageSection;
