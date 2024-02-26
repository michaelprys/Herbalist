import { ref } from 'vue';

const modalLoginRef = ref(null);
const modalVisible = ref(false);

export const useModal = () => {
    const openModal = () => {
        modalVisible.value = true;
        document.body.style.cssText =
            'position: fixed; height: 100%; width: 100%; top: 0; left: 0; overflow-y: scroll;';
    };

    const closeModal = () => {
        modalVisible.value = false;
        document.body.style.cssText = 'position: static;';
    };
    return {
        modalVisible,
        modalLoginRef,
        closeModal,
        openModal,
    };
};
