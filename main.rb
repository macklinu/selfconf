require 'rubygems'
require 'sinatra'
require 'json'
require 'date'
require './2014/routes.rb'

class SelfConf < Sinatra::Application
  get '/' do
    @title = 'Self.conference'
    erb :main
  end
end
