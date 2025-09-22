import { useEffect, useRef, useState } from "react";
import { LinkSocialMedia } from "../../utils/define";
import {
  Bookmark,
  Ellipsis,
  IdCard,
  Image,
  Loader2,
  Paperclip,
  Phone,
  Search,
  Send,
  Sticker,
  UserPlus,
  Video,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const ZaloContact = () => {
  const [IsPending, setIsPending] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const saved = sessionStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    sessionStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [times, setTimes] = useState(() => {
    const saved = sessionStorage.getItem("times");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    sessionStorage.setItem("times", JSON.stringify(times));
  }, [times]);
  const formValues = useRef();
  const updatedTime = new Date();
  const timeChatted =
    `${updatedTime.getDate().toString().padStart(2, "0")}/` +
    `${(updatedTime.getMonth() + 1).toString().padStart(2, "0")}/` +
    `${updatedTime.getFullYear()}`;

  const hours = updatedTime.getHours();

  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedTime = `${updatedTime
    .getHours()
    .toString()
    .padStart(2, "0")}:${updatedTime
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${ampm}`;

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(formValues.current);
    const name = formData.get("name");
    const email = formData.get("email");
    const messageContent = formData.get("message");

    if (!name || !email || !messageContent || !messageContent.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    setIsPending(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formValues.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("You have sent email successfully.");

          setTasks((prev) => [...prev, messageContent]);
          setTimes((prev) => [...prev, timeChatted]);

          formValues.current.reset();
          setIsPending(false);
        },
        (error) => {
          alert("Failed to send email. Please try again");
          console.log(error);
          setIsPending(false);
        }
      );
  };

  return (
    <form
      ref={formValues}
      onSubmit={sendEmail}
      className="flex w-full h-full overflow-hidden"
    >
      <div className="w-3/9 h-full flex flex-col bg-[#22262B] border-r-2 border-r-[#16191D]">
        <div className="flex justify-between p-2 items-center my-3">
          <div className="relative flex items-center overflow-hidden p-1 w-full">
            <div className="absolute left-3.5">
              <Search className="size-4 scale-x-[-1] text-white" />
            </div>
            <input
              type="text"
              className="w-[80%] bg-[#16191D] rounded-sm indent-7 placeholder:text-white text-sm p-1 text-white focus:bg-[#1e2a37]"
              placeholder="Search"
            />
          </div>
          <UserPlus className="size-8 hover:bg-[#1E2022] p-1 rounded-md text-white" />
        </div>
        <div className="flex gap-4 text-white px-4 py-0.5 cursor-pointer border-b-2 border-b-[#16191D]">
          <p className="text-blue-600 underline">All</p>
          <p className="opacity-50">Did not read</p>
        </div>
        <div className="bg-[#1D2025] text-white w-full p-2 flex justify-between items-center gap-2">
          <div className="flex gap-2">
            <img
              src="/assets/zaloAccount.png"
              alt="Zalo Account"
              className="size-10 rounded-full"
            />
            <div>
              <p className="text-sm">Nguyễn Huỳnh Bảo Phúc</p>
              <p className="text-white/60 text-[0.75rem] line-clamp-1">
                You: {tasks[tasks.length - 1] || "..."}
              </p>
            </div>
          </div>
          <p className="text-white/80 text-sm">{timeChatted}</p>
        </div>
        <div className="mt-2 bg-[#1D2025] text-white w-full px-20 py-2">
          <div className="flex gap-2 w-full justify-between">
            {LinkSocialMedia.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                className="flex flex-col gap-2 my-2 items-center"
                key={index}
              >
                <img src={item.src} alt="Link Item" className="size-5" />
                <div className="text-sm underline">{item.name}</div>
              </a>
            ))}
          </div>
        </div>
        <div className="bg-[#1D2025] w-full h-full mt-2 flex items-center justify-center px-1">
          <div className="flex flex-col border-2 text-white border-white rounded-md w-[90%] h-[80%] p-2 items-center">
            <h1 className="text-white text-2xl font-black">Contact Me</h1>
            <div className="flex gap-2 w-full my-1">
              <label>Name</label>
              <input
                required
                type="text"
                name="name"
                className="w-[80%] bg-[#16191D] rounded-sm indent-2 placeholder:text-white text-sm p-1 text-white focus:bg-[#1e2a37]"
                placeholder="Type your name"
              />
            </div>
            <div className="flex gap-2 w-full my-1">
              <label>Email</label>
              <input
                required
                type="email"
                name="email"
                className="w-[80%] bg-[#16191D] rounded-sm indent-2 placeholder:text-white text-sm p-1 text-white focus:bg-[#1e2a37]"
                placeholder="Type your email"
              />
            </div>
            <div className="flex gap-2 w-full my-1">
              <label>Phone</label>
              <input
                required
                type="tel"
                name="phone"
                className="w-full bg-[#16191D] rounded-sm indent-2 placeholder:text-white text-sm p-1 text-white focus:bg-[#1e2a37]"
                placeholder="Type your phone number"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-6/9 bg-[#16191D] h-full">
        <div className="h-full">
          <div className="h-1/9 bg-[#22262B] px-3 py-1 text-white flex gap-2 justify-between items-center w-full relative">
            <div className="flex items-center gap-2">
              <img
                src="/assets/zaloAccount.png"
                alt="Zalo Account"
                className="size-12 rounded-full"
              />
              <div className="flex flex-col gap-1 w-full">
                <p className="text-sm">Nguyễn Huỳnh Bảo Phúc</p>
                <Bookmark />
              </div>
            </div>
            <div className="flex items-center p-2 gap-2">
              <Phone className="hover:bg-[#1E2022] p-2 size-9 rounded-md" />
              <Video className="hover:bg-[#1E2022] p-2 size-9 rounded-md" />
              <Search className="hover:bg-[#1E2022] p-2 size-9 rounded-md" />
            </div>
          </div>
          <div className="h-4/9 overflow-y-auto relative w-full">
            <div className="w-full flex flex-col items-end gap-4">
              {tasks.map((task, index) => (
                <div
                  className="my-3 w-full flex flex-col items-end gap-2"
                  key={index}
                >
                  <div className="text-white w-full flex justify-center items-center">
                    <div className="flex items-center gap-2 mt-2 p-1 bg-gray-500 rounded-sm">
                      <span>{times[index]}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 justify-end items-end w-1/2">
                    <span className="whitespace-pre-line text-white border p-2 rounded-md border-[#2C415A] bg-[#1F344D]">
                      <div className="flex flex-col gap-2 text-white mt-2">
                        <span className="text-md line-clamp-2">{task}</span>
                        <span className="text-sm text-gray-400">
                          {formattedTime}
                        </span>
                      </div>
                    </span>
                    <img src="/assets/user.png" alt="User" className="size-8" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-4/9 bg-[#22262B] px-2 flex flex-col justify-center">
            <div className="h-1/9 w-full flex justify-between gap-2 text-white mt-1">
              <div className="flex gap-2">
                <Sticker className="size-7 hover:bg-[#1E2022] p-1 rounded-md" />
                <Image className="size-7 hover:bg-[#1E2022] p-1 rounded-md" />
                <Paperclip className="size-7 hover:bg-[#1E2022] p-1 rounded-md" />
                <IdCard className="size-7 hover:bg-[#1E2022] p-1 rounded-md" />
                <Ellipsis className="size-7 hover:bg-[#1E2022] p-1 rounded-md" />
              </div>
              {IsPending ? (
                <button
                  type="submit"
                  disabled
                  className="flex gap-2 bg-blue-500 cursor-not-allowed px-3 rounded-md items-center"
                >
                  <Loader2 className="animate-spin w-4 h-4" />
                  <p>Sending ...</p>
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex gap-2 bg-blue-500 hover:bg-blue-700 cursor-pointer px-3 rounded-md items-center"
                >
                  <p>Submit</p>
                  <Send className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="h-8/9 w-full border-t border-t-[#22262B] relative flex">
              <textarea
                required
                name="message"
                className="focus:outline-none text-gray-400 w-full whitespace-pre-line overflow-auto resize-none h-full"
                placeholder="Contact with me"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ZaloContact;
