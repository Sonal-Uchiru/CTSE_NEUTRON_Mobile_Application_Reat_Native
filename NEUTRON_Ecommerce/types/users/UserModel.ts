import { UserRoles } from '../enums/UserRoles';
import { UserBaseModel } from './UserBaseModel';

export class UserModel extends UserBaseModel {
  uid: string;

  constructor(
    uid: string,
    firstName: string,
    lastName: string,
    mobile: number,
    email: string,
    address: string,
    profileImageUrl: string,
    role: UserRoles
  ) {
    super(firstName, lastName, mobile, email, address, profileImageUrl, role);
    this.uid = uid;
  }
}
