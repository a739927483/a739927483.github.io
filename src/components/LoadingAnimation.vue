<template>
  <div v-if="isVisible" class="loading-overlay">
    <div class="loader">
      <!-- 渐变定义 -->
      <svg height="0" width="0" viewBox="0 0 64 64" class="absolute">
        <defs>
          <!-- z - 紫色到蓝色 -->
          <linearGradient id="grad-z" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#973BED" />
            <stop offset="100%" stop-color="#007CFF" />
          </linearGradient>
          
          <!-- z - 黄色到粉色 -->
          <linearGradient id="grad-z2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFC800" />
            <stop offset="100%" stop-color="#FF00FF" />
          </linearGradient>
          
          <!-- z - 青色到绿色 -->
          <linearGradient id="grad-z3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#00E0ED" />
            <stop offset="100%" stop-color="#00DA72" />
          </linearGradient>
          
          <!-- d - 红色到青色 -->
          <linearGradient id="grad-d" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FF6B6B" />
            <stop offset="100%" stop-color="#4ECDC4" />
          </linearGradient>
          
          <!-- w - 浅绿到深绿 -->
          <linearGradient id="grad-w" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#A8E6CF" />
            <stop offset="100%" stop-color="#88D8C0" />
          </linearGradient>
          
          <!-- z - 黄色到红色 -->
          <linearGradient id="grad-z4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#FFD93D" />
            <stop offset="100%" stop-color="#FF6B6B" />
          </linearGradient>
        </defs>
      </svg>

      <!-- z -->
      <svg viewBox="0 0 64 64" class="char-svg">
        <path
          class="dash"
          stroke="url(#grad-z)"
          stroke-width="6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16 L48 16 L12 48 L48 48"
        />
      </svg>

      <!-- z -->
      <svg viewBox="0 0 64 64" class="char-svg">
        <path
          class="dash"
          stroke="url(#grad-z2)"
          stroke-width="6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16 L48 16 L12 48 L48 48"
        />
      </svg>

      <!-- z -->
      <svg viewBox="0 0 64 64" class="char-svg">
        <path
          class="dash"
          stroke="url(#grad-z3)"
          stroke-width="6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16 L48 16 L12 48 L48 48"
        />
      </svg>

      <!-- d -->
      <svg viewBox="0 0 64 64" class="char-svg">
        <path
          class="dash"
          stroke="url(#grad-d)"
          stroke-width="6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M40 8 L40 56 M40 16 Q16 16 16 32 Q16 48 40 48"
        />
      </svg>

      <!-- w -->
      <svg viewBox="0 0 64 64" class="char-svg">
        <path
          class="dash"
          stroke="url(#grad-w)"
          stroke-width="6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 8 L20 56 L32 24 L44 56 L56 8"
        />
      </svg>

      <!-- z -->
      <svg viewBox="0 0 64 64" class="char-svg">
        <path
          class="dash"
          stroke="url(#grad-z4)"
          stroke-width="6"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 16 L48 16 L12 48 L48 48"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadingAnimation",
  props: {
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
}

.loader {
  display: flex;
  gap: 8px;
  align-items: center;
}

.char-svg {
  width: 64px;
  height: 64px;
}

.dash {
  stroke-dasharray: 360;
  stroke-dashoffset: 360;
  animation: draw 2s ease-in-out infinite;
}

@keyframes draw {
  0% {
    stroke-dashoffset: 360;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -360;
  }
}

/* 响应式调整 */
@media (max-width: 768px) {
  .char-svg {
    width: 48px;
    height: 48px;
  }
  
  .loader {
    gap: 4px;
  }
}

/* 淡出动画 */
.fade-out {
  animation: fadeOut 0.5s ease-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
