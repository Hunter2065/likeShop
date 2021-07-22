# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

p 'Started seeding'
10.times do |time|
  Product.create!(
    name: 'Xiaomi Mi Notebook Pro ' + time.to_s,
    description: Faker::Lorem.paragraph(sentence_count: 5, supplemental: false,
                                       random_sentences_to_add: 5),
    ram: 10 + 5 / 2,
    cpu: 'Intel Core i7-9200U',
    gpu: 'NVidia GeForce 250MX',
    price: Faker::Number.decimal(l_digits: 3, r_digits: 2),
    picture: Rack::Test::UploadedFile.new(
                        File.open(Rails.root.join('app/assets/images/card-img.jpg')),
                        'image/jpg',
                      ))
end
p 'Finished seeding'
