<template>
  <ion-header :translucent="true">
    <ion-toolbar id="appHeader" color="primary">
      <ion-buttons v-show="true" slot="start">
        <ion-menu-button auto-hide="false"></ion-menu-button>
      </ion-buttons>
      <ion-buttons v-show="true" slot="start">
        <ion-back-button default-href="/list" />
      </ion-buttons>
      <ion-title size="large">{{
        $route.name == "Detail" ? "Recette du moment" : "Category"
      }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>
  
  <script setup>
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonMenuButton,
} from "@ionic/vue";

defineProps({
  pageOrigin: {
    type: String,
    required: true,
  },
});
</script>
  
  <style scoped>
#appHeader {
  display: flex;
}
</style>