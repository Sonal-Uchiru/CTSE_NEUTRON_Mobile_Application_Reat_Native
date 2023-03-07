// import { IRegisterData } from './../../types/users/IRegisterData';
// import { Auth } from '../../utils/firebase/Configuration';
// import { UserCredential, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { IRegisterResponse } from '../../types/users/IRegisterResponse';

// class AuthenticationRepository {
//   async registerAsync(
//     userData:IRegisterData
//   ): Promise<IRegisterResponse> {
//     try {
//       const user: UserCredential = await createUserWithEmailAndPassword(
//         Auth,
//         userData.email,
//         userData.password
//       );

//       const updatedUser:IRegisterResponse = await this.createUserAccountAsync(user, userData);

//       return updatedUser;

//     } catch (error) {
//       throw new Error((error as Error).message);
//     }
//   }

//   async createUserAccountAsync(user: UserCredential, userData:IRegisterData): Promise<IRegisterResponse> {
//     try {
//       await updateProfile(user, {})
//     } catch (error) {
//       throw new Error((error as Error).message);
//     }
//   }
// }

// export default new AuthenticationRepository();
