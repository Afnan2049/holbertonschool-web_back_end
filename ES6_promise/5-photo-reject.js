/**
 * Returns an instantly rejected promise with a dynamic error message.
 * @param {string} fileName - The name of the file that failed validation.
 * @returns {Promise} A rejected promise containing the Error object.
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
