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
              <img :src="musicModal.cover" :alt="musicModal.title" class="music-cover" :class="{ 'playing': musicModal.isPlaying }">
              <div v-if="!musicModal.isPlaying" class="play-button-overlay" @click.stop="toggleMusicPlay">
                <span class="play-icon">▶</span>
              </div>
              <div v-if="musicModal.isPlaying" class="play-button-overlay" @click.stop="toggleMusicPlay">
                <span class="pause-icon">❚❚</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="music-info">
          <h3>{{ musicModal.title }}</h3>
          <p>{{ musicModal.author }}</p>
          <p v-if="musicModal.isPlaying && musicModal.currentLyricIndex >= 0" class="current-lyric-display">
            {{ musicModal.lyrics[musicModal.currentLyricIndex].text }}
          </p>
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
          
          <div class="control-buttons" style="display: flex; align-items: center; gap: 15px;">
            <button class="control-button" @click="toggleLoop" :class="{ 'active': musicModal.isLoop }" title="循环">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
              </svg>
            </button>
            <button class="control-button" @click="toggleLyrics" :class="{ 'active': musicModal.showLyrics }" title="歌词">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 18h16V6H4v12zM6 8h8v2H6V8zm0 4h8v2H6v-2z"/>
              </svg>
            </button>
            <div style="display: flex; align-items: center; gap: 8px;">
              <button class="control-button" @click="toggleMute" title="静音">
                <svg v-if="!musicModal.isMuted" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                </svg>
              </button>
              <input type="range" min="0" max="1" step="0.1" v-model="musicModal.volume" @input="updateVolume" style="width: 80px; height: 4px;">
            </div>
          </div>
        </div>
        
        <!-- 歌词显示区域 -->
        <div class="lyrics-container" v-if="musicModal.showLyrics" ref="lyricsContentRef">
          <div class="lyrics-content">
            <div v-for="(line, index) in musicModal.lyrics" :key="index" 
                 :class="{ 'current': index === musicModal.currentLyricIndex }">
              {{ line.text }}
            </div>
          </div>
        </div>
      </div>
      
      <audio ref="audioRef" :src="musicModal.musicUrl" :loop="musicModal.isLoop" @timeupdate="handleTimeUpdate" @loadedmetadata="handleLoadedMetadata" @ended="musicModal.isPlaying = false" @error="handleAudioError"></audio>
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
      <button v-if="!videoModal.isFullscreen" class="close-btn" @click="closeVideoModal">&times;</button>
      
      <div class="video-player">
        <video ref="videoRef" :src="videoModal.videoUrl" @click="toggleVideoPlay" @play="videoModal.isPlaying = true" @pause="videoModal.isPlaying = false" controls="false">
          <source :src="videoModal.videoUrl" type="video/mp4">
        </video>
        
        <!-- 播放按钮覆盖层 -->
        <div v-if="!videoModal.isPlaying" class="video-play-overlay" @click="toggleVideoPlay">
          <div class="play-icon-circle">
            <span class="play-icon">▶</span>
          </div>
        </div>
        
        <!-- 自定义控制栏 -->
        <div class="video-controls">
          <div class="controls-left">
            <button class="play-pause-btn" @click="toggleVideoPlay">
              {{ videoModal.isPlaying ? '❚❚' : '▶' }}
            </button>
          </div>
          
          <div class="controls-right">
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
import { computed, onBeforeUnmount, onMounted, reactive, ref, nextTick } from 'vue'

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
      musicUrl: '/music/test.mp3',
      cover: '/images/wuha.jpg',
      author: '邓超&陈赫&鹿晗&范志毅&宝石Gem&王勉',
      danmakuText: '好听',
      lrcUrl: '/ci/test.lrc',
    },
  },
  '天空中的歌': {
    type: 'music',
    config: {
      title: '天空中的歌',
      musicUrl: '/music/test.mp3',
      cover: '/images/tkzdg.jpg',
      author: '崔一乔',
      danmakuText: '好听',
      lrcUrl: '/ci/test.lrc',
    },
  },
  '鲜花': {
    type: 'music',
    config: {
      title: '鲜花',
      musicUrl: '/music/test.mp3',
      cover: '/images/xh.jpg',
      author: '回春丹乐队',
      danmakuText: '好听',
      lrcUrl: '/ci/test.lrc',
    },
  },
  '音乐': {
    type: 'music',
    config: {
      title: '音乐播放器',
      musicUrl: '/music/test.mp3',
      cover: '/images/avatar.png',
      author: '未知艺术家',
      danmakuText: '好听',
      lrcUrl: '/ci/test.lrc',
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
      lyrics: [],
      currentLyricIndex: 0,
      volume: 0.8,
      isMuted: false,
    })

    const videoModal = reactive({
      isOpen: false,
      title: '',
      videoUrl: '',
      danmakuText: '',
      isPlaying: false,
      isFullscreen: false,
    })

    // 弹幕状态
    const musicDanmakus = ref([])
    const videoDanmakus = ref([])
    const danmakuIntervals = ref({})

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
          console.log('点击音乐标签:', tagName)
          console.log('音乐配置:', tagConfig.config)
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
          })
          startDanmakus('music', tagConfig.config.danmakuText)
          // 加载歌词
          loadLyrics(tagConfig.config.lrcUrl)
          break
        case 'video':
          Object.assign(videoModal, {
            isOpen: true,
            ...tagConfig.config,
            isPlaying: false,
            isFullscreen: false,
          })
          startDanmakus('video', tagConfig.config.danmakuText)
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
      stopDanmakus('music')
    }

    // 关闭视频弹窗
    const closeVideoModal = () => {
      videoModal.isOpen = false
      videoModal.isPlaying = false
      stopDanmakus('video')
    }

    // 格式化时间
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    // 滚动到当前歌词
    const scrollToCurrentLyric = () => {
      if (lyricsContentRef.value && musicModal.currentLyricIndex >= 0) {
        const container = lyricsContentRef.value
        
        // 直接获取所有歌词元素
        const lyricElements = container.querySelectorAll('.lyrics-content div')
        const currentLyric = lyricElements[musicModal.currentLyricIndex]
        
        if (currentLyric) {
          const containerHeight = container.clientHeight
          const lyricTop = currentLyric.offsetTop
          const lyricHeight = currentLyric.clientHeight
          
          // 精确计算滚动位置，使当前歌词位于容器中间偏上位置
          const scrollTop = lyricTop - containerHeight / 2 + lyricHeight / 2
          
          // 使用平滑滚动
          container.scrollTo({
            top: Math.max(0, scrollTop),
            behavior: 'smooth'
          })
        }
      }
    }

    // 音乐时间更新处理
    const handleTimeUpdate = () => {
      if (audioRef.value) {
        musicModal.currentTime = audioRef.value.currentTime
        
        // 使用共享的歌词索引更新函数
        updateLyricIndex(musicModal.currentTime)
      }
    }

    // 音乐加载元数据处理
    const handleLoadedMetadata = () => {
      if (audioRef.value) {
        musicModal.duration = audioRef.value.duration
        // 设置初始音量
        audioRef.value.volume = musicModal.volume
        audioRef.value.muted = musicModal.isMuted
      }
    }

    // 更新歌词索引
    const updateLyricIndex = (currentTime) => {
      if (musicModal.lyrics.length === 0) return
      
      let newIndex = 0
      
      // 反向查找，从最后一个开始，找到第一个时间小于等于当前时间的歌词
      for (let i = musicModal.lyrics.length - 1; i >= 0; i--) {
        if (musicModal.lyrics[i].time <= currentTime) {
          newIndex = i
          break
        }
      }
      
      // 更新索引并滚动
      musicModal.currentLyricIndex = newIndex
      
      // 使用nextTick确保DOM更新后再滚动
      nextTick(() => {
        scrollToCurrentLyric()
      })
    }

    // 音乐进度条点击处理
    const handleProgressClick = (e) => {
      const progressBar = e.currentTarget
      const rect = progressBar.getBoundingClientRect()
      const clickX = e.clientX - rect.left
      const width = rect.width
      const percentage = clickX / width
      const time = percentage * musicModal.duration
      
      if (audioRef.value) {
        audioRef.value.currentTime = time
        musicModal.currentTime = time
        
        // 立即更新歌词索引和滚动
        updateLyricIndex(time)
      }
    }

    // 音频错误处理
    const handleAudioError = (event) => {
      console.error('音频加载失败:', event.target.error)
    }

    // 切换静音
    const toggleMute = () => {
      if (audioRef.value) {
        audioRef.value.muted = !audioRef.value.muted
        musicModal.isMuted = audioRef.value.muted
      }
    }

    // 更新音量
    const updateVolume = () => {
      if (audioRef.value) {
        audioRef.value.volume = musicModal.volume
        musicModal.isMuted = musicModal.volume === 0
      }
    }

    // 切换循环模式
    const toggleLoop = () => {
      musicModal.isLoop = !musicModal.isLoop
    }

    // 切换歌词显示
    const toggleLyrics = () => {
      musicModal.showLyrics = !musicModal.showLyrics
    }

    // 切换音乐播放/暂停
    const toggleMusicPlay = () => {
      if (!audioRef.value) return
      
      if (!musicModal.isPlaying) {
        // 播放
        audioRef.value.load()
        audioRef.value.volume = 1.0
        audioRef.value.muted = false
        audioRef.value.play().catch(err => {
          console.error('播放失败:', err)
          musicModal.isPlaying = false
        })
        musicModal.isPlaying = true
      } else {
        // 暂停
        audioRef.value.pause()
        musicModal.isPlaying = false
      }
    }



    // 解析LRC歌词
    const parseLrc = (lrcContent) => {
      const lyrics = []
      const lines = lrcContent.split('\n')
      const lrcRegex = /\[(\d{2}):(\d{2})\.(\d{3})\](.*)/
      
      lines.forEach(line => {
        const match = line.match(lrcRegex)
        if (match) {
          const minutes = parseInt(match[1])
          const seconds = parseInt(match[2])
          const milliseconds = parseInt(match[3])
          const text = match[4].trim()
          
          if (text) {
            lyrics.push({
              time: minutes * 60 + seconds + milliseconds / 1000,
              text: text
            })
          }
        }
      })
      
      return lyrics.sort((a, b) => a.time - b.time)
    }

    // 加载歌词
    const loadLyrics = async (lrcUrl) => {
      if (!lrcUrl) {
        musicModal.lyrics = []
        musicModal.currentLyricIndex = 0
        return
      }
      
      try {
        const response = await fetch(lrcUrl)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const lrcContent = await response.text()
        musicModal.lyrics = parseLrc(lrcContent)
        musicModal.currentLyricIndex = 0
      } catch (error) {
        console.error('加载歌词失败:', error)
        musicModal.lyrics = []
        musicModal.currentLyricIndex = 0
      }
    }

    // 视频播放切换
    const toggleVideoPlay = () => {
      if (videoRef.value) {
        if (videoModal.isPlaying) {
          videoRef.value.pause()
        } else {
          videoRef.value.play()
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

    // 音频和视频引用
    const audioRef = ref(null)
    const videoRef = ref(null)
    const lyricsContentRef = ref(null)

    // 创建弹幕
    const createDanmaku = (text) => {
      const containerHeight = window.innerHeight * 0.5
      const lineHeight = 24
      const maxTop = Math.max(0, containerHeight - lineHeight)

      return {
        id: Math.random().toString(36).substr(2, 9),
        text: text,
        top: Math.random() * maxTop,
        left: window.innerWidth,
        speed: 3 + Math.random() * 2,
        opacity: 0.7 + Math.random() * 0.3,
        fontSize: 16 + Math.random() * 8,
        color: '#ffffff',
      }
    }

    // 更新弹幕位置
    const updateDanmakus = (danmakus) => {
      danmakus.value = danmakus.value
        .map(danmaku => ({
          ...danmaku,
          left: danmaku.left - danmaku.speed
        }))
        .filter(danmaku => danmaku.left > -300)
    }

    // 启动弹幕
    const startDanmakus = (type, text) => {
      // 清理之前的定时器
      if (danmakuIntervals.value[type]) {
        clearInterval(danmakuIntervals.value[type])
      }

      const danmakus = type === 'music' ? musicDanmakus : videoDanmakus
      
      // 清空弹幕
      danmakus.value = []

      // 添加初始弹幕
      for (let i = 0; i < 5; i++) {
        danmakus.value.push(createDanmaku(text))
      }

      // 设置定时器添加新弹幕
      danmakuIntervals.value[type] = setInterval(() => {
        danmakus.value.push(createDanmaku(text))
        // 限制弹幕数量
        if (danmakus.value.length > 50) {
          danmakus.value = danmakus.value.slice(-50)
        }
      }, 800)

      // 设置动画帧更新弹幕位置
      const update = () => {
        updateDanmakus(danmakus)
        if (danmakuIntervals.value[type]) {
          requestAnimationFrame(update)
        }
      }
      requestAnimationFrame(update)
    }

    // 停止弹幕
    const stopDanmakus = (type) => {
      if (danmakuIntervals.value[type]) {
        clearInterval(danmakuIntervals.value[type])
        delete danmakuIntervals.value[type]
      }
      const danmakus = type === 'music' ? musicDanmakus : videoDanmakus
      danmakus.value = []
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
      toggleLoop,
      toggleLyrics,
      toggleMusicPlay,
      scrollToCurrentLyric,
      updateLyricIndex,
      parseLrc,
      loadLyrics,
      toggleVideoPlay,
      toggleFullscreen,
      startDanmakus,
      stopDanmakus,
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
  background: rgba(0, 0, 0, 0.3);
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
  margin: 5px 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

.current-lyric-display {
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  opacity: 0.9;
  text-align: center;
  min-height: 20px;
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

.control-button {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-button:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.control-button.active {
  color: #fff;
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
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  overflow: hidden;
  max-width: 90%;
  max-height: 90vh;
  width: auto;
  height: auto;
  animation: modalSlideIn 0.3s ease-out;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
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

/* 弹幕样式 */
.danmaku-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  pointer-events: none;
  overflow: hidden;
  z-index: 10;
}

.danmaku {
  position: absolute;
  white-space: nowrap;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transform: translateZ(0);
  will-change: transform;
  opacity: 0.8;
}

/* 视频播放器改进 */
.video-play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
}

.play-icon-circle {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.play-icon-circle:hover {
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.1);
}

.play-icon-circle .play-icon {
  font-size: 40px;
  margin-left: 5px;
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
  backdrop-filter: blur(10px);
}

.video-player:hover .video-controls {
  opacity: 1;
}

.controls-left, .controls-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.play-pause-btn, .fullscreen-btn {
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.play-pause-btn:hover, .fullscreen-btn:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

/* 歌词显示样式 */
.lyrics-container {
  margin-top: 20px;
  height: 150px;
  overflow-y: auto;
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.lyrics-content {
  text-align: center;
  font-size: 14px;
  line-height: 2;
}

.lyrics-content div {
  padding: 4px 0;
  opacity: 0.6;
  transition: all 0.3s ease;
}

.lyrics-content .current {
  opacity: 1;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
}
</style>

