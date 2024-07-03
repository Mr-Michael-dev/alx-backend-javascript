// returns a string of all the set values that start with a specific string (startString)

export default function cleanSet(set, startString) {
  // Ensure startString is not empty
  if (startString === '') {
    return '';
  }

  return Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.slice(startString.length))
    .join('-');
}
