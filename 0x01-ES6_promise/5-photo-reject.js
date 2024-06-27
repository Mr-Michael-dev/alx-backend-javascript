// returns a rejected promise

export default function uploadPhoto(filename) {
  return Promise.reject(
    new Error(`${fileName} cannot be processed`)
  );
}
