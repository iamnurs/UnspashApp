import {combineReducers} from 'redux';
import {
  REQUEST_PICS_PENDING,
  REQUEST_PICS_SUCCESS,
  REQUEST_NEXT_PAGE_SUCCESS,
} from './constants';

const initialStatePics = {
  isPending: false,
  page: 1,
  pics: [],
};

const requestPics = (state = initialStatePics, action = {}) => {
  switch (action.type) {
    case REQUEST_PICS_PENDING:
      return {...state, isPending: true};
    case REQUEST_PICS_SUCCESS:
      return {...state, pics: action.payload, isPending: false};
    case REQUEST_NEXT_PAGE_SUCCESS:
      const pics = state.pics.concat(action.payload);
      return {pics, isPending: false, page: state.page + 1};
    default:
      return state;
  }
};

export const reducers = combineReducers({requestPics});
