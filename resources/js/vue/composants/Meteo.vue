<template>
  <v-card class="pa-5">
    <v-autocomplete
      v-model="values"
      :items="items"
      item-text="nom"
      :search-input.sync="search"
      hide-details
      filled
      small-chips
      deletable-chips
      label="Commune"
      placeholder="Commencer à taper pour lancer votre rechercher"
      class="pa-2"
      multiple
      @change="meteo"
    ></v-autocomplete>
    <v-card>{{ commune }}</v-card>
  </v-card>
</template>

<script src="./Meteo.js"></script>