import { UserRoles } from '../enums/UserRoles';

export class UserBaseModel {
  firstName: string;
  lastName: string;
  mobile: number;
  email:string;
  address: string;
  profileImageUrl: string;
  role: UserRoles;

  constructor(
    firstName: string,
    lastName: string,
    mobile: number,
    email: string,
    address: string,
    profileImageUrl: string,
    role: UserRoles
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.mobile = mobile;
    this.email = email;
    this.address = address;
    this.profileImageUrl = profileImageUrl;
    this.role = role;
  }
}
