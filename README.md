# 个人网站项目

## 项目简介

这是一个基于 Vue 3 + Vite 构建的个人网站项目，展示个人信息、经历、技能、项目和兴趣爱好等内容。网站采用现代化的设计理念，注重用户体验和性能优化。

## 功能特点

### 核心功能
- ✅ 个人信息展示（姓名、职位、年龄、工作经验）
- ✅ 经历时间线展示
- ✅ 项目作品集展示
- ✅ 技能图标展示（支持轮播效果）
- ✅ 访客统计（今日访客、总访客）
- ✅ 日间/夜间模式切换

### 多媒体功能
- ✅ 图片弹窗功能（支持轮播、点击背景关闭、ESC键关闭）
- ✅ 图片预加载优化（切换图片无缝流畅）
- ✅ 标签分类图片展示（做饭、旅游、美食、游戏等）

### 性能优化
- ✅ 图片懒加载（减少初始加载时间）
- ✅ 关键图片预加载（提升首屏加载速度）
- ✅ 响应式设计（适配各种设备）
- ✅ 固定页脚（显示访客统计和建站日期）

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

- **前端框架**：Vue 3 (Composition API)
- **构建工具**：Vite 4.5+
- **样式**：CSS3 (自定义样式)
- **状态管理**：Vue 3 Reactive API
- **本地存储**：localStorage（访客统计）
- **性能优化**：Intersection Observer API（图片懒加载）
- **UI组件**：自定义组件

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

## 部署说明

### 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:5173/

### 生产构建

```bash
npm run build
```

构建产物将生成在 `dist/` 目录。

### 外网访问（使用 cpolar）

1. 安装 cpolar：https://www.cpolar.com/
2. 启动本地开发服务器：`npm run dev`
3. 使用 cpolar 创建隧道：`cpolar http 5173`
4. 获取生成的公网地址，如：`https://4b11e18f.r27.cpolar.top/`

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge

## 许可证

MIT
