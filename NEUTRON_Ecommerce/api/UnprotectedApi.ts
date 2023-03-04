import axios, { AxiosResponse } from 'axios';

export const unProtectedApiAsync = (
  method: string,
  version: string,
  url: string,
  data?: JSON
) => {
  return new Promise<AxiosResponse>((resolve, reject) => {
    axios({
      url: `https://paddy-solution-rp-core-server.onrender.com/${version}/${url}`,
      method,
      data
    })
      .then((res: AxiosResponse) => {
        resolve(res);
      })
      .catch((err: AxiosResponse) => {
        reject(err);
      });
  });
};
