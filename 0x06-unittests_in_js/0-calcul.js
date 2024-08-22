// round the two arguments and return the sum

function calculateNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error();
  }
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  return roundedA + roundedB;
}

module.exports = calculateNumber;
