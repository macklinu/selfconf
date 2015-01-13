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

  get '/coc', :layout => false do
    @title = 'Code of Conduct | self.conference'
    erb :coc
  end
end
