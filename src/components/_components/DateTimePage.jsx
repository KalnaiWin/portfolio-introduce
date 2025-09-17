import React from "react";

const DateTimePage = () => {
  const DateTime = new Date();
  const formattedDate =
    `${DateTime.getDate().toString().padStart(2, "0")}/` +
    `${(DateTime.getMonth() + 1).toString().padStart(2, "0")}/` +
    `${DateTime.getFullYear()}`;

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = days[DateTime.getDay()];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = months[DateTime.getMonth()];

  const hours = DateTime.getHours();

  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedTime = `${DateTime.getHours()
    .toString()
    .padStart(2, "0")}:${DateTime.getMinutes()
    .toString()
    .padStart(2, "0")} ${ampm}`;

  return (
    <div className="hover:bg-gray-400 p-1 w-fit rounded-md transition-all flex text-[0.75rem] flex-col group relative">
      <p>{formattedDate}</p>
      <p>{formattedTime}</p>
      <span className="absolute bottom-full text-xs bg-black text-white right-0 mb-2 rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:delay-1000 whitespace-nowrap">
        {dayName}
        {", "}
        {monthName}
        {DateTime.getDate()}
        {", "}
        {DateTime.getFullYear()}
      </span>
    </div>
  );
};

export default DateTimePage;
