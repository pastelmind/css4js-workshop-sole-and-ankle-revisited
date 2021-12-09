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

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};
