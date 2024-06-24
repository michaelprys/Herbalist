import { ref, reactive, computed, nextTick, watchEffect } from 'vue';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { onClickOutside } from '@vueuse/core';

interface OverlayStates {
    [name: string]: boolean;
}

const overlayStates: OverlayStates = reactive({});

export const useOverlay = (
    name: string,
    options?: { clearData?: () => void }
) => {
    const focusRef = ref(null);
    const clickOutsideRef = ref<HTMLElement>();
    const { defaultState = false } = {};
    const { activate, deactivate } = useFocusTrap(focusRef);

    const open = () => {
        overlayStates[name] = true;
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        if (options?.clearData) {
            options.clearData();
        }
        overlayStates[name] = false;
        deactivate();
        document.body.style.overflow = '';
    };

    onClickOutside(clickOutsideRef, () => {
        if (options?.clearData) {
            options.clearData();
        }
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
