export const getTime = time => {
  const currentDate = new Date(time);
  const hours = currentDate.getHours();
  const minutes =
    currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();

  return `${hours}:${minutes}`;
};

export const getCurrentDate = () => {
  const currentDate = new Date();
  const month =
    currentDate.getMonth() < 10 ? `0${currentDate.getMonth() + 1}` : currentDate.getMonth();

  return `${
    currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate()
  }/${month}`;
};
