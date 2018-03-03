Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
   scope '/api' do
     resources :potlucks
     resources :users
     mount Knock::Engine => "/knock"
     resources :guestships
     resources :friendships
     resources :recipes

     post '/signin' => "sessions#create"
     delete '/signout' => "sessions#destroy", as: 'signout'
   end
end
