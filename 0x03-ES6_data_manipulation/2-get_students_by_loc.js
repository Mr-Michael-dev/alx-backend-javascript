// returns an array of objects who are located in a specific city

export default function getStudentsByLocation(array, city) {
  return array.filter((item) => item.location === city);
}
