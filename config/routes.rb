Rails.application.routes.draw do
       post 'user_token' => 'user_token#create'

       get '/friendships/friends'=> 'friendships#friends'
       get '/friendships/not_friends' => 'friendships#not_friends'
       post '/friendships/end_friendships' => 'friendships#end_friendships'

       post 'find_user' => 'users#find'

       resources :potlucks
       resources :users
       resources :guestships
       resources :friendships
       resources :recipes
end
