class Api::PropertiesController < ApplicationController

  def show
    @property = Property.find(params[:id])
  end

  def index
    properties = Property.all
    properties = properties.where(max_guests: guest_range)

    @properties = properties.includes(:reviews)
    render :index
  end

  def create
    @property = Property.create!(property_params)
    render :show
  end

  def property_params 
    params.require(:property).permit(:description, :lat, :lng)
  end

  private
  def guest_range
    (Integer(params[:minGuest])..10)
  end

end
