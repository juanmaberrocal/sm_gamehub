import {
    API_V1_URL,
    apiRequest
} from "../../utils/api";

class UsersApi {
    static post(data){
        return apiRequest(`${API_V1_URL}/users`, "POST", data)
            .then((response) => response)
            .catch((error) => {
                throw new Error(error);
            });
    }

    static put(id, data){
        return apiRequest(`${API_V1_URL}/users/${id}`, "PUT", data)
            .then((response) => response)
            .catch((error) => {
                throw new Error(error);
            });
    }

    static register(id){
        return apiRequest(`${API_V1_URL}/users/${id}/register`, "POST")
            .then((response) => response)
            .catch((error) => {
                throw new Error(error);
            });
    }
}

export default UsersApi;
