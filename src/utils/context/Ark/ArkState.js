import React, { createContext, useReducer, useEffect } from "react";

import {
	IS_LOADING,
	GET_PROFILE_SUCCESS,
	GET_PROFILE_ERROR,
	UPDATE_TROOPS_SUCCESS,
	UPDATE_TROOPS_ERROR,
	UPDATE_PROFILE_SUCCESS,
	UPDATE_PROFILE_ERROR,
	GET_IMG_SUCCESS,
	GET_IMG_ERROR,
	IMG_SUCCESS,
	IMG_ERROR,
} from "../types";
import { reducer } from "./reducer";
import { axiosWithAuth } from "../../axiosWithAuth";

import { loadState, saveState } from "../../localStorage";

export const ArkContext = createContext();

export const ArkState = (props) => {
	// create and initial state
	const initialState = { isLoading: false, profile: [], profilePicture: [] };
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
	const getImg = async () => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await axiosWithAuth().get(`profile/profilePicture`);
			dispatch({ type: GET_IMG_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e);
			dispatch({ type: GET_IMG_ERROR, payload: e.response });
		}
	};
	const addImg = async (file, imgId) => {
		dispatch({ type: IS_LOADING, payload: true });
		try {
			const res = await axiosWithAuth().put(`profile/img/${imgId}`, file);
			dispatch({ type: IMG_SUCCESS, payload: res.data });
		} catch (e) {
			console.log("error", e);
			dispatch({ type: IMG_ERROR, payload: e.response });
		}
	};
	return (
		<ArkContext.Provider
			value={{
				ark: state.ark,
				isLoading: state.isLoading,
				profile: state.profile,
				profilePicture: state.profilePicture,
				getProfile,
				updateTroops,
				updateProfile,
				getImg,
				addImg,
			}}
		>
			{props.children}
		</ArkContext.Provider>
	);
};
