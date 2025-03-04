import { ref, computed } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default function useRivers() {
    const river = ref(null);
    const rivers = ref([]);
    const is_success = ref(false);
    const is_loading = ref(false);
    const pagination = ref({});
    const query = ref({
        search: null,
        page: 1,
    });

    const errors = ref({});

    const getRivers = async (params = {}, type = "") => {
        is_loading.value = true;

        let query_str = { ...query.value, ...params };
        let url = type == "river" ? "/form/rivers" : "/rivers";
        await axios
            .get(`${url}?page=${query.value.page}`, { params: query_str })
            .then((response) => {
                rivers.value = response.data.data;
                pagination.value = response.data.meta;
                is_loading.value = false;
            });
    };

    const storeRiver = async (data) => {
        is_loading.value = true;
        errors.value = "";
        try {
            await axios.post("/rivers", data).then((response) => {
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

    const destroyRiver = async (id) => {
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
                    await axios.delete(`/rivers/${id}`);
                    Swal.fire("Deleted!", "The river has been deleted.", "success");
                    await getRivers(); // Refresh the list after deletion
                } catch (error) {
                    Swal.fire("Error!", "Failed to delete the river.", "error");
                }
            }
        });
    };

    const updateRiver = async () => {
       
    };

 
 
    return {
        errors,
        pagination,
        is_success,
        is_loading,
        query,
        river,
        rivers,
        getRivers,
        storeRiver,
        destroyRiver,
        updateRiver
    };
}
