Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index, :show] do 
      resources :reviews, only: [:show, :create, :index, :update, :destroy]
    end
    
    resources :reviews, only: [:index, :create, :destroy, :update]
    
  end
  root "static_pages#root"
end
