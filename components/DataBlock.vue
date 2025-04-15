<template>
  <div
    class="absolute text-white rounded-md px-2 py-1 text-xs pointer-events-none animate-dataDrop"
    :style="{
      top: top + 'px',
      left: left + 'px',
      fontSize: size + 'px',
      opacity: 1,
      backgroundColor: isUseful ? 'rgba(0,255,0,0.2)' : 'rgba(255,0,0,0.15)',
      border: isUseful ? '1px solid rgba(0,255,0,0.4)' : '1px solid rgba(255,0,0,0.2)',
    }"
  >
    {{ text }}
  </div>
</template>

<script setup>
defineProps({
  text: String,
  top: Number,
  left: Number,
  size: Number,
  isUseful: Boolean,
})
</script>

<style scoped>
@keyframes dataDrop {
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-dataDrop {
  animation: dataDrop 0.4s ease-out;
}
</style>
