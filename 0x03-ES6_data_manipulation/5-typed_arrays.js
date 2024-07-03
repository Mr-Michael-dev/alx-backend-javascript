//  returns a new ArrayBuffer with an Int8 value at a specific position

export default function createInt8TypedArray(length, position, value) {
  // Create an ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the ArrayBuffer
  const view = new DataView(buffer);

  // Check if the position is within the valid range
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  // Set the value at the specified position
  view.setInt8(position, value);

  return view;
}
