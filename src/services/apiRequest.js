// @flow
import { request } from '../utils/';

type RequestType = {
  method: string,
  url: string,
  headers: Object,
  body: Object,
  shouldStringify: boolean,
};

const apiRequest = ({
  method,
  url,
  headers,
  body,
  shouldStringify = true,
}: RequestType): Object =>
  request(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: shouldStringify ? JSON.stringify(body) : body,
  });

export { apiRequest as to };
