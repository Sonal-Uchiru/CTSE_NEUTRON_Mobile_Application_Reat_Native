import axios, { AxiosResponse } from 'axios';
import ExpoLocalStorage from '../authentication/secure_stores/ExpoLocalStorage';

export const protectedApiAsync = (
  method: string,
  version: string,
  url: string,
  data?: JSON
) => {
  return new Promise<AxiosResponse>((resolve, reject) => {
    ExpoLocalStorage.getTokenFromLocalStorageAsync()
      .then((token) => {
        axios({
          url: `https://paddy-solution-rp-core-server.onrender.com/api/${version}/protected/${url}`,
          method,
          headers: {
            Authorization: 'Bearer ' + token
          },
          data
        })
          .then((res: AxiosResponse) => resolve(res))
          .catch((err: AxiosResponse) => reject(err));
      })
      .catch((err) => reject(err));
  });
};
