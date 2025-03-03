import { ref, computed } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default function useMunicipalities() {
    const municipality = ref(null);
    const municipalities = ref([]);
    const is_success = ref(false);
    const is_loading = ref(false);
    const pagination = ref({});
    const query = ref({
        search: null,
        page: 1,
    });

    const errors = ref({});

    const getMunicipalities = async (params = {}, type = "") => {
        is_loading.value = true;

        let query_str = { ...query.value, ...params };
        let url = type == "municipality" ? "/form/municipalities" : "/municipalities";
        await axios
            .get(`${url}?page=${query.value.page}`, { params: query_str })
            .then((response) => {
                municipalities.value = response.data.data;
                pagination.value = response.data.meta;
                is_loading.value = false;
            });
    };

    const getMunicipality = async (id) => {
        let response = await axios.get(`/municipalities/${id}`);
        municipality.value = response.data;
        is_loading.value = false;
    };

    const storeMunicipality = async (data) => {
        is_loading.value = true;
        errors.value = "";
        try {
            await axios.post("/municipalities", data).then((response) => {
                Swal.fire({
                    title: "Success",
                    icon: "success",
                    text: response.data.message,
                });
                errors.value = {};
                is_loading.value = false;
                is_success.value = true;
            });
        } catch (e) {
            console.log(e);
            if (e.response.status === 422) {
                errors.value = e.response.data;
                is_success.value = false;
            }
        }
    };

    const destroyMunicipality = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`/municipalities/${id}`);
                    Swal.fire("Deleted!", "The Municipality has been deleted.", "success");
                    await getMunicipalities(); // Refresh the list after deletion
                } catch (error) {
                    Swal.fire("Error!", "Failed to delete the Municipality.", "error");
                }
            }
        });
    };

 
 
    return {
        errors,
        pagination,
        is_success,
        is_loading,
        query,
        municipality,
        municipalities,
        getMunicipalities,
        getMunicipality,
        storeMunicipality,
        destroyMunicipality
    };
}
