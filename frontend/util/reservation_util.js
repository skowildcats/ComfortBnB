export const createReservation = reservation => (
  $.ajax({
    method: 'POST',
    url: 'api/properties',
    data: {reservation}
  })
);

export const destroyReservation = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reservations/${id}`,
    data: { authenticity_token: $('[name="csrf-token"]')[0].content, },
  })
);
