import React, { createContext, useReducer, useEffect } from "react";

import { reducer } from "./reducer";
import { IS_LOADING } from "../types";
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

	return (
		<ArkContext.Provider
			value={{ ark: state.ark, isLoading: state.isLoading }}
		>
			{props.children}
		</ArkContext.Provider>
	);
};
