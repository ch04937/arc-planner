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
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
  GET_APPLICATIONS_SUCCESS,
  GET_APPLICATIONS_ERROR,
  SEND_APPLICATION_SUCCESS,
  SEND_APPLICATION_ERROR,
  CANCEL_APP_SUCCESS,
  CANCEL_APP_ERROR,
  CREATE_ALLIANCE_SUCCESS,
  CREATE_ALLIANCE_ERROR,
  GET_CURRENT_EVENTS_SUCCESS,
  GET_CURRENT_EVENTS_ERROR,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_ERROR,
} from "../types";
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
const getUserProfile = (state, action) => {
  return {
    ...state,
    is_loading: false,
    userProfile: action.payload,
  };
};
const getUserProfileError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const updateTroops = (state, action) => {
  return {
    ...state,
    is_loading: false,
    profile: action.payload,
  };
};
const updateTroopsError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const updateProfile = (state, action) => {
  return {
    ...state,
    is_loading: false,
    profile: action.payload,
  };
};
const updateProfileError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const addImg = (state, action) => {
  return {
    ...state,
    is_loading: false,
    profile: action.payload,
  };
};
const addImgError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const getAlliance = (state, action) => {
  return {
    ...state,
    is_loading: false,
    alliance: action.payload,
  };
};
const getAllianceError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const getAllianceList = (state, action) => {
  return {
    ...state,
    is_loading: false,
    allianceList: action.payload,
  };
};
const getAllianceListError = (state, action) => {
  return {
    ...state,
    is_loading: false,
    allianceListError: action.payload.data.message,
  };
};
const getApplication = (state, action) => {
  return {
    ...state,
    is_loading: false,
    applications: action.payload,
  };
};
const getApplicationError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const sendApplication = (state, action) => {
  return {
    ...state,
    is_loading: false,
    applications: action.payload,
  };
};
const sendApplicationError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const cancelApp = (state, action) => {
  return {
    ...state,
    is_loading: false,
    applications: action.payload,
  };
};
const cancelAppError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const createAlliance = (state, action) => {
  return {
    ...state,
    is_loading: false,
    userProfile: action.payload.userProfile,
  };
};
const createAllianceError = (state, action) => {
  return {
    ...state,
    error: action.payload,
    is_loading: false,
  };
};
const getCurrentEvents = (state, action) => {
  return {
    ...state,
    is_loading: false,
    events: action.payload,
  };
};
const getCurrentEventsError = (state, action) => {
  return {
    ...state,
    eventsError: action.payload.data.message,
    is_loading: false,
  };
};
const getMembers = (state, action) => {
  return {
    ...state,
    is_loading: false,
    members: action.payload,
  };
};
const getMembersError = (state, action) => {
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
    case GET_USER_PROFILE_SUCCESS:
      return getUserProfile(state, action);
    case GET_USER_PROFILE_ERROR:
      return getUserProfileError(state, action);
    case GET_PROFILE_ERROR:
      return getProfileError(state, action);
    case UPDATE_TROOPS_SUCCESS:
      return updateTroops(state, action);
    case UPDATE_TROOPS_ERROR:
      return updateTroopsError(state, action);
    case UPDATE_PROFILE_SUCCESS:
      return updateProfile(state, action);
    case UPDATE_PROFILE_ERROR:
      return updateProfileError(state, action);
    case IMG_SUCCESS:
      return addImg(state, action);
    case IMG_ERROR:
      return addImgError(state, action);
    case GET_ALLIANCE_SUCCESS:
      return getAlliance(state, action);
    case GET_ALLIANCE_LIST_SUCCESS:
      return getAllianceList(state, action);
    case GET_ALLIANCE_LIST_ERROR:
      return getAllianceListError(state, action);
    case GET_ALLIANCE_ERROR:
      return getAllianceError(state, action);
    case GET_APPLICATIONS_SUCCESS:
      return getApplication(state, action);
    case GET_APPLICATIONS_ERROR:
      return getApplicationError(state, action);
    case SEND_APPLICATION_SUCCESS:
      return sendApplication(state, action);
    case SEND_APPLICATION_ERROR:
      return sendApplicationError(state, action);
    case CANCEL_APP_SUCCESS:
      return cancelApp(state, action);
    case CANCEL_APP_ERROR:
      return cancelAppError(state, action);
    case CREATE_ALLIANCE_SUCCESS:
      return createAlliance(state, action);
    case CREATE_ALLIANCE_ERROR:
      return createAllianceError(state, action);
    case GET_CURRENT_EVENTS_SUCCESS:
      return getCurrentEvents(state, action);
    case GET_CURRENT_EVENTS_ERROR:
      return getCurrentEventsError(state, action);
    case GET_MEMBERS_SUCCESS:
      return getMembers(state, action);
    case GET_MEMBERS_ERROR:
      return getMembersError(state, action);
    default:
      return state;
  }
};
