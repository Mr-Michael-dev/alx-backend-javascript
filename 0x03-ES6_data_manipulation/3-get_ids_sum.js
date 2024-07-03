//  gets the sum of all students id from the array of objects using reduce

export default function getStudentIdsSum(list) {
  if (!Array.isArray(list)) {
    return 0;
  }
  return list.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
