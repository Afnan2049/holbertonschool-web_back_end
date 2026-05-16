/**
 * Calculates the sum of all student IDs.
 * @param {Array} students - The array of student objects.
 * @returns {Number} The total sum of all student IDs.
 */
export default function getStudentIdsSum(students) {
  // Check if input is an array; if not, return 0
  if (!Array.isArray(students)) {
    return 0;
  }

  // Use reduce to accumulate the total of all student IDs
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
