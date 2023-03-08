import { UserRoles } from '../enums/UserRoles';
import { UserBaseModel } from './UserBaseModel';

export class UserModel extends UserBaseModel {
  email: string;

  constructor(
    email: string,
    firstName: string,
    lastName: string,
    mobile: number,
    address: string,
    profileImageUrl: string,
    role: UserRoles
  ) {
    super(firstName, lastName, mobile, address, profileImageUrl, role);
    this.email = email;
  }
}
