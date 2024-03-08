type Media = "tablet" | "mobile" | "x-mobile" | "s-mobile";

const DEVICE_WIDTH: { [key in Media]: number } = {
  tablet: 991,
  mobile: 767,
  "x-mobile": 575,
  "s-mobile": 320,
};

const media = (media: Media) => (css: TemplateStringsArray) =>
  `@media screen and (max-width: ${DEVICE_WIDTH[media]}px) ${css}`;

export const tablet = media("tablet");
export const mobile = media("mobile");
export const xMobile = media("x-mobile");
export const sMobile = media("s-mobile");
