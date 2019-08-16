Rails.application.routes.draw do
  resources :articles
  get 'search_articles', to: 'articles#search_by_tags'
end