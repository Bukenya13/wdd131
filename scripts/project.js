// Recipe data with diverse cuisines and working image URLs from Unsplash
const recipes = [
    // Italian Recipes
    {
        id: 1,
        name: "Spaghetti Carbonara",
        description: "A classic Roman pasta dish with eggs, cheese, pancetta, and black pepper. Authentic and creamy without using cream!",
        prepTime: "15 mins",
        cookTime: "15 mins",
        totalTime: "30 mins",
        difficulty: "medium",
        category: "classic",
        cuisine: "italian",
        servings: 4,
        ingredients: [
            { name: "spaghetti", quantity: "400g", category: "pasta" },
            { name: "eggs", quantity: "3 large", category: "dairy" },
            { name: "pecorino cheese", quantity: "100g", category: "dairy" },
            { name: "pancetta", quantity: "150g", category: "meat" },
            { name: "black pepper", quantity: "1 tsp", category: "spices" },
            { name: "garlic", quantity: "2 cloves", category: "produce" },
            { name: "salt", quantity: "to taste", category: "spices" }
        ],
        instructions: [
            "Cook spaghetti according to package instructions.",
            "Meanwhile, cook pancetta until crispy.",
            "Whisk eggs with grated cheese and black pepper.",
            "Drain pasta, reserving some pasta water.",
            "Combine hot pasta with egg mixture off heat.",
            "Add pancetta and mix well, adding pasta water if needed."
        ],
        imageUrl: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&q=80",
        nutrition: {
            calories: 450,
            protein: "20g",
            carbs: "55g",
            fat: "15g"
        }
    },
    {
        id: 2,
        name: "Fettuccine Alfredo",
        description: "Creamy pasta with butter and Parmesan cheese. Simple ingredients create an incredibly rich and satisfying dish.",
        prepTime: "10 mins",
        cookTime: "20 mins",
        totalTime: "30 mins",
        difficulty: "easy",
        category: "creamy",
        cuisine: "italian",
        servings: 4,
        ingredients: [
            { name: "fettuccine", quantity: "400g", category: "pasta" },
            { name: "butter", quantity: "100g", category: "dairy" },
            { name: "heavy cream", quantity: "1 cup", category: "dairy" },
            { name: "parmesan cheese", quantity: "150g", category: "dairy" },
            { name: "nutmeg", quantity: "¼ tsp", category: "spices" },
            { name: "salt", quantity: "to taste", category: "spices" },
            { name: "black pepper", quantity: "½ tsp", category: "spices" }
        ],
        instructions: [
            "Cook fettuccine until al dente.",
            "Melt butter in a large pan.",
            "Add cream and simmer gently.",
            "Stir in grated Parmesan until melted.",
            "Add nutmeg, salt, and pepper.",
            "Toss with drained pasta and serve immediately."
        ],
        imageUrl: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800&q=80",
        nutrition: {
            calories: 520,
            protein: "18g",
            carbs: "45g",
            fat: "28g"
        }
    },

    // Canadian Recipes
    {
        id: 3,
        name: "Canadian Poutine",
        description: "Crispy fries topped with cheese curds and rich gravy. Canada's most famous comfort food that's irresistibly delicious.",
        prepTime: "20 mins",
        cookTime: "30 mins",
        totalTime: "50 mins",
        difficulty: "medium",
        category: "comfort",
        cuisine: "canadian",
        servings: 4,
        ingredients: [
            { name: "potatoes", quantity: "6 large", category: "produce" },
            { name: "cheese curds", quantity: "2 cups", category: "dairy" },
            { name: "beef broth", quantity: "2 cups", category: "canned" },
            { name: "butter", quantity: "3 tbsp", category: "dairy" },
            { name: "flour", quantity: "3 tbsp", category: "baking" },
            { name: "vegetable oil", quantity: "for frying", category: "oils" },
            { name: "salt", quantity: "to taste", category: "spices" },
            { name: "black pepper", quantity: "½ tsp", category: "spices" }
        ],
        instructions: [
            "Cut potatoes into fries and soak in cold water.",
            "Heat oil to 300°F and pre-fry potatoes until soft.",
            "Increase oil temperature to 375°F and fry until crispy.",
            "Make gravy by melting butter, adding flour, then slowly adding broth.",
            "Layer fries with cheese curds and top with hot gravy.",
            "Serve immediately while cheese is melting."
        ],
        imageUrl: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
        nutrition: {
            calories: 620,
            protein: "22g",
            carbs: "65g",
            fat: "32g"
        }
    },

    // French Recipes
    {
        id: 4,
        name: "Coq au Vin",
        description: "French chicken braised with wine, mushrooms, onions, and bacon. An elegant dish that's surprisingly easy to make.",
        prepTime: "30 mins",
        cookTime: "1 hr 30 mins",
        totalTime: "2 hrs",
        difficulty: "hard",
        category: "classic",
        cuisine: "french",
        servings: 6,
        ingredients: 
            { name: "chicken thighs", quantity: "8 pieces", category: "meat" },
             name: "bacon", quantity: "200 }g", category: "meat" },
            { name: "red wine", quantity: "2 cups", category: "beverages" },
            
    ]