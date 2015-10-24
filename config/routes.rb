Rails.application.routes.draw do
    root 'main#index'

    resources :venues
    resources :tags

end
