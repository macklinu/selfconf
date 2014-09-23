get '/mobile', :layout => false do
  @title = 'mobile.self'

  erb :'mobile/main', :layout => :'mobile/layout'
end
