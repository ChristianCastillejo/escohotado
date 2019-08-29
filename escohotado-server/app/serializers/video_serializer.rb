class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :url, :description, :tags, :date
  has_many :tags
end
