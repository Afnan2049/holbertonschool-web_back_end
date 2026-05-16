/**
 * Checks if all elements from an array exist within a given set.
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array containing elements to look for.
 * @returns {Boolean} True if all array elements are in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  // Use .every() to ensure every single item in the array passes the condition
  return array.every((value) => set.has(value));
}
