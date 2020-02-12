window.matchMedia =
  window.matchMedia ||
  ((): any => ({
    matches: false,
    addListener: () => undefined,
    removeListener: () => undefined,
  }));

export default {};
