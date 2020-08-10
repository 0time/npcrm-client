export default (error) => {
  if (error.response) {
    console.error('Error response:', error.response);
  }

  return Promise.reject(error);
};
