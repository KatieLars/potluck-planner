Rails.application.routes.draw do
       post 'user_token' => 'user_token#create'

       get '/friendships/friends'=> 'friendships#friends'
       get '/friendships/not_friends' => 'friendships#not_friends'
       post '/friendships/end_friendships' => 'friendships#end_friendships'
       post '/friendships/add_friends' => 'friendships#add_friends'

       post 'find_user' => 'users#find'

       post '/guestships/end_guestships' => 'guestships#end_guestships'

       post '/potluck_recipes/claim' => 'potluck_recipes#claim'
       
       resources :potluck_recipes, only: [:create]
       resources :potlucks
       resources :users
       resources :guestships
       resources :friendships
       resources :recipes
end
