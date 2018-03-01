require 'sinatra'

get '/' do
  erb :index, layout: :layout
end

get '/art' do
  erb :art, layout: :layout
end