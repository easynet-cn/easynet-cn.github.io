export default {
  nav: {
    brand: 'EasyNet',
  },
  hero: {
    title1: 'OPEN SOURCE',
    title2: 'FOR THE FUTURE',
    subtitle:
      'Building high-performance cloud native infrastructure and productivity tools for developers worldwide.',
    explore: 'Explore Projects',
    join: 'Join Organization',
  },
  stats: {
    activeProjects: 'Active Projects',
    builtWith: 'Built with',
    openSource: 'Open Source',
    community: 'Community',
    growing: 'Growing',
  },
  projects: {
    title: 'Featured Projects',
    subtitle:
      'Our core contributions to the open-source ecosystem, focusing on infrastructure reliability and user experience.',
    starUs: 'Star us on GitHub',
    batata: {
      description:
        'A high-performance service discovery and configuration platform built with Rust. Fully compatible with Nacos V2/V3 and Consul APIs, with Raft consensus for high availability.',
      features: [
        'Nacos V2/V3 & Consul API Compatibility',
        'Raft Consensus for High Availability',
        'Multi-backend Storage (SeaORM SQL & RocksDB)',
        'Kubernetes Bidirectional Sync',
        'Service Mesh (xDS: EDS, CDS, LDS, RDS, ADS)',
        'Prometheus Metrics & OpenTelemetry Tracing',
      ],
    },
    enote: {
      description:
        'A modern, cross-platform desktop note-taking application built with Tauri and SeaORM. Features rich text and Markdown editing, content encryption, and MCP integration.',
      features: [
        'Rich Text (TipTap) & Markdown Dual-mode Editor',
        'AES-256-GCM Content Encryption',
        'Model Context Protocol (MCP) Integration',
        'Multi-database via SeaORM (SQLite, MySQL, PostgreSQL)',
        'Multi-format Import (Evernote, Youdao, Notion)',
        'Cross-platform (Windows, macOS, Linux)',
      ],
    },
  },
  techStack: {
    title: 'Our Technology Stack',
    subtitle: 'We use modern technologies to build robust applications.',
    rust: 'Performance & Safety',
    tauri: 'Lightweight Desktop',
    sql: 'Reliable Storage',
    vue: 'Modern UI',
  },
  projectCard: {
    technologies: 'Technologies Used',
    license: 'License',
    recentActivity: 'Recent Activity',
    noActivity: 'No recent activity found',
    loading: 'Loading...',
    defaultLicense: 'MIT License',
    viewOnGithub: 'View on GitHub',
  },
  footer: {
    brand: 'EasyNet Open Source',
    copyright: '© {year} EasyNet. Built with Passion.',
  },
}
