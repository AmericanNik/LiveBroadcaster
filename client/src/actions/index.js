import streams from '../apis/streams';
import history from '../history';
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

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId, userName, customIcon } = getState().auth;
  const response = await streams.post('/streams', {
    ...formValues,
    userId,
    userName,
    customIcon,
  });

  dispatch({ type: CREATE_STREAM, payload: response.data });
  //Do some programmatic navigation to get user back to root route (stream list)
  history.push('/');
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
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
  history.push('/');
};

// DELETE
//Delete single Stream
export const deleteStream = (id) => async (dispatch) => {
  console.log(id);
  await streams.delete(`/streams/${id}`).then((response) => {
    console.log(response);
  });
  dispatch({ type: DELETE_STREAM, payload: id });

  history.push('/');
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
