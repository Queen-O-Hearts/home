import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Lucyyy',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
            charset: 'utf-8',
            meta: [ { name: 'description', content: 'Hi there!' } ],
            bodyAttrs: { class: 'test' }
        }
    }
})
