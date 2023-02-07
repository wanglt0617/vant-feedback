<template>
  <RouterView v-slot="{Component}">
    <keep-alive :include="['HomePage']">
        <component :is="Component" />
    </keep-alive>
  </RouterView>
</template>
