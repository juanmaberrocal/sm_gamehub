import {
    required
} from "../../utils/validators";

const validationRules = {
    0: {
        name: Object.assign({}, required),
        nickname: Object.assign({}, required)
    },
    1: {
        // optional step
    },
    2: {
        // optional step
    },
    3: {
        // TODO
    }
};

export default validationRules;
