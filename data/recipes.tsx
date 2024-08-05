export interface Recipe {
  id: string;
  image: string;
  title: string;
  description: string;
  ingredients: string;
  instructions: string;
  category: string;
  ratings: number[];
  comments: string[];
}

const recipes: Recipe[] = [
  {
    id: "1",
    image: "/spaghetti-bolognaise.jpeg",
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish",
    ingredients: "Spaghetti, Ground Beef, Tomato Sauce, Onions, Garlic",
    instructions: "Cook the spaghetti. Prepare the sauce. Combine and serve.",
    category: "Italian",
    ratings: [5, 4, 4],
    comments: ["Delicious!", "Family favorite."],
  },
  {
    id: "2",
    image: "/fish-soup.jpg",
    title: "Fish Soup",
    description: "A classic Italian pasta dish",
    ingredients: "Spaghetti, Ground Beef, Tomato Sauce, Onions, Garlic",
    instructions:
      "In a medium pot, heat the olive oil over medium-high heat. Add the onions and cook, stirring occasionally until the onions start to caramelize.Add the carrots and cook until the carrots start to soften, about 4 more minutes.Add the stock, water, potatoes, bay leaves, and black peppercorns.Season with salt and bring to a boil.",
    category: "Italian",
    ratings: [5, 4, 4],
    comments: ["Delicious!", "Family favorite."],
  },
  {
    id: "3",
    image: "/italian-wedding-soup.jpg",
    title: "Stracciatella (Italian Wedding Soup)",
    description: "A classic Italian pasta dish",
    ingredients:
      "3 1/2 c Chicken broth; homemade|1 lb Fresh spinach; wash/trim/chop|1 Egg|1 c Grated parmesan cheese; --or--|1 c Romano cheese; freshly grated|Salt and pepper; to taste",
    instructions:
      "Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into rags. Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese. NOTES: Someone asked for this recipe a while back. I believe this soup, known as Stracciatella is synonymous with Italian Wedding Soup, however, I seem to remember from I-don't-know-where that Italian Wedding Soup is the same as this but with the addition of tiny meatballs",
    category: "Italian",
    ratings: [5, 4, 4],
    comments: ["Delicious!", "Family favorite."],
  },
  {
    id: "4",
    image: "/spaghetti-bolognaise.jpeg",
    title: "Spaghetti Bolognese",
    description: "A classic Italian pasta dish",
    ingredients: "Spaghetti, Ground Beef, Tomato Sauce, Onions, Garlic",
    instructions: "Cook the spaghetti. Prepare the sauce. Combine and serve.",
    category: "Italian",
    ratings: [5, 4, 4],
    comments: ["Delicious!", "Family favorite."],
  },
  {
    id: "5",
    image: "/fish-soup.jpg",
    title: "Fish Soup",
    description: "A classic Italian pasta dish",
    ingredients: "Spaghetti, Ground Beef, Tomato Sauce, Onions, Garlic",
    instructions:
      "In a medium pot, heat the olive oil over medium-high heat. Add the onions and cook, stirring occasionally until the onions start to caramelize.Add the carrots and cook until the carrots start to soften, about 4 more minutes.Add the stock, water, potatoes, bay leaves, and black peppercorns.Season with salt and bring to a boil.",
    category: "Italian",
    ratings: [5, 4, 4],
    comments: ["Delicious!", "Family favorite."],
  },
  {
    id: "6",
    image: "/italian-wedding-soup.jpg",
    title: "Stracciatella (Italian Wedding Soup)",
    description: "A classic Italian pasta dish",
    ingredients:
      "3 1/2 c Chicken broth; homemade|1 lb Fresh spinach; wash/trim/chop|1 Egg|1 c Grated parmesan cheese; --or--|1 c Romano cheese; freshly grated|Salt and pepper; to taste",
    instructions:
      "Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into rags. Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese. NOTES: Someone asked for this recipe a while back. I believe this soup, known as Stracciatella is synonymous with Italian Wedding Soup, however, I seem to remember from I-don't-know-where that Italian Wedding Soup is the same as this but with the addition of tiny meatballs",
    category: "Italian",
    ratings: [5, 4, 4],
    comments: ["Delicious!", "Family favorite."],
  },
  {
    id: "7",
    image: "/fish-soup.jpg",
    title: "Fish Soup",
    description: "A classic Italian pasta dish",
    ingredients: "Spaghetti, Ground Beef, Tomato Sauce, Onions, Garlic",
    instructions:
      "In a medium pot, heat the olive oil over medium-high heat. Add the onions and cook, stirring occasionally until the onions start to caramelize.Add the carrots and cook until the carrots start to soften, about 4 more minutes.Add the stock, water, potatoes, bay leaves, and black peppercorns.Season with salt and bring to a boil.",
    category: "Italian",
    ratings: [5, 4, 4],
    comments: ["Delicious!", "Family favorite."],
  },
  {
    id: "8",
    image: "/italian-wedding-soup.jpg",
    title: "Stracciatella (Italian Wedding Soup)",
    description: "A classic Italian pasta dish",
    ingredients:
      "3 1/2 c Chicken broth; homemade|1 lb Fresh spinach; wash/trim/chop|1 Egg|1 c Grated parmesan cheese; --or--|1 c Romano cheese; freshly grated|Salt and pepper; to taste",
    instructions:
      "Bring 1 cup of the broth to a boil. Add spinach and cook until softened but still bright green. Remove spinach with a slotted spoon and set aside. Add remaining broth to pot. Bring to a boil. Meanwhile, beat egg lightly with a fork. Beat in 1/4 cup of cheese. When broth boils pour in egg mixture, stirring constantly for a few seconds until it cooks into rags. Add reserved spinach, salt and pepper. Serve immediately, passing remaining cheese. NOTES: Someone asked for this recipe a while back. I believe this soup, known as Stracciatella is synonymous with Italian Wedding Soup, however, I seem to remember from I-don't-know-where that Italian Wedding Soup is the same as this but with the addition of tiny meatballs",
    category: "Italian",
    ratings: [5, 4, 4],
    comments: ["Delicious!", "Family favorite."],
  },
  // Add more recipes as needed
];

export default recipes;
