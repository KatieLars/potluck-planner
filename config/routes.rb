Rails.application.routes.draw do

   namespace :api do
     namespace :v1 do
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

end
