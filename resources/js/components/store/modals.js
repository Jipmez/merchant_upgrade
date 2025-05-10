import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useModalStore = defineStore("modal", () => {

    let isShowing = ref(false);


    // watch(
    //     () => isShowing.value,
    //     (x) => {
    //         if (!x && document.body.contains(document.querySelector("[modal-backdrop]"))) {
    //             document.querySelector("[modal-backdrop]").remove();
    //         }

    //     },
    //     { deep: true }
    // );


    function showModal(modalId) {
        isShowing.value = modalId
    }


    function hideModal() {
        isShowing.value = false
    }


    return { showModal, hideModal, isShowing }
});
