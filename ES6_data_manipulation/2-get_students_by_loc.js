/**
 * Filters an array of students by a specific city location.
 * @param {Array} students - The array of student objects.
 * @param {String} city - The city to filter by.
 * @returns {Array} An array of student objects located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  // Check if the input is an array; if not, return an empty array to be safe
  if (!Array.isArray(students)) {
    return [];
  }

  // Use filter to keep only students whose location matches the given city
  return students.filter((student) => student.location === city);
}
