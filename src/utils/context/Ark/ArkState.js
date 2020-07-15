import React, { createContext, useReducer, useEffect } from "react";

import { IS_LOADING, GET_PROFILE_SUCCESS, GET_PROFILE_ERROR } from "../types";
import { reducer } from "./reducer";
import { axiosWithAuth } from "../../axiosWithAuth";

import { loadState, saveState } from "../../localStorage";

export const ArkContext = createContext();

export const ArkState = (props) => {
	// create and initial state
	const initialState = { isLoading: false, profile: [] };
	// get updated state from localStorage
	const localState = loadState("ark");

	// use reducer on local state or start fresh with initial state
	const [state, dispatch] = useReducer(reducer, localState || initialState);

	useEffect(() => {
		saveState("ark", state);
	}, [state]);

	const getProfile = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await axiosWithAuth().get(`/profile`);
			// dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
			console.log("res", res);
		} catch (e) {
			console.log("error", e);
			dispatch({ type: GET_PROFILE_ERROR, payload: e.response });
		}
	};
	return (
		<ArkContext.Provider
			value={{ ark: state.ark, isLoading: state.isLoading, getProfile }}
		>
			{props.children}
		</ArkContext.Provider>
	);
};
