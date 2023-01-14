export const themes = {
  Spirals: {
    multiplier: 60,
    inverseSpeed: 800,
    themeX: (ndex, multiplier, num) =>
      Math.sin(num * (multiplier / (ndex + 1))) * Math.sin(num * (ndex + 1)),
    themeY: (ndex, multiplier, num) =>
      Math.cos(num * (multiplier / (ndex + 1))) * Math.sin(num * (ndex + 1)),
    themeZ: (ndex, multiplier, num) =>
      Math.cos(num * (multiplier / (ndex + 1))) * Math.sin(num * (ndex + 1)),
  },
  Harmony: {
    multiplier: 90,
    inverseSpeed: 2000,
    themeX: (ndex, multiplier, num) =>
      Math.cos((2 * Math.PI * ndex) / multiplier + num) * 2,
    themeY: (ndex, multiplier, num) =>
      Math.sin((2 * Math.PI * ndex) / multiplier + num) * 2,
    themeZ: (ndex, multiplier, num) => Math.sin(num * (ndex + 1)),
  },
};
