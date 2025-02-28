import { ref } from "vue";
import axios from "axios";
import Swal from "sweetalert2";
// import RegisteredAccounts from "../views/settings/registeredAccounts/registeredAccounts.vue";


export default function useRegistration() {
    const registration = ref(null);
    const registrations = ref([]);
    const is_success = ref(false);
    const is_loading = ref(false);
    const pagination = ref({});
    const query = ref({
        search: null,
        page: 1,
    });

    const errors = ref({});

    const getRegisteredAccounts = async (params = {}, type = "") => {
        is_loading.value = true;

        let query_str = { ...query.value, ...params};
        let url = type == "registeredAccount" ? "registeredAccounts" : "/registered-accounts";
        // let url = "/registered-accounts";
        await axios 
            .get(`${url}?page=${query.value.page}`, {params: query_str})
            .then((response) => {
                registrations.value = response.data.data;
                pagination.value =  response.data.meta;
                is_loading.value = false;
            });
    };

    const getRegisteredAccount = async (id) => {
        let response = await axios.get(`/registered-accounts/${id}`);
        registration.value = response.data;
        is_loading.value = false;
    };

    const storeRegistration = async (data) => {
        is_loading.value = true;
        errors.value = {};

        try {
            const response = await axios.post("/registration", data);
            Swal.fire({
                title: "Success",
                icon: "success",
                text: response.data.message,
            });

            errors.value = {};
            is_loading.value = false;
            is_success.value = true;
        } catch (e) {
            console.error(e);
            if (e.response && e.response.status === 422) {
                errors.value = e.response.data.errors || {};
                is_success.value = false;
            }
        }


    };

    return {
        registration,
        registrations,
        is_success,
        is_loading,
        pagination,
        query,
        errors,
        storeRegistration,
        getRegisteredAccounts,
        getRegisteredAccount
    };
}
