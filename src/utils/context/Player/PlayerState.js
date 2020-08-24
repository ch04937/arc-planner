import React, { createContext, useReducer, useEffect } from "react";

import {
  IS_LOADING,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_ERROR,
  UPDATE_TROOPS_SUCCESS,
  UPDATE_TROOPS_ERROR,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  IMG_SUCCESS,
  IMG_ERROR,
  GET_ALLIANCE_SUCCESS,
  GET_ALLIANCE_ERROR,
  GET_ALLIANCE_LIST_SUCCESS,
  GET_ALLIANCE_LIST_ERROR,
  CREATE_ALLIANCE_SUCCESS,
  CREATE_ALLIANCE_ERROR,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
  GET_APPLICATIONS_SUCCESS,
  GET_APPLICATIONS_ERROR,
  SEND_APPLICATION_SUCCESS,
  SEND_APPLICATION_ERROR,
  CANCEL_APP_SUCCESS,
  CANCEL_APP_ERROR,
  GET_CURRENT_EVENTS_SUCCESS,
  GET_CURRENT_EVENTS_ERROR,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR,
  GET_PRIVILEGE_SUCCESS,
  GET_PRIVILEGE_ERROR,
  CREATE_EVENTS_SUCCESS,
  CREATE_EVENTS_ERROR,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_ERROR,
} from "../types";
import { reducer } from "./reducer";
import { axiosWithAuth } from "../../axiosWithAuth";

import { logOut } from "../../localStorage";

export const PlayerContext = createContext();

export const PlayerState = (props) => {
  // create and initial state
  const initialState = {
    isLoading: false,
    allianceListError: "",
    eventsError: "",
    alliance: [],
    allianceList: [],
    events: [],
    profile: [],
    userProfile: { isMember: false },
    applications: [],
    members: [],
    privilege: {},
  };

  // use reducer on local state or start fresh with initial state
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUserProfile = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`/user`);
      dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: GET_USER_PROFILE_ERROR, payload: e.response });
    }
  };
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

  const addImg = async (file) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().put(`profile/img/`, file);
      dispatch({ type: IMG_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: IMG_ERROR, payload: e.response });
    }
  };
  const getAlliance = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`/alliance/`);
      dispatch({ type: GET_ALLIANCE_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("e", e);
      e.response && e.response.status === 401
        ? logOut()
        : dispatch({ type: GET_ALLIANCE_ERROR, payload: e.response });
    }
  };
  const getPrivilege = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`/alliance/privilege`);
      dispatch({ type: GET_PRIVILEGE_SUCCESS, payload: res.data });
    } catch (e) {
      dispatch({ type: GET_PRIVILEGE_ERROR, payload: e.response });
    }
  };
  const getAllianceList = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`alliance/list`);
      dispatch({ type: GET_ALLIANCE_LIST_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("e", e);
      e.response && e.response.status === 401
        ? logOut()
        : dispatch({ type: GET_ALLIANCE_LIST_ERROR, payload: e.response });
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
  const getApplications = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`alliance/applications`);
      dispatch({ type: GET_APPLICATIONS_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e.response);
      dispatch({ type: GET_APPLICATIONS_ERROR, payload: e.response });
    }
  };
  const sendApplication = async (allianceId) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().post(
        `/alliance/applications/apply/${allianceId}`
      );
      dispatch({ type: SEND_APPLICATION_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: SEND_APPLICATION_ERROR, payload: e.response });
    }
  };
  const cancelApplication = async (allianceId) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().delete(
        `/alliance/applications/cancel/${allianceId}`
      );
      console.log("res", res);
      dispatch({ type: CANCEL_APP_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: CANCEL_APP_ERROR, payload: e.response });
    }
  };
  const getCurrentEvents = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`events/current`);
      dispatch({ type: GET_CURRENT_EVENTS_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: GET_CURRENT_EVENTS_ERROR, payload: e.response });
    }
  };
  const getMembers = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`/alliance/members`);
      dispatch({ type: GET_MEMBERS_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error getting members", e);
      dispatch({ type: GET_MEMBERS_ERROR, payload: e.response });
    }
  };
  const createEvents = async (body) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().post(`/events`, body);
      dispatch({ type: CREATE_EVENTS_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: CREATE_EVENTS_ERROR, payload: e.response });
    }
  };
  const deleteEvent = async (eventId) => {
    dispatch({ type: IS_LOADING, payload: true });
    console.log("eventId", eventId);
    try {
      const res = await axiosWithAuth().delete(`/events/${eventId}`);
      dispatch({ type: DELETE_EVENT_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: DELETE_EVENT_ERROR, payload: e.response });
    }
  };

  return (
    <PlayerContext.Provider
      value={{
        isLoading: state.isLoading,
        allianceListError: state.allianceListError,
        eventsError: state.eventsError,
        alliance: state.alliance,
        events: state.events,
        members: state.members,
        allianceList: state.allianceList,
        applications: state.applications,
        profile: state.profile,
        privilege: state.privilege,
        userProfile: state.userProfile,
        getProfile,
        getPrivilege,
        getUserProfile,
        updateTroops,
        updateProfile,
        addImg,
        getAlliance,
        getAllianceList,
        createAlliance,
        getApplications,
        sendApplication,
        cancelApplication,
        getCurrentEvents,
        getMembers,
        createEvents,
        deleteEvent,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
