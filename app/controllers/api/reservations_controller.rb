class Api::ReservationsController < ApplicationController
  def show
    @reservation = Reservation.find(params[:id])

    render :show
  end

  def index
    @reservations = Reservation.all
    render :index 
  end

  def create
    year = Date.today().year.to_s
    month = Date.today().month < 10 ? "0" + Date.today().month.to_s : Date.today().month.to_s
    day = Date.today().day < 10 ? "0" + Date.today().day.to_s : Date.today().day.to_s
    today = year + "-" + month + "-" + day

    if reservation_params[:checkin_date] < today
      render json: ["Please set your check in date after today"], status: 401
    elsif reservation_params[:checkout_date] <= reservation_params[:checkin_date]
      render json: ["Please set your check out date after check in date"], status: 401
    elsif 
      property = Property.find(reservation_params[:property_id])
      reservations = property.reservations
      checkIn = reservation_params[:checkin_date]
      checkOut = reservation_params[:checkout_date]

      if reservations.where("checkout_date > ?", checkIn).where("checkin_date < ?", checkOut).length > 0
        render json: ["These dates are not available, please select other times"], status: 401
      else
        @reservation = Reservation.create!(reservation_params)
      end
    end
  end

  def destroy
    @reservation = Reservation.find(params[:id])
    @reservation.destroy
    render json: @reservation
  end

  def reservation_params
    params.require(:reservation).permit(:checkin_date, :checkout_date, :num_guests, :user_id, :property_id)
  end
end
