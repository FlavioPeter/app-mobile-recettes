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
  onIonViewWillEnter,
} from "@ionic/vue";

import HeaderComp from "@/components/HeaderComp.vue";
import ListComp from "@/components/ListtComp.vue";
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
    .then((data) => data.categories);
}

onIonViewWillEnter(async () => {
  recipes.value = await getRecipesCategories();
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
