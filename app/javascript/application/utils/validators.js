export const required = {
	required: true
};

export const password = {
	minLength: 8
};

export const email = {
	match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

export const match = {
	match: (matchVal) => ({ match: new RegExp(matchVal) })
};
