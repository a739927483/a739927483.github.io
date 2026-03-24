# 个人网站项目

## 项目简介

这是一个基于 Vue 3 + Vite 构建的个人网站项目，展示个人信息、经历、技能和项目等内容。

## 功能特点

- ✅ 个人信息展示（姓名、职位、年龄、工作经验）
- ✅ 经历时间线展示
- ✅ 项目展示
- ✅ 技能展示
- ✅ 访客统计（今日访客、总访客）
- ✅ 日间/夜间模式切换
- ✅ 图片弹窗功能（支持点击背景关闭、ESC键关闭）
- ✅ 固定页脚（显示访客统计和建站日期）
- ✅ 响应式设计

## 项目结构

```
vite-app/
├── public/              # 静态资源
│   ├── fonts/          # 字体文件
│   ├── images/         # 图片文件
│   └── svg/            # SVG文件
├── src/                # 源代码
│   ├── components/     # 组件
│   │   ├── TemplateHome.vue     # 主页组件
│   │   └── GitHubHeatmap.vue    # GitHub贡献热力图组件
│   ├── assets/         # 资源文件
│   ├── style.css       # 全局样式
│   ├── main.js         # 入口文件
│   └── App.vue         # 根组件
├── index.html          # HTML模板
├── vite.config.js      # Vite配置
├── package.json        # 项目依赖
└── README.md           # 项目说明
```

## 核心功能模块

### 1. 主页组件 (TemplateHome.vue)

- 个人信息展示区域
- 经历时间线
- 项目展示
- 技能展示
- 图片弹窗功能
- 日间/夜间模式切换
- 访客统计

### 2. 固定页脚

- 显示访客统计信息
- 显示建站日期（动态生成）
- 随滚动始终固定在底部

### 3. 图片弹窗功能

- 点击图片按钮弹出大图
- 点击背景区域关闭弹窗
- 按 ESC 键关闭弹窗

## 技术栈

- **前端框架**：Vue 3
- **构建工具**：Vite
- **样式**：CSS3
- **状态管理**：Vue 3 Composition API
- **本地存储**：localStorage（用于访客统计）

## 安装和运行

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 自定义配置

### 个人信息

在 `TemplateHome.vue` 文件中修改以下信息：

```javascript
// 个人信息
const displayName = '抓娃娃小队长'
const jobTitle = 'Front-end development（前端开发工程师）'
const age = 27
const experienceLabel = '2.5 work experience (2.5年工作经验)'

// 经历信息
const exp = reactive({
  name: '北京荣耀(外包)',
  date: '2021-2023',
})
```

### 项目信息

在 `TemplateHome.vue` 文件中修改项目链接和描述。

### 图片资源

将图片资源放置在 `public/images/` 目录下。

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 许可证

MIT
