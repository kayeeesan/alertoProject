<script setup lang="ts">
import { ref, onMounted } from "vue";
import useRegistration from "../../../composable/registration";
// import RegisteredAccountsForm from "../../../components/settings/registeredAccounts/form.vue";

const { registrations, pagination, query, is_loading, getRegisteredAccounts } = useRegistration();
const registeredAccount = ref({});
// const show_form_modal = ref(false);

const headers = [
    { title: "First Name", key: "first_name" },
    { title: "Email", key: "email" },
    { title: "Position", key: "position" },
    { title: "", key: "actions", sortable: false }
];

onMounted(() => {
    reloadRegisteredAccounts();
});

const reloadRegisteredAccounts = async () => {
    await getRegisteredAccounts();
    registeredAccount.value = {};
};

// const updateRegisteredAccount = (row) => {
//     registeredAccount.value = row;
//     show_form_modal.value = true;
// };

// const showRegisteredAccountsForm = (is_show) => {
//     registeredAccount.value = {};
//     show_form_modal.value = is_show;
// };
</script>

<template>
    <div style="text-align: end" class="mt-20">
        <v-btn class="ma-2" color="blue-darken-1" @click="showRegisteredAccountsForm(true)">
            <v-icon start icon="mdi-plus"></v-icon>
            Accounts
        </v-btn>
    </div>
    <v-card>
        <div class="overflow-hidden overflow-x-auto min-w-full align-middle sm:rounded-md">
            <v-card-title>List of Accounts</v-card-title>
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
                :items="registrations"
                :loading="is_loading"
                loading-text="Loading... Please wait"
                :headers="headers"
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
                                    @click="updateRegisteredAccount(item.raw)"
                                >
                                    Edit
                                    <v-icon end icon="mdi-pencil"></v-icon>
                                </v-btn>
                                <v-btn width="100%" class="mt-2" color="red" size="small">
                                    Delete
                                    <v-icon end icon="mdi-delete"></v-icon>
                                </v-btn>
                            </div>
                        </v-list>
                    </v-menu>
                </template>
            </v-data-table>

            <p v-if="pagination" class="p-5">
                Showing {{ pagination.from }} to {{ pagination.to }} of {{ pagination.total }} records
            </p>
        </div>
    </v-card>

    <!-- <RegisteredAccountsForm
        :value="show_form_modal"
        :registeredAccount="registeredAccount"
        @reloadRegisteredAccounts="reloadRegisteredAccounts"
        @input="showRegisteredAccountsForm"
    /> -->
</template>
