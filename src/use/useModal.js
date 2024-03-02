import { ref } from 'vue';

const modalVisible = ref(false);

export const useModal = showDrawer => {
    const openModal = () => {
        modalVisible.value = true;
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modalVisible.value = false;
        document.body.style.overflow = 'auto';
    };
    return {
        modalVisible,
        closeModal,
        openModal,
    };
};
