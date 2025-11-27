function randomFood(){
    var index = Math.floor(Math.random() * recipes.length);


    var more = ""

    var ing = ""
    var ins = ""
    var tip = ""

    if(recipes[index].more_45){
        more = `
            <div
                class="d-flex align-items-center gap-3 px-3 py-4 border-start border-5 border-danger bg-danger-subtle rounded-2">
                <i class="fa-solid fa-triangle-exclamation fa-lg text-danger"></i>
                <div>
                    <p class="m-0 text-danger fw-bold">Extended Preparation Time</p>
                    <p class="m-0 text-danger text-opacity-75 fs-8">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
                </div>
            </div>
        `
    }

    for(var i = 0; i < recipes[index].ingredients.length; i++){
        ing += `
            <li class="d-flex align-items-center gap-2">
                <div
                    class="w-26 h-26 rounded-circle bg-orange text-white fs-8 fw-bold flex-center">
                    <span>${i+1}</span>
                </div>
                <span class="text-black text-opacity-75">${recipes[index].ingredients[i]}</span>
            </li>
        `
    }

    for(var i = 0; i < recipes[index].instruction.length; i++){
        ins += `
            <li class="d-flex align-items-center gap-2">
                <div
                    class="w-45 h-45 rounded-4 bg-orange text-white fs-5 fw-bold flex-center">
                    <span>${i+1}</span>
                </div>
                    <span class="text-second">${recipes[index].instruction[i]}</span>
            </li>
        `
    }

    for(var i = 0; i < recipes[index].tips.length; i++){
        tip += `
            <li
                class="d-flex align-items-center gap-2 px-3 py-4 border-start border-5 border-warning border-opacity-50 bg-warning-subtle rounded-2">
                <i class="fa-solid fa-circle-check fa-lg text-warning"></i>
                <span>${recipes[index].tips[i]}</span>
            </li>
        `
    }


    document.getElementById('random').innerHTML = `
        <div class="container">
            <div class="row parent g-0 rounded-3 bg-white overflow-hidden">
                <div class="col-lg-5 section-h">
                    <div class="inline position-relative section-h">
                        <div class="image flex-center section-h">
                            <img src="${recipes[index].img}" class="d-block w-100 section-h" alt="">
                        </div>
                        <div
                            class="rounded-3 d-flex align-items-center justify-content-around p-3 w-75 bg-white position-absolute bottom-0 mb-4 start-50 translate-middle-x">
                            <div class="text-center">
                                <i class="fa-solid fa-clock text-orange fa-xl"></i>
                                <p class="m-0 fs-7 text-second mt-2">Prep Time</p>
                                <p class="m-0 fw-bold">${recipes[index].prepTime}</p>
                            </div>
                            <div class="text-center">
                                <i class="fa-solid fa-fire-burner text-danger fa-xl"></i>
                                <p class="m-0 fs-7 text-second mt-2">Cook Time</p>
                                <p class="m-0 fw-bold">${recipes[index].cookTime}</p>
                            </div>
                            <div class="text-center">
                                <i class="fa-solid fa-users text-primary fa-xl"></i>
                                <p class="m-0 fs-7 text-second mt-2">Servings</p>
                                <p class="m-0 fw-bold">${recipes[index].servings} people</p>
                            </div>
                        </div>
                        <div class="rounded-pill px-3 py-2 bg-white position-absolute top-0 start-0 m-3">
                            <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
                            <span class="fw-bold ms-1">${recipes[index].rating}</span>
                            <span class="text-second fs-7 ms-2">(${recipes[index].reviews} reviews)</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 h-100">
                    <div class="inline p-4 h-100 overflow-y-auto">
                        <div class="d-flex align-items-center gap-2 mb-3">
                            <p class="m-0 bg-success-subtle px-2 py-1 rounded-pill text-success fs-8 fw-medium">${recipes[index].level}</p>
                            <p class="m-0 bg-primary-subtle px-2 py-1 rounded-pill text-primary fs-8 fw-medium">${recipes[index].cuisine}
                            </p>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <h2 class="fs-1 fw-bold m-0">${recipes[index].title}</h2>
                            <div class="d-flex gap-2">
                                <div
                                    class="flex-center rounded-3 w-45 h-45 bg-light-orange transtion bg-light-orange-hover pointer text-orange">
                                    <i class="fa-solid fa-bookmark"></i>
                                </div>
                                <div
                                    class="flex-center rounded-3 w-45 h-45 bg-light-orange transtion bg-light-orange-hover pointer text-orange">
                                    <i class="fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                        <p class="m-0 mb-4 text-second">${recipes[index].descrption}</p>
                        ${more}
                        <div>
                            <ul class="nav nav-tabs justify-content-around" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="ingredients-tab" data-bs-toggle="tab"
                                        data-bs-target="#ingredients-tab-pane" type="button" role="tab"
                                        aria-controls="ingredients-tab-pane" aria-selected="true"><i
                                            class="fa-solid me-2 fa-list-check"></i>Ingredients</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="instructions-tab" data-bs-toggle="tab"
                                        data-bs-target="#instructions-tab-pane" type="button" role="tab"
                                        aria-controls="instructions-tab-pane" aria-selected="false"><i
                                            class="fa-solid me-2 fa-book-open"></i>Instructions</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="Nutrition-tab" data-bs-toggle="tab"
                                        data-bs-target="#Nutrition-tab-pane" type="button" role="tab"
                                        aria-controls="Nutrition-tab-pane" aria-selected="false"><i
                                            class="fa-solid me-2 fa-chart-pie"></i>Nutrition</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="tips-tab" data-bs-toggle="tab"
                                        data-bs-target="#tips-tab-pane" type="button" role="tab"
                                        aria-controls="tips-tab-pane" aria-selected="false"><i
                                            class="fa-solid me-2 fa-lightbulb"></i>Chef's Tips</button>
                                </li>
                            </ul>
                            <div class="tab-content mt-3 py-3 border-top border-bottom" id="myTabContent">
                                <div class="tab-pane fade h-350 show active" id="ingredients-tab-pane" role="tabpanel"
                                    aria-labelledby="ingredients-tab" tabindex="0">
                                    <div class="bg-light-orange p-3 rounded-3 max-h-100 overflow-y-auto">
                                        <ul class="list-unstyled p-0 m-0 d-flex flex-column gap-3">
                                            ${ing}
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade h-350" id="instructions-tab-pane" role="tabpanel"
                                    aria-labelledby="instructions-tab" tabindex="0">
                                    <div class="rounded-3 max-h-100 overflow-y-auto">
                                        <ul class="list-unstyled p-0 m-0 d-flex flex-column gap-3">
                                            ${ins}
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade h-350" id="Nutrition-tab-pane" role="tabpanel"
                                    aria-labelledby="Nutrition-tab" tabindex="0">
                                    <div>
                                        <ul class="list-unstyled p-0 m-0 row g-3 row-cols-2">
                                            <li class="col">
                                                <div
                                                    class="inline bg-secondary bg-opacity-5 gap-2 p-3 d-flex align-items-center rounded-3">
                                                    <div
                                                        class="w-40 h-40 flex-center rounded-3 bg-light-orange text-orange">
                                                        <i class="fa-solid fa-fire"></i>
                                                    </div>
                                                    <p class="m-0 fw-medium flex-grow-1">Calories</p>
                                                    <span class="fs-5 fw-bold">${recipes[index].nutrition.calories} kcal</span>
                                                </div>
                                            </li>
                                            <li class="col">
                                                <div
                                                    class="inline bg-secondary bg-opacity-5 gap-2 p-3 d-flex align-items-center rounded-3">
                                                    <div
                                                        class="w-40 h-40 flex-center rounded-3 bg-primary-subtle text-primary">
                                                        <i class="fa-solid fa-dumbbell"></i>
                                                    </div>
                                                    <p class="m-0 fw-medium flex-grow-1">Protein</p>
                                                    <span class="fs-5 fw-bold">${recipes[index].nutrition.protein}</span>
                                                </div>
                                            </li>
                                            <li class="col">
                                                <div
                                                    class="inline bg-secondary bg-opacity-5 gap-2 p-3 d-flex align-items-center rounded-3">
                                                    <div
                                                        class="w-40 h-40 flex-center rounded-3 bg-warning-subtle text-warning">
                                                        <i class="fa-solid fa-wheat-awn"></i>
                                                    </div>
                                                    <p class="m-0 fw-medium flex-grow-1">Carbohydrates</p>
                                                    <span class="fs-5 fw-bold">${recipes[index].nutrition.carbs}</span>
                                                </div>
                                            </li>
                                            <li class="col">
                                                <div
                                                    class="inline bg-secondary bg-opacity-5 gap-2 p-3 d-flex align-items-center rounded-3">
                                                    <div
                                                        class="w-40 h-40 flex-center rounded-3 bg-danger bg-opacity-25 text-danger">
                                                        <i class="fa-solid fa-droplet"></i>
                                                    </div>
                                                    <p class="m-0 fw-medium flex-grow-1">Fat</p>
                                                    <span class="fs-5 fw-bold">${recipes[index].nutrition.fat}</span>
                                                </div>
                                            </li>
                                            <li class="col">
                                                <div
                                                    class="inline bg-secondary bg-opacity-5 gap-2 p-3 d-flex align-items-center rounded-3">
                                                    <div
                                                        class="w-40 h-40 flex-center rounded-3 bg-success-subtle text-success">
                                                        <i class="fa-solid fa-seedling"></i>
                                                    </div>
                                                    <p class="m-0 fw-medium flex-grow-1">Fiber</p>
                                                    <span class="fs-5 fw-bold">${recipes[index].nutrition.fiber}</span>
                                                </div>
                                            </li>
                                            <li class="col">
                                                <div
                                                    class="inline bg-secondary bg-opacity-5 gap-2 p-3 d-flex align-items-center rounded-3">
                                                    <div
                                                        class="w-40 h-40 flex-center rounded-3 bg-light-pink text-pink">
                                                        <i class="fa-solid fa-cube"></i>
                                                    </div>
                                                    <p class="m-0 fw-medium flex-grow-1">Sodium</p>
                                                    <span class="fs-5 fw-bold">${recipes[index].nutrition.sodium}</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="tab-pane fade h-350" id="tips-tab-pane" role="tabpanel"
                                    aria-labelledby="tips-tab" tabindex="0">
                                    <div class="max-h-100 overflow-y-auto">
                                        <ul class="list-unstyled p-0 m-0 d-flex flex-column gap-3">
                                            ${tip}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onclick="randomFood()" class="mt-4 btn bg-gradiant-orange bg-gradiant-orange-hover transtion px-4 py-2 text-white custom-btn"><i class="fa-solid fa-rotate"></i> Try Another Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    `
}










const recipes = [
    {
        title: "French Onion Soup",
        descrption : "Slow-cooked tender pork in smoky barbecue sauce",
        more_45 : true,
        img: "images/food 1.jpg",
        rating: 4.7,
        reviews: 267,
        prepTime: "15 min",
        cookTime: "60 min",
        servings: 4,
        level: "Intermediate",
        cuisine: "Mediterranean",
        ingredients: [
            "4 large onions, thinly sliced",
            "1/2 cup white wine",
            "1 liter beef broth",
            "4 tablespoons butter"
        ],
        instruction: [
            "Melt butter in a large pot and caramelize onions for 40 minutes.",
            "Add white wine and deglaze the pot.",
            "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
            "Toast baguette slices.",
            "Top soup with bread and cheese, then broil 3-5 minutes."
        ],
        nutrition: {
            calories: 380,
            protein: "18g",
            carbs: "36g",
            fat: "18g",
            fiber: "4g",
            sodium: "980mg"
        },
        tips: [
            "Make bolognese sauce a day ahead for better flavor",
            "Don't skip the resting time after baking",
            "Use fresh pasta sheets for best texture",
            "Freeze leftovers in individual portions",
        ]
    },

    {
        title: "Grilled Chicken Salad",
        descrption: "Light and fresh salad with grilled chicken breast",
        more_45: false,
        img: "images/food 2.jpg",
        rating: 4.5,
        reviews: 180,
        prepTime: "10 min",
        cookTime: "20 min",
        servings: 2,
        level: "Easy",
        cuisine: "American",
        ingredients: [
            "2 chicken breasts",
            "1 cucumber sliced",
            "Cherry tomatoes",
            "Lettuce mix",
            "Olive oil & lemon"
        ],
        instruction: [
            "Season and grill chicken for 8 minutes each side.",
            "Chop vegetables and mix them.",
            "Slice chicken and add to salad.",
            "Dress with olive oil and lemon."
        ],
        nutrition: {
            calories: 290,
            protein: "32g",
            carbs: "12g",
            fat: "12g",
            fiber: "3g",
            sodium: "400mg"
        },
        tips: [
            "Use chicken thighs for juicier texture",
            "Add feta cheese for extra flavor"
        ]
    },

    {
        title: "Beef Tacos",
        descrption: "Crispy tacos stuffed with seasoned ground beef",
        more_45: false,
        img: "images/food 3.jpg",
        rating: 4.9,
        reviews: 341,
        prepTime: "15 min",
        cookTime: "25 min",
        servings: 3,
        level: "Easy",
        cuisine: "Mexican",
        ingredients: [
            "500g ground beef",
            "Taco shells",
            "Taco seasoning",
            "Shredded cheese",
            "Lettuce"
        ],
        instruction: [
            "Cook beef with taco seasoning for 15 minutes.",
            "Warm taco shells.",
            "Assemble tacos with beef, lettuce, and cheese."
        ],
        nutrition: {
            calories: 430,
            protein: "22g",
            carbs: "28g",
            fat: "24g",
            fiber: "5g",
            sodium: "850mg"
        },
        tips: [
            "Add salsa or guacamole",
            "Toast taco shells for extra crunch",
            "Use lean beef for healthier version"
        ]
    },

    {
        title: "Creamy Mushroom Pasta",
        descrption: "Pasta tossed in a rich creamy mushroom sauce",
        more_45: true,
        img: "images/food 4.jpg",
        rating: 4.8,
        reviews: 298,
        prepTime: "20 min",
        cookTime: "35 min",
        servings: 4,
        level: "Intermediate",
        cuisine: "Italian",
        ingredients: [
            "300g pasta",
            "2 cups mushrooms",
            "1 cup heavy cream",
            "Garlic cloves",
            "Parmesan cheese"
        ],
        instruction: [
            "Boil pasta until al dente.",
            "Sauté mushrooms and garlic.",
            "Add cream and simmer.",
            "Mix pasta with sauce and top with parmesan."
        ],
        nutrition: {
            calories: 520,
            protein: "16g",
            carbs: "56g",
            fat: "26g",
            fiber: "3g",
            sodium: "600mg"
        },
        tips: [
            "Use mixed mushrooms for deeper flavor",
            "Reserve pasta water to adjust sauce"
        ]
    },

    {
        title: "Chicken Curry",
        descrption: "Spicy and aromatic Indian chicken curry",
        more_45: true,
        img: "images/food 5.jpg",
        rating: 4.6,
        reviews: 215,
        prepTime: "20 min",
        cookTime: "50 min",
        servings: 4,
        level: "Advanced",
        cuisine: "Indian",
        ingredients: [
            "1kg chicken pieces",
            "Curry paste",
            "Coconut milk",
            "Onions",
            "Garlic & ginger"
        ],
        instruction: [
            "Cook onions until golden.",
            "Add curry paste and sauté.",
            "Add chicken and cook 10 min.",
            "Pour coconut milk and simmer for 30 min."
        ],
        nutrition: {
            calories: 610,
            protein: "45g",
            carbs: "18g",
            fat: "36g",
            fiber: "4g",
            sodium: "740mg"
        },
        tips: [
            "Marinate chicken overnight",
            "Add chili for extra heat",
            "Serve with basmati rice"
        ]
    },

    {
        title: "Shrimp Fried Rice",
        descrption: "Stir-fried rice with shrimp and vegetables",
        more_45: false,
        img: "images/food 6.jpg",
        rating: 4.4,
        reviews: 192,
        prepTime: "10 min",
        cookTime: "15 min",
        servings: 3,
        level: "Easy",
        cuisine: "Asian",
        ingredients: [
            "Cooked rice",
            "Shrimp",
            "Soy sauce",
            "Peas & carrots",
            "Eggs"
        ],
        instruction: [
            "Scramble eggs and set aside.",
            "Stir-fry shrimp until pink.",
            "Add vegetables, rice, and soy sauce.",
            "Add eggs back and mix well."
        ],
        nutrition: {
            calories: 480,
            protein: "28g",
            carbs: "52g",
            fat: "16g",
            fiber: "4g",
            sodium: "900mg"
        },
        tips: [
            "Use day-old rice",
            "Add sesame oil for flavor"
        ]
    },

    {
        title: "Margherita Pizza",
        descrption: "Classic Italian pizza with fresh basil",
        more_45: true,
        img: "images/food 7.jpg",
        rating: 4.9,
        reviews: 500,
        prepTime: "30 min",
        cookTime: "15 min",
        servings: 2,
        level: "Intermediate",
        cuisine: "Italian",
        ingredients: [
            "Pizza dough",
            "Tomato sauce",
            "Mozzarella cheese",
            "Fresh basil"
        ],
        instruction: [
            "Roll out the dough.",
            "Spread tomato sauce.",
            "Add cheese and basil.",
            "Bake until crust is crispy."
        ],
        nutrition: {
            calories: 700,
            protein: "30g",
            carbs: "82g",
            fat: "28g",
            fiber: "6g",
            sodium: "950mg"
        },
        tips: [
            "Use a pizza stone",
            "Preheat oven at highest temp",
            "Add olive oil after baking"
        ]
    },

    {
        title: "Vegetable Soup",
        descrption: "Warm and healthy hearty vegetable soup",
        more_45: false,
        img: "images/food 8.jpg",
        rating: 4.3,
        reviews: 140,
        prepTime: "15 min",
        cookTime: "25 min",
        servings: 4,
        level: "Easy",
        cuisine: "Mediterranean",
        ingredients: [
            "Carrots",
            "Zucchini",
            "Potatoes",
            "Vegetable broth",
            "Celery"
        ],
        instruction: [
            "Chop all vegetables.",
            "Cook carrots and potatoes first.",
            "Add remaining veggies and broth.",
            "Simmer until tender."
        ],
        nutrition: {
            calories: 210,
            protein: "5g",
            carbs: "32g",
            fat: "4g",
            fiber: "6g",
            sodium: "500mg"
        },
        tips: [
            "Add pasta or rice to make it heavier",
            "Use fresh herbs for aroma"
        ]
    },

    {
        title: "BBQ Ribs",
        descrption: "Tender slow-cooked ribs with smoky BBQ glaze",
        more_45: true,
        img: "images/food 9.jpg",
        rating: 4.8,
        reviews: 380,
        prepTime: "25 min",
        cookTime: "120 min",
        servings: 4,
        level: "Advanced",
        cuisine: "American",
        ingredients: [
            "1 rack beef ribs",
            "BBQ sauce",
            "Paprika & garlic powder",
            "Brown sugar",
            "Salt & pepper"
        ],
        instruction: [
            "Season ribs and wrap in foil.",
            "Bake for 2 hours until tender.",
            "Brush BBQ sauce and broil 5 minutes."
        ],
        nutrition: {
            calories: 920,
            protein: "48g",
            carbs: "38g",
            fat: "68g",
            fiber: "2g",
            sodium: "1100mg"
        },
        tips: [
            "Let ribs rest before slicing",
            "Use homemade BBQ sauce",
            "Slow-cook for best tenderness"
        ]
    }
];

