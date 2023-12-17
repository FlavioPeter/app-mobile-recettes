<template>
  <ion-page>
    <HeaderComp />
    <ion-content :fullscreen="true">
      <ListComp :recipes="recipes" />
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
import HeaderComp from "@/components/HeaderComp.vue";
import ListComp from "@/components/ListComp.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useRecipesApiGet } from "@/services/recipesApiGet";

const { getRecipesOfCategory } = useRecipesApiGet();
const recipes = ref([]);
const route = useRoute();

onIonViewWillEnter(async () => {
  const loading = await loadingController.create({
    message: "Attendre SVP...",
  });

  await loading.present();
  recipes.value = await getRecipesOfCategory(route.params.category);
  loading.dismiss();
});
</script>

<style scoped>
ion-content {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
}
</style>
