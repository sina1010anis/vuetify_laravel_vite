<template>

<v-row
    justify="center"
  >
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          class="ma-2"
          color="primary"
          v-bind="props"
        >
          Slide X Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <div class="mx-4 hidden-sm-and-down"></div>

    <div class="bg-cyan-darken-1 text-center">
    <span>Lorem ipsum</span>
  </div>
  <font-awesome-icon :icon="['fas', 'arrow-right']" />
    <v-menu transition="slide-x-reverse-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          class="ma-2 pink-lighten-2 w-50"

          v-bind="props"
        >
          Slide X Reverse Transition
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          link
        >
          <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>    <p>
        Hello World Vue
        <v-row align="center" justify="center">
            <v-col cols="auto">
                <v-btn density="compact" icon="mdi-plus"></v-btn>
            </v-col>
        </v-row>


    </p>

</template>

<script>



</script>
