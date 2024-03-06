type Media = "tablet" | "mobile";

const DEVICE_WIDTH: { [key in Media]: number } = {
  tablet: 991,
  mobile: 575,
};

const media = (media: Media) => (css: TemplateStringsArray) =>
  `@media screen and (max-width: ${DEVICE_WIDTH[media]}px) ${css}`;

export const tablet = media("tablet");
export const mobile = media("mobile");
