//@flow
import axios from 'axios';

type RequestOptionType = {
  method: string,
  headers: Object,
  body: string,
  responseType: string,
};

type RequestType = {
  method: string,
  url: string,
  headers: Object,
  body: Object,
  shouldStringify: boolean,
};

function requestInner(url: string, options: RequestOptionType): Object {
  const config = {
    method: 'GET',
    ...options,
  };

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...config.headers,
  };
  const params = {
    headers,
    method: config.method,
    url: `${url}`,
    responseType: options.responseType || 'json',
    data: options.body,
  };

  return axios(params)
    .then(async (response: Object): Object => {
      if (response) {
        const {status, data} = response;
        return {data: data, responseMsg: defaultErrorMessage(status), status};
      } else {
        throw new Error(404);
      }
    })
    .catch(async (status: number): Object => {
      const message = defaultErrorMessage(status);
      const err = {
        message,
        statusCode: status,
      };
      return {err};
    });
}

function defaultErrorMessage(msg) {
  return msg;
}

export const request = ({
  method,
  url,
  headers,
  body,
  responseType,
  shouldStringify = true,
}: RequestType): Object =>
  requestInner(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: shouldStringify ? JSON.stringify(body) : body,
    responseType,
  });
