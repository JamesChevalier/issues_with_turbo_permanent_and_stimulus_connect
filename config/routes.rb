Rails.application.routes.draw do
  get 'permanent_present/yes', as: :yes
  get 'permanent_present/no', as: :no
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
