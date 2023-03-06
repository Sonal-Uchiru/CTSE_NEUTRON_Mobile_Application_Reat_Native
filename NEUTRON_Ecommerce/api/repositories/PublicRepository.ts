import { IPublicRepository } from './IPublicRepository';
import axios, { AxiosResponse } from 'axios';

class PublicRepository implements IPublicRepository {
  addAsync(url: string, data: JSON): Promise<AxiosResponse> {
    throw new Error('Method not implemented.');
  }
  updateAsync(url: string, data: JSON): Promise<AxiosResponse> {
    throw new Error('Method not implemented.');
  }
  deleteAsync(url: string): Promise<AxiosResponse> {
    throw new Error('Method not implemented.');
  }
  getAsync(url: string): Promise<AxiosResponse> {
    return new Promise<AxiosResponse>((resolve, reject) => {
      axios({
        url: `${url}`,
        method: 'GET'
      })
        .then((res: AxiosResponse) => {
          resolve(res);
        })
        .catch((err: AxiosResponse) => {
          reject(err);
        });
    });
  }
}

export default new PublicRepository();
