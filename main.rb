require 'rubygems'
require 'sinatra'
require 'json'
require 'date'

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
    talks = JSON.parse(File.read('public/files/schedule.json'))
    schedule = talks.sort_by { | talk | [DateTime.strptime(talk['beginning'], '%m/%d/%Y %H:%M:%S'), talk['room']] }.group_by { | thing | thing['beginning'] }

    @rooms = %w(Ballroom 140A 140B 140C 140D 140E 140F 140G)
    @friday = schedule.select{|key| key.include? '05/30/2014' }
    @saturday = schedule.select{|key| key.include? '05/31/2014' }

    erb :schedule
  end

  get '/2014', :layout => false do
    @title = 'Self.conference'

    erb :'2014/main', :layout => :'2014/layout'
  end

  get '/2014/coc', :layout => false do
    @title = 'Code of Conduct | Self.conference'
    erb :'2014/coc', :layout => :'2014/layout'
  end

  get '/2014/speakers', :layout => false do
    @title = 'Speakers | Self.conference'
    @speakers = JSON.parse(File.read('public/2014/files/speakers.json'))
    @speaker_nav = @speakers.map { | speaker | { :name => speaker['name'], :anchor => speaker['name_anchor'] } }.sort_by { | speaker | speaker[:name] }
    @talk_nav = @speakers.map { | speaker | { :title => speaker['title'], :anchor => speaker['talk_anchor'] } }.sort_by { | speaker | speaker[:title] }
    erb :'2014/speakers', :layout => :'2014/layout'
  end

  get '/2014/schedule', :layout => false do
    @title = 'Schedule | Self.conference'
    talks = JSON.parse(File.read('public/2014/files/schedule.json'))
    schedule = talks.sort_by { | talk | [DateTime.strptime(talk['beginning'], '%m/%d/%Y %H:%M:%S'), talk['room']] }.group_by { | thing | thing['beginning'] }

    @rooms = %w(Ballroom 140A 140B 140C 140D 140E 140F 140G)
    @friday = schedule.select{|key| key.include? '05/30/2014' }
    @saturday = schedule.select{|key| key.include? '05/31/2014' }

    erb :'2014/schedule', :layout => :'2014/layout'
  end

end
