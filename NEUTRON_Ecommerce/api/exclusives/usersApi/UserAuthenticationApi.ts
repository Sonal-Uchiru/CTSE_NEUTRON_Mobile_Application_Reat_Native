import { AxiosResponse } from 'axios';
import { ILoginData } from '../../../types/users/ILoginData';
import { authApiAsync } from '../../AuthApi';
import { ILoginResponse } from '../../../types/users/ILoginResponse';

class UserAuthenticationApi {
    public async loginAsync(data : ILoginData): Promise<AxiosResponse<ILoginResponse>>{
        return await authApiAsync(data);
    }
}

export default new UserAuthenticationApi();