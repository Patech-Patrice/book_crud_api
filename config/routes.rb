Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
 
  get 'books', to: 'books#index', as: 'books'    
  get '/books/new', to: 'books#new'
  post '/books', to: 'books#create'
  get 'books/:id', to: 'books#show', as: 'book'
  get '/books/:id/edit', to: 'books#edit'
  patch 'books/:id/update', to: 'books#update'
  put 'books/:id', to: 'books#update'
  delete '/books/:id', to: 'books#destroy'
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
    # root "home#index"
  
    end
  end
end

