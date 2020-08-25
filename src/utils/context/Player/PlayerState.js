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
  WILL_PARTICIPATE_SUCCESS,
  WILL_PARTICIPATE_ERROR,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_ERROR,
  GET_EVENT_SUCCESS,
  GET_EVENT_ERROR,
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
    eventCreatedMessage: "",
    eventCreatedMessageError: "",
    willParticipateMessage: "",
    alliance: [],
    allianceList: [],
    events: [],
    participants: [],
    eventsList: [],
    profile: [],
    userProfile: { isMember: false },
    applications: [],
    members: [],
    permissions: {},
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
  const getPermissions = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`/alliance/permissions`);
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
      const res = await axiosWithAuth().get(`event/current`);
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
      const res = await axiosWithAuth().post(`/event`, body);
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
      const res = await axiosWithAuth().delete(`/event/${eventId}`);
      dispatch({ type: DELETE_EVENT_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: DELETE_EVENT_ERROR, payload: e.response });
    }
  };
  const willParticipate = async (isParticipating, eventId) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().put(`/event/${eventId}`, {
        isParticipating,
      });
      dispatch({ type: WILL_PARTICIPATE_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: WILL_PARTICIPATE_ERROR, payload: e.response });
    }
  };
  const getAllEvents = async () => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`/event/all`);
      dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: GET_ALL_EVENTS_ERROR, payload: e.response });
    }
  };
  const getEvent = async (eventId) => {
    dispatch({ type: IS_LOADING, payload: true });
    try {
      const res = await axiosWithAuth().get(`/event/specific/${eventId}/`);
      dispatch({ type: GET_EVENT_SUCCESS, payload: res.data });
    } catch (e) {
      console.log("error", e);
      dispatch({ type: GET_EVENT_ERROR, payload: e.response });
    }
  };
  return (
    <PlayerContext.Provider
      value={{
        isLoading: state.isLoading,
        allianceListError: state.allianceListError,
        willParticipateMessage: state.willParticipateMessage,
        eventsError: state.eventsError,
        alliance: state.alliance,
        participants: state.participants,
        events: state.events,
        eventsList: state.eventsList,
        members: state.members,
        allianceList: state.allianceList,
        applications: state.applications,
        profile: state.profile,
        permissions: state.permissions,
        userProfile: state.userProfile,
        getProfile,
        getPermissions,
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
        willParticipate,
        getAllEvents,
        getEvent,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
