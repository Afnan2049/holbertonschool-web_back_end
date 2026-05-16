/**
 * Updates the grades of students in a specific city.
 * @param {Array} students - The array of student objects.
 * @param {String} city - The city to filter by.
 * @param {Array} newGrades - Array of grade objects containing studentId and grade.
 * @returns {Array} A new array of student objects with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    // Step 1: Filter students by the specified city
    .filter((student) => student.location === city)
    // Step 2: Map over the filtered students to attach or update their grade
    .map((student) => {
      // Find the grade object corresponding to the current student's id
      const gradeObj = newGrades.find((g) => g.studentId === student.id);

      return {
        ...student,
        // If a grade object is found, use its grade; otherwise, default to 'N/A'
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
