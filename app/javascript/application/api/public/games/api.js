import {
    PUBLIC_URL,
    publicRequest
} from "../../../utils/api";

class GamesApi {
    static fetch(){
        return publicRequest(`${PUBLIC_URL}/games`)
            .then((response) => response)
            .catch((error) => {
                throw new Error(error);
            });
    }
}

export default GamesApi;
