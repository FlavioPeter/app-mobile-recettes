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

import HeaderComp from "@/components/HeaderComp.vue";
import ListComp from "@/components/ListComp.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const recipes = ref([]);
const route = useRoute();

async function getRecipesCategories() {
  return fetch(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
      route.params.category
  )
    .then((rawData) => rawData.json())
    .then((data) => data.meals);
}

// async function waitToLoad(callback) {
//   const loading = await loadingController.create({
//     message: "Attendre SVP...",
//   });

//   await loading.present();
//   await callback();
//   loading.dismiss();
// }

onIonViewWillEnter(async () => {
  const loading = await loadingController.create({
    message: "Attendre SVP...",
  });

  await loading.present();
  recipes.value = await getRecipesCategories();
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
