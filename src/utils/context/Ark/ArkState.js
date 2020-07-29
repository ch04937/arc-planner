import React, { createContext, useReducer, useEffect } from "react";

import {
	IS_LOADING,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_ERROR,
	UPDATE_TROOPS_SUCCESS,
	UPDATE_TROOPS_ERROR,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_ERROR,
} from "../types";
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
			dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e);
			dispatch({ type: GET_PROFILE_ERROR, payload: e.response });
		}
	};
	const updateTroops = async (type, count) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await axiosWithAuth().put(`/profile/change?${type}=${count}`);
			dispatch({ type: UPDATE_TROOPS_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e);
			dispatch({ type: UPDATE_TROOPS_ERROR, payload: e.response });
		}
	};
	const updateProfile = async (data) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await axiosWithAuth().put(`/profile/ncc`, data);
			dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e);
			dispatch({ type: UPDATE_PROFILE_ERROR, payload: e.response });
		}
	};
	return (
		<ArkContext.Provider
			value={{
				ark: state.ark,
				isLoading: state.isLoading,
				profile: state.profile,
				getProfile,
				updateTroops,
				updateProfile,
			}}
		>
			{props.children}
		</ArkContext.Provider>
	);
};
