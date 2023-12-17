<template>
  <ion-list id="container">
    <ion-item v-for="r in recipes" :href="'detail/' + r.idMeal" :key="r.idMeal">
      <ion-thumbnail slot="start">
        <img :src="r.strMealThumb" alt="" />
      </ion-thumbnail>
      <ion-label>{{ r.strMeal }}</ion-label>
    </ion-item>
  </ion-list>
</template>
  
  <script setup>
import { IonLabel, IonItem, IonList } from "@ionic/vue";

defineProps({
  recipes: {
    type: Object,
    required: true,
  },
});
</script>
  
  <style>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  padding-top: 75px;
}

.add-city-btn {
  text-align: center;
  width: 100%;
  background: green;
  border: solid;
  border-radius: 10px;
}

.remove-city-btn {
  background: red;
  border: solid;
  border-radius: 100%;
}
</style>