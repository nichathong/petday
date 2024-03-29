Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:index, :show, :update, :create] do 
      resources :reviews, only: [:show, :create, :index, :update, :destroy]
    end
    resources :reviews, only: [:index, :create, :destroy, :update]
    
  end
  root "static_pages#root"
  get '*path', to: "static_pages#frontend_index"
end
