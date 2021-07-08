export const fetchProperties = data => (
  $.ajax({
    method: 'GET',
    url: 'api/properties',
    data
  })
);

export const fetchProperty = id => (
  $.ajax({
    method: 'GET',
    url: `api/properties/${id}`
  })
);

// export const createReview = review => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/reviews',
//     data: { review }
//   })
// );

// export const createProperty = benchForm => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/benches',
//     data: benchForm,
//     contentType: false,
//     processData: false
//   })
// );
