<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Component } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Github,
  Server,
  Notebook,
  Code2,
  Cpu,
  Database,
  Globe,
  Zap,
  Shield,
  Clock,
  GitCommit,
  ExternalLink,
} from 'lucide-vue-next'

const { t } = useI18n()

interface Commit {
  sha: string
  commit: {
    message: string
    author: {
      name: string
      date: string
    }
  }
  html_url: string
}

interface Technology {
  name: string
  icon: string
}

const props = defineProps<{
  title: string
  description: string
  icon: string
  githubUrl: string
  tags: string[]
  features: string[]
  technologies: Technology[]
  colorClass: string
}>()

const mainIconMap: Record<string, Component> = { server: Server, notebook: Notebook }
const techIconMap: Record<string, Component> = { cpu: Cpu, database: Database, globe: Globe, zap: Zap, code: Code2 }

const commits = ref<Commit[]>([])
const license = ref<{ name: string; url: string | null } | null>(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const repoPath = props.githubUrl.replace('https://github.com/', '')

    const [commitsRes, repoRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${repoPath}/commits?per_page=3`),
      fetch(`https://api.github.com/repos/${repoPath}`),
    ])

    if (commitsRes.ok) {
      commits.value = await commitsRes.json()
    }

    if (repoRes.ok) {
      const repoData = await repoRes.json()
      if (repoData.license) {
        license.value = {
          name: repoData.license.spdx_id || repoData.license.name,
          url: repoData.license.url,
        }
      }
    }
  } catch (error) {
    console.error('Failed to fetch project data:', error)
  } finally {
    loading.value = false
  }
})

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString()
}
</script>

<template>
  <div class="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col">
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r" :class="colorClass" />
    <div class="p-8 flex-1">
      <!-- Header -->
      <div class="flex justify-between items-start mb-6">
        <div class="p-3 rounded-2xl bg-gradient-to-br" :class="colorClass">
          <component :is="mainIconMap[icon]" :size="32" class="text-white" />
        </div>
        <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="p-2 rounded-full hover:bg-white/10 transition-colors">
          <Github :size="24" class="text-white/60 hover:text-white" />
        </a>
      </div>

      <h3 class="text-3xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">{{ title }}</h3>
      <p class="text-white/60 text-lg mb-6 leading-relaxed">{{ description }}</p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-8">
        <span v-for="tag in tags" :key="tag" class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/40">
          {{ tag }}
        </span>
      </div>

      <!-- Technologies -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-4 text-white/40 text-xs font-bold uppercase tracking-widest">
          <Code2 :size="16" />
          {{ t('projectCard.technologies') }}
        </div>
        <div class="flex flex-wrap gap-4">
          <div v-for="tech in technologies" :key="tech.name" class="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
            <component :is="techIconMap[tech.icon]" :size="16" class="text-white/60" />
            <span class="text-sm text-white/70">{{ tech.name }}</span>
          </div>
        </div>
      </div>

      <!-- License -->
      <div class="mb-8">
        <div class="flex items-center gap-2 mb-4 text-white/40 text-xs font-bold uppercase tracking-widest">
          <Shield :size="16" />
          {{ t('projectCard.license') }}
        </div>
        <div class="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/5 w-fit">
          <span class="text-sm text-white/70">
            {{ license ? license.name : (loading ? t('projectCard.loading') : t('projectCard.defaultLicense')) }}
          </span>
        </div>
      </div>

      <!-- Features -->
      <div class="space-y-3 mb-8">
        <div v-for="(feature, i) in features" :key="i" class="flex items-center gap-3 text-white/70">
          <div class="w-1.5 h-1.5 rounded-full bg-gradient-to-r" :class="colorClass" />
          <span class="text-sm">{{ feature }}</span>
        </div>
      </div>
    </div>

    <!-- Commit Activity -->
    <div class="px-8 py-6 bg-white/[0.02] border-t border-white/5">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
          <GitCommit :size="16" />
          {{ t('projectCard.recentActivity') }}
        </div>
        <div v-if="loading" class="w-4 h-4 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
      </div>

      <div class="space-y-4">
        <template v-if="commits.length > 0">
          <a v-for="commit in commits" :key="commit.sha" :href="commit.html_url" target="_blank" rel="noopener noreferrer" class="block group/commit">
            <div class="flex items-start gap-3">
              <div class="mt-1">
                <Clock :size="12" class="text-white/30 group-hover/commit:text-white/60 transition-colors" />
              </div>
              <div>
                <p class="text-sm text-white/70 line-clamp-1 group-hover/commit:text-white transition-colors">{{ commit.commit.message }}</p>
                <p class="text-[10px] text-white/30 mt-1">{{ commit.commit.author.name }} &bull; {{ formatDate(commit.commit.author.date) }}</p>
              </div>
            </div>
          </a>
        </template>
        <p v-else-if="!loading" class="text-xs text-white/30 italic">{{ t('projectCard.noActivity') }}</p>
      </div>
    </div>

    <!-- CTA -->
    <div class="p-8 pt-0">
      <a :href="githubUrl" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r text-white font-semibold hover:opacity-90 transition-opacity" :class="colorClass">
        {{ t('projectCard.viewOnGithub') }}
        <ExternalLink :size="16" />
      </a>
    </div>
  </div>
</template>
