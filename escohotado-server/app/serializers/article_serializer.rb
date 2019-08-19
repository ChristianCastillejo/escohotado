class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :body, :images, :tags, :date
  has_many :tags
end
