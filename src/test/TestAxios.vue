<template>
  <v-container class="mt-15">
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="code"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My CRUD</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.code"
                        label="code"
                      ></v-text-field>
                    </v-col>
                    <!-- </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.fat"
                        label="Fat (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      ></v-text-field>
                    </v-col> -->
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="putaxios()">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deletaxios()"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
// import { response } from "express";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "code", value: "code" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      code: "",
    },
    defaultItem: {
      name: "",
      code: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        // {
        //   name: "Frozen Yogurt",
        //   code: 159,
        //   fat: 6.0,
        //   carbs: 24,
        //   protein: 4.0,
        // },
        // {
        //   name: "Ice cream sandwich",
        //   calories: 237,
        //   fat: 9.0,
        //   carbs: 37,
        //   protein: 4.3,
        // },
        // {
        //   name: "Eclair",
        //   calories: 262,
        //   fat: 16.0,
        //   carbs: 23,
        //   protein: 6.0,
        // },
        // {
        //   name: "Cupcake",
        //   calories: 305,
        //   fat: 3.7,
        //   carbs: 67,
        //   protein: 4.3,
        // },
        // {
        //   name: "Gingerbread",
        //   calories: 356,
        //   fat: 16.0,
        //   carbs: 49,
        //   protein: 3.9,
        // },
        // {
        //   name: "Jelly bean",
        //   calories: 375,
        //   fat: 0.0,
        //   carbs: 94,
        //   protein: 0.0,
        // },
        // {
        //   name: "Lollipop",
        //   calories: 392,
        //   fat: 0.2,
        //   carbs: 98,
        //   protein: 0,
        // },
        // {
        //   name: "Honeycomb",
        //   calories: 408,
        //   fat: 3.2,
        //   carbs: 87,
        //   protein: 6.5,
        // },
        // {
        //   name: "Donut",
        //   calories: 452,
        //   fat: 25.0,
        //   carbs: 51,
        //   protein: 4.9,
        // },
        // {
        //   name: "KitKat",
        //   calories: 518,
        //   fat: 26.0,
        //   carbs: 65,
        //   protein: 7,
        // },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      // this.deletaxios();
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    nameaxios() {
      return this.axios
        .get("https://ax-admin-api.azurewebsites.net/public/api/network", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9heC1hZG1pbi1hcGkuYXp1cmV3ZWJzaXRlcy5uZXRcL3B1YmxpY1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MDQxODI4NywiZXhwIjoxNjcwNDE5MTg3LCJuYmYiOjE2NzA0MTgyODcsImp0aSI6InkwOXVucjN6SDc5Z2lhM0UiLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.UFcjP0KTFNHePYC2uVw0MynwjQabgVTQSHNUdrqAYDA",
          },
        })
        .then((response) => {
          this.desserts = response.data.data.data;
          console.log(this.desserts);
        });
      //   this.$axios.setToken(
      //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9heC1hZG1pbi1hcGkuYXp1cmV3ZWJzaXRlcy5uZXRcL3B1YmxpY1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MDIzNzYwMywiZXhwIjoxNjcwMjM4NTAzLCJuYmYiOjE2NzAyMzc2MDMsImp0aSI6IjAyekdPUVJsSktTZk5jYlciLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.lidQe1tYdYfMWYR8jnkaIC1vL4p_NA5-5L5EJHVuExQ"
      //   );
      // this.desserts=ip
    },
    postaxios() {
      return this.axios
        .post(
          "https://ax-admin-api.azurewebsites.net/public/api/network",
          this.editedItem,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9heC1hZG1pbi1hcGkuYXp1cmV3ZWJzaXRlcy5uZXRcL3B1YmxpY1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MDQxODI4NywiZXhwIjoxNjcwNDE5MTg3LCJuYmYiOjE2NzA0MTgyODcsImp0aSI6InkwOXVucjN6SDc5Z2lhM0UiLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.UFcjP0KTFNHePYC2uVw0MynwjQabgVTQSHNUdrqAYDA",
            },
          }
        )
        .then((response) => {
          // eslint-disable-next-line prettier/prettier
          this.desserts.push(response.data.data);
          this.dialog = false;
        });
      //   this.$axios.setToken(
      //     "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9heC1hZG1pbi1hcGkuYXp1cmV3ZWJzaXRlcy5uZXRcL3B1YmxpY1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MDIzNzYwMywiZXhwIjoxNjcwMjM4NTAzLCJuYmYiOjE2NzAyMzc2MDMsImp0aSI6IjAyekdPUVJsSktTZk5jYlciLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.lidQe1tYdYfMWYR8jnkaIC1vL4p_NA5-5L5EJHVuExQ"
      //   );
      // this.desserts=ip
    },
    deletaxios() {
      return this.axios
        .delete(
          `https://ax-admin-api.azurewebsites.net/public/api/network/${
            this.desserts[this.editedIndex].id
          }`,
          {
            headers: {
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9heC1hZG1pbi1hcGkuYXp1cmV3ZWJzaXRlcy5uZXRcL3B1YmxpY1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MDQxODI4NywiZXhwIjoxNjcwNDE5MTg3LCJuYmYiOjE2NzA0MTgyODcsImp0aSI6InkwOXVucjN6SDc5Z2lhM0UiLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.UFcjP0KTFNHePYC2uVw0MynwjQabgVTQSHNUdrqAYDA",
            },
          }
        )
        .then((response) => {
          this.desserts.splice(this.editedIndex, 1);
          this.closeDelete();
          // this.dialogDelete = true;
          // this.editedIndex = this.desserts.indexOf(item);
          // this.desserts.splice(item);
          // this.deleteItemConfirm();
          // this.nameaxios();
          console.log(response);
          // this.editedIndex = this.desserts.indexOf(item);
          // this.editedItem = Object.assign({}, item);
          // this.dialog = true;
        });
    },
    putaxios() {
      return this.axios
        .put(
          `https://ax-admin-api.azurewebsites.net/public/api/network/${
            this.desserts[this.editedIndex].id
          }`,
          this.editedItem,
          {
            headers: {
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9heC1hZG1pbi1hcGkuYXp1cmV3ZWJzaXRlcy5uZXRcL3B1YmxpY1wvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTY3MDQxODI4NywiZXhwIjoxNjcwNDE5MTg3LCJuYmYiOjE2NzA0MTgyODcsImp0aSI6InkwOXVucjN6SDc5Z2lhM0UiLCJzdWIiOjQsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.UFcjP0KTFNHePYC2uVw0MynwjQabgVTQSHNUdrqAYDA",
            },
          }
        )
        .then((response) => {
          // eslint-disable-next-line prettier/prettier
          this.desserts.splice(this.editedIndex, 1);
          this.desserts.push(response.data.data);
          this.dialog = false;
        });
    },
  },
  mounted() {
    this.nameaxios();
    // this.indexarray();
  },
};
</script>
