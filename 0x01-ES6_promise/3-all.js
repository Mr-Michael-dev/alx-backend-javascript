/*
 * collectively resolve all promises and
 * log body firstName lastName to the console.
*/
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((responses) => {
      const [photoResponse, userResponse] = responses;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
      return new Error(error);
    });
}
