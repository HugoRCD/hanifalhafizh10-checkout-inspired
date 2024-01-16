<script setup lang="ts">
defineProps({
    label: {
        type: String,
        required: true
    },
    block: {
        type: Boolean,
        default: false
    },
    primary: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    }
});
</script>

<template>
  <button
    class="cursor-pointer"
    :class="{
      'btn-primary': primary,
      'btn-secondary': !primary && !circle,
      'btn-circle': circle,
      'w-full': block
    }"
    label="Open modal"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.btn-primary {
    @apply rounded-lg bg-accent text-primary;
    @apply px-4 py-2;
    box-shadow: 0 0 0px 2px #000000, inset 0px 1px 0px 1px rgba(255, 255, 255, 0.3);

    &:active {
        box-shadow: 0 0 0px 2px #000000, inset 0px 0px 0px 1px rgba(255, 255, 255, 0.3);
    }
}

.btn-secondary {
    @apply rounded-lg bg-[#292929] text-muted;
    @apply px-4 py-2 transition-all duration-300 ease-in-out;
    box-shadow: 0 0 0px 2px #000000, inset 0px 1px 0px 1px #3D3D3D;

    &:active {
        box-shadow: 0 0 0px 2px #000000, inset 0px 0px 0px 1px #3D3D3D;
    }
}

.btn-circle {
    @apply rounded-full text-muted bg-[#292929];
    @apply px-4 py-2;
    box-shadow: 0 0 0px 2px #000000, inset 0px 1px 0px 1px #3D3D3D;

    &:active {
        box-shadow: 0 0 0px 2px #000000, inset 0px 0px 0px 1px #3D3D3D;
    }
}
</style>
