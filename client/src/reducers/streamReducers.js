import _ from 'lodash';

import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      /*
            lodash omit "removes the property from an object" 
            i.e. returns a new object excluding the propery selected
            _.omit(object, propertyToExclude)
             */
      // console.log('reducer deleted stream: ', action.payload);
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
