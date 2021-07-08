class Api::PropertiesController < ApplicationController

  def show
    @property = Property.find(params[:id])
  end

  def index
    @properties = Property.all.includes(:reviews)
    render :index
  end

  def create
    @property = Property.create!(property_params)
    render :show
  end

  def property_params 
    params.require(:property).permit(:description, :lat, :lng)
  end
end
