const getOrdinalSuffixOf = (ordinal: number) =>
  ordinal % 10 === 1 && ordinal % 100 !== 11
    ? 'st'
    : ordinal % 10 === 2 && ordinal % 100 !== 12
    ? 'nd'
    : ordinal % 10 === 3 && ordinal % 100 !== 13
    ? 'rd'
    : 'th';

export default getOrdinalSuffixOf;
