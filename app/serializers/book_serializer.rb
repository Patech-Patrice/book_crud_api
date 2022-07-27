class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :genre, :image_url, :author


end
