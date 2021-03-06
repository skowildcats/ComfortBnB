json.partial! "api/users/user", user: @user

@user.reservations.each do |reservation|
  json.reservations do
    json.set! reservation.id do
      json.partial! 'api/reservations/reservation', reservation: reservation
    end
  end
end