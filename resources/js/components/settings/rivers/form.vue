<script setup lang="ts">
import { reactive, watch, ref } from "vue";
import useRivers from "../../../composable/river";
const { errors, is_success, storeRiver } = useRivers();

const emit = defineEmits(["reloadRivers", "input"]);
const props = defineProps({
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
    name: "",
    river_location: "",
});

const saveRiver = async () => {
    await storeRiver({ ...form });
    if (is_success.value) {
        resetForm();
        emit("reloadRivers");
        emit("input", false);
    }
};

const resetForm = () => {
    form.name = "";
    form.river_location = "";
};

const closeDialog = (value) => {
    emit("input", value);
};
</script>

<template>
    <v-dialog v-model="show_form_modal" width="500" scrollable persistent>
        <v-card>
            <v-card-title>
                <span class="text-h5">Add River</span>
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            label="River*"
                            v-model="form.name"
                            :error-messages="
                                errors['name'] ? errors['name'] : []
                            "
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field
                            label="River Location"
                            v-model="form.river_location"
                        ></v-text-field>
                    </v-col>
                </v-row>

                <v-spacer></v-spacer>

                <v-btn
                    class="ma-2"
                    color="blue-grey-lighten-1"
                    @click="closeDialog(false)"
                >
                    <v-icon start icon="mdi-minus-circle"></v-icon>
                    Cancel
                </v-btn>
                <v-btn class="ma-2" color="blue-darken-1" @click="saveRiver">
                    Save
                    <v-icon end icon="mdi-checkbox-marked-circle"></v-icon>
                </v-btn>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
