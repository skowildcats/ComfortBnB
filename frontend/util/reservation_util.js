export const createReservation = reservation => {
  return $.ajax({
    method: 'POST',
    url: 'api/reservations',
    data: { reservation, authenticity_token: $('[name="csrf-token"]')[0].content}
  })
};

export const destroyReservation = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/reservations/${id}`,
    data: { authenticity_token: $('[name="csrf-token"]')[0].content, },
  })
);
