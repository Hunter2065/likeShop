class AddMoreSpecification < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :ram, :string
    add_column :products, :cpu, :string
    add_column :products, :gpu, :string
  end
end
