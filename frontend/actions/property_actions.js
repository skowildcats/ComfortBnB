import * as APIUtil from '../util/property_util'

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';
// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveProperties = properties => {
  return {type: RECEIVE_PROPERTIES,
  properties,
}};

export const receiveProperty = ({ property }) => ({
  type: RECEIVE_PROPERTY,
  property,
});

export const fetchProperties = filters => dispatch => {
  return APIUtil.fetchProperties(filters).then(properties => {
    return dispatch(receiveProperties(properties))
  })
};

export const fetchAllProperties = () => dispatch => {
  return APIUtil.fetchAllProperties().then(properties => {
    return dispatch(receiveProperties(properties))
  } )
}

export const fetchProperty = id => dispatch => {
  return APIUtil.fetchProperty(id).then(payload => {
    return dispatch(receiveProperty(payload))
  })
};

// export const createBench = bench => dispatch => (
//   APIUtil.createBench(bench).then(bench => (
//     dispatch(receiveBench(bench))
//   ))
// );
