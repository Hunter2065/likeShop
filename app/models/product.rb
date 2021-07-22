class Product < ApplicationRecord
  validates :name, presence: true, length: { minimum: 1, maximum: 50 } # 8
  validates :description, presence: true, length: { minimum: 1, maximum: 800 } # 20
  validates :price, presence: true, length: { minimum: 2, maximum: 8 }
end
