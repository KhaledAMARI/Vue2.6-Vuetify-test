<template>
  <v-card class="mx-auto mt-9 px-7" width="80%">
    <v-card-title class="text-h2 justify-center "> Inscriptions Validation </v-card-title>
      <v-card-text>
        <v-data-table
        :headers="headers"
        :items="inscriptions"
        :items-per-page="5"
        class="elevation-1"
        >
          <template v-slot:item.actions ="{ item }">
            <v-icon
             :color="item.validated ? 'gray' : 'success'"
              class="mr-2"
              @click="validate(item)"
              :disabled="item.validated"
            >
              mdi-send-circle
            </v-icon>
            <v-icon
              color="success"
              @click="sendToken(item)"
            >
              mdi-account-check
            </v-icon>
          </template>
        </v-data-table>
      </v-card-text>

  </v-card>
</template>

<script src='./validation.js'></script>
