import { UserRoles } from '../enums/UserRoles';
import { UserBaseModel } from './UserBaseModel';

export class UpdateUserData extends UserBaseModel {
  constructor(
    firstName: string,
    lastName: string,
    mobile: number,
    address: string,
    profileImageUrl: string,
  ) {
    super(firstName, lastName, mobile, '', address, profileImageUrl, 0);
  }
}
