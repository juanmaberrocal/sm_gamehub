import {
	required,
	password,
	email
} from "../../utils/validators";

const validationRules = {
	email: Object.assign({}, required, email),
	password: Object.assign({}, required, password)
};

export default validationRules;
