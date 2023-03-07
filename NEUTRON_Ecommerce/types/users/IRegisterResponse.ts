import { UserRoles } from './../enums/UserRoles';
export interface IRegisterResponse {
  uid: string;
  role: UserRoles;
}
