import {
	IS_LOADING,
	SIGNIN_SUCCESS,
	SIGNIN_FAILURE,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	SIGNOUT_SUCCESS,
	SIGNOUT_FAILURE,
} from "../types";

const setIsLoading = (state, action) => {
	return {
		...state,
		isLoading: action.payload,
	};
};
const setSignInSuccess = (state, action) => {
	return {
		...state,
		isLoading: false,
		signInError: null,
		accessToken: action.payload.accessToken,
		refreshToken: action.payload.refreshToken,
		userProfile: action.payload.profile,
	};
};

const setSignInFailure = (state, action) => {
	return {
		...state,
		isLoading: false,
		signInError: action.payload,
	};
};
const setSignUpSuccess = (state, action) => {
	return {
		...state,
		isLoading: false,
		accessToken: action.payload.accessToken,
		refreshToken: action.payload.refreshToken,
		userProfile: action.payload.profile,
	};
};

const setSignUpFailure = (state, action) => {
	return {
		...state,
		signUpError: action.payload,
		isLoading: false,
	};
};

const setSignOutSuccess = (state, action) => {
	return {
		...state,
		error: null,
		isLoading: false,
		userProfile: null,
		accessToken: null,
	};
};
const setSignOutFailure = (state, action) => {
	return {
		...state,
		signOutError: action.payload,
	};
};
const authReducer = (state, action) => {
	switch (action.type) {
		case IS_LOADING:
			return setIsLoading(state, action);
		case SIGNIN_SUCCESS:
			return setSignInSuccess(state, action);
		case SIGNIN_FAILURE:
			return setSignInFailure(state, action);
		case SIGNUP_SUCCESS:
			return setSignUpSuccess(state, action);
		case SIGNUP_FAILURE:
			return setSignUpFailure(state, action);
		case SIGNOUT_SUCCESS:
			return setSignOutSuccess(state, action);
		case SIGNOUT_FAILURE:
			return setSignOutFailure(state, action);
		default:
			return state;
	}
};

export default authReducer;
