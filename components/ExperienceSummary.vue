<template>
  <div class="fixed inset-0 bg-white text-gray-800 flex flex-col items-center justify-center p-8 transition-opacity duration-1000">
    <h1 class="text-3xl font-bold mb-6">
      Fin de l'expérience
    </h1>

    <div class="w-full max-w-xl grid gap-4 text-center">
      <div class="bg-gray-100 p-4 rounded-xl shadow">
        <p class="text-lg">
          Données totales générées :
        </p>
        <p class="text-2xl font-semibold text-blue-600">
          {{ totalData }}
        </p>
      </div>

      <div class="bg-green-100 p-4 rounded-xl shadow">
        <p class="text-lg">
          Données utiles :
        </p>
        <p class="text-2xl font-semibold text-green-600">
          {{ usefulCount }}
        </p>
      </div>

      <div class="bg-red-100 p-4 rounded-xl shadow">
        <p class="text-lg">
          Données inutiles :
        </p>
        <p class="text-2xl font-semibold text-red-600">
          {{ uselessCount }}
        </p>
      </div>

      <div class="bg-yellow-50 p-4 rounded-xl shadow mt-4">
        <p class="italic">
          Environ {{ uselessPercentage }} % des données affichées étaient inutiles.
        </p>
        <p class="mt-2">
          Cela reflète la réalité actuelle où 80 à 90 % des données produites ne sont jamais utilisées <br>
          <a
            href="https://www.seagate.com/files/www-content/our-story/trends/files/idc-seagate-dataage-whitepaper.pdf"
            target="_blank"
            class="text-blue-500 underline"
          >[source : IDC & Seagate]</a>
        </p>
      </div>

      <div class="bg-yellow-50 p-4 rounded-xl shadow mt-4">
        <h2 class="text-lg font-semibold mb-2">
          Échelle de comparaison
        </h2>
        <p>Données générées ici : <span class="font-mono">{{ totalData }}</span> en 30 secondes.</p>
        <p>À l’échelle mondiale : environ <span class="font-mono">3 000 000</span> données par 30 secondes*.</p>
        <p class="mt-2 text-xs text-gray-400 leading-tight">
          * Estimations fondées sur des statistiques mondiales comme les requêtes Google
          (<a
            href="https://www.internetlivestats.com/google-search-statistics/"
            target="_blank"
            class="underline"
          >source</a>)
          et des études sur le volume global de données
          (<a
            href="https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read/"
            target="_blank"
            class="underline"
          >source</a>).
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  totalData: number
  usefulCount: number
  uselessCount: number
}>()

const uselessPercentage = computed(() => {
  if (props.totalData === 0) return 0
  return Math.round((props.uselessCount / props.totalData) * 100)
})
</script>

<style scoped>
a {
  color: #93c5fd;
}
</style>
