
<script setup lang="ts">
import { ref, reactive } from "vue";
import useRegistration from "../../composable/registration";

const { storeRegistration } = useRegistration();
const emit = defineEmits(["reloadRegistration", "input"]);

const form = reactive({
  id: null,
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  mobile_number: "",
  position: "",
  government_agency: "",
  region: "",
  province: "",
  city: "",
  riverbasin_assigned: "",
  lgu_fb: ""
});

const preloader = ref(false);
const is_error = ref(false);
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const toggleShow = () => {
  showPassword.value = !showPassword.value;
};

const toggleShowConfirm = () => {
  showConfirmPassword.value = !showConfirmPassword.value;
};

const saveRegistration = async () => {
  let formData = new FormData();
  Object.keys(form).forEach((key) => {
    formData.append(key, form[key] || "");
  });

  if (!is_error.value) {
    preloader.value = true;
    await storeRegistration(formData);
    preloader.value = false;
  }
};
</script>

<template>
  <form class="sign-up-form" @submit.prevent="saveRegistration">
    <h2 class="title">Member Registration</h2>

    <v-row>
      <v-col cols="6">
        <div class="input-field">
          <v-icon icon="mdi-account" size="30" class="mt-3"></v-icon>
          <input type="text" placeholder="Firstname" v-model="form.first_name" required />
        </div>
      </v-col>
      <v-col cols="6">
        <div class="input-field">
          <v-icon icon="mdi-account" size="30" class="mt-3"></v-icon>
          <input type="text" placeholder="Lastname" v-model="form.last_name" required />
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="input-field">
          <v-icon icon="mdi-email" size="30" class="mt-3"></v-icon>
          <input type="email" placeholder="Official Email Address" v-model="form.email" required />
        </div>
      </v-col>
      <v-col>
        <div class="input-field">
          <v-icon icon="mdi-email" size="30" class="mt-3"></v-icon>
          <input type="password" placeholder="password" v-model="form.password" required />
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="input-field">
          <v-icon icon="mdi-cellphone" size="30" class="mt-3"></v-icon>
          <input type="text" placeholder="Official Mobile Number" v-model="form.mobile_number" required />
        </div>
      </v-col>
      <v-col>
        <div class="input-field">
          <v-icon icon="mdi-briefcase" size="30" class="mt-3"></v-icon>
          <input type="text" placeholder="Position/Role" v-model="form.position" required />
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="input-field">
          <v-icon icon="mdi-domain" size="30" class="mt-3"></v-icon>
          <input type="text" placeholder="Government Agency" v-model="form.government_agency" required />
        </div>
      </v-col>
      <v-col>
        <div class="input-field">
          <v-icon icon="mdi-map-marker" size="30" class="mt-3"></v-icon>
          <input type="text" placeholder="Region" v-model="form.region" required />
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="input-field">
          <v-icon icon="mdi-map" size="30" class="mt-3"></v-icon>
          <input type="text" placeholder="Province" v-model="form.province" required />
        </div>
      </v-col>
      <v-col>
        <div class="input-field">
          <v-icon icon="mdi-city" size="30" class="mt-3"></v-icon>
          <input type="text" placeholder="City/Municipality" v-model="form.city" required />
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="input-field">
          <v-icon icon="mdi-water" size="30" class="mt-3"></v-icon>
          <input type="text" placeholder="Riverbasin Assigned" v-model="form.riverbasin_assigned" required />
        </div>
      </v-col>
      <v-col>
        <div class="input-field">
          <v-icon icon="mdi-facebook" size="30" class="mt-3"></v-icon>
          <input type="text" placeholder="LGU Facebook Page (if any)" v-model="form.lgu_fb" />
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-btn class="btn solid" type="submit" block size="x-large">Submit</v-btn>
      </v-col>
    </v-row>
  </form>
</template>
