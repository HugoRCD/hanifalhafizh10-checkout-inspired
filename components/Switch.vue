<script setup lang="ts">
const props = defineProps({
    label: {
        type: String,
        default: 'Switch'
    },
    isChecked: {
        type: Boolean,
        default: false
    }
})

const checked = ref(props.isChecked)
</script>

<template>
    <div class="relative">
        <input type="checkbox" class="peer sr-only opacity-0" :id="label" v-model="checked" />
        <label :for="label"
            class="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-zinc-900 px-0.5 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white
            before:shadow before:transition-transform before:duration-300 peer-checked:bg-accent peer-checked:before:translate-x-full">
            <span class=" sr-only">Enable</span>
        </label>
    </div>
</template>
