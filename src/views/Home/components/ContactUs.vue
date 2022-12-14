<template>
  <div class="py-12 px-sm-7">
    <v-container fluid class="back-ground">
      <v-row>
        <v-col cols="12" md="8" sm="12">
          <article class="edit-talk">
            <h3 class="edit-font">Contact Us</h3>
            <p>
              We're here to help, at Mall of Tanta we're always ready to listen,
              feel free to get in touch anytime
            </p>
          </article>
        </v-col>
        <v-col cols="12" md="4" sm="12">
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Full Name"
              required
              class="mb-2"
              height="52"
              background-color="rgba(0,0,0,.5)"
              rounded
              dense
            >
              <template v-slot:label>
                <h3 class="input__label">full Name</h3>
              </template></v-text-field
            >

            <v-text-field
              v-model="email"
              :rules="emailRules"
              required
              class="mb-2"
              height="52"
              background-color="rgba(0,0,0,.5)"
              rounded
              dense
            >
              <template v-slot:label>
                <h3 class="input__label">Phone Number</h3>
              </template></v-text-field
            >
            <v-text-field
              v-model="textArea"
              :rules="textAreaRules"
              required
              class="mb-2 mar"
              height="52"
              background-color="rgba(0,0,0,.5)"
              rounded
              dense
            >
              <template v-slot:label>
                <h3 class="input__label">Email</h3>
              </template></v-text-field
            >
            <v-text-field
              v-model="textArea"
              :rules="textAreaRules"
              required
              class="mb-2 mar"
              height="52"
              background-color="rgba(0,0,0,.5)"
              rounded
              dense
            >
              <template v-slot:label>
                <h3 class="input__label">Subject</h3>
              </template></v-text-field
            >

            <v-text-field
              v-model="textArea"
              :rules="textAreaRules"
              required
              class="mb-2"
              height="200"
              background-color="rgba(0,0,0,.5)"
              rounded
              filled
            >
              <template v-slot:label>
                <h3 class="input__label">Messge</h3>
              </template>
            </v-text-field>

            <v-btn
              :disabled="!valid"
              color="primary"
              :dark="valid"
              rounded
              class="mt-3"
              block
            >
              Send
              <v-icon>mdi-send</v-icon>
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.back-ground {
  width: 100%;
  height: 680px;
  background-image: url("../../../assets/photo-of-setting-landing-page-contact-us_699133146\ \(1\).png");
  border-radius: 20px;
  position: relative;
}
.edit-talk {
  color: #fff;
  position: absolute;
  top: 32%;
}
.edit-font {
  font-size: 36px;
  margin-bottom: 15px;
}
@media (width<920px) {
  .back-ground {
    height: 800px;
  }
  .edit-talk {
    position: relative;
    top: 0%;
  }
}
.input__label {
  color: white;
  font-weight: 400;
}
</style>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "This Input is required",
      (v) => (v && v.length >= 6) || "This Input is required",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "This Input is required",
      (v) => /.+@.+\..+/.test(v) || "This Input is required",
    ],
    textArea: "",
    textAreaRules: [
      (v) => !!v || "This Input is required",
      (v) => (v && v.length >= 10) || "This Input is required",
    ],
    lazy: false,
  }),
};
</script>
