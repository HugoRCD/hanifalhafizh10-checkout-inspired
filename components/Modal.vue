<script setup lang="ts">
const openModal = ref(true);
</script>

<template>
  <Button
    label="Open modal"
    @click="openModal = true"
  />
  <Transition
    name="modal"
  >
    <div
      v-if="openModal"
      class="container rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div class="section flex justify-between items-center">
        <Button
          label="Cancel"
          circle
        />
        <h2 class="text-muted text-lg">
          Send payment
        </h2>
        <Button
          label="Close"
          circle
          @click="openModal = false"
        />
      </div>
      <div class="divider" />
      <div class="section flex justify-between items-center">
        <div class="flex items-center gap-4">
          <img
            src="https://avatars.githubusercontent.com/u/71938701?v=4"
            alt="avatar"
            class="size-14 rounded-full border-2 border-black"
          >
          <div>
            <h4>
              Hugo Richard
            </h4>
            <p class="text-muted">
              contact@gmail.com
            </p>
          </div>
        </div>
        <Button
          label="+"
          circle
        />
      </div>
      <div class="divider" />
      <div class="section flex flex-col gap-3">
        <div class="flex justify-between items-center">
          <h4 class="text-muted">
            Send confirmation
          </h4>
          <Switch label="Send confirmation" />
        </div>
        <div class="flex justify-between items-center">
          <h4 class="text-muted">
            Instant transfer
          </h4>
          <Switch
            label="Instant transfer"
            :is-checked="true"
          />
        </div>
      </div>
      <div class="divider" />
      <div class="section flex flex-col gap-3">
        <div class="flex justify-between items-center">
          <h4 class="text-muted">
            Amount
          </h4>
          <h3 class="price">
            $1000<span>.00</span>
          </h3>
        </div>
        <div class="flex justify-between items-center">
          <h4 class="text-muted">
            Transfer fee
          </h4>
          <h3 class="price">
            $10<span>.00</span>
          </h3>
        </div>
        <div class="flex justify-between items-center">
          <h4 class="text-muted">
            Network fee
          </h4>
          <div class="flex items-center gap-2">
            <div class="flex items-center px-2 rounded-lg bg-accent-faded text-accent">
              4%
            </div>
            <h3 class="price">
              $10<span>.00</span>
            </h3>
          </div>
        </div>
      </div>
      <div class="divider" />
      <div class="section flex flex-col gap-3">
        <div class="flex justify-between items-center">
          <h4 class="font-bold">
            Total
          </h4>
          <h3 class="price">
            $1020<span>.00</span>
          </h3>
        </div>
        <p class="text-muted mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum <span
            class="text-accent"
          >terms & Conditions</span>
        </p>
      </div>
      <div class="divider" />
      <div class="section flex gap-3">
        <Button
          label="Cancel"
          block
          @click="openModal = false"
        />
        <Button
          label="Send"
          primary
          block
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.container {
    background-color: var(--background-color);
    background-image: linear-gradient(to bottom, var(--background-color), var(--background-color-2));
    width: 500px;
    box-shadow: inset 0 0 0px 2px #313131, 0 0 0px 3px #1B1918;
}

.section {
    @apply px-4 py-6;
}

.divider {
    @apply bg-gradient-to-b from-[#0A0A0A] to-[#333333] h-1 mx-[2px];
}

.price {
    @apply text-inverted font-light tracking-wider;

    span {
        @apply text-muted;
    }
}

.modal-enter-active {
    @apply transition ease-in-out duration-300;
}

.modal-enter-from {
    @apply opacity-0;
}

.modal-enter-to {
    @apply opacity-100;
}

.modal-leave-active {
    @apply transition ease-in-out duration-300;
}

.modal-leave-from {
    @apply opacity-100;
}

.modal-leave-to {
    @apply opacity-0;
}
</style>
