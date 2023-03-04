import axios, { AxiosResponse } from 'axios';

export const authApiAsync = (data: any) => {
  return new Promise<AxiosResponse>((resolve, reject) => {
    axios({
      url: `http://localhost:8090/api/v1.0/auth`,
      method: 'POST',
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

// https://paddy-solution-rp-core-server.onrender.com/api/v1.0/auth
