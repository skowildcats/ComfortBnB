class Api::ReservationsController < ApplicationController
  def show
    @reservation = Reservation.find(params[:id])
  end

  def index
    @reservations = Reservation.all
  end

  def create
  end

  def destroy
  end
end
