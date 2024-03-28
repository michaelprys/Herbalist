import { ref } from 'vue';

const modalVisible = ref(false);

export const useModal = () => {
    const openModal = () => {
        modalVisible.value = true;
    };

    const closeModal = () => {
        modalVisible.value = false;
    };

    return {
        modalVisible,
        closeModal,
        openModal,
    };
};
