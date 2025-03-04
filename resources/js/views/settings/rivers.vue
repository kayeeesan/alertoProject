<script setup lang="ts">
import { ref, onMounted } from "vue";
import useRivers from "../../composable/river";
import RiverForm from "../../components/settings/rivers/form.vue";

const { rivers, pagination, query, is_loading, getRivers, destroyRiver } =
    useRivers();
const river = ref({});
const show_form_modal = ref(false);
const headers = [
    {
        title: "Name",
        align: "start",
        sortable: false,
        key: "name",
    },
    { title: "River Location", key: "river_location" },
    { title: "", key: "actions" },
];

onMounted(() => {
    reloadRivers();
});


const reloadRivers = async () => {
    await getRivers();
    river.value = {};
};


const showRiverForm = async (is_show) => {
    river.value = {};
    show_form_modal.value = is_show;
};


</script>
<template>
    <div style="text-align: end">
        <v-btn class="ma-2" color="blue-darken-1" @click="showRiverForm(true)">
            <v-icon start icon="mdi-plus"></v-icon>
            River
        </v-btn>
    </div>
    <v-card>
        <div
            class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md"
        >
            <v-card-title>List of Rivers </v-card-title>
            <v-divider class="mx-4 mb-1"></v-divider>
            <v-card-title>
                <v-text-field
                    v-model="query.search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :items="rivers"
                :search="query.search"
                class="elevation-1"
                :loading="is_loading"
                loading-text="Loading... Please wait"
            >
                <template v-slot:item.actions="{ item }">
                    <v-menu open-on-hover>
                        <template v-slot:activator="{ props }">
                            <v-btn color="#BDBDBD" v-bind="props" size="small">
                                Action
                                <v-icon end icon="mdi-dots-vertical"></v-icon>
                            </v-btn>
                        </template>
                        <v-list max-width="200px" class="p-2">
                            <div width="100%">
                                <v-btn
                                    width="100%"
                                    color="green"
                                    size="small"
                                >
                                    Edit
                                    <v-icon end icon="mdi-pencil"></v-icon>
                                </v-btn>
                                <v-btn width="100%" class="mt-2" color="red" size="small" @click="destroyRiver(item.id)">
                                    Delete
                                    <v-icon end icon="mdi-delete"></v-icon>
                                </v-btn>

                            </div>
                        </v-list>
                    </v-menu> </template
                ><template v-slot:bottom>
                    <div class="m-2">
                        <span style="color: gray" v-if="pagination">
                            Showing {{ pagination.from }} to
                            {{ pagination.to }} out of
                            <b>{{ pagination.total }} records</b>
                        </span>
                        <div class="text-center">
                            <v-pagination
                                v-model="query.page"
                                :length="pagination?.last_page || 1" 
                                circle
                                @click="getRivers"
                            ></v-pagination>
                        </div>
                    </div>
                </template>
            </v-data-table>
        </div>
    </v-card>
    <river-form
        :value="show_form_modal"
        :river="river"
        @reloadRivers="reloadRivers"
        @input="showRiverForm"
    />
</template>
