export default {
  nav: {
    brand: 'EasyNet',
  },
  hero: {
    title1: '开源驱动',
    title2: '面向未来',
    subtitle: '为全球开发者构建高性能云原生基础设施和生产力工具。',
    explore: '探索项目',
    join: '加入组织',
  },
  stats: {
    activeProjects: '活跃项目',
    builtWith: '技术栈',
    openSource: '开源',
    community: '社区',
    growing: '持续增长',
  },
  projects: {
    title: '核心项目',
    subtitle: '我们对开源生态的核心贡献，专注于基础设施可靠性和用户体验。',
    starUs: '在 GitHub 上 Star',
    batata: {
      description:
        '基于 Rust 构建的高性能服务发现与配置管理平台。完全兼容 Nacos V2/V3 和 Consul API，采用 Raft 共识实现高可用。',
      features: [
        '兼容 Nacos V2/V3 和 Consul API',
        'Raft 共识协议实现高可用',
        '多后端存储（SeaORM SQL 和 RocksDB）',
        'Kubernetes 双向同步',
        '服务网格（xDS：EDS、CDS、LDS、RDS、ADS）',
        'Prometheus 指标和 OpenTelemetry 链路追踪',
      ],
    },
    enote: {
      description:
        '基于 Tauri 和 SeaORM 构建的现代跨平台桌面笔记应用。支持富文本与 Markdown 编辑、内容加密、MCP 集成和远程服务器后端。',
      features: [
        '富文本（TipTap）与 Markdown 双模式编辑器',
        'AES-256-GCM 内容加密',
        'MCP（模型上下文协议）集成',
        '多后端支持（SQLite、MySQL、PostgreSQL、ENote Server）',
        '远程服务器支持多种认证（Bearer/JWT/OAuth2 等）',
        '跨平台（Windows、macOS、Linux）',
      ],
    },
  },
  techStack: {
    title: '技术栈',
    subtitle: '我们使用现代技术构建可靠的应用。',
    rust: '高性能与安全',
    tauri: '轻量级桌面框架',
    sql: '可靠存储',
    vue: '现代化 UI',
  },
  projectCard: {
    technologies: '技术栈',
    license: '开源协议',
    recentActivity: '最近动态',
    noActivity: '暂无最近动态',
    loading: '加载中...',
    defaultLicense: 'MIT License',
    viewOnGithub: '在 GitHub 上查看',
  },
  footer: {
    brand: 'EasyNet 开源',
    copyright: '© {year} EasyNet. 用热情构建。',
  },
}
