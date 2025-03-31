export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || startString === '') {
    return '';
  }

  const filteredValues = [...set]
    .filter((value) => typeof value === 'string'
      && value !== ''
      && value.startsWith(startString))
    .map((value) => value.substring(startString.length));

  return filteredValues.join('-');
}
