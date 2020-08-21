export default (context) => (error) => {
  if (error.response) {
    context.logger.error('Error response:', error.response);
  }

  return Promise.reject(error);
};
