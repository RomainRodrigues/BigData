<template>
  <div class="absolute inset-0 bg-black text-red-500 flex flex-col items-center justify-center text-center z-50 animate-fadeIn">
    <h1 class="text-4xl font-bold mb-4">
      💥 SYSTEM CRASH 💥
    </h1>
    <p class="text-lg">
      Memory limit exceeded
    </p>
    <p class="text-sm mt-2 text-gray-300">
      Reboot required
    </p>
  </div>
</template>

  <style scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(1.1);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out forwards;
  }
  </style>
