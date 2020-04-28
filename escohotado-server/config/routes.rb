Rails.application.routes.draw do
  resources :articles
  get 'search_articles', to: 'articles#search_by_tags'
  resources :videos
  get 'search_videos', to: 'videos#search_by_tags'
  get 'random_videos', to: 'videos#random_video'
  get 'loggedinuser', to: 'users#current'

  mount_devise_token_auth_for 'User', at: 'auth'

end