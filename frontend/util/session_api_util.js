export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user, authenticity_token: $('[name="csrf-token"]')[0].content,  },
    success: function () {
      $("#session-modal").css("display", "none")
    },
    error: function() {
      $('#errors').css("display", "block")
    }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user, authenticity_token: $('[name="csrf-token"]')[0].content,  },
    success: function () {
      $("#session-modal").css("display", "none")
    }, 
    error: function () {
      $('#errors').css("display", "block")
    }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session',
    data: { authenticity_token: $('[name="csrf-token"]')[0].content, },
  })
);

export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
)
