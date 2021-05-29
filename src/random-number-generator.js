const getRandomNumber = (min, max) => {
  const innerMin = Math.ceil(min);
  const innerMax = Math.floor(max);
  return Math.floor(Math.random() * (innerMax - innerMin + 1)) + innerMin;
};

export default getRandomNumber;
