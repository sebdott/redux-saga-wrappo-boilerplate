/* @flow */
import axios from 'axios';
import split from 'lodash/split';

export function parseError(error: string): string {
  return error || 'Something went wrong';
}

function checkStatus(response: Object): any {
  let responseMessage = '';
  if (!response) {
    responseMessage = '服务器中出现的错误';
    return new Error(`${responseMessage}::400`);
  }
  const { status } = response;

  if (status >= 200 && status < 300) {
    switch (status) {
      case 201:
        responseMessage = '正常；紧接 POST 命令';
        // message.info(responseMessage);
        break;
      case 202:
        responseMessage = '处理尚未完成';
        // message.info(responseMessage);
        break;
      case 203:
        responseMessage = '返回的信息只是一部分';
        // message.info(responseMessage);
        break;
      case 204:
        responseMessage = '正常；已接收请求，但不存在要回送的信息';
        return { result: { status: 204 } };
      default:
        return response;
    }
  } else if (status >= 300 && status < 400) {
    switch (status) {
      case 301:
        responseMessage = '请求数据已永久性转移';
        return new Error(`${responseMessage}::${status}`);
      case 302:
        responseMessage = '请求的数据临时具有不同';
        return new Error(`${responseMessage}::${status}`);
      case 303:
        responseMessage = '请参阅其它URI';
        return new Error(`${responseMessage}::${status}`);
      case 304:
        responseMessage = '未修改 — 未按预期修改文档';
        return new Error(`${responseMessage}::${status}`);
      case 305:
        responseMessage =
          '使用代理 — 必须通过位置字段中提供的代理来访问请求的资源';
        return new Error(`${responseMessage}::${status}`);
      case 306:
        responseMessage = '不再使用；保留此代码以便将来使用';
        return new Error(`${responseMessage}::${status}`);
      default:
        responseMessage = '重定向';
        return new Error(`${responseMessage}::${status}`);
    }
  } else if (status >= 400 && status < 500) {
    switch (status) {
      case 400:
        return response.json().then((JSON: Object): Error => {
          responseMessage = JSON.message || '客户机中出现的错误';
          return new Error(`${responseMessage}::${status}`);
        });
      case 401:
        responseMessage = '请先登入再尝试';
        return new Error(`${responseMessage}::${status}`);
      case 402:
        responseMessage = '需要付款，计费系统已有效';
        return new Error(`${responseMessage}::${status}`);
      case 403:
        responseMessage = '禁止访问';
        return new Error(`${responseMessage}::${status}`);
      case 404:
        responseMessage = '找不到请求的数据';
        return new Error(`${responseMessage}::${status}`);
      case 405:
        responseMessage = '资源被禁止';
        return new Error(`${responseMessage}::${status}`);
      case 406:
        responseMessage = '请求无法接受';
        return new Error(`${responseMessage}::${status}`);
      case 407:
        responseMessage = '要求代理身份验证';
        return new Error(`${responseMessage}::${status}`);
      case 410:
        responseMessage = '永久性禁止';
        return new Error(`${responseMessage}::${status}`);
      case 412:
        responseMessage = '先决条件失败';
        return new Error(`${responseMessage}::${status}`);
      case 414:
        responseMessage = '请求URI太长';
        return new Error(`${responseMessage}::${status}`);
      case 415:
        responseMessage = '介质类型不受支持';
        return new Error(`${responseMessage}::${status}`);
      case 422:
        return response.json().then((JSON: Object): Object => {
          responseMessage = JSON.message || '客户机中出现的错误';
          return new Error(`${responseMessage}::${status}`);
        });
      default:
        responseMessage = '客户机中出现的错误';
        return new Error(`${responseMessage}::${status}`);
    }
  } else if (status >= 500) {
    switch (status) {
      case 500:
        responseMessage = '内部错误，服务器不能完成请求';
        return new Error(`${responseMessage}::${status}`);
      case 501:
        responseMessage = '服务器不支持请求的工具';
        return new Error(`${responseMessage}::${status}`);
      case 502:
        responseMessage = '错误网关';
        return new Error(`${responseMessage}::${status}`);
      case 503:
        responseMessage = '服务器过载或维护';
        return new Error(`${responseMessage}::${status}`);
      case 504:
        responseMessage = '服务器请求超时';
        return new Error(`${responseMessage}::${status}`);
      default:
        responseMessage = '服务器中出现的错误';

        return new Error(`${responseMessage}::${status}`);
    }
  }
  return responseMessage;
}

type RequestOptionType = {
  method: string,
  headers: Object,
  body: string,
};

export function request(url: string, options: RequestOptionType): Object {
  const config = {
    method: 'GET',
    ...options,
  };
  const errors = [];
  if (!url) {
    errors.push('url');
  }

  if (
    !config.payload &&
    (config.method !== 'GET' && config.method !== 'DELETE')
  ) {
    errors.push('payload');
  }

  if (errors.length) {
    throw new Error(`Error! You must pass \`${errors.join('`, `')}\``);
  }

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...config.headers,
  };
  const params = {
    headers,
    method: config.method,
    url: `${url}`,
    responseType: 'json',
    data: '',
  };

  if (params.method !== 'GET') {
    params.data = JSON.stringify(config.payload);
  }
  return axios(params)
    .then(async (response: Object): Object => {
      if (response) {
        return checkStatus(response);
      } else {
        throw new Error('Error');
      }
    })
    .then((data: Object): Object => ({ data }))
    .catch(async ({ response }: Object): Object => {
      const message = checkStatus(response);
      const msgArray = split(message, '::');
      const err = {
        message: msgArray[0],
        statusCode: msgArray[1],
      };
      return { err };
    });
}
