/**
 * Creates and returns a Map containing a list of groceries and their quantities.
 * @returns {Map<string, number>} A Map with grocery names as keys and quantities as values.
 */
export default function groceriesList() {
  const finalMap = new Map();

  finalMap.set('Apples', 10);
  finalMap.set('Tomatoes', 10);
  finalMap.set('Pasta', 1);
  finalMap.set('Rice', 1);
  finalMap.set('Banana', 5);

  return finalMap;
}
