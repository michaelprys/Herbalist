<template>
    <div class="transition-container">
        <SectionIntro />
        <SectionPopular />
        <SectionHerbNotes />
        <SectionPhilosophy />
        <SectionFeedback />
        <SectionApart />
    </div>
</template>

<script setup lang="ts">
import SectionIntro from '@/components/sections/Home/SectionIntro.vue';
import SectionPopular from '@/components/sections/Home/SectionPopular.vue';
import SectionFeedback from '@/components/sections/Home/SectionFeedback.vue';
import SectionPhilosophy from '@/components/sections/Home/SectionPhilosophy.vue';
import SectionHerbNotes from '@/components/sections/Home/SectionHerbNotes.vue';
import SectionApart from '@/components/sections/Home/SectionApart.vue';
</script>
