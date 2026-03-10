<script setup lang="ts">
import {
  Github,
  ChevronRight,
  Star,
  Cpu,
  Database,
  Globe,
  Zap,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import ProjectCard from './components/ProjectCard.vue'

const iconMap: Record<string, Component> = { cpu: Cpu, database: Database, globe: Globe, zap: Zap }
</script>

<template>
  <div class="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30">
    <!-- Background Glow -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute -top-[25%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div class="absolute -bottom-[25%] -right-[10%] w-[70%] h-[70%] rounded-full bg-emerald-500/10 blur-[120px]" />
    </div>

    <!-- Navigation -->
    <nav class="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-xl italic">
          E
        </div>
        <span class="text-xl font-bold tracking-tight">EasyNet</span>
      </div>
      <div class="flex items-center gap-6">
        <a href="https://github.com/easynet-cn" target="_blank" rel="noopener noreferrer" class="text-white/60 hover:text-white transition-colors">
          <Github :size="24" />
        </a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative z-10 pt-20 pb-32 px-8 max-w-7xl mx-auto text-center">
      <div class="animate-fade-in-up">
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
          OPEN SOURCE<br />FOR THE FUTURE
        </h1>
        <p class="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
          Building high-performance cloud native infrastructure and
          productivity tools for developers worldwide.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#projects" class="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-white/90 transition-colors flex items-center gap-2">
            Explore Projects
            <ChevronRight :size="20" />
          </a>
          <a href="https://github.com/easynet-cn" target="_blank" rel="noopener noreferrer" class="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
            Join Organization
            <Github :size="20" />
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative z-10 py-20 border-y border-white/5 bg-white/[0.02]">
      <div class="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in [
          { label: 'Active Projects', value: '2+' },
          { label: 'Built with', value: 'Rust & TS' },
          { label: 'Open Source', value: '100%' },
          { label: 'Community', value: 'Growing' },
        ]" :key="stat.label" class="text-center">
          <div class="text-4xl font-bold mb-2">{{ stat.value }}</div>
          <div class="text-white/40 text-sm uppercase tracking-widest font-medium">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="relative z-10 py-32 px-8 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="max-w-xl">
          <h2 class="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p class="text-white/50 text-lg">
            Our core contributions to the open-source ecosystem, focusing on
            infrastructure reliability and user experience.
          </p>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center gap-2 text-white/30 text-sm font-mono uppercase tracking-tighter">
            <Star :size="16" />
            Star us on GitHub
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Batata"
          description="A high-performance dynamic service discovery and configuration platform built with Rust. Compatible with Nacos and Consul APIs."
          icon="server"
          github-url="https://github.com/easynet-cn/batata"
          :tags="['Rust', 'Cloud Native', 'Service Mesh', 'xDS']"
          :features="[
            'Nacos & Consul API Compatibility',
            'High-performance Rust Core',
            'Dynamic Configuration Management',
            'Service Discovery & Health Checks',
          ]"
          :technologies="[
            { name: 'Rust', icon: 'cpu' },
            { name: 'PostgreSQL', icon: 'database' },
            { name: 'Docker', icon: 'globe' },
            { name: 'gRPC', icon: 'zap' },
          ]"
          color-class="from-indigo-500 to-blue-600"
        />
        <ProjectCard
          title="eNote"
          description="A modern, cross-platform desktop note-taking application built with Tauri. Fast, secure, and developer-friendly."
          icon="notebook"
          github-url="https://github.com/easynet-cn/enote"
          :tags="['Tauri', 'Vue 3', 'SQLite', 'Desktop']"
          :features="[
            'Multi-database support (SQLite, MySQL, PG)',
            'Native Performance with Tauri',
            'Rich Text & Markdown Editor',
            'Cross-platform (Windows, macOS, Linux)',
          ]"
          :technologies="[
            { name: 'Tauri', icon: 'zap' },
            { name: 'Vue 3', icon: 'globe' },
            { name: 'SQLite', icon: 'database' },
            { name: 'TypeScript', icon: 'code' },
          ]"
          color-class="from-emerald-500 to-teal-600"
        />
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="relative z-10 py-32 px-8 max-w-7xl mx-auto border-t border-white/5">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">Our Technology Stack</h2>
        <p class="text-white/40">We use modern technologies to build robust applications.</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="tech in [
          { icon: 'cpu', name: 'Rust', desc: 'Performance & Safety' },
          { icon: 'zap', name: 'Tauri', desc: 'Lightweight Desktop' },
          { icon: 'database', name: 'SQL', desc: 'Reliable Storage' },
          { icon: 'globe', name: 'Vue 3', desc: 'Modern UI' },
        ]" :key="tech.name" class="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <component :is="iconMap[tech.icon]" :size="32" class="mb-4 text-white/60" />
          <div class="font-bold mb-1">{{ tech.name }}</div>
          <div class="text-xs text-white/40">{{ tech.desc }}</div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 py-20 px-8 border-t border-white/5 bg-black">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold italic">
            E
          </div>
          <span class="font-bold tracking-tight">EasyNet Open Source</span>
        </div>
        <div class="flex gap-8 text-white/40 text-sm">
          <a href="https://github.com/easynet-cn" class="hover:text-white transition-colors">GitHub</a>
          <a href="https://github.com/easynet-cn/batata" class="hover:text-white transition-colors">Batata</a>
          <a href="https://github.com/easynet-cn/enote" class="hover:text-white transition-colors">eNote</a>
        </div>
        <div class="text-white/20 text-xs font-mono">
          &copy; {{ new Date().getFullYear() }} EasyNet. Built with Passion.
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}
</style>
