import { LOAD_PROFILE, UPLOADING_AVATAR, AVATAR_UPLAODED, AVATAR_UPLAOD_FAILED, UPDATING_PROFILE, PROFILE_UPDATED, UPDATING_PROFILE_FAILED } from './../constants/actionTypes';

const defaultState = {
  first_name: '',
  last_name: '',
  gender: '',
  date_of_birth: '',
  address: '',
  state: '',
  avatar: '',
  account_name: '',
  bank_name: '',
  account_number: '',
  currency: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        ...action.payload
    };
    case UPDATING_PROFILE:
      return {
        ...state,
        fetching: true
    };
    case PROFILE_UPDATED:
      return {
        ...state,
        ...action.payload,
        fetching: false
    };
    case UPDATING_PROFILE_FAILED:
      return {
        ...state,
        fetching: false
    };
    case UPLOADING_AVATAR:
      return {
        ...state,
        avatarUploading: true
      };
    case AVATAR_UPLAODED:
      return {
        ...state,
        avatarUploading: false,
        avatar: action.payload
      };
    case AVATAR_UPLAOD_FAILED:
      return {
        ...state,
        avatarUploading: false,
      };
    default:
      return state;
  }
}