<template>
  <ion-page>
    <HeaderComp :category="recipe.category" />

    <ion-content :fullscreen="true">
      <RecipeDisplayComp :recipe="recipe" />
    </ion-content>
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
  loadingController,
  onIonViewWillEnter,
} from "@ionic/vue";

import RecipeDisplayComp from "@/components/RecipeDisplayComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const recipe = reactive({
  imageUrl: null,
  name: null,
  origin: null,
  category: null,
});

async function getRecipeById() {
  fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + route.params.id
  )
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
  const loading = await loadingController.create({
    message: "Attendre SVP...",
  });

  await loading.present();
  await getRecipeById();
  loading.dismiss();
});
</script>

<style scoped>
ion-content {
  top: 20px;
}
</style>
