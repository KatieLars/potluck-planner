Rails.application.routes.draw do
   scope '/api' do
     resources :potlucks
     resources :users
     resources :guestships
     resources :friendships
     resources :recipes
     resources :sessions
   end
end
