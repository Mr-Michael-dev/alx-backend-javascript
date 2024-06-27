// Return a Promise
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('resolved');
      } else {
        reject(Error('An error occurred'));
      }
    }, 1500);
  });
}
