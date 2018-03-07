Rails.application.routes.draw do
       post 'user_token' => 'user_token#create'
       resources :potlucks
       resources :users
       resources :guestships
       resources :friendships
       resources :recipes
       post 'find_user' => 'users#find'
       get 'not_friends' => 'users#not_friends'

end
