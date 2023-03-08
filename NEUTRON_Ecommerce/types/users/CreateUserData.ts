import { UserRoles } from '../enums/UserRoles';
import { UserBaseModel } from './UserBaseModel';

export class CreateUserData extends UserBaseModel {
  uid: string;
  constructor(
    uid: string,
    firstName: string,
    lastName: string,
    mobile: number,
    address: string,
    profileImageUrl: string,
    role: UserRoles
  ) {
    super(firstName, lastName, mobile, address, profileImageUrl, role);
    this.uid = uid;
  }
}
