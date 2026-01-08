import type { GuideSection } from '@/types'

export const guideSections: GuideSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `# Introduction

Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.

The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

## What is Vue?

Vue is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.`
  },
  {
    id: 'installation',
    title: 'Installation',
    content: `# Installation

## Using CDN

For prototyping or learning purposes, you can use the latest version with:

\`\`\`html
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
\`\`\`

## Using npm

When building large scale applications with Vue, we recommend installing via npm:

\`\`\`bash
npm install vue@next
\`\`\`

## Using Vite

Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. To create a Vue project with Vite:

\`\`\`bash
npm create vite@latest my-vue-app -- --template vue
cd my-vue-app
npm install
npm run dev
\`\`\``
  },
  {
    id: 'basic-usage',
    title: 'Basic Usage',
    content: `# Basic Usage

## Creating a Vue Application

Every Vue application starts by creating a new application instance with the \`createApp\` function:

\`\`\`javascript
import { createApp } from 'vue'

const app = createApp({
  // root component options
})
\`\`\`

## Template Syntax

Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data.

\`\`\`vue
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="count++">Count is: {{ count }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue!')
const count = ref(0)
</script>
\`\`\`

## Reactivity

Vue's reactivity system automatically tracks JavaScript state changes and efficiently updates the DOM when changes happen.`
  }
]
