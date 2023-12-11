<template>
  <ion-app>
    <ion-split-pane content-id="main-content">
      <MenuComp />
      <ion-router-outlet id="main-content"></ion-router-outlet>
    </ion-split-pane>
  </ion-app>
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
import MenuComp from "@/components/MenuComp.vue";
</script>