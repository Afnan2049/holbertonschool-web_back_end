/**
 * Transforms an array of student objects into an array of their IDs.
 * @param {Array} listStudents - The array of student objects.
 * @returns {Array} An array of IDs, or an empty array if input is invalid.
 */
export default function getListStudentIds(listStudents) {
  // Check if the input is actually an array
  if (!Array.isArray(listStudents)) {
    return [];
  }

  // Use map to extract the 'id' property from each object
  return listStudents.map((student) => student.id);
}
