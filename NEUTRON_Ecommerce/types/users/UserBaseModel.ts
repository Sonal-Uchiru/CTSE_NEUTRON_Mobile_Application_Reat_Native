import { UserRoles } from '../enums/UserRoles';

export class UserBaseModel {
  firstName: string;
  lastName: string;
  mobile: number;
  address: string;
  profileImageUrl: string;
  role: UserRoles;

  constructor(
    firstName: string,
    lastName: string,
    mobile: number,
    address: string,
    profileImageUrl: string,
    role: UserRoles
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobile = mobile;
    this.address = address;
    this.profileImageUrl = profileImageUrl;
    this.role = role;
  }
}
