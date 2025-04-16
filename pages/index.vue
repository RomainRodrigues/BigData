<template>
  <div class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
    <h1 class="text-4xl font-bold mb-6">
      Bienvenue dans l'expérience Big Data
    </h1>

    <p class="max-w-2xl text-lg text-gray-300 mb-6">
      Chaque seconde, des millions de données sont générées, stockées et analysées.
      Dans cette expérience interactive, vous allez observer la manière dont ces données
      s'accumulent — et surtout, à quel point une grande majorité d'entre elles sont inutiles.
    </p>

    <p class="text-sm text-gray-400 mb-10">
      La durée de l'expérience est de 30 secondes.
    </p>

    <NuxtLink to="/experience">
      <button class="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold rounded shadow-md">
        Démarrer l’expérience
      </button>
    </NuxtLink>
  </div>
</template>
