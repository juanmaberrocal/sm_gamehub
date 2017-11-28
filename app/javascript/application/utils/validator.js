const validateFunc = {
	match: (value, opts) => {
		if (opts.test(value)){
			return true;
		}
		return false;
	},
	minLength: (value, opts) => {
		if (validateFunc.required(value, true)
			&& value.length >= opts){
			return true;
		}
		return false;
	},
	required: (value, opts) => {
		if (value !== undefined &&
			value !== null &&
			value !== ""){
			return true;
		}
		return false;
	}
};

const validateMsg = {
	match: (opts) => {
		return "Invalid value.";
	},
	minLength: (opts) => {
		return "This field must be at least " + opts + " characters long.";
	},
	required: (opts) => {
		return "This field is required.";
	}
};

export const validate = (valueMap, valueRules) => {
	let errors = {};

	for (let field of Object.keys(valueMap)){
		const value = valueMap[field];
		const rules = valueRules[field];
		
		if (typeof rules === "undefined"){
			continue;
		}

		for (let rule of Object.keys(rules)){
			const ruleConfig = rules[rule];
			const isValid = validateFunc[rule](value, ruleConfig);

			if (isValid !== true){
				errors[field] = validateMsg[rule](ruleConfig);
				break;
			}
		}
	}

	return errors;
};

export const isValid = (errors) => (
	Object.keys(errors).length === 0  && errors.constructor === Object
);
