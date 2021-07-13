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
    @reservation = Reservation.create!(reservation_params)
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
