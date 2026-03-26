<template>
  <div id="zww-loading">
    <div id="zww-loading-center">
    </div>
  </div>
  <div class="zww-filter"></div>
  <div class="zww-background" id="zww-background"></div>

  <div class="zww-main">
    <div class="zww-left">
      <div class="logo" style="background-image: url(/images/logo.png);">
        <img style="position: absolute;top:-15%;left:-10%;width: 120%; aspect-ratio: 1/1;"
          src="/images/avatar.png">
      </div>
      <div class="left-div left-des">
        <div class="left-des-item"><svg t="1705773709627" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1478"><path d="M512 249.976471c-99.388235 0-180.705882 81.317647-180.705882 180.705882s81.317647 180.705882 180.705882 180.705882 180.705882-81.317647 180.705882-180.705882-81.317647-180.705882-180.705882-180.705882z m0 301.17647c-66.258824 0-120.470588-54.211765-120.470588-120.470588s54.211765-120.470588 120.470588-120.470588 120.470588 54.211765 120.470588 120.470588-54.211765 120.470588-120.470588 120.470588z" p-id="1479"></path><path d="M512 39.152941c-216.847059 0-391.529412 174.682353-391.529412 391.529412 0 349.364706 391.529412 572.235294 391.529412 572.235294s391.529412-222.870588 391.529412-572.235294c0-216.847059-174.682353-391.529412-391.529412-391.529412z m0 891.482353C424.658824 873.411765 180.705882 686.682353 180.705882 430.682353c0-183.717647 147.576471-331.294118 331.294118-331.294118s331.294118 147.576471 331.294118 331.294118c0 256-243.952941 442.729412-331.294118 499.952941z" p-id="1480"></path></svg>China-Henan
        </div>
        <div class="left-des-item"><svg t="1705773906032" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2474"><path d="M729.6 234.666667H294.4V157.866667a51.2 51.2 0 0 1 51.2-51.2h332.8a51.2 51.2 0 0 1 51.2 51.2v76.8z m179.2 51.2a51.2 51.2 0 0 1 51.2 51.2v512a51.2 51.2 0 0 1-51.2 51.2H115.2a51.2 51.2 0 0 1-51.2-51.2v-512a51.2 51.2 0 0 1 51.2-51.2h793.557333z m-768 172.032c0 16.384 13.312 29.696 29.696 29.696h683.008a29.696 29.696 0 1 0 0-59.392H170.410667a29.696 29.696 0 0 0-29.696 29.696z m252.416 118.784c0 16.384 13.312 29.696 29.696 29.696h178.176a29.696 29.696 0 1 0 0-59.392H422.912a29.738667 29.738667 0 0 0-29.696 29.696z" p-id="2475"></path></svg>Sias</div>
      </div>
      <div class="left-div left-tag">
        <div class="tag-container" v-for="t in tags" :key="t" @click="handleTagClick(t)">
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
      <header>
        <div class="index-logo" style="background-image: url(/images/avatar.png);">
          <img style="position: absolute;top:-15%;left:-10%;width: 120%; aspect-ratio: 1/1;"
            src="/images/avatar.png">
        </div>
        <div class="welcome">
          Hello, I'm <span class="gradientText">{{ displayName }}</span>
        </div>
        <div class="description">
          <span class="purpleText">{{ jobTitle.split('（')[0] }}</span> {{ jobTitle.split('（')[1] }}
        </div>
        <div class="description">
          <span class="purpleText">{{ age }}</span> years old ({{ age }}岁)
        </div>
        <div class="description">
          <span class="purpleText">{{ experienceLabel.split(' ')[0] }}</span> {{ experienceLabel.split(' ').slice(1).join(' ') }}
        </div>

        <div class="iconContainer">
          <a class="iconItem" onclick="" href="https://github.com/a739927483">
            <svg t="1704870335945" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2487">
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"  p-id="2488"></path>
            </svg>
            <div class="iconTip">Github</div>
          </a><a class="iconItem" onclick="" href="https://www.xiaohongshu.com/user/profile/668b3cb30000000003032770">
            <svg t="1704870588438" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3174" >
              <path d="M926.47619 355.644952V780.190476a73.142857 73.142857 0 0 1-73.142857 73.142857H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142857V355.644952l304.103619 257.828572a170.666667 170.666667 0 0 0 220.745142 0L926.47619 355.644952zM853.333333 170.666667a74.044952 74.044952 0 0 1 26.087619 4.778666 72.704 72.704 0 0 1 30.622477 22.186667 73.508571 73.508571 0 0 1 10.678857 17.67619c3.169524 7.509333 5.12 15.652571 5.607619 24.210286L926.47619 243.809524v24.380952L559.469714 581.241905a73.142857 73.142857 0 0 1-91.306666 2.901333l-3.632762-2.925714L97.52381 268.190476v-24.380952a72.899048 72.899048 0 0 1 40.155428-65.292191A72.97219 72.97219 0 0 1 170.666667 170.666667h682.666666z"  p-id="3175"></path>
            </svg>
            <div class="iconTip">Mail</div>
          </a><a class="iconItem" onclick="pop('/images/wxzsm.jpg')" href="javascript:void(0)">
            <svg t="1705247464964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4987" >
              <path d="M995.575172 725.451034c-12.358621-26.835862-38.488276-64.794483-92.689655-94.27862-62.146207-33.721379-136.297931-40.96-208.860689-20.303448l-99.928276 28.424827-279.304828-126.057931H22.775172v489.401379h509.704828l432.375172-195.266207c15.006897-6.708966 26.835862-19.42069 32.662069-34.957241 5.649655-15.36 4.943448-31.955862-1.942069-46.962759z m-482.162758 188.910345H111.051034V601.688276h184.673104l166.664828 75.387586-3.354483 0.882759h-170.372414v88.275862H471.393103l246.819311-70.267586c49.434483-14.124138 101.517241-9.357241 142.653793 12.888275 18.184828 9.886897 30.72 20.833103 39.371034 30.896552l-386.824827 174.609655z"  p-id="4988"></path>
              <path d="M695.437241 163.486897l58.615173-142.30069h-397.24138l66.736552 143.36c-121.82069 53.142069-207.095172 174.433103-207.095172 315.674483 0 28.601379 3.531034 57.202759 10.593103 84.744827l85.627586-21.715862c-5.12-20.48-7.768276-41.666207-7.768275-63.028965 0-141.241379 114.758621-256 256-256s256 114.758621 256 256c0 51.023448-14.830345 100.104828-43.078621 142.300689l73.268965 49.08138c37.958621-56.673103 58.085517-122.88 58.085518-191.382069-0.176552-141.947586-86.686897-264.121379-209.743449-316.733793zM467.508966 91.983448h180.965517l-21.009655 50.846897a348.16 348.16 0 0 0-66.913104-6.708966c-23.834483 0-46.962759 2.471724-69.384827 7.062069l-23.657931-51.2z"  p-id="4989"></path>
              <path d="M683.431724 427.431724v-70.62069h-38.311724l30.190345-30.190344-49.964138-49.964138-62.49931 62.49931h-6.002759L494.344828 276.656552l-49.787587 49.964138 30.013793 30.190344h-38.311724v70.62069h88.275862v35.310345h-88.275862v70.62069h88.275862v52.965517h70.62069v-52.965517h88.275862v-70.62069h-88.275862v-35.310345z"  p-id="4990"></path>
            </svg>
            <div class="iconTip">赞助</div>
          </a><a class="iconItem" onclick="pop('/images/qq.jpg')" href="javascript:void(0)">
            <svg t="1712319361023" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1861" ><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="1862"></path></svg>
            <div class="iconTip">QQ</div>
          </a>  <a class="switch" href="javascript:void(0)">
            <div class="onoffswitch">
              <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch"
                checked>
              <label class="onoffswitch-label" for="myonoffswitch">
                <span class="onoffswitch-inner"></span>
                <span class="onoffswitch-switch"></span>
              </label>
            </div>
          </a>
        </div>

        <div class="tanChiShe">
          <img id="tanChiShe" src="/svg/snake-Dark.svg" alt="">
        </div>
      </header>

      <content>
        <div class="title"><svg t="1705257422086" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1891" >
              <path d="M629.333333 202.666667v213.333333h277.333334v448h-512v-213.333333h-277.333334v-448h512z m213.333334 277.333333h-213.333334v170.666667h-170.666666v149.333333h384v-320z m-277.333334-213.333333h-384v320h213.333334v-170.666667h170.666666v-149.333333z m0 213.333333h-106.666666v106.666667h106.666666v-106.666667z"  p-id="1892"></path>
            </svg>project </div>
        <div class="projectList"><a class="projectItem b" target="_blank" href="../../192.168.227.131/index.html">
              <div class="projectItemLeft">
                <h1>博客</h1>
                <p>记录摆烂日常</p>
              </div>
              <div class="projectItemRight">
                <img src="/images/i1.png" alt="">
              </div>

            </a><a class="projectItem b" target="_blank" href="">
              <div class="projectItemLeft">
                <h1>云盘</h1>
                <p>存储收集文件</p>
              </div>
              <div class="projectItemRight">
                <img src="/images/i2.png" alt="">
              </div>

            </a>
            <a class="projectItem b" target="_blank" href="">
              <div class="projectItemLeft">
                <h1>实验室</h1>
                <p>收集有趣html作品</p>
              </div>
              <div class="projectItemRight">
                <img src="/images/i4.png" alt="">
              </div>

            </a><a class="projectItem b" target="_blank" href="">
              <div class="projectItemLeft">
                <h1>实验室</h1>
                <p>收集有趣html作品</p>
              </div>
              <div class="projectItemRight">
                <img src="/images/i4.png" alt="">
              </div>

            </a></div>

        <div class="title">
          <svg t="1705257823317" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7833" >
              <path d="M395.765333 586.570667h-171.733333c-22.421333 0-37.888-22.442667-29.909333-43.381334L364.768 95.274667A32 32 0 0 1 394.666667 74.666667h287.957333c22.72 0 38.208 23.018667 29.632 44.064l-99.36 243.882666h187.050667c27.509333 0 42.186667 32.426667 24.042666 53.098667l-458.602666 522.56c-22.293333 25.408-63.626667 3.392-54.976-29.28l85.354666-322.421333zM416.714667 138.666667L270.453333 522.581333h166.869334a32 32 0 0 1 30.933333 40.181334l-61.130667 230.954666 322.176-367.114666H565.312c-22.72 0-38.208-23.018667-29.632-44.064l99.36-243.882667H416.714667z"  p-id="7834"></path>
            </svg>
          skills
        </div>
        <div class="skill">
          <img id="skillPc" src="/svg/skillPc.svg" alt="" srcset="">
          <img id="skillWap" src="/svg/skillWap.svg" alt="" srcset="">
        </div>
      </content>
    </div>
  </div>
  <footer class="fixed-footer">
    <div class="footer-content">
      <span class="visitor-info">今日访客 {{ visitors.today }} | 总访客 {{ visitors.total }} | 建站日期：{{ siteDate }}</span>
    </div>
  </footer>
  <div class="tc">
    <div onclick="" class="tc-main">
      <img class="tc-img" src="" alt="" srcset="">
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
          <img v-if="imageModal.images.length > 0" :src="imageModal.images[0]" alt="图片">
          <p v-else>暂无图片</p>
        </div>
      </div>
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
              <img :src="musicModal.cover" :alt="musicModal.title" class="music-cover" :class="{ 'playing': musicModal.isPlaying }">
              <div v-if="!musicModal.isPlaying" class="play-button-overlay" @click="() => { musicModal.isPlaying = true; $refs.audio.play() }">
                <span class="play-icon">▶</span>
              </div>
              <div v-if="musicModal.isPlaying" class="play-button-overlay" @click="() => { musicModal.isPlaying = false; $refs.audio.pause() }">
                <span class="pause-icon">❚❚</span>
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
            <div class="progress-fill" :style="{ width: musicModal.duration > 0 ? (musicModal.currentTime / musicModal.duration) * 100 + '%' : '0%' }"></div>
            <div class="progress-thumb" :style="{ left: musicModal.duration > 0 ? (musicModal.currentTime / musicModal.duration) * 100 + '%' : '0%' }"></div>
          </div>
          
          <div class="control-buttons">
            <button class="loop-button" @click="musicModal.isLoop = !musicModal.isLoop" :class="{ 'active': musicModal.isLoop }">
              🔁
            </button>
            <button class="lyrics-button" @click="musicModal.showLyrics = !musicModal.showLyrics" :class="{ 'active': musicModal.showLyrics }">
              词
            </button>
          </div>
        </div>
      </div>
      
      <audio ref="audio" :src="musicModal.musicUrl" :loop="musicModal.isLoop" @timeupdate="handleTimeUpdate" @loadedmetadata="handleLoadedMetadata" @ended="musicModal.isPlaying = false"></audio>
    </div>
  </div>

  <!-- 视频弹窗 -->
  <div class="video-modal" v-if="videoModal.isOpen">
    <div class="modal-overlay" @click="closeVideoModal"></div>
    <div class="video-modal-content" @click.stop>
      <button v-if="!videoModal.isFullscreen" class="close-btn" @click="closeVideoModal">&times;</button>
      
      <div class="video-player">
        <video ref="video" :src="videoModal.videoUrl" @click="toggleVideoPlay" @play="videoModal.isPlaying = true" @pause="videoModal.isPlaying = false" controls="false">
          <source :src="videoModal.videoUrl" type="video/mp4">
        
          
          <div v-if="!videoModal.isPlaying" class="video-play-overlay" @click="toggleVideoPlay">
            <span class="play-icon">▶</span>
          </div>
          
          <div class="video-controls">
            <button class="play-pause-btn" @click="toggleVideoPlay">
              {{ videoModal.isPlaying ? '❚❚' : '▶' }}
            </button>
            <button class="fullscreen-btn" @click="toggleFullscreen">
              ⛶
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'

const TEMPL_TAGS = [
  '做饭',
  '摄影',
  '五哈',
  '美食',
  '沧元图',
  '音乐',
  '蜡笔小新',
  '英雄联盟手游',
  '天空中的歌',
  '鲜花',
  '枕刀歌',
  '镖人',
  '不良人',
  '不良人天罡传',
  '鬼灭之刃',
]

const tagConfigs = {
  '做饭': {
    type: 'image',
    config: {
      title: '做饭',
      images: [],
      danmakuText: '好吃',
    },
  },
  '摄影': {
    type: 'image',
    config: {
      title: '摄影作品',
      images: [],
      danmakuText: '好看',
    },
  },
  '美食': {
    type: 'image',
    config: {
      title: '美食',
      images: [],
      danmakuText: '好吃',
    },
  },
  '五哈': {
    type: 'music',
    config: {
      title: 'wuha',
      musicUrl: '',
      cover: '/images/wuha.jpg',
      author: '邓超&陈赫&鹿晗&范志毅&宝石Gem&王勉',
      danmakuText: '好听',
    },
  },
  '天空中的歌': {
    type: 'music',
    config: {
      title: '天空中的歌',
      musicUrl: '',
      cover: '/images/tkzdg.jpg',
      author: '崔一乔',
      danmakuText: '好听',
    },
  },
  '鲜花': {
    type: 'music',
    config: {
      title: '鲜花',
      musicUrl: '',
      cover: '/images/xh.jpg',
      author: '回春丹乐队',
      danmakuText: '好听',
    },
  },
  '音乐': {
    type: 'music',
    config: {
      title: '音乐播放器',
      musicUrl: '/music/sample.mp3',
      cover: '/images/avatar.png',
      author: '未知艺术家',
      danmakuText: '好听',
    },
  },
  '蜡笔小新': {
    type: 'video',
    config: {
      title: '蜡笔小新',
      videoUrl: '',
      danmakuText: '蜡笔小新',
    },
  },
  '沧元图': {
    type: 'video',
    config: {
      title: '沧元图',
      videoUrl: '',
      danmakuText: '沧元图',
    },
  },
  '英雄联盟手游': {
    type: 'video',
    config: {
      title: '英雄联盟手游',
      videoUrl: '',
      danmakuText: '五杀！我真牛！！',
    },
  },
  '枕刀歌': {
    type: 'video',
    config: {
      title: '枕刀歌',
      videoUrl: '',
      danmakuText: '枕刀歌',
    },
  },
  '镖人': {
    type: 'video',
    config: {
      title: '镖人',
      videoUrl: '',
      danmakuText: '镖人',
    },
  },
  '不良人': {
    type: 'video',
    config: {
      title: '不良人',
      videoUrl: '',
      danmakuText: '有品',
    },
  },
  '不良人天罡传': {
    type: 'video',
    config: {
      title: '不良人天罡传',
      videoUrl: '',
      danmakuText: '恭迎大帅',
    },
  },
  '鬼灭之刃': {
    type: 'video',
    config: {
      title: '鬼灭之刃',
      videoUrl: '',
      danmakuText: '鬼灭之刃',
    },
  },
}

export default {
  name: 'TemplateHome',
  setup() {
    // 使用App.vue中的数据
    const displayName = '抓娃娃小队长'
    const jobTitle = 'Front-end development（前端开发工程师）'
    const age = 27
    const experienceLabel = '2.5 work experience (2.5年工作经验)'

    // 动态设置建站日期为今天
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    const siteDate = `${year}-${month}-${day}`

    const exp = reactive({
      name: '北京荣耀(外包)',
      date: '2021-2023',
    })

    const tags = ref(TEMPL_TAGS)

    // 访问统计（纯前端，本地浏览次数）
    const visitors = reactive({ today: 0, total: 0 })
    const todayKey = () => {
      const d = new Date()
      const y = d.getFullYear()
      const m = String(d.getMonth() + 1).padStart(2, '0')
      const day = String(d.getDate()).padStart(2, '0')
      return `${y}-${m}-${day}`
    }

    // 标签弹窗状态
    const imageModal = reactive({
      isOpen: false,
      title: '',
      images: [],
      danmakuText: '',
    })

    const musicModal = reactive({
      isOpen: false,
      title: '',
      musicUrl: '',
      cover: '',
      author: '',
      danmakuText: '',
      isPlaying: false,
      currentTime: 0,
      duration: 0,
      isLoop: false,
      showLyrics: true,
    })

    const videoModal = reactive({
      isOpen: false,
      title: '',
      videoUrl: '',
      danmakuText: '',
      isPlaying: false,
      isFullscreen: false,
    })

    // 日间/夜间模式切换
    const isDarkMode = ref(false)

    const toggleMode = () => {
      isDarkMode.value = !isDarkMode.value
      const html = document.documentElement
      const snakeImg = document.getElementById('tanChiShe')
      const background = document.getElementById('zww-background')
      
      if (isDarkMode.value) {
        html.setAttribute('data-theme', 'Dark')
        if (snakeImg) {
          snakeImg.src = '/svg/snake-Light.svg'
        }
        if (background) {
          background.style.backgroundImage = 'url(/images/night-background.jpg)'
        }
      } else {
        html.removeAttribute('data-theme')
        if (snakeImg) {
          snakeImg.src = '/svg/snake-Dark.svg'
        }
        if (background) {
          background.style.backgroundImage = 'url(/images/day-background.jpg)'
        }
      }
    }

    // 初始化模式
    const initMode = () => {
      const html = document.documentElement
      const snakeImg = document.getElementById('tanChiShe')
      const background = document.getElementById('zww-background')
      
      if (isDarkMode.value) {
        html.setAttribute('data-theme', 'Dark')
        if (snakeImg) {
          snakeImg.src = '/svg/snake-Light.svg'
        }
        if (background) {
          background.style.backgroundImage = 'url(/images/night-background.jpg)'
        }
      } else {
        html.removeAttribute('data-theme')
        if (snakeImg) {
          snakeImg.src = '/svg/snake-Dark.svg'
        }
        if (background) {
          background.style.backgroundImage = 'url(/images/day-background.jpg)'
        }
      }
    }

    // 标签点击处理函数
    const handleTagClick = (tagName) => {
      const tagConfig = tagConfigs[tagName]
      if (!tagConfig) {
        return
      }

      switch (tagConfig.type) {
        case 'image':
          Object.assign(imageModal, {
            isOpen: true,
            ...tagConfig.config
          })
          break
        case 'music':
          Object.assign(musicModal, {
            isOpen: true,
            ...tagConfig.config,
            isPlaying: false,
            currentTime: 0,
            duration: 0,
            isLoop: false,
            showLyrics: true,
          })
          break
        case 'video':
          Object.assign(videoModal, {
            isOpen: true,
            ...tagConfig.config,
            isPlaying: false,
            isFullscreen: false,
          })
          break
        default:
          break
      }
    }

    // 绑定切换按钮事件
    const bindModeToggle = () => {
      const toggleBtn = document.getElementById('myonoffswitch')
      if (toggleBtn) {
        toggleBtn.addEventListener('change', toggleMode)
      }
    }

    // 关闭图片弹窗
    const closeImageModal = () => {
      imageModal.isOpen = false
    }

    // 关闭音乐弹窗
    const closeMusicModal = () => {
      musicModal.isOpen = false
      musicModal.isPlaying = false
      musicModal.currentTime = 0
    }

    // 关闭视频弹窗
    const closeVideoModal = () => {
      videoModal.isOpen = false
      videoModal.isPlaying = false
    }

    // 格式化时间
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    // 音乐时间更新处理
    const handleTimeUpdate = () => {
      if ($refs.audio) {
        musicModal.currentTime = $refs.audio.currentTime
      }
    }

    // 音乐加载元数据处理
    const handleLoadedMetadata = () => {
      if ($refs.audio) {
        musicModal.duration = $refs.audio.duration
      }
    }

    // 音乐进度条点击处理
    const handleProgressClick = (e) => {
      const progressBar = e.currentTarget
      const rect = progressBar.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const width = rect.width
      const percentage = clickX / width
      const time = percentage * musicModal.duration
      
      if ($refs.audio) {
        $refs.audio.currentTime = time
        musicModal.currentTime = time
      }
    }

    // 视频播放切换
    const toggleVideoPlay = () => {
      if ($refs.video) {
        if (videoModal.isPlaying) {
          $refs.video.pause()
        } else {
          $refs.video.play()
        }
      }
    }

    // 视频全屏切换
    const toggleFullscreen = () => {
      const container = document.querySelector('.video-modal-content')
      if (!document.fullscreenElement) {
        container.requestFullscreen()
        videoModal.isFullscreen = true
      } else {
        document.exitFullscreen()
        videoModal.isFullscreen = false
      }
    }

    // 图片弹窗功能
    window.pop = function (img) {
      const tc = document.querySelector('.tc')
      const tcMain = document.querySelector('.tc-main')
      const tcImg = document.querySelector('.tc-img')
      tcImg.src = img
      tc.classList.add('active')
      tcMain.classList.add('active')
    }

    // 关闭弹窗函数
    const closeModal = () => {
      const tc = document.querySelector('.tc')
      const tcMain = document.querySelector('.tc-main')
      if (tc && tcMain) {
        tc.classList.remove('active')
        tcMain.classList.remove('active')
      }
    }

    // 点击关闭弹窗（点击背景区域时关闭，点击图片时不关闭）
    const bindModalEvents = () => {
      const tc = document.querySelector('.tc')
      if (tc) {
        tc.addEventListener('click', function (e) {
          // 只有点击背景区域（.tc）时才关闭弹窗
          if (e.target === tc) {
            closeModal()
          }
        })
      }
    }

    // ESC键关闭弹窗
    const bindEscKey = () => {
      window.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          closeModal()
        }
      })
    }

    onMounted(() => {
      // 隐藏加载动画
      setTimeout(() => {
        const loading = document.getElementById('zww-loading')
        if (loading) {
          loading.style.opacity = '0'
          setTimeout(() => {
            loading.style.display = 'none'
          }, 500)
        }
      }, 1000)

      // 访问统计
      const tKey = `pv_today_${todayKey()}`
      const totalKey = 'pv_total'
      const todayVal = Number(localStorage.getItem(tKey) || '0')
      const totalVal = Number(localStorage.getItem(totalKey) || '0')
      localStorage.setItem(tKey, String(todayVal + 1))
      localStorage.setItem(totalKey, String(totalVal + 1))
      visitors.today = todayVal + 1
      visitors.total = totalVal + 1

      // 初始化模式
      initMode()
      bindModeToggle()

      // 绑定弹窗事件
      bindModalEvents()
      bindEscKey()
    })

    return {
      displayName,
      jobTitle,
      age,
      experienceLabel,
      siteDate,
      exp,
      tags,
      visitors,
      isDarkMode,
      toggleMode,
      imageModal,
      musicModal,
      videoModal,
      handleTagClick,
      closeImageModal,
      closeMusicModal,
      closeVideoModal,
      formatTime,
      handleTimeUpdate,
      handleLoadedMetadata,
      handleProgressClick,
      toggleVideoPlay,
      toggleFullscreen,
    }
  },
}
</script>

<style scoped>
/* 背景样式 */
.zww-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--main_bg_color);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -99999999;
  transition: background-color 0.2s ease;
}

/* 标签区域样式 */
.left-div.left-tag {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag-container {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 5px;
  width: fit-content;
  cursor: pointer;
  font-size: 12px;
  color: #fff;
  transition: all 0.2s ease;
}

.tag-container:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

/* 经历部分样式 */
.left-time.timeline {
  padding: 15px;
}

.sectionTitle {
  font-size: 16px;
  font-weight: bold;
  color: var(--text_color);
  margin-bottom: 12px;
}

.timelineItem {
  display: flex;
  align-items: flex-start;
}

.tlDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-image: var(--gradient);
  margin-right: 10px;
  margin-top: 6px;
  flex-shrink: 0;
}

.tlText {
  flex: 1;
}

.tlCompany {
  font-size: 14px;
  color: var(--text_color);
  margin-bottom: 4px;
}

.tlDate {
  font-size: 12px;
  color: var(--text_gray_color);
}

/* 固定页脚样式 */
.fixed-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  backdrop-filter: blur(var(--card_filter));
  -webkit-backdrop-filter: blur(var(--card_filter));
  background: var(--item_bg_color);
  font-size: 13px;
  z-index: 100;
}

.footer-content {
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.visitor-info {
  color: #ffffff;
  font-size: 13px;
}

/* 为内容区域添加底部边距，避免被固定页脚遮挡 */
.zww-right {
  padding-bottom: 80px !important;
}

/* 音乐弹窗样式 */
.music-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.music-modal-content {
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  padding: 40px 20px 20px;
  max-width: 500px;
  width: 90%;
  color: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  animation: modalSlideIn 0.3s ease-out;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

.music-player {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.music-cover-container {
  margin-bottom: 20px;
}

.cover-outer {
  width: 300px;
  height: 300px;
  background: #3F4142;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.cover-inner {
  width: 270px;
  height: 270px;
  background: #030303;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

.music-cover {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #fff;
  transition: transform 1s linear;
}

.music-cover.playing {
  animation: spin 10s linear infinite;
}

.play-button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.play-icon, .pause-icon {
  color: #fff;
  font-size: 24px;
}

.music-info {
  text-align: center;
  margin-bottom: 20px;
}

.music-info h3 {
  margin: 0 0 5px 0;
  font-size: 24px;
}

.music-info p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
}

.music-controls {
  width: 100%;
}

.time-display {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  margin-bottom: 15px;
}

.progress-fill {
  height: 100%;
  background: #fff;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
  transition: width 0.1s ease;
}

.progress-thumb {
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.control-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.loop-button, .lyrics-button {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.loop-button.active, .lyrics-button.active {
  color: #fff;
  font-weight: bold;
}

.loop-button:hover, .lyrics-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* 视频弹窗样式 */
.video-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000;
}

.video-modal-content {
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  overflow: hidden;
  max-width: 90%;
  max-height: 90vh;
  width: auto;
  height: auto;
  animation: modalSlideIn 0.3s ease-out;
}

.video-player {
  position: relative;
  width: 100%;
  height: 100%;
}

video {
  width: 100%;
  height: auto;
  display: block;
}

.video-play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.video-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-player:hover .video-controls {
  opacity: 1;
}

.play-pause-btn, .fullscreen-btn {
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.play-pause-btn:hover, .fullscreen-btn:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* 动画效果 */
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

