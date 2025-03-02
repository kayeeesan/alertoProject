<script setup>
import { reactive, watch, ref } from "vue";
import useRegistration from "../../../composable/registration";

const { errors, is_success, storeRegistration } = useRegistration();
const emit = defineEmits(["reloadRegisteredAccounts", "input"]);

const props = defineProps({
    registeredAccount: {
        type: Object,
        default: null,
    },
    value: {
        type: Boolean,
        default: false,
    },
});

const show_form_modal = ref(false);
watch(
    () => props.value,
    (value) => {
        show_form_modal.value = value;
    }
);

const form = reactive({
    first_name: "",
    last_name: "",
    email: "",
    password: "123456",  // Default password
    position: "",
    mobile_number: "",
    government_agency: "",
    region: "",
    province: "",
    city: "",
    riverbasin_assigned: ""
});


const saveRegisteredAccount = async () => {
    const response = await storeRegistration(form);

    if (is_success.value) {
        emit("reloadRegisteredAccounts");
        emit("input", false);
        resetForm();
    }
};

const resetForm = () => {
    Object.assign(form, {
        first_name: "",
        last_name: "",
        email: "",
        position: "",
        mobile_number: "",
        government_agency: "",
        region: "",
        province: "",
        city: "",
        riverbasin_assigned: ""
    });
};

const closeDialog = () => {
    resetForm();
    emit("input", false);
};
</script>

<template>
    <v-dialog v-model="show_form_modal" width="1000" scrollable persistent>
        <v-card>
            <v-card-title>
                <span class="text-h5">New Account</span>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="form.first_name" label="First Name*" :error-messages="errors['first_name'] || []"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="form.last_name" label="Last Name*" :error-messages="errors['last_name'] || []"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="form.email" label="Email"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="form.position" label="Position"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="form.mobile_number" label="Mobile No."></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-text-field v-model="form.government_agency" label="Government Agency"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="form.region" label="Region"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="form.province" label="Province"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="6">
                        <v-text-field v-model="form.city" label="City"></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field v-model="form.riverbasin_assigned" label="Riverbasin Assigned"></v-text-field>
                    </v-col>
                </v-row>

                <v-spacer></v-spacer>

                <v-btn class="ma-2" color="blue-grey-lighten-1" @click="closeDialog">
                    <v-icon start icon="mdi-minus-circle"></v-icon>
                    Cancel
                </v-btn>
                <v-btn class="ma-2" color="blue-darken-1" @click="saveRegisteredAccount">
                    Save
                    <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
                </v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
