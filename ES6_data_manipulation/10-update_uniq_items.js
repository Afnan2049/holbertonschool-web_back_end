/**
 * Updates a grocery map by changing any item with a quantity of 1 to 100.
 * @param {Map} map - The Map object containing grocery items and quantities.
 * @returns {Map} The updated Map object.
 * @throws {Error} Throws "Cannot process" if the argument is not a Map.
 */
export default function updateUniqueItems(map) {
  // Check if the argument is an instance of a Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate through the map entries and update the value if it equals 1
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });

  return map;
}
