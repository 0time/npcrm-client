import query from '../../lib/query';

export default (opts = {}) =>
  query(
    Object.assign(
      {
        method: 'get',
        url: '/customer',
      },
      opts,
    ),
  );
