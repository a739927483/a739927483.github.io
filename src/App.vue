<template>
  <div class="root">
    <header class="header">
      <div class="brand">
        <div class="logo" aria-hidden="true">Logo</div>
        <div class="brand-text">
          <div class="brand-title">{{ state.name }}</div>
          <div class="brand-sub">LIGHT*WAVE*BIU*BIU*BIU*</div>
        </div>
      </div>

      <nav class="nav">
        <a class="nav-link" href="#works">作品集</a>
        <a class="nav-link" href="#blog">文章</a>
        <a class="nav-link" href="#resource">资源</a>
        <a class="nav-link" href="#chat">聊天室</a>
        <a class="nav-link" href="#friends">友链</a>
      </nav>
    </header>

    <main class="layout">
      <section class="left">
        <div class="card profile-card">
          <div class="profile-top">
            <div class="avatar" aria-hidden="true">{{ state.name.slice(0, 1) }}</div>
            <div class="profile-meta">
              <div class="title">{{ state.jobTitle }}</div>
              <div class="meta-row">
                <span class="pill">{{ state.age }} years old</span>
                <span class="pill">{{ state.gender }}</span>
                <span class="pill">{{ state.city }}</span>
              </div>
              <div class="meta-row">
                <span class="pill">{{ state.experienceLabel }}</span>
              </div>
            </div>
          </div>

          <div class="tech-grid">
            <div class="section-label">Tech / 兴趣</div>
            <div class="chips">
              <span class="chip" v-for="t in state.techTags" :key="t">{{ t }}</span>
            </div>
          </div>

          <div class="socials">
            <div class="section-label">Social</div>
            <div class="social-row">
              <a class="social" v-for="s in state.socials" :key="s.label" :href="s.href" target="_blank" rel="noreferrer">
                {{ s.label }}
              </a>
            </div>
          </div>
        </div>

        <div class="card hobby-card" id="works">
          <div class="section-title">作品集 / 记录</div>
          <div class="list-grid">
            <div class="list-item" v-for="p in state.works" :key="p.title">
              <div class="list-item-title">{{ p.title }}</div>
              <div class="list-item-desc">{{ p.desc }}</div>
            </div>
          </div>
        </div>
      </section>

      <aside class="right">
        <div class="card">
          <div class="section-title">工作经历</div>
          <div class="timeline">
            <div class="tl-item" v-for="w in state.workExperiences" :key="w.company">
              <div class="tl-left"></div>
              <div class="tl-right">
                <div class="tl-company">{{ w.company }}</div>
                <div class="tl-period">{{ w.period }}</div>
                <div class="tl-desc">{{ w.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card" id="blog">
          <div class="section-title">持续更新</div>
          <div class="muted">
            你可以在这里放“文章 / 笔记 / 资源链接”。当前示例仅提供版式。
          </div>
          <div class="quick-links">
            <a class="quick" href="#resource">前往资源</a>
            <a class="quick" href="#chat">进入聊天室</a>
          </div>
        </div>

        <div class="card" id="resource">
          <div class="section-title">资源 / 文档</div>
          <div class="muted">放常用工具、配置、链接清单。</div>
          <div class="resource-list">
            <div class="resource-item" v-for="r in state.resources" :key="r">{{ r }}</div>
          </div>
        </div>

        <div class="card" id="chat">
          <div class="section-title">聊天室</div>
          <div class="muted">可以换成你的实时聊天入口链接。</div>
          <div class="resource-item">占位：{{ state.chatLinkText }}</div>
        </div>

        <div class="card contrib-card" id="friends">
          <div class="section-title">GitHub 贡献图</div>
          <div class="muted">加载GitHub贡献图...（把用户名填到这里即可）</div>
          <div class="contrib-placeholder">
            github.com/{{ state.githubUser }}/
          </div>
        </div>

        <div class="card visitors-card">
          <div class="section-title">访问统计</div>
          <div class="visitors">
            <div class="visitor">
              <div class="visitor-value">{{ visitors.today }}</div>
              <div class="visitor-label">今日访客</div>
            </div>
            <div class="visitor">
              <div class="visitor-value">{{ visitors.total }}</div>
              <div class="visitor-label">总访客</div>
            </div>
          </div>
          <div class="muted">建站日期：{{ state.siteDate }}</div>
        </div>
      </aside>
    </main>

    <footer class="footer">
      <div class="footer-left">© {{ year }} {{ state.name }}. All rights reserved.</div>
      <div class="footer-right">
        <a class="footer-link" href="#works">作品集</a>
        <a class="footer-link" href="#resource">资源</a>
        <a class="footer-link" href="#friends">友链</a>
      </div>
    </footer>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue'

function todayKey() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export default {
  name: 'App',
  setup() {
    const state = reactive({
      name: '抓娃娃小队长',
      jobTitle: 'Front-end development（前端开发工程师）',
      age: 27,
      gender: '男',
      city: '河南',
      experienceLabel: '2.5 work experience (2.5年工作经验)',
      techTags: [
        '微信小程序',
        'uniapp',
        'Vue',
        'Node',
        'Koa 2',
        'Nest.js',
        'Git',
        'Svn',
        'Nginx',
        'Electron',
        'HTML',
        'CSS',
        'JavaScript',
        'TypeScript',
        'Nuxt',
      ],
      socials: [
        { label: 'github', href: 'https://github.com/你的GitHub' },
        { label: 'qq', href: '#' },
        { label: 'weixin', href: '#' },
        { label: 'xhs', href: '#' },
      ],
      works: [
        { title: '作品集', desc: '记录前端作品 / 工具 / Demo' },
        { title: '文章', desc: '前端知识、工程化、踩坑笔记' },
        { title: '资源', desc: '常用资源、配置、模板集合' },
        { title: '聊天室', desc: '实时交流、问题反馈入口' },
      ],
      workExperiences: [
        { company: '广州某某网络有限公司', period: '2024-至今', desc: '负责前端工程化与业务功能开发' },
        { company: '广州飞斯科技有限公司', period: '2023-2024', desc: '参与多个业务系统迭代与维护' },
        { company: '广西财经学院', period: '2021-2023', desc: '学习与实践（示例可替换）' },
      ],
      resources: ['状态管理', '构建工具', '常用脚手架', '部署脚本'],
      chatLinkText: '把这个替换成你的聊天链接',
      githubUser: '你的GitHub',
      siteDate: '2026-03-20',
    })

    const year = computed(() => new Date().getFullYear())

    const visitors = reactive({ today: 0, total: 0 })

    onMounted(() => {
      // 简易访客统计：仅演示版式，基于 localStorage 的“本机访问次数”
      const tKey = `pv_today_${todayKey()}`
      const totalKey = 'pv_total'
      const todayVal = Number(localStorage.getItem(tKey) || '0')
      const totalVal = Number(localStorage.getItem(totalKey) || '0')
      localStorage.setItem(tKey, String(todayVal + 1))
      localStorage.setItem(totalKey, String(totalVal + 1))
      visitors.today = todayVal + 1
      visitors.total = totalVal + 1
    })

    return { state, year, visitors }
  },
}
</script>

<style>
@import './assets/app.css';
</style>

