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
  IonPage,
  loadingController,
  onIonViewWillEnter,
} from "@ionic/vue";
import RecipeDisplayComp from "@/components/RecipeDisplayComp.vue";
import HeaderComp from "@/components/HeaderComp.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRecipesApiGet } from "@/services/recipesApiGet";

const { getRecipeById } = useRecipesApiGet();

const route = useRoute();

const recipe = ref({
  imageUrl: null,
  name: null,
  origin: null,
  category: null,
});

onIonViewWillEnter(async () => {
  const loading = await loadingController.create({
    message: "Attendre SVP...",
  });

  await loading.present();
  recipe.value = await getRecipeById(route.params.id);
  loading.dismiss();
});
</script>

<style scoped>
ion-content {
  top: 20px;
}
</style>
