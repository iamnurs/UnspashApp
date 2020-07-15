import {
  REQUEST_PICS_PENDING,
  REQUEST_PICS_SUCCESS,
  REQUEST_NEXT_PAGE_SUCCESS,
} from './constants';

const API_KEY = '#';
const URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;

export const requestPics = () => dispatch => {
  dispatch({type: REQUEST_PICS_PENDING});
  fetch(URL)
    .then(response => response.json())
    .then(result => dispatch({type: REQUEST_PICS_SUCCESS, payload: result}))
    .catch(error => console.log(error));
};

export const requestNextPage = page => dispatch => {
  dispatch({type: REQUEST_PICS_PENDING});
  fetch(URL + `&page=${page + 1}`)
    .then(response => response.json())
    .then(result =>
      dispatch({type: REQUEST_NEXT_PAGE_SUCCESS, payload: result}),
    )
    .catch(error => console.log(error));
};
