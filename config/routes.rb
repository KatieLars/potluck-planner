Rails.application.routes.draw do
       post 'user_token' => 'user_token#create'
       resources :potlucks
       resources :users
       resources :guestships
       resources :friendships
       resources :recipes
       get 'find_user' => 'users#find'

end
