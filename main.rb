require 'rubygems'
require 'sinatra'
require 'json'

get '/' do
  @title = 'Self.conference'
  erb :main
end

get '/coc' do
  @title = 'Code of Conduct | Self.conference'
  erb :coc
end

get '/speakers' do
  @title = 'Speakers | Self.conference'
  erb :speakers
end
