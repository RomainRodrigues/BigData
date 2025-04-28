<template>
  <div class="relative w-full h-screen bg-black overflow-hidden">
    <!-- Bloc de données (uniquement pendant l'expérience) -->

    <template v-if="!experienceEnded">
      <DataBlock
        v-for="block in blocks"
        :key="block.id"
        v-bind="block"
      />
    </template>

    <div class="absolute top-0 left-0 flex flex-col gap-1">
      <!-- Statistiques -->
      <div
        v-if="!experienceEnded"
        class="px-4 py-1 text-white text-sm z-50 bg-blue-500 rounded"
      >
        <p>Total : {{ blocks.length }}</p>
        <p>Données Utiles : {{ usefulCount }}</p>
        <p>Données Inutiles : {{ blocks.length - usefulCount }}</p>
      </div>

      <!-- Légende -->
      <div
        v-if="!experienceEnded"
        class="text-white text-xs z-50 bg-blue-500 px-4 py-1 rounded"
      >
        <p>
          <span class="inline-block w-3 h-3 bg-green-400 mr-2 rounded-sm" />
          Donnée utile
        </p>
        <p>
          <span class="inline-block w-3 h-3 bg-red-400 mr-2 rounded-sm" />
          Donnée inutile
        </p>
      </div>
    </div>

    <!-- Barre de temps (pleine largeur) -->
    <div
      v-if="!experienceEnded"
      class="absolute bottom-0 left-0 w-full h-2 bg-gray-700 overflow-hidden"
    >
      <div
        class="h-full bg-blue-500 transition-all duration-100 linear"
        :style="{ width: progressBarWidth + '%' }"
      />
    </div>

    <!-- Résumé de fin -->
    <ExperienceSummary
      v-if="experienceEnded"
      :total-data="blocks.length"
      :useful-count="usefulCount"
      :useless-count="blocks.length - usefulCount"
    />
  </div>
</template>

<script setup>
const blocks = ref([])
const usefulCount = ref(0)
const experienceEnded = ref(false)
const progressBarWidth = ref(0)

let idCounter = 0
let interval = 100 // départ rapide mais accélération ensuite

const usefulData = [
  'medical record',
  'emergency alert',
  'login credentials',
  'location for ambulance',
  'bank transaction',
  'user: #5487',
  'timestamp: 2024-11-03T12:03:42Z',
  'IP: 192.168.1.12',
  '2FA code: 583921',
  'GPS: 48.8566, 2.3522',
  'MRI scan result',
  'blood pressure: 132/85',
  'heartbeat: 78 bpm',
  'access granted 🔓',
  'payment: €243.89',
]

const uselessData = [
  'cookie session',
  'ad click',
  'scroll: 73%',
  'search: "how to cook rice"',
  'metadata: font loaded',
  'hover: button#2',
  'auto-save draft',
  'mousemove x:732 y:158',
  '█ █ █ █ █ █ █ █ █ █ █ █ █',
  '@@@%%%###!!!',
  '❤️👀😐👾🧠',
  'reaction: 😂',
  'ID#0000000000',
  'open tab: 27',
  'cache update',
  'blur event',
  'log: heartbeat 15ms',
  'ping: 3ms',
  'UI lag spike detected',
  'temp file: tmp-8479.tmp',
  'analytics: 0.17%',
]

const generateBlock = () => {
  if (experienceEnded.value) return

  const isUseful = Math.random() < 0.15
  const text = isUseful
    ? usefulData[Math.floor(Math.random() * usefulData.length)]
    : uselessData[Math.floor(Math.random() * uselessData.length)]

  if (isUseful) usefulCount.value++

  blocks.value.push({
    id: idCounter++,
    text,
    top: Math.random() * window.innerHeight,
    left: Math.random() * window.innerWidth,
    size: Math.random() * 12 + 10,
    isUseful,
  })

  if (interval > 40) {
    interval *= 0.98 // accélération progressive
  }

  setTimeout(generateBlock, interval)
}

const updateProgressBar = () => {
  const totalDuration = 30000
  const step = 100
  const increment = 100 / (totalDuration / step)

  const intervalId = setInterval(() => {
    if (experienceEnded.value) {
      clearInterval(intervalId)
      return
    }

    progressBarWidth.value += increment
  }, step)
}

onMounted(() => {
  generateBlock()
  updateProgressBar()

  setTimeout(() => {
    experienceEnded.value = true
  }, 30000)
})
</script>
