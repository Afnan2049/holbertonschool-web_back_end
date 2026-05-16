/**
 * Filters a set for values starting with a specific string, 
 * removes that prefix, and joins them with a hyphen.
 * @param {Set} set - The Set containing string values.
 * @param {String} startString - The prefix string to look for.
 * @returns {String} A string of the modified values joined by '-'.
 */
export default function cleanSet(set, startString) {
  // Edge case: if startString is empty or not a string, return an empty string
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  // Iterate through each element in the Set
  for (const value of set) {
    // Check if the value is a string and starts with the target prefix
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Extract the rest of the string after the prefix
      parts.push(value.slice(startString.length));
    }
  }

  // Join all extracted parts together with a hyphen
  return parts.join('-');
}
