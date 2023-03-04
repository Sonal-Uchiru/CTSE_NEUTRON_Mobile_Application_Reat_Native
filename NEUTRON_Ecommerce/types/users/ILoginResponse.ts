import { IBaseResponse } from "../IBaseResponse";

export interface ILoginResponse extends IBaseResponse{
    token : string;
    role : number;
}