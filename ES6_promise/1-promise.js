/**
 * Simulates an API call that resolves or rejects based on a boolean parameter.
 * @param {boolean} success - Determines whether the API call succeeds.
 * @returns {Promise} Resolves with a success object or rejects with an Error.
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
