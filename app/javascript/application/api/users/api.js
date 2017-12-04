import {
    API_URL,
    apiRequest
} from "../../utils/api";

class UsersApi {
    static register(id){
        return apiRequest(`${API_URL}/users/register/${id}`)
            .then((response) => response)
            .catch((error) => {
                throw new Error(error);
            });
    }
}

export default UsersApi;
