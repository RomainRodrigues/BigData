<template>
  <div class="relative w-full h-screen bg-black overflow-hidden">
    <!-- Bloc de données -->
    <DataBlock
      v-for="block in blocks"
      :key="block.id"
      v-bind="block"
    />

    <!-- Statistiques -->
    <div class="absolute top-0 left-0 p-4 text-white text-sm z-50 bg-black/60 rounded">
      <p>Total : {{ blocks.length }}</p>
      <p>Utiles : {{ usefulCount }}</p>
      <p>Inutiles : {{ blocks.length - usefulCount }}</p>
    </div>

    <!-- Légende -->
    <div class="absolute bottom-12 right-4 text-white text-xs z-50 bg-black/50 p-2 rounded">
      <p>
        <span class="inline-block w-3 h-3 bg-green-400 mr-2 rounded-sm" />
        Donnée utile
      </p>
      <p>
        <span class="inline-block w-3 h-3 bg-red-400 mr-2 rounded-sm" />
        Donnée inutile
      </p>
    </div>

    <!-- Barre mémoire -->
    <div class="absolute bottom-0 left-0 w-full h-4 bg-gray-700">
      <div
        class="h-full transition-all duration-300 ease-in-out"
        :class="{
          'bg-green-400': usagePercent < 50,
          'bg-yellow-400': usagePercent >= 50 && usagePercent < 80,
          'bg-red-500': usagePercent >= 80,
        }"
        :style="{ width: usagePercent + '%' }"
      />
    </div>

    <!-- Écran de crash -->
    <SystemCrash v-if="isCrashed" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import DataBlock from '@/components/DataBlock.vue'
import SystemCrash from '@/components/SystemCrash.vue'

const blocks = ref([])
const usefulCount = ref(0)
const isCrashed = ref(false)

let idCounter = 0
let interval = 1000

const maxCapacity = 1000

const usagePercent = computed(() =>
  Math.min((blocks.value.length / maxCapacity) * 100, 100),
)

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
  if (isCrashed.value) return

  const isUseful = Math.random() < 0.1
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

  if (blocks.value.length >= maxCapacity) {
    isCrashed.value = true
    return
  }

  if (interval > 100) interval *= 0.98
  setTimeout(generateBlock, interval)
}

onMounted(() => {
  generateBlock()
})
</script>
