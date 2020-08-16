export default (context) => (content) => {
  context.logger.info(content);

  return content;
};
