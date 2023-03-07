import { Auth } from './../../utils/firebase/Configuration';
import { createUserWithEmailAndPassword } from "firebase/auth";
class AuthenticationTest{
    async registerAsync():Promise<void>{
        createUserWithEmailAndPassword(Auth, "sonal@gmail.com", "Sonal123$")
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
}

export default new AuthenticationTest();



