<template>
  <div id="zww-loading">
    <div id="zww-loading-center"></div>
  </div>
  <div class="zww-filter"></div>
  <div class="zww-background" id="zww-background"></div>

  <div class="zww-main">
    <div>
      <div class="zww-info">
      <div class="zww-left">
        <div class="logo" style="background-image: url(/images/logo.png)">
          <img
            style="
              position: absolute;
              top: -15%;
              left: -10%;
              width: 120%;
              aspect-ratio: 1/1;
            "
            src="/images/avatar.png"
          />
        </div>
      </div>
      <div class="zww-right">
        <header>
          <div
            class="index-logo"
            style="background-image: url(/images/avatar.png)"
          >
            <img
              style="
                position: absolute;
                top: -15%;
                left: -10%;
                width: 120%;
                aspect-ratio: 1/1;
              "
              src="/images/avatar.png"
            />
          </div>
          <div class="welcome">
            Hello, I'm <span class="gradientText">{{ displayName }}</span>
          </div>
          <div class="description">
            <span class="purpleText">{{ jobTitle.split("(")[0] }}</span>
            {{ jobTitle.split("(")[1] }}
          </div>
          <div class="description">
            <span class="purpleText">{{ age }}</span> years old ({{ age }}岁)
          </div>
          <div class="description">
            <span class="purpleText">{{ experienceLabel.split(" ")[0] }}</span>
            {{ experienceLabel.split(" ").slice(1).join(" ") }}
          </div>

          <div class="iconContainer">
            <a 
              v-for="social in socials" 
              :key="social.label"
              class="iconItem" 
              :href="social.href"
            >
              <img :src="social.svg" :alt="social.label" class="icon" />
              <div class="iconTip">{{ social.label }}</div>
            </a>
            <a class="switch" href="javascript:void(0)">
              <div class="onoffswitch">
                <input
                  type="checkbox"
                  name="onoffswitch"
                  class="onoffswitch-checkbox"
                  id="myonoffswitch"
                  checked
                />
                <label class="onoffswitch-label" for="myonoffswitch">
                  <span class="onoffswitch-inner"></span>
                  <span class="onoffswitch-switch"></span>
                </label>
              </div>
            </a>
          </div>

          
        </header>
      </div>
    </div>
    <div class="zww-content">
      <div class="zww-left">
        <div class="left-div skill-carousel">
          <div class="skill-carousel-container" ref="carouselContainerRef">
            <template v-for="dup in [1, 2]" :key="'skill-dup-' + dup">
              <div
                class="skill-item"
                v-for="(skill, index) in skills"
                :key="`${skill.name}-${dup}-${index}`"
                :aria-hidden="dup === 2 ? 'true' : undefined"
              >
                <img :src="skill.icon" :alt="skill.name" class="skill-icon" />
                <span class="skill-name">{{ skill.name }}</span>
              </div>
            </template>
          </div>
        </div>
        <div class="left-div left-tag">
          <div
            class="tag-container"
            v-for="t in tags"
            :key="t"
            @click="handleTagClick(t)"
          >
            {{ t }}
          </div>
        </div>
        <div class="left-div left-time timeline">
          <div class="sectionTitle">经历</div>
          <div class="timelineItem">
            <div class="tlDot" aria-hidden="true" />
            <div class="tlText">
              <div class="tlCompany">{{ exp.name }}</div>
              <div class="tlDate">{{ exp.date }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="zww-right">
        <div class="tanChiShe">
            <img id="tanChiShe" src="/svg/snake-Dark.svg" alt="" />
          </div>
        <div class="content-section">
          <div class="title">
            <svg
              t="1705257422086"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1891"
            >
              <path
                d="M629.333333 202.666667v213.333333h277.333334v448h-512v-213.333333h-277.333334v-448h512z m213.333334 277.333333h-213.333334v170.666667h-170.666666v149.333333h384v-320z m-277.333334-213.333333h-384v320h213.333334v-170.666667h170.666666v-149.333333z m0 213.333333h-106.666666v106.666667h106.666666v-106.666667z"
                p-id="1892"
              ></path></svg
            >project
          </div>

          <div class="projectList">
            <a
              v-for="work in works"
              :key="work.title"
              class="projectItem b"
              target="_blank"
              :href="work.href"
            >
              <div class="projectItemLeft">
                <h1>{{ work.title }}</h1>
                <p>{{ work.desc }}</p>
              </div>
              <div class="projectItemRight">
                <img src="/images/i1.png" alt="" />
              </div>
            </a>
          </div>

          <div class="title">
            <svg
              t="1705257823317"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7833"
            >
              <path
                d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333zM416.714667 138.666667L270.453333 522.581333h166.869334a32 32 0 0 1 30.933333 40.181334l-61.130667 230.954666 322.176-367.114666H565.312c-22.72 0-38.208-23.018667-29.632-44.064l99.36-243.882667H416.714667z"
                p-id="7834"
              ></path>
            </svg>
            skills
          </div>
          <div class="skill">
            <img id="skillPc" src="/svg/skillPc.svg" alt="" srcset="" />
            <img id="skillWap" src="/svg/skillWap.svg" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
    </div>
    
  </div>
  <footer class="fixed-footer">
    <div class="footer-content">
      <span class="visitor-info"
        >今日访客 {{ visitors.today }} | 总访问量 {{ visitors.total }} |
        建站日期 {{ siteDate }}</span
      >
    </div>
  </footer>
  <div class="tc">
    <div onclick="" class="tc-main">
      <img class="tc-img" src="" alt="" srcset="" />
    </div>
  </div>

  <!-- 图片弹窗 -->
  <div class="tag-modal" v-if="imageModal.isOpen">
    <div class="modal-overlay" @click="closeImageModal"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ imageModal.title }}</h3>
        <button class="close-btn" @click="closeImageModal">&times;</button>
      </div>
      <div class="modal-body">
        <p>{{ imageModal.danmakuText }}</p>
        <div class="image-container">
          <img
            v-if="imageModal.images.length > 0"
            :src="imageModal.images[0]"
            alt="图片"
          />
          <p v-else>暂无图片</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 音乐弹幕 -->
  <div class="danmaku-container" v-if="musicModal.isOpen">
    <div
      v-for="danmaku in musicDanmakus"
      :key="danmaku.id"
      class="danmaku"
      :style="{
        top: danmaku.top + 'px',
        left: danmaku.left + 'px',
        opacity: danmaku.opacity,
        fontSize: danmaku.fontSize + 'px',
        color: danmaku.color,
      }"
    >
      {{ danmaku.text }}
    </div>
  </div>

  <!-- 音乐弹窗 -->
  <div class="music-modal" v-if="musicModal.isOpen">
    <div class="modal-overlay" @click="closeMusicModal"></div>
    <div class="music-modal-content" @click.stop>
      <button class="close-btn" @click="closeMusicModal">&times;</button>

      <div class="music-player">
        <div class="music-cover-container">
          <div class="cover-outer">
            <div class="cover-inner">
              <img
                :src="musicModal.cover"
                :alt="musicModal.title"
                class="music-cover"
                :class="{ playing: musicModal.isPlaying }"
              />
              <div
                v-if="!musicModal.isPlaying"
                class="play-button-overlay"
                @click.stop="toggleMusicPlay"
              >
                <span class="play-icon">▶</span>
              </div>
              <div
                v-if="musicModal.isPlaying"
                class="play-button-overlay"
                @click.stop="toggleMusicPlay"
              >
                <span class="pause-icon">⏸</span>
              </div>
            </div>
          </div>
        </div>

        <div class="music-info">
          <h3>{{ musicModal.title }}</h3>
          <p>{{ musicModal.author }}</p>
        </div>

        <div class="music-controls">
          <div class="time-display">
            <span>{{ formatTime(musicModal.currentTime) }}</span>
            <span>{{ formatTime(musicModal.duration) }}</span>
          </div>

          <div class="progress-bar" @click="handleProgressClick">
            <div
              class="progress-fill"
              :style="{
                width:
                  musicModal.duration > 0
                    ? (musicModal.currentTime / musicModal.duration) * 100 + '%'
                    : '0%',
              }"
            ></div>
            <div
              class="progress-thumb"
              :style="{
                left:
                  musicModal.duration > 0
                    ? (musicModal.currentTime / musicModal.duration) * 100 + '%'
                    : '0%',
              }"
            ></div>
          </div>

          <div
            class="control-buttons"
            style="display: flex; align-items: center; gap: 15px"
          >
            <button
              class="control-button"
              @click="musicModal.isLoop = !musicModal.isLoop"
              :class="{ active: musicModal.isLoop }"
              title="循环"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"
                />
              </svg>
            </button>
            <button
              class="control-button"
              @click="musicModal.showLyrics = !musicModal.showLyrics"
              :class="{ active: musicModal.showLyrics }"
              title="歌词"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4 18h16V6H4v12zM6 8h8v2H6V8zm0 4h8v2H6v-2z" />
              </svg>
            </button>
            <div style="display: flex; align-items: center; gap: 8px">
              <button class="control-button" @click="toggleMute" title="静音">
                <svg
                  v-if="!musicModal.isMuted"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                  />
                </svg>
                <svg
                  v-else
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
                  />
                </svg>
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                v-model="musicModal.volume"
                @input="updateVolume"
                style="width: 80px; height: 4px"
              />
            </div>
          </div>
        </div>

        <!-- 歌词显示区域 -->
        <div class="lyrics-container" v-if="musicModal.showLyrics">
          <div class="lyrics-content" ref="lyricsContentRef">
            <div
              v-for="(line, index) in musicModal.lyrics"
              :key="index"
              :class="{ current: index === musicModal.currentLyricIndex }"
            >
              {{ line.text }}
            </div>
          </div>
        </div>
      </div>

      <audio
        ref="audioRef"
        :src="musicModal.musicUrl"
        :loop="musicModal.isLoop"
        @timeupdate="handleTimeUpdate"
        @loadedmetadata="handleLoadedMetadata"
        @ended="musicModal.isPlaying = false"
        @error="handleAudioError"
      ></audio>
    </div>
  </div>

  <!-- 视频弹幕 -->
  <div class="danmaku-container" v-if="videoModal.isOpen">
    <div
      v-for="danmaku in videoDanmakus"
      :key="danmaku.id"
      class="danmaku"
      :style="{
        top: danmaku.top + 'px',
        left: danmaku.left + 'px',
        opacity: danmaku.opacity,
        fontSize: danmaku.fontSize + 'px',
        color: danmaku.color,
      }"
    >
      {{ danmaku.text }}
    </div>
  </div>

  <!-- 视频弹窗 -->
  <div class="video-modal" v-if="videoModal.isOpen">
    <div class="modal-overlay" @click="closeVideoModal"></div>
    <div class="video-modal-content" @click.stop>
      <button
        v-if="!videoModal.isFullscreen"
        class="close-btn"
        @click="closeVideoModal"
      >
        &times;
      </button>

      <div class="video-player">
        <video
          ref="videoRef"
          :src="videoModal.videoUrl"
          @click="toggleVideoPlay"
          @play="videoModal.isPlaying = true"
          @pause="videoModal.isPlaying = false"
          controls="false"
        >
          <source :src="videoModal.videoUrl" type="video/mp4" />
        </video>

        <!-- 播放按钮遮罩层 -->
        <div
          v-if="!videoModal.isPlaying"
          class="video-play-overlay"
          @click="toggleVideoPlay"
        >
          <div class="play-icon-circle">
            <span class="play-icon">▶</span>
          </div>
        </div>

        <!-- 自定义控制栏 -->
        <div class="video-controls">
          <div class="controls-left">
            <button class="play-pause-btn" @click="toggleVideoPlay">
              {{ videoModal.isPlaying ? "⏸" : "▶" }}
            </button>
          </div>

          <div class="controls-right">
            <button class="fullscreen-btn" @click="toggleFullscreen">⛶</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  reactive,
  ref,
  nextTick,
} from "vue";

const TEMPL_TAGS = [
  "做饭",
  "旅游",
  "美食",
  "音乐",
  "游戏",
  "鲜花",
  "动漫",
];

const tagConfigs = {
  做饭: {
    type: "image",
    config: {
      title: "做饭",
      images: [],
      danmakuText: "好吃",
    },
  },
  旅游: {
    type: "image",
    config: {
      title: "旅游照片",
      images: [],
      danmakuText: "好看",
    },
  },
  美食: {
    type: "image",
    config: {
      title: "美食照片",
      images: [],
      danmakuText: "好吃",
    },
  },
  五子棋: {
    type: "music",
    config: {
      title: "wuha",
      musicUrl: "/music/test.mp3",
      cover: "/images/wuha.jpg",
      author: "鹿晗&邓超&陈赫&王祖蓝&张艺兴&Gem&王珞丹",
      danmakuText: "好听",
      lrcUrl: "/ci/test.lrc",
    },
  },
  天空之城: {
    type: "music",
    config: {
      title: "天空之城",
      musicUrl: "/music/test.mp3",
      cover: "/images/tkzdg.jpg",
      author: "久石让",
      danmakuText: "好听",
      lrcUrl: "/ci/test.lrc",
    },
  },
  鲜花: {
    type: "music",
    config: {
      title: "鲜花",
      musicUrl: "/music/test.mp3",
      cover: "/images/xh.jpg",
      author: "凤凰传奇",
      danmakuText: "好听",
      lrcUrl: "/ci/test.lrc",
    },
  },
  音乐: {
    type: "music",
    config: {
      title: "音乐播放器",
      musicUrl: "/music/test.mp3",
      cover: "/images/avatar.png",
      author: "未知作曲家",
      danmakuText: "好听",
      lrcUrl: "/ci/test.lrc",
    },
  },
  汤姆猫小新: {
    type: "video",
    config: {
      title: "汤姆猫小新",
      videoUrl: "",
      danmakuText: "汤姆猫小新",
    },
  },
  美女照片: {
    type: "video",
    config: {
      title: "美女照片",
      videoUrl: "",
      danmakuText: "美女照片",
    },
  },
  街头霸王游戏: {
    type: "video",
    config: {
      title: "街头霸王游戏",
      videoUrl: "",
      danmakuText: "五连，我真猛，啊！",
    },
  },
  海贼王: {
    type: "video",
    config: {
      title: "海贼王",
      videoUrl: "",
      danmakuText: "海贼王",
    },
  },
  巨人: {
    type: "video",
    config: {
      title: "巨人",
      videoUrl: "",
      danmakuText: "巨人",
    },
  },
  不良人: {
    type: "video",
    config: {
      title: "不良人",
      videoUrl: "",
      danmakuText: "有品",
    },
  },
  不良人天降神兵: {
    type: "video",
    config: {
      title: "不良人天降神兵",
      videoUrl: "",
      danmakuText: "关注清白",
    },
  },
  铠甲勇士: {
    type: "video",
    config: {
      title: "铠甲勇士",
      videoUrl: "",
      danmakuText: "铠甲勇士",
    },
  },
};

export default {
  name: "TemplateHome",
  setup() {
    // 使用App.vue中的数据
    const displayName = "抓娃娃小队长";
    const jobTitle = "Front-end development(运维开发工程师)";
    const age = 27;
    const experienceLabel = "2.5 work experience (2.5年工作经验)";

    const socials = [
        { label: 'github', href: 'https://github.com/a739927483', svg: '/public/svg/github.svg' },
        { label: 'qq', href: '/images/qq.jpg', svg: '/public/svg/qq.svg' },
        { label: '哔站', href: 'https://space.bilibili.com/18192547', svg: '/public/svg/bz.svg' },
        { label: '', href: 'https://www.xiaohongshu.com/user/profile/668b3cb30000000003032770', svg: '/public/svg/xhs.svg' },
      ];

    const works = [
        { title: '作品集', desc: '记录作品 / Demo',href: '/' },
        { title: '文章', desc: '随手的笔记和学习记录',href: '/' },
        { title: '资源', desc: '常用资源、配置、模板集合',href: '/' },
        { title: '聊天室', desc: '实时交流、问题反馈入口',href: '/' },
      ];
    // 建站时间数据
  
    const siteDate  = '2026-03-20' ;
    // 工作经验数据

    const exp = reactive({
      name: "北京荣耀(外包)",
      date: "2021-2023",
    },
    {
      name: "河南省前进化工科技集团股份有限公司",
      date: "2024-2025",
    }
    );
    const tags = ref(TEMPL_TAGS);

    // 技能数据
    const skills = ref([
      { name: "Vue", icon: "/skill-icons/VueJS-Dark.svg" },
      { name: "React", icon: "/skill-icons/React-Dark.svg" },
      { name: "JavaScript", icon: "/skill-icons/JavaScript.svg" },
      { name: "TypeScript", icon: "/skill-icons/TypeScript.svg" },
      { name: "HTML", icon: "/skill-icons/HTML.svg" },
      { name: "CSS", icon: "/skill-icons/CSS.svg" },
      { name: "Node.js", icon: "/skill-icons/NodeJS-Dark.svg" },
      { name: "Git", icon: "/skill-icons/Git.svg" },
      { name: "Docker", icon: "/skill-icons/Docker.svg" },
      { name: "MongoDB", icon: "/skill-icons/MongoDB.svg" },
      { name: "MySQL", icon: "/skill-icons/MySQL-Dark.svg" },
      { name: "Linux", icon: "/skill-icons/Linux-Dark.svg" },
      { name: "Java", icon: "/skill-icons/Java-Dark.svg" },
      { name: "Vite", icon: "/skill-icons/Vite-Dark.svg" },
      { name: "Tailwind", icon: "/skill-icons/TailwindCSS-Dark.svg" },
      { name: "Three.js", icon: "/skill-icons/ThreeJS-Dark.svg" },
      { name: "Svelte", icon: "/skill-icons/Svelte.svg" },
      { name: "Redux", icon: "/skill-icons/Redux.svg" },
    ]);

    // 轮播控制（双份 DOM + 无缝接回开头）
    const carouselContainerRef = ref(null);
    let carouselRafId = null;
    let currentPosition = 0;

    const stopSkillCarousel = () => {
      if (carouselRafId != null) {
        cancelAnimationFrame(carouselRafId);
        carouselRafId = null;
      }
    };

    const startSkillCarousel = () => {
      stopSkillCarousel();
      if (!carouselContainerRef.value) return;

      const container = carouselContainerRef.value;
      const parent = container.parentElement;
      if (!parent) return;

      const fullWidth = container.scrollWidth;
      const singleSetWidth = fullWidth / 2;
      const viewWidth = parent.clientWidth;

      if (singleSetWidth <= 0 || singleSetWidth <= viewWidth) {
        currentPosition = 0;
        container.style.transform = "";
        return;
      }

      const step = () => {
        if (!carouselContainerRef.value) return;
        const el = carouselContainerRef.value;
        const half = el.scrollWidth / 2;
        currentPosition += 0.325;
        if (currentPosition >= half) {
          currentPosition -= half;
        }
        el.style.transform = `translate3d(-${currentPosition}px, 0, 0)`;
        carouselRafId = requestAnimationFrame(step);
      };
      carouselRafId = requestAnimationFrame(step);
    };

    let carouselResizeTimer = null;
    const onSkillCarouselResize = () => {
      clearTimeout(carouselResizeTimer);
      carouselResizeTimer = setTimeout(() => {
        currentPosition = 0;
        if (carouselContainerRef.value) {
          carouselContainerRef.value.style.transform = "";
        }
        nextTick(() => startSkillCarousel());
      }, 120);
    };

    // 访问统计（纯前端，本地存储次数）
    const visitors = reactive({ today: 0, total: 0 });
    const todayKey = () => {
      const d = new Date();
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const day = String(d.getDate()).padStart(2, "0");
      return `${y}-${m}-${day}`;
    };

    // 标签弹窗状态
    const imageModal = reactive({
      isOpen: false,
      title: "",
      images: [],
      danmakuText: "",
    });

    const musicModal = reactive({
      isOpen: false,
      title: "",
      musicUrl: "",
      cover: "",
      author: "",
      danmakuText: "",
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      isLoop: false,
      showLyrics: true,
      lyrics: [],
      currentLyricIndex: 0,
      volume: 0.8,
      isMuted: false,
    });

    const videoModal = reactive({
      isOpen: false,
      title: "",
      videoUrl: "",
      danmakuText: "",
      isPlaying: false,
      isFullscreen: false,
    });

    // 弹幕状态
    const musicDanmakus = ref([]);
    const videoDanmakus = ref([]);
    const danmakuIntervals = ref({});

    // 时间/深色模式切换
    const isDarkMode = ref(false);

    const toggleMode = () => {
      isDarkMode.value = !isDarkMode.value;
      const html = document.documentElement;
      const snakeImg = document.getElementById("tanChiShe");
      const background = document.getElementById("zww-background");

      if (isDarkMode.value) {
        html.setAttribute("data-theme", "Dark");
        if (snakeImg) {
          snakeImg.src = "/svg/snake-Light.svg";
        }
        if (background) {
          background.style.backgroundImage =
            "url(/images/night-background.jpg)";
        }
      } else {
        html.removeAttribute("data-theme");
        if (snakeImg) {
          snakeImg.src = "/svg/snake-Dark.svg";
        }
        if (background) {
          background.style.backgroundImage = "url(/images/day-background.jpg)";
        }
      }
    };

    // 初始化模式
    const initMode = () => {
      const html = document.documentElement;
      const snakeImg = document.getElementById("tanChiShe");
      const background = document.getElementById("zww-background");

      if (isDarkMode.value) {
        html.setAttribute("data-theme", "Dark");
        if (snakeImg) {
          snakeImg.src = "/svg/snake-Light.svg";
        }
        if (background) {
          background.style.backgroundImage =
            "url(/images/night-background.jpg)";
        }
      } else {
        html.removeAttribute("data-theme");
        if (snakeImg) {
          snakeImg.src = "/svg/snake-Dark.svg";
        }
        if (background) {
          background.style.backgroundImage = "url(/images/day-background.jpg)";
        }
      }
    };

    // 标签点击处理函数
    const handleTagClick = (tagName) => {
      const tagConfig = tagConfigs[tagName];
      if (!tagConfig) {
        return;
      }

      switch (tagConfig.type) {
        case "image":
          Object.assign(imageModal, {
            isOpen: true,
            ...tagConfig.config,
          });
          break;
        case "music":
          console.log("点击音乐标签:", tagName);
          console.log("音乐配置:", tagConfig.config);
          Object.assign(musicModal, {
            isOpen: true,
            ...tagConfig.config,
            isPlaying: false,
            currentTime: 0,
            duration: 0,
            isLoop: false,
            showLyrics: true,
            lyrics: [],
            currentLyricIndex: 0,
          });
          startDanmakus("music", tagConfig.config.danmakuText);
          // 加载歌词
          loadLyrics(tagConfig.config.lrcUrl);
          break;
        case "video":
          Object.assign(videoModal, {
            isOpen: true,
            ...tagConfig.config,
            isPlaying: false,
            isFullscreen: false,
          });
          startDanmakus("video", tagConfig.config.danmakuText);
          break;
        default:
          break;
      }
    };

    // 绑定模式切换按钮事件
    const bindModeToggle = () => {
      const toggleBtn = document.getElementById("myonoffswitch");
      if (toggleBtn) {
        toggleBtn.addEventListener("change", toggleMode);
      }
    };

    // 关闭图片弹窗
    const closeImageModal = () => {
      imageModal.isOpen = false;
    };

    // 关闭音乐弹窗
    const closeMusicModal = () => {
      musicModal.isOpen = false;
      musicModal.isPlaying = false;
      musicModal.currentTime = 0;
      stopDanmakus("music");
    };

    // 关闭视频弹窗
    const closeVideoModal = () => {
      videoModal.isOpen = false;
      videoModal.isPlaying = false;
      stopDanmakus("video");
    };

    // 格式化时间
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    // 滚动到当前歌词
    const scrollToCurrentLyric = () => {
      if (lyricsContentRef.value && musicModal.currentLyricIndex >= 0) {
        const container = lyricsContentRef.value;
        const currentLyric = container.querySelector(".current");

        if (currentLyric) {
          // 直接让当前歌词滚动到可见区域的顶部
          currentLyric.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    // 音乐时间更新处理
    const handleTimeUpdate = () => {
      if (audioRef.value) {
        musicModal.currentTime = audioRef.value.currentTime;

        // 使用自身的歌词索引更新函数
        updateLyricIndex(musicModal.currentTime);
      }
    };

    // 音乐加载元数据处理
    const handleLoadedMetadata = () => {
      if (audioRef.value) {
        musicModal.duration = audioRef.value.duration;
        // 设置初始音量
        audioRef.value.volume = musicModal.volume;
        audioRef.value.muted = musicModal.isMuted;
      }
    };

    // 更新歌词索引
    const updateLyricIndex = (currentTime) => {
      if (musicModal.lyrics.length === 0) return;

      let newIndex = musicModal.currentLyricIndex;

      for (let i = 0; i < musicModal.lyrics.length; i++) {
        if (musicModal.lyrics[i].time > currentTime) {
          newIndex = Math.max(0, i - 1);
          break;
        } else if (i === musicModal.lyrics.length - 1) {
          newIndex = i;
        }
      }

      // 控制更新索引并滚动，确保播放进度和歌词变化时都能触发滚动
      musicModal.currentLyricIndex = newIndex;

      // 使用nextTick确保DOM更新后再滚动
      nextTick(() => {
        scrollToCurrentLyric();
      });
    };

    // 音乐进度条点击处理
    const handleProgressClick = (e) => {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      const percentage = clickX / width;
      const time = percentage * musicModal.duration;

      if (audioRef.value) {
        audioRef.value.currentTime = time;
        musicModal.currentTime = time;

        // 立即更新歌词索引和滚动
        updateLyricIndex(time);
      }
    };

    // 音频错误处理
    const handleAudioError = (event) => {
      console.error("音频加载错误:", event.target.error);
    };

    // 切换静音
    const toggleMute = () => {
      if (audioRef.value) {
        audioRef.value.muted = !audioRef.value.muted;
        musicModal.isMuted = audioRef.value.muted;
      }
    };

    // 更新音量
    const updateVolume = () => {
      if (audioRef.value) {
        audioRef.value.volume = musicModal.volume;
        musicModal.isMuted = musicModal.volume === 0;
      }
    };

    // 切换音乐播放/暂停
    const toggleMusicPlay = () => {
      if (!audioRef.value) return;

      if (!musicModal.isPlaying) {
        // 播放（从当前位置继续）
        audioRef.value.volume = 1.0;
        audioRef.value.muted = false;
        audioRef.value.play().catch((err) => {
          console.error("播放错误:", err);
          musicModal.isPlaying = false;
        });
        musicModal.isPlaying = true;
      } else {
        // 暂停
        audioRef.value.pause();
        musicModal.isPlaying = false;
      }
    };

    // 解析LRC歌词
    const parseLrc = (lrcContent) => {
      const lyrics = [];
      const lines = lrcContent.split("\n");
      const lrcRegex = /\[(\d{2}):(\d{2})\.(\d{3})\](.*)/;

      lines.forEach((line) => {
        const match = line.match(lrcRegex);
        if (match) {
          const minutes = parseInt(match[1]);
          const seconds = parseInt(match[2]);
          const milliseconds = parseInt(match[3]);
          const text = match[4].trim();

          if (text) {
            lyrics.push({
              time: minutes * 60 + seconds + milliseconds / 1000,
              text: text,
            });
          }
        }
      });

      return lyrics.sort((a, b) => a.time - b.time);
    };

    // 加载歌词
    const loadLyrics = async (lrcUrl) => {
      if (!lrcUrl) {
        musicModal.lyrics = [];
        musicModal.currentLyricIndex = 0;
        return;
      }

      try {
        const response = await fetch(lrcUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const lrcContent = await response.text();
        musicModal.lyrics = parseLrc(lrcContent);
        musicModal.currentLyricIndex = 0;
      } catch (error) {
        console.error("加载歌词错误:", error);
        musicModal.lyrics = [];
        musicModal.currentLyricIndex = 0;
      }
    };

    // 视频播放切换
    const toggleVideoPlay = () => {
      if (videoRef.value) {
        if (videoModal.isPlaying) {
          videoRef.value.pause();
        } else {
          videoRef.value.play();
        }
      }
    };

    // 视频全屏切换
    const toggleFullscreen = () => {
      const container = document.querySelector(".video-modal-content");
      if (!document.fullscreenElement) {
        container.requestFullscreen();
        videoModal.isFullscreen = true;
      } else {
        document.exitFullscreen();
        videoModal.isFullscreen = false;
      }
    };

    // 音频和视频引用
    const audioRef = ref(null);
    const videoRef = ref(null);
    const lyricsContentRef = ref(null);

    // 弹幕配置
    const danmakuConfig = {
      opacity: 0.8,
      speed: 5,
      isLoop: true,
      maxLines: 10,
      screenRatio: 0.5,
      interval: 800,
      fontSize: 16,
      color: "#ffffff",
      density: 3,
      randomHeight: true,
      randomSpeed: true,
      randomSize: true,
      zIndex: 10,
    };

    // 最大弹幕数量限制
    const MAX_DANMAKU_COUNT = 50;

    // 创建弹幕
    const createDanmaku = (text) => {
      const containerHeight = window.innerHeight * danmakuConfig.screenRatio;
      const lineHeight = danmakuConfig.fontSize * 1.5;
      const maxTop = Math.max(0, containerHeight - lineHeight);

      return {
        id: Math.random().toString(36).substr(2, 9),
        text: text,
        top: danmakuConfig.randomHeight
          ? Math.random() * maxTop
          : Math.random() * danmakuConfig.maxLines * lineHeight,
        left: window.innerWidth,
        speed: danmakuConfig.randomSpeed
          ? danmakuConfig.speed * (0.5 + Math.random())
          : danmakuConfig.speed,
        opacity: danmakuConfig.opacity * (0.7 + Math.random() * 0.3),
        fontSize: danmakuConfig.randomSize
          ? danmakuConfig.fontSize * (0.8 + Math.random() * 0.4)
          : danmakuConfig.fontSize,
        color: danmakuConfig.color,
      };
    };

    // 添加弹幕（带数量限制和密度控制）
    const addDanmaku = (danmakus, text) => {
      // 如果弹幕数量已达上限，移除最老的弹幕
      let currentDanmakus = danmakus.value;
      if (currentDanmakus.length >= MAX_DANMAKU_COUNT) {
        currentDanmakus = currentDanmakus.slice(-MAX_DANMAKU_COUNT + danmakuConfig.density);
      }

      const newDanmakus = [];
      for (let i = 0; i < danmakuConfig.density; i++) {
        newDanmakus.push(createDanmaku(text));
      }

      danmakus.value = [...currentDanmakus, ...newDanmakus];
    };

    // 更新弹幕位置（使用时间戳节流）
    const lastTimeRef = { current: 0 };
    const animationRefs = { music: null, video: null };

    const updateDanmakus = (danmakus, type) => {
      const currentTime = performance.now();
      
      // 节流：每16ms更新一次（约60fps）
      if (currentTime - lastTimeRef.current < 16) {
        if (danmakuIntervals.value[type]) {
          animationRefs[type] = requestAnimationFrame(() => updateDanmakus(danmakus, type));
        }
        return;
      }

      lastTimeRef.current = currentTime;

      danmakus.value = danmakus.value
        .map((danmaku) => ({
          ...danmaku,
          left: danmaku.left - danmaku.speed,
        }))
        .filter((danmaku) => danmaku.left > -300);

      if (danmakuIntervals.value[type]) {
        animationRefs[type] = requestAnimationFrame(() => updateDanmakus(danmakus, type));
      }
    };

    // 启动弹幕
    const startDanmakus = (type, text) => {
      // 处理之前的定时器和动画
      if (danmakuIntervals.value[type]) {
        clearInterval(danmakuIntervals.value[type]);
      }
      if (animationRefs[type]) {
        cancelAnimationFrame(animationRefs[type]);
      }

      const danmakus = type === "music" ? musicDanmakus : videoDanmakus;        

      // 清空弹幕
      danmakus.value = [];

      // 立即添加第一批弹幕
      addDanmaku(danmakus, text);

      // 设置定时添加弹幕
      if (danmakuConfig.isLoop) {
        danmakuIntervals.value[type] = setInterval(() => {
          addDanmaku(danmakus, text);
        }, danmakuConfig.interval);
      }

      // 开始动画
      lastTimeRef.current = performance.now();
      animationRefs[type] = requestAnimationFrame(() => updateDanmakus(danmakus, type));
    };

    // 停止弹幕
    const stopDanmakus = (type) => {
      if (danmakuIntervals.value[type]) {
        clearInterval(danmakuIntervals.value[type]);
        delete danmakuIntervals.value[type];
      }
      if (animationRefs[type]) {
        cancelAnimationFrame(animationRefs[type]);
        animationRefs[type] = null;
      }
      const danmakus = type === "music" ? musicDanmakus : videoDanmakus;        
      danmakus.value = [];
    };

    // 图片弹窗功能
    window.pop = function (img) {
      const tc = document.querySelector(".tc");
      const tcMain = document.querySelector(".tc-main");
      const tcImg = document.querySelector(".tc-img");
      tcImg.src = img;
      tc.classList.add("active");
      tcMain.classList.add("active");
    };

    // 关闭弹窗函数
    const closeModal = () => {
      const tc = document.querySelector(".tc");
      const tcMain = document.querySelector(".tc-main");
      if (tc && tcMain) {
        tc.classList.remove("active");
        tcMain.classList.remove("active");
      }
    };

    // 点击关闭弹窗（点击背景区域时关闭，点击图片时不关闭）
    const bindModalEvents = () => {
      const tc = document.querySelector(".tc");
      if (tc) {
        tc.addEventListener("click", function (e) {
          // 只有点击背景区域（tc）时才关闭弹窗
          if (e.target === tc) {
            closeModal();
          }
        });
      }
    };

    // ESC关闭弹窗
    const bindEscKey = () => {
      window.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeModal();
        }
      });
    };

    onMounted(() => {
      // 隐藏加载动画
      setTimeout(() => {
        const loading = document.getElementById("zww-loading");
        if (loading) {
          loading.style.opacity = "0";
          setTimeout(() => {
            loading.style.display = "none";
          }, 500);
        }
      }, 1000);

      // 访问统计
      const tKey = `pv_today_${todayKey()}`;
      const totalKey = "pv_total";
      const todayVal = Number(localStorage.getItem(tKey) || "0");
      const totalVal = Number(localStorage.getItem(totalKey) || "0");
      localStorage.setItem(tKey, String(todayVal + 1));
      localStorage.setItem(totalKey, String(totalVal + 1));
      visitors.today = todayVal + 1;
      visitors.total = totalVal + 1;

      // 初始化模式
      initMode();
      bindModeToggle();

      // 绑定弹窗事件
      bindModalEvents();
      bindEscKey();

      // 启动技能轮播
      nextTick(() => {
        startSkillCarousel();
      });
      window.addEventListener("resize", onSkillCarouselResize);
    });

    onBeforeUnmount(() => {
      stopSkillCarousel();
      window.removeEventListener("resize", onSkillCarouselResize);
      clearTimeout(carouselResizeTimer);
    });

    return {
      displayName,
      jobTitle,
      age,
      experienceLabel,
      siteDate,
      exp,
      tags,
      skills,
      socials,
      works,
      carouselContainerRef,
      visitors,
      isDarkMode,
      toggleMode,
      imageModal,
      musicModal,
      videoModal,
      musicDanmakus,
      videoDanmakus,
      audioRef,
      videoRef,
      lyricsContentRef,
      handleTagClick,
      closeImageModal,
      closeMusicModal,
      closeVideoModal,
      formatTime,
      handleTimeUpdate,
      handleLoadedMetadata,
      handleProgressClick,
      handleAudioError,
      toggleMute,
      updateVolume,
      toggleMusicPlay,
      scrollToCurrentLyric,
      updateLyricIndex,
      parseLrc,
      loadLyrics,
      toggleVideoPlay,
      toggleFullscreen,
      startDanmakus,
      stopDanmakus,
    };
  },
};
</script>

<style>
@import '../assets/template-home.css';
</style>


