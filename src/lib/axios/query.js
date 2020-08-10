// Just wraps axios so we can do other stuff like log requests
import axios from 'axios';
import context from '../../app-context';
import { get } from '@0ti.me/tiny-pfp';
import logAndReturn from '../log-and-return';
import response2XXHandler from './response-2xx-handler';
import responseErrorHandler from './response-error-handler';

const instance = axios.create(
  Object.assign(
    {
      baseURL: `${get(context, 'config.apiServer.uri')}${get(
        context,
        'config.apiServer.basePath',
      )}`,
    },
    get(context, 'config.defaultAxiosArgs', {}),
  ),
);

instance.interceptors.request.use(logAndReturn);
instance.interceptors.response.use(response2XXHandler, responseErrorHandler);

export default (opts = {}) => instance(opts);
