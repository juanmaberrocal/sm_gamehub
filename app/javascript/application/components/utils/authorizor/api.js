import Auth               from "j-toker";
import { AUTH_URL }       from "../../../utils/api";
import { ERROR_MESSAGES } from "../../../utils/messages";

Auth.configure({
    apiUrl: AUTH_URL
});

class AuthorizeApi {
    static signup(email, password, password_confirmation){
        return Auth.emailSignUp({
            email: email,
            password: password,
            password_confirmation: password_confirmation
        }).then((response) => {
                if (response.status === "success"){
                    return response.data;
                }

                throw new Error(ERROR_MESSAGES.couldNotSignUp);
            })
            .catch((error) => {
                let errorMsg;
                try {
                    errorMsg = error.data.errors.full_messages[0];
                } catch(e) {
                    errorMsg = error.reason;
                }

                throw new Error(errorMsg);
            });
    }
    
    static login(email, password){
        return Auth.emailSignIn({
            email: email,
            password: password
        }).then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(error.reason);
            });
    }

    static logout(){
        return Auth.signOut()
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw new Error(error.reason);
            });
    }

    static authorize(){
        return Auth.validateToken()
            .then((response) => {
                if (response.signedIn === true){
                    return response;
                }
                
                throw new Error(ERROR_MESSAGES.notSignedIn);
            })
            .catch((error) => {
                throw new Error(error.reason);
            });
    }
}

export default AuthorizeApi;
