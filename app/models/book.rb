class Book < ApplicationRecord
    validates :title, presence: true

    validates :body, presence: true
   
    validates :genre, presence: true

    validates :author, presence: true

    validates :image_url, presence: true

 

 

end
