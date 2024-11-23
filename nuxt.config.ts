// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 Minimal Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  compatibilityDate: '2024-04-03',

  // modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: false },


  modules: ['@vite-pwa/nuxt', '@pinia/nuxt'],
  ssr: false,
  pwa: {
    manifest: {
      name: 'Nuxt 3 Minimal Starter',
      short_name: 'Nuxt 3 Minimal Starter',
      description: 'Nuxt 3 Minimal Starter',
      theme_color: '#ffffff',
      icons: [
        {
          src: '/logo.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/logo.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  },
})