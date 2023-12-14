# frozen_string_literal: true

9.times do |i|
  Recipe.create(
    name: "Recipe #{i + 1}",
    ingredients: 'Pot de 227 g de crème caillée, 25 g de beurre, 1 cuillère à café de maïzena, 100 g de parmesan, muscade râpée, 250 g de fettuccine ou tagliatelles fraîches, ciboulette ciselée ou persil haché pour servir (facultatif)',
    instruction: 'Dans une casserole moyenne, mélanger la crème caillée, le beurre et la maïzena à feu doux et laisser mijoter. Éteignez le feu et gardez au chaud.'
  )
end
puts '9 recipes created'
