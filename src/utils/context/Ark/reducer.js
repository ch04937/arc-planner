import { IS_LOADING, GET_PROFILE_SUCCESS, GET_PROFILE_ERROR } from "../types";
// updates the state
const setIsLoading = (state, action) => {
	return {
		...state,
		is_loading: action.payload,
	};
};

const getProfile = (state, action) => {
	return {
		...state,
		is_loading: false,
		profile: action.payload,
	};
};
const getProfileError = (state, action) => {
	return {
		...state,
		error: action.payload,
		is_loading: false,
	};
};

// cases
export const reducer = (state, action) => {
	switch (action.type) {
		case IS_LOADING:
			return setIsLoading(state, action);
		case GET_PROFILE_SUCCESS:
			return getProfile(state, action);
		case GET_PROFILE_ERROR:
			return getProfileError(state, action);
		default:
			return state;
	}
};
