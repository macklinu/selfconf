require 'rubygems'
require 'sinatra'
require 'json'
require 'date'
require './2014/routes.rb'
require './mobile/routes.rb'

class SelfConf < Sinatra::Application
  get '/' do
    @title = 'self.conference'
    erb :main
  end
end
