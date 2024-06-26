// Return a Promise
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const name = true;
    if (name) {
      resolve('resolved');
    } else {
      reject(Error('An error occurred'));
    }
  });
}
