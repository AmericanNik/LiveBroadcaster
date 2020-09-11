import streams from '../apis/streams';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_USER,
  EDIT_USER,
  CREATE_USER,
  DELETE_USER,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './types';

// export const signin = ({ userId }, userProfile) => async (dispatch) => {
//   const getUser = await streams.get('/users/:' + userId);
//   if (!getUser) {
//     const createUser = await streams.post('/users', userProfile);
//     dispatch({ type: CREATE_USER, payload: createUser.userProfile });
//   } else {
//     dispatch({ type: SIGN_IN, payload: userProfile });
//   }
// };

export const signIn = (userProfile) => {
  return {
    type: SIGN_IN,
    payload: userProfile,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
// --------------STREAM CRUD----------

// POST
// Create A Stream

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post('/streams', formValues);

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

// GET
// Get all streams

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

//  GET
//  Get single stream
export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

//PUT
//Edit single stream

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

// DELETE
//Delete single Stream
export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};

//----------USER CRUD ------------

//GET
//Find a user
export const fetchUser = (userProfile) => async (dispatch) => {
  const response = await streams.get(`users/${userProfile.userId}`);
  dispatch({ type: FETCH_USER, payload: response.data });
};

//POST
//Create a new user
export const createUser = (userProfile) => async (dispatch) => {
  await streams.post(`users/${userProfile.userId}`);
  dispatch({ type: CREATE_USER, payload: userProfile });
};
