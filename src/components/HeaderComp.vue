<template>
  <ion-header :translucent="true">
    <ion-toolbar id="appHeader" color="primary">
      <ion-buttons v-if="$route.name == 'Detail'" slot="start">
        <ion-back-button default-href="/list" />
      </ion-buttons>
      <ion-buttons v-else slot="start">
        <ion-menu-button auto-hide="false"></ion-menu-button>
      </ion-buttons>
      <ion-title v-if="$route.name == 'List'" size="large">{{
        $route.params.category
      }}</ion-title>
      <ion-title v-else size="large">{{
        $route.name == "Folder" ? "Recette du moment" : "Recette"
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
</script>
  
  <style scoped>
#appHeader {
  display: flex;
}
</style>