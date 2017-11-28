import {
	required,
	password,
	email,
	match
} from "../../utils/validators";

const validationRules = {
	email: Object.assign({}, required, email),
	password: Object.assign({}, required, password),
	password_confirmation: Object.assign({}, required, password, match)
};

export default validationRules;
