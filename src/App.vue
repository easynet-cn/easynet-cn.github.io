<script setup lang="ts">
import {
  Github,
  ChevronRight,
  Star,
  Cpu,
  Database,
  Globe,
  Zap,
  Languages,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import { useI18n } from 'vue-i18n'
import ProjectCard from './components/ProjectCard.vue'

const { t, tm, locale } = useI18n()

const iconMap: Record<string, Component> = { cpu: Cpu, database: Database, globe: Globe, zap: Zap }

function toggleLocale() {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}
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
        <span class="text-xl font-bold tracking-tight">{{ t('nav.brand') }}</span>
      </div>
      <div class="flex items-center gap-4">
        <button @click="toggleLocale" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium">
          <Languages :size="16" />
          {{ locale === 'en' ? '中文' : 'EN' }}
        </button>
        <a href="https://github.com/easynet-cn" target="_blank" rel="noopener noreferrer" class="text-white/60 hover:text-white transition-colors">
          <Github :size="24" />
        </a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative z-10 pt-20 pb-32 px-8 max-w-7xl mx-auto text-center">
      <div class="animate-fade-in-up">
        <h1 class="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent">
          {{ t('hero.title1') }}<br />{{ t('hero.title2') }}
        </h1>
        <p class="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
          {{ t('hero.subtitle') }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <a href="#projects" class="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-white/90 transition-colors flex items-center gap-2">
            {{ t('hero.explore') }}
            <ChevronRight :size="20" />
          </a>
          <a href="https://github.com/easynet-cn" target="_blank" rel="noopener noreferrer" class="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
            {{ t('hero.join') }}
            <Github :size="20" />
          </a>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative z-10 py-20 border-y border-white/5 bg-white/[0.02]">
      <div class="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in [
          { label: t('stats.activeProjects'), value: '2+' },
          { label: t('stats.builtWith'), value: 'Rust & TS' },
          { label: t('stats.openSource'), value: '100%' },
          { label: t('stats.community'), value: t('stats.growing') },
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
          <h2 class="text-4xl md:text-5xl font-bold mb-6">{{ t('projects.title') }}</h2>
          <p class="text-white/50 text-lg">
            {{ t('projects.subtitle') }}
          </p>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center gap-2 text-white/30 text-sm font-mono uppercase tracking-tighter">
            <Star :size="16" />
            {{ t('projects.starUs') }}
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <ProjectCard
          title="Batata"
          :description="t('projects.batata.description')"
          icon="server"
          github-url="https://github.com/easynet-cn/batata"
          :tags="['Rust', 'SeaORM', 'RocksDB', 'OpenRaft', 'Cloud Native', 'xDS']"
          :features="(tm('projects.batata.features') as string[])"
          :technologies="[
            { name: 'Rust', icon: 'cpu' },
            { name: 'SeaORM', icon: 'database' },
            { name: 'OpenRaft', icon: 'zap' },
            { name: 'gRPC', icon: 'zap' },
          ]"
          color-class="from-indigo-500 to-blue-600"
        />
        <ProjectCard
          title="ENote"
          :description="t('projects.enote.description')"
          icon="notebook"
          github-url="https://github.com/easynet-cn/enote"
          :tags="['Tauri', 'Vue 3', 'SeaORM', 'MCP', 'HTTP Backend', 'Desktop']"
          :features="(tm('projects.enote.features') as string[])"
          :technologies="[
            { name: 'Tauri', icon: 'zap' },
            { name: 'SeaORM', icon: 'database' },
            { name: 'MCP', icon: 'cpu' },
            { name: 'Vue 3', icon: 'globe' },
            { name: 'TypeScript', icon: 'code' },
          ]"
          color-class="from-emerald-500 to-teal-600"
        />
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="relative z-10 py-32 px-8 max-w-7xl mx-auto border-t border-white/5">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold mb-4">{{ t('techStack.title') }}</h2>
        <p class="text-white/40">{{ t('techStack.subtitle') }}</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="tech in [
          { icon: 'cpu', name: 'Rust', desc: t('techStack.rust') },
          { icon: 'zap', name: 'Tauri', desc: t('techStack.tauri') },
          { icon: 'database', name: 'SQL', desc: t('techStack.sql') },
          { icon: 'globe', name: 'Vue 3', desc: t('techStack.vue') },
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
          <span class="font-bold tracking-tight">{{ t('footer.brand') }}</span>
        </div>
        <div class="flex gap-8 text-white/40 text-sm">
          <a href="https://github.com/easynet-cn" class="hover:text-white transition-colors">GitHub</a>
          <a href="https://github.com/easynet-cn/batata" class="hover:text-white transition-colors">Batata</a>
          <a href="https://github.com/easynet-cn/enote" class="hover:text-white transition-colors">ENote</a>
        </div>
        <div class="text-white/20 text-xs font-mono">
          {{ t('footer.copyright', { year: new Date().getFullYear() }) }}
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
