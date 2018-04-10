import { genSalt, hash } from 'bcryptjs';
import Fingerprint2 from 'fingerprintjs2';

const getFingerprint = () =>
  new Promise(resolve => {
    new Fingerprint2().get(result => resolve(result));
  });

export const getDeviceToken = async procesDeviceToken => {
  const deviceToken = await getFingerprint();
  if (procesDeviceToken) {
    procesDeviceToken(deviceToken);
  }
  return deviceToken;
};

export function generateVarifyCode(fact) {
  return new Promise((resolve, reject) => {
    genSalt(6, (err, salt) => {
      if (err) {
        reject(err);
      }
      hash(fact, salt, (hashErr, hashIn) => {
        if (hashIn) {
          const varifyCode = hashIn.substring(15, 21);
          resolve(varifyCode);
        }
        reject(hashErr);
      });
    });
  });
}

export async function generateBrowserId() {
  try {
    const deviceToken = await getDeviceToken();
    return generateVarifyCode(deviceToken);
  } catch (err) {
    throw new Error(err);
  }
}
