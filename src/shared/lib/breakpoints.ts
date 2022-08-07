const size = {
  tablet: '640px',
  laptop: '1220px',
  laptopL: '1440px',
};
export const device = {
  tablet: `@media only screen and (min-width: ${size.tablet})`,
  laptop: `@media only screen and (min-width: ${size.laptop})`,
  laptopL: `@media only screen and (min-width: ${size.laptopL})`,
};

export const breakpoints = {
  size,
  device,
};
