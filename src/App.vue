<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <MenuComp :categories="categories" />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
</template>
  <script setup lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  loadingController,
} from "@ionic/vue";
import MenuComp from "@/components/MenuComp.vue";
import { onMounted, ref } from "vue";
import { useRecipesApiGet } from "@/services/recipesApiGet";

const { getCategories } = useRecipesApiGet();
const categories = ref([]);

onMounted(async () => {
  const loading = await loadingController.create({
    message: "Attendre SVP...",
  });

  await loading.present();
  categories.value = await getCategories();
  loading.dismiss();
});
</script>
