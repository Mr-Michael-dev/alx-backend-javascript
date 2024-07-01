//  returns an array of ids from a list of object

export default function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.map((item) => item.id);
}
