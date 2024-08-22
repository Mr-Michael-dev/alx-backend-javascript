// round the two arguments and return the sum

function calculateNumber(type, a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error();
  }
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  if (type === 'SUM') {
    return roundedA + roundedB;
  }
  if (type === 'SUBTRACT') {
    return roundedA - roundedB;
  }
  if (type === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error';
    }
    return roundedA / roundedB;
  }

  throw new Error('Invalid operation type');
}

module.exports = calculateNumber;
