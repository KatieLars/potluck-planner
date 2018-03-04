Rails.application.routes.draw do
       resources :potlucks
       resources :users
       mount Knock::Engine => "/knock"
       resources :guestships
       resources :friendships
       resources :recipes

       #delete '/signout' => "sessions#destroy", as: 'signout'

end
