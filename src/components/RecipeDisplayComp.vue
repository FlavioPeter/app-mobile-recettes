<template>
  <ion-img :src="recipe.imageUrl" style="width: 90%; margin: auto"></ion-img>
  <h3>{{ recipe.name || "recipe name" }}</h3>
  <ul id="non-decorated">
    <li><strong>Origine:</strong> {{ recipe.origin || "recipe origin" }}</li>
    <li>
      <strong>Catégorie:</strong> {{ recipe.category || "recipe category" }}
    </li>
  </ul>
  <h3>Ingrédients</h3>
  <ul>
    <li v-for="i in recipe.nIngredients" :key="i">
      {{ recipe["measure" + i] }} {{ recipe["ingredient" + i] }}
    </li>
  </ul>
  <h3>Instructions</h3>
  <p>{{ recipe.instructions || "recipe instructions" }}</p>
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

<style scoped>
#non-decorated,
p,
h3 {
  list-style: none;
  padding-left: 10px;
  padding-bottom: 10px;
}
</style>