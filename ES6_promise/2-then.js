/**
 * Appends resolution, rejection, and settlement handlers to a given Promise.
 * @param {Promise} promise - The promise to handle.
 * @returns {Promise} A chained promise returning the specified objects.
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
