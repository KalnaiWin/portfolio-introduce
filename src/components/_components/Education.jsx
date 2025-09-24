import { DotIcon } from "lucide-react";
import { Certification, educationProgress } from "../../utils/define";
import { Flat, Heat, Nested } from "@alptugidin/react-circular-progress-bar";

const Education = () => {
  return (
    <div className="w-full h-full bg-[#282A36] overflow-y-auto">
      <div className="flex items-center">
        <p className="text-blue-300 text-xl w-fit h-fit px-8.5 py-5 font-bold [writing-mode:vertical-rl] rotate-180">
          Learning Progress
        </p>
        <div className="flex flex-col text-white h-full">
          {educationProgress.map((item, index) => (
            <div
              className="flex w-full items-center gap-5 hover:bg-[#191A21] p-3"
              key={index}
            >
              <div className="flex items-center">
                <DotIcon />
                <p className="underline">{item.date} : </p>
              </div>
              <div className="flex gap-2">
                {item.learned.map((object, idx) => (
                  <p key={idx}>{object}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col h-full">
        <p className="flex justify-center font-bold text-xl text-blue-300">
          Certification
        </p>
        <div className="w-full grid grid-cols-2 space-y-15 mt-10 mx-auto">
          {Certification.map((cer, index) => (
            <div className="relative flex justify-center" key={index}>
              <img src={cer.image} alt={cer.alt} className="w-[80%]" />
              <div className="absolute size-25 right-2 -top-8">
                <Flat
                  progress={cer.grade}
                  range={{ from: 0, to: 100 }}
                  sign={{ value: "%", position: "end" }}
                  text={`Hours: ${cer.time}`}
                  showMiniCircle={true}
                  showValue={true}
                  sx={{
                    strokeColor: "#00e5ff",
                    barWidth: 5,
                    bgStrokeColor: "#ffffff",
                    bgColor: { value: "#f0e0ff", transparency: "99" },
                    shape: "full",
                    strokeLinecap: "round",
                    valueSize: 20,
                    valueWeight: "bold",
                    valueColor: "#000000",
                    valueFamily: "Trebuchet MS",
                    textSize: 10,
                    textWeight: "bold",
                    textColor: "#000000",
                    textFamily: "Trebuchet MS",
                    loadingTime: 3000,
                    miniCircleColor: "#024249",
                    miniCircleSize: 6,
                    valueAnimation: true,
                    intersectionEnabled: true,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
