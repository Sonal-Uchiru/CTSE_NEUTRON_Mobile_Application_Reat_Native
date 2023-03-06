import { AxiosResponse } from 'axios';
export interface IPublicRepository {
  addAsync(url:string, data:JSON): Promise<AxiosResponse>;
  updateAsync(url:string, data:JSON): Promise<AxiosResponse>;
  deleteAsync(url:string): Promise<AxiosResponse>;
  getAsync(url:string): Promise<AxiosResponse>;
}
