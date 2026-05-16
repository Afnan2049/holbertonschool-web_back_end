/**
 * Creates an Int8 typed array inside an ArrayBuffer and sets a value at a specific position.
 * @param {Number} length - The size of the ArrayBuffer in bytes.
 * @param {Number} position - The index position to insert the value.
 * @param {Number} value - The Int8 value to insert.
 * @returns {DataView} A DataView pointing to the allocated ArrayBuffer.
 * @throws {Error} Throws "Position outside range" if the position is invalid.
 */
export default function createInt8TypedArray(length, position, value) {
  // Check if the position is within the bounds of the buffer size
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Allocate raw binary memory of the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to manipulate the raw bytes of the buffer
  const view = new DataView(buffer);

  // Set the 8-bit signed integer (Int8) at the requested index position
  view.setInt8(position, value);

  return view;
}
