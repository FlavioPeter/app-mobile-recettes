<template>
  <ion-content>
    <ion-img :src="recipe.imageUrl" style="width: 90%; margin: auto"></ion-img>
    <ion-label size="large">{{ recipe.name || "recipe name" }}</ion-label>
    <ul>
      <li>Origine: {{ recipe.origin || "recipe origin" }}</li>
      <li>Catégorie: {{ recipe.category || "recipe category" }}</li>
    </ul>
    <ion-label size="large">Ingrédients</ion-label>
    <ul>
      <li v-for="i in recipe.nIngredients" :key="i">
        {{ recipe["measure" + i] }} {{ recipe["ingredient" + i] }}
      </li>
    </ul>
  </ion-content>
</template>

<script setup>
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
  IonLabel,
  IonMenuButton,
  onIonViewWillEnter,
} from "@ionic/vue";

defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
</style>