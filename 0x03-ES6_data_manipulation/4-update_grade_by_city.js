// returns an array of students for a specific city with their new grade using filter and map

export default function updateStudentGradeByCity(list, city, newGrades) {
  if (!Array.isArray(list) || !Array.isArray(newGrades)) {
    return [];
  }

  // Helper function to insert grades
  const insertGrades = (student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  };

  return list.filter((student) => student.location === city)
    .map(insertGrades);
}
