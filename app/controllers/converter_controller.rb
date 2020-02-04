class ConverterController < ApplicationController
  def index
    gon.app_key = ENV['APPKEY']
  end
end
