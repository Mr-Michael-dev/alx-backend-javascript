// Return a Promise
export default function handleResponseFromAPI(promise) {
  promise.then(resolve => {
    console.log('Got a response from the API');
    return (
      {
        status: 200,
        body: 'Success',
      });
  }).catch(reject => {
    console.log('Got a response from the API');
    return new Error()
  });
}
