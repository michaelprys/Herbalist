import { ref, reactive, computed, nextTick, watchEffect } from 'vue';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { onClickOutside } from '@vueuse/core';

interface OverlayStates {
    [name: string]: boolean;
}

const overlayStates: OverlayStates = reactive({});

export const useOverlay = (name: string) => {
    const focusRef = ref(null);
    const clickOutsideRef = ref<HTMLElement>();
    const { defaultState = false } = {};
    const { activate, deactivate } = useFocusTrap(focusRef);

    const open = async () => {
        overlayStates[name] = true;
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        overlayStates[name] = false;
        deactivate();
        document.body.style.overflow = '';
    };

    onClickOutside(clickOutsideRef, () => {
        if (overlayStates[name]) {
            close();
        }
    });

    watchEffect(async () => {
        if (overlayStates[name]) {
            await nextTick();
            activate();
        }
    });

    overlayStates[name] = defaultState;
    return {
        state: computed(() => overlayStates[name]),
        open,
        close,
        focusRef,
        clickOutsideRef,
    };
};
