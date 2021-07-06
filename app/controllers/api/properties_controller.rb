class Api::PropertiesController < ApplicationController

  def show
    @property = Property.find(params[:id])
  end

  def index
    @properties = Property.all
    render :index
  end

  def create
    @property = Property.create!(bench_params)
    render :show
  end

  def bench_params 
    params.require(:property).permit(:description, :lat, :lng)
  end
end
