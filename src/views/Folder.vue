<template>
  <ion-page>
    <HeaderComp />
    <RecipeDisplayComp :recipe="recipe" />
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
  IonImg,
  IonMenuButton,
  onIonViewWillEnter,
} from "@ionic/vue";

import RecipeDisplayComp from "@/components/RecipeDisplayComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import { reactive } from "vue";

const recipe = reactive({
  imageUrl: null,
  name: null,
  origin: null,
  category: null,
});

async function getRandomRecipe() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
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
}

onIonViewWillEnter(async () => {
  getRandomRecipe();
});
</script>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
