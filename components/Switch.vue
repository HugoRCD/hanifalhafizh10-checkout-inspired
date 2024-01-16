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
            class="relative flex h-6 w-11 cursor-pointer items-center rounded-full bg-[#292929] px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-[#e26c30] peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:[#e26c30]">
            <span class=" sr-only">Enable</span>
        </label>
    </div>
</template>
