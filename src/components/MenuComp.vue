<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-content>
      <ion-list>
        <h1>Mes recettes</h1>
        <p>202197834@CollegeAhuntsic.qc.ca</p>
        <p>Bienvenue, Flavio Weinstein Silva</p>
        <ion-menu-toggle auto-hide="false">
          <ion-item>
            <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
            <ion-label>Accueil</ion-label>
          </ion-item>
          <ion-item
            v-for="c in categories"
            :href="'list/' + c.strCategory"
            :key="c.idCategory"
          >
            <ion-thumbnail slot="start">
              <img :src="c.strCategoryThumb" alt="" />
            </ion-thumbnail>
            <ion-label>{{ c.strCategory }}</ion-label>
          </ion-item>
        </ion-menu-toggle>
      </ion-list>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="main-content"></ion-router-outlet>
</template>
    <script setup lang="ts">
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonMenu,
  IonMenuToggle,
  IonIcon,
  IonHeader,
  IonThumbnail,
  onIonViewWillEnter,
} from "@ionic/vue";
import { logoTux } from "ionicons/icons";

defineProps({
  categories: {
    type: Object,
    required: true,
  },
});
</script>

<style>
img {
  border-radius: 100%;
}
</style>