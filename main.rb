require 'rubygems'
require 'sinatra'
require 'json'

class SelfConf < Sinatra::Application
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
    @speakers = JSON.parse(File.read('public/files/speakers.json'))
    @speaker_nav = @speakers.map { | speaker | { :name => speaker['name'], :anchor => speaker['name_anchor'] } }.sort_by { | speaker | speaker[:name] }
    @talk_nav = @speakers.map { | speaker | { :title => speaker['title'], :anchor => speaker['talk_anchor'] } }.sort_by { | speaker | speaker[:title] }
    erb :speakers
  end

  get '/schedule' do
    @title = 'Schedule | Self.conference'
    erb :schedule
  end
end
