const colors = {
  // Identidade visual
  orange: '#f7902a',
  darkOrange: '#f9564b',
  white: '#fff',

  // Escalas de preto
  dark: '#4c4c4c',
  darkGray: '#797979',
  gray: '#c8c8c8',
  lightGray: '#e6e6e6',

  // Cores de apoio
  green: '#2dac3a',
  red: '#da3333',
  pink: '#d75f8f',
  yellow: '#fbae39',
  blue: '#00adef',
  brown: '#7a5a28',
  darkBlue: '#1b6da8',
};

export const breakpoints = {
  mobile: '30em',
  largeMobile: '600px',
  tablet: '48em',
  desktop: '64em',
  largeDesktop: '75em',
  xlargeDesktop: '83em',
};

export const defaultTheme = {
  colors: {
    ...colors,

    // Scaffolding
    primary: colors.orange,
    secondary: colors.green,

    // Layout
    bodyBackground: colors.lightGray,
    textColor: colors.dark,
  },

  font: {
    // family
    primary: '"Open Sans", sans-serif',

    // Size
    defaultSize: '10px',

    // Weight
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
  },

  easing: {
    linear: 'cubic-bezier(0.25, 0.25, 0.75, 0.75)',
    ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
    easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    easeInQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    easeInSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    easeInExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
    easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    easeOutQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    easeOutSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    easeOutExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
    easeOutCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
    easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeInOutQuart: 'cubic-bezier(0.77, 0, 0.175, 1)',
    easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
    easeInOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    easeInOutExpo: 'cubic-bezier(1, 0, 0, 1)',
    easeInOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
  },

  scafolding: {
    headerHeight: '70px',
  },

  breakpoints,
};
