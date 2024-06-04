<template>
    <footer class="footer">
        <div class="footer__info">
            <span class="footer__info-item">Copyright © 2023</span>
            <span class="footer__info-item"> info@herbalist.com</span>
        </div>
        <div class="footer__socials">
            <a class="footer__link" target="_blank" href="#"
                ><IconYoutube class="footer__icon" />
            </a>
            <a class="footer__link" target="_blank" href="#">
                <IconFacebook class="footer__icon" />
            </a>
            <a class="footer__link" target="_blank" href="#">
                <IconInstagram class="footer__icon" />
            </a>
        </div>
    </footer>
</template>

<script setup lang="ts">
import IconYoutube from '@/components/icons/IconYoutube.vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
</script>

<style scoped lang="scss">
.footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    gap: $g-5;
    min-height: $h-32;
    padding-inline: $p-16;
    padding-block: $p-3_5;
    background-color: rgba($c-grey-800, 0.98);
    &__info-item {
        padding-inline: $p-5;
        border-right: $bw-px solid $c-white;
        font-size: $fs-base;
        &:first-child {
            padding-top: $p-0;
        }
        &:last-child {
            border-right: none;
            padding-right: $p-0;
        }
    }
    &__socials {
        display: flex;
        gap: $g-4;
    }
    &__link {
        display: block;
        line-height: $lh-0;
        fill: $c-grey-50;
        padding: $p-3;
        transition: background-color $tr-smooth, fill $tr-smooth;
        border-radius: $br-round;
        &:hover {
            background-color: $c-grey-50;
            fill: $c-black;
        }
    }
    &__icon {
        width: $w-6;
        height: $h-6;
    }
}

@media (width <= $screen-lg) {
    .footer {
        padding-inline: calc($p-16 - 2rem);
        &__info-item {
            font-size: $fs-medium;
            &:last-child {
                padding-top: $p-2;
            }
        }
    }
}
@media (width <= $screen-sm) {
    .footer {
        &__info {
            display: flex;
            flex-direction: column;
        }
        &__info-item {
            border-right: none;
            padding: $p-0;
            font-size: $fs-medium;
            &:last-child {
                padding-top: $p-2;
            }
        }
    }
}
@media (width <= 26.25rem) {
    .footer {
        flex-direction: column;
        &__info {
            display: flex;
            flex-direction: column;
        }
        &__info-item {
            border-right: none;
            padding: $p-0;
            font-size: $fs-medium;
            &:last-child {
                padding-top: $p-2;
            }
        }
    }
}
</style>
