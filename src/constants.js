/** All units are in rems */
export const BREAKPOINTS = {
  phoneMax: 600 / 16,
  tabletMax: 950 / 16,
  laptopMax: 1300 / 16,
};

export const QUERIES = {
  phoneAndBelow: `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  laptopAndBelow: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
}

export const GAPS = {
  /**
   * gap is clamped to be:
   * - @ 400px viewport width: minimum of 1rem == 16px
   * - @ 720px viewport width: maximum of 2rem == 32px
   */
  responsiveSmall: `clamp(1rem, 5vw - 0.25rem, 2rem)`,
  /**
   * gap is clamped to be:
   * - @ 900px viewport width: minimum of 1.5rem == 24px
   * - @ 1500px viewport width: maximum of 6rem == 96px
   */
  responsiveLarge: `clamp(1.5rem, 12vw - 5.25rem, 6rem)`,
};

export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};
