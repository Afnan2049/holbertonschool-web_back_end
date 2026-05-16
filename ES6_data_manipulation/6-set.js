/**
 * Creates a Set from an array, automatically removing duplicates.
 * @param {Array} array - The array of elements to convert.
 * @returns {Set} A Set containing the unique elements from the array.
 */
export default function setFromArray(array) {
  return new Set(array);
}
