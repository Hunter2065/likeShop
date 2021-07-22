class Product < ApplicationRecord
  validates :name, presence: true, length: { minimum: 1, maximum: 50 } # 8
  validates :description, presence: true, length: { minimum: 1, maximum: 800 } # 20
  validates :price, presence: true, length: { minimum: 2, maximum: 8 }
  validates :ram, presence: true, length: { minimum: 1, maximum: 6 }
  validates :cpu, presence: true, length: { minimum: 6, maximum: 20 }
  validates :gpu, presence: true, length: { minimum: 10, maximum: 20 }
end
