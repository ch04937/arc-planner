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
  GET_ALLIANCE_SUCCESS,
  GET_ALLIANCE_ERROR,
  CREATE_ALLIANCE_SUCCESS,
  CREATE_ALLIANCE_ERROR,
} from "../types";
import { reducer } from "./reducer";
import { axiosWithAuth } from "../../axiosWithAuth";

import { logOut } from "../../localStorage";

export const PlayerContext = createContext();

export const PlayerState = (props) => {
  // create and initial state
  const initialState = {
    isLoading: false,
    alliance: [],
    profile: [],
    profilePicture: [],
  };

  // use reducer on local state or start fresh with initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProfile = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`/profile`);
      dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("e", e.response);
      e.response.status === 401
        ? logOut()
        : dispatch({ type: GET_ALLIANCE_ERROR, payload: e.response });
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
  const getAlliance = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`alliance/`);
      dispatch({ type: GET_ALLIANCE_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e.response.status);
      e.response.status === 401
        ? logOut()
        : dispatch({ type: GET_ALLIANCE_ERROR, payload: e.response });
    }
  };
  const createAlliance = async (data) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().post(`alliance/`, data);
      dispatch({ type: CREATE_ALLIANCE_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: CREATE_ALLIANCE_ERROR, payload: e.response });
    }
  };
  return (
    <PlayerContext.Provider
      value={{
        ark: state.ark,
        isLoading: state.isLoading,
        alliance: state.alliance,
        profile: state.profile,
        profilePicture: state.profilePicture,
        getProfile,
        updateTroops,
        updateProfile,
        getImg,
        addImg,
        getAlliance,
        createAlliance,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
