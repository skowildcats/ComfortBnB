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

// export const receiveReview = ({ review, average_rating, author }) => ({
//   type: RECEIVE_REVIEW,
//   review,
//   average_rating,
//   author,
// });

// export const createReview = review => dispatch => (
//   APIUtil.createReview(review).then(review => (
//     dispatch(receiveReview(review))
//   ))
// );

export const fetchProperties = () => dispatch => (
  APIUtil.fetchProperties().then(properties => (
    dispatch(receiveProperties(properties))
  ))
);

// export const fetchBench = id => dispatch => (
//   APIUtil.fetchBench(id).then(payload => (
//     dispatch(receiveBench(payload))
//   ))
// );

// export const createBench = bench => dispatch => (
//   APIUtil.createBench(bench).then(bench => (
//     dispatch(receiveBench(bench))
//   ))
// );
