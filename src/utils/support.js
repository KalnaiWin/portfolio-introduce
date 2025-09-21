export const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  return `${hours.toString().padStart(2, "0")}:${now
    .getMinutes()
    .toString()
    .padStart(2, "0")} ${ampm}`;
};
