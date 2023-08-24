<template>
    <div class="flex items-center gap-2">
        <nuxt-link to="/" class="breadcumb">
            <HomeIcon class="w-6 h-6 text-slate-400" />
        </nuxt-link>
        <div v-if="props.item" class="flex items-center gap-2 text-slate-400 text-sm font-normal">
            <ChevronRightIcon class="w-3 h-3 text-slate-400"/>{{ props.item }}
        </div>
        <div v-if="props.active" class="flex items-center gap-2 text-slate-800 text-sm font-normal">
            <ChevronRightIcon class="w-3 h-3 text-slate-800"/>{{ props.active }}
        </div>
    </div>
</template>

<script setup>
import { HomeIcon, ChevronRightIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
    item: {
        type: String
    },
    active: {
        type: String
    }
});

</script>