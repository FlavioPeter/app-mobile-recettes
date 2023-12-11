<template>
  <ion-menu content-id="main-content" type="overlay">
    <ion-content>
      <ion-list>
        <ion-list-header>Mon menu</ion-list-header>
        <ion-menu-toggle auto-hide="false">
          <ion-item>
            <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
            <ion-label>Page 1</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon slot="start" :icon="logoTux" :md="logoTux"></ion-icon>
            <ion-label>Page 2</ion-label>
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
} from "@ionic/vue";
import { logoTux } from "ionicons/icons";
</script>