export function useRecipesAgiGet() {
  async function getRecipeById(id: number) {
    const recipe = {};

    await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
      .then((rawData) => rawData.json())
      .then((data) => data.meals[0])
      .then((meal) => {
        recipe.imageUrl = meal.strMealThumb;
        recipe.name = meal.strMeal;
        recipe.origin = meal.strArea;
        recipe.category = meal.strCategory;

        for (let i = 1; i <= 20; i++) {
          if (meal["strIngredient" + i].trim() === "") {
            recipe.nIngredients = i - 1;
            break;
          }
          recipe["ingredient" + i] = meal["strIngredient" + i];
          recipe["measure" + i] = meal["strMeasure" + i];
        }
      });
    return recipe;
  }

  async function getRandomRecipe() {
    const recipe = {};

    await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((rawData) => rawData.json())
      .then((data) => data.meals[0])
      .then((meal) => {
        recipe.imageUrl = meal.strMealThumb;
        recipe.name = meal.strMeal;
        recipe.origin = meal.strArea;
        recipe.category = meal.strCategory;

        for (let i = 1; i <= 20; i++) {
          if (meal["strIngredient" + i].trim() === "") {
            recipe.nIngredients = i - 1;
            break;
          }
          recipe["ingredient" + i] = meal["strIngredient" + i];
          recipe["measure" + i] = meal["strMeasure" + i];
        }
      });

    return recipe;
  }

  async function getRecipesOfCategory(category: string) {
    return await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category
    )
      .then((rawData) => rawData.json())
      .then((data) => data.meals);
  }

  async function getCategories() {
    return await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((rawData) => rawData.json())
      .then((data) => data.categories);
  }

  return {
    getRecipeById,
    getRandomRecipe,
    getRecipesOfCategory,
    getCategories,
  };
}
