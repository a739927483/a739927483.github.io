<template>
  <div class="wrap">
    <div v-if="loading" class="box">
      <div class="spinRow">
        <span class="spinner" aria-hidden="true"></span>
        <span>加载GitHub贡献图...</span>
      </div>
    </div>

    <div v-else-if="error" class="box err">
      <div class="errTitle">⚠️ 加载失败</div>
      <div class="errMsg">{{ error }}</div>
    </div>

    <div v-else class="heatmapBox">
      <div class="header">
        <div class="title"> {{ year }}年GitHub提交</div>
        <div class="sub">{{ totalContributions }} contributions in {{ year }}</div>
        <div class="sub">次提交在 2025年</div>
      </div>

      <div class="months">
        <div class="month" v-for="m in months" :key="m" :style="{ width: monthWidth(m) + 'px' }">
          {{ m }}
        </div>
      </div>

      <div class="gridRow">
        <div class="weekdays">
          <div
            class="weekday"
            v-for="(d, idx) in weekdays"
            :key="d"
          >
            <span>{{ idx % 2 === 1 ? d.slice(0, 1) : '' }}</span>
          </div>
        </div>

        <div class="cells">
          <div class="week" v-for="(week, wi) in weeks" :key="wi">
            <div
              class="cell"
              v-for="(day, di) in week"
              :key="di"
              :style="{ backgroundColor: getColor(day.level) }"
              :title="day.date ? `${day.date}: ${day.count} contributions` : ''"
            />
          </div>
        </div>
      </div>

      <div class="legend">
        <span>Less</span>
        <div class="legendDots">
          <span v-for="l in [0,1,2,3,4]" :key="l" class="legendDot" :style="{ backgroundColor: getColor(l) }" />
        </div>
        <span>More</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue'

const CACHE_EXPIRY = 24 * 60 * 60 * 1000

function getCacheKey(username, year) {
  return `github_contributions_${username}_${year}`
}

export default {
  name: 'GitHubHeatmap',
  props: {
    username: { type: String, required: true },
    year: { type: Number, required: true },
  },
  setup(props) {
    const loading = ref(true)
    const error = ref(null)
    const contributions = ref([])
    const totalContributions = ref(0)

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const getCachedData = (username, year) => {
      try {
        const key = getCacheKey(username, year)
        const cached = localStorage.getItem(key)
        if (!cached) return null

        const { data, timestamp } = JSON.parse(cached)
        const now = Date.now()
        if (now - timestamp < CACHE_EXPIRY) return data
        localStorage.removeItem(key)
      } catch (e) {
        // ignore
      }
      return null
    }

    const setCachedData = (username, year, data) => {
      try {
        const key = getCacheKey(username, year)
        localStorage.setItem(
          key,
          JSON.stringify({ data, timestamp: Date.now() })
        )
      } catch (e) {
        // ignore
      }
    }

    const fetchContributions = async (username, year) => {
      const url = `https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`
      const response = await fetch(url)
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      return response.json()
    }

    const getColor = (level) => {
      const colors = {
        0: '#161b22',
        1: '#0e4429',
        2: '#006d32',
        3: '#26a641',
        4: '#39d353',
      }
      return colors[level] || colors[0]
    }

    const weeks = computed(() => {
      if (!contributions.value || contributions.value.length === 0) return []

      // replicate template's grouping approach (7-day weeks)
      const weeksArr = []
      let currentWeek = []

      const firstDay = new Date(props.year, 0, 1)
      const firstDayOfWeek = firstDay.getDay()

      for (let i = 0; i < firstDayOfWeek; i++) {
        currentWeek.push({ date: '', count: 0, level: 0 })
      }

      contributions.value.forEach((day) => {
        currentWeek.push(day)
        if (currentWeek.length === 7) {
          weeksArr.push([...currentWeek])
          currentWeek = []
        }
      })

      if (currentWeek.length > 0) {
        while (currentWeek.length < 7) currentWeek.push({ date: '', count: 0, level: 0 })
        weeksArr.push(currentWeek)
      }

      return weeksArr
    })

    const monthWidth = (m) => {
      const mi = months.indexOf(m)
      if (mi < 0) return 26
      let count = 0
      for (let wi = 0; wi < weeks.value.length; wi++) {
        const weekDate = new Date(props.year, 0, 1 + wi * 7)
        if (weekDate.getMonth() === mi) count++
      }
      return Math.max(count * 12, 26)
    }

    const load = async () => {
      loading.value = true
      error.value = null
      try {
        const cached = getCachedData(props.username, props.year)
        if (cached) {
          contributions.value = cached.contributions || []
          totalContributions.value = cached.total?.[String(props.year)] || 0
        } else {
          const data = await fetchContributions(props.username, props.year)
          setCachedData(props.username, props.year, data)
          contributions.value = data.contributions || []
          totalContributions.value = data.total?.[String(props.year)] || 0
        }
      } catch (e) {
        error.value = '获取GitHub数据失败，请检查用户名或网络连接'
        contributions.value = []
        totalContributions.value = 0
      } finally {
        loading.value = false
      }
    }

    watch(
      () => [props.username, props.year],
      () => load(),
      { immediate: true }
    )

    onMounted(() => {})

    return {
      loading,
      error,
      contributions,
      totalContributions,
      months,
      weekdays,
      weeks,
      getColor,
      monthWidth,
      year: computed(() => props.year),
    }
  },
}
</script>

<style>
@import '../assets/github-heatmap.css';
</style>

