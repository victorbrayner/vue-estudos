<template>
  <v-app>

    <app-drawer />

    <app-bar />

    <app-content />

    <app-footer />

  </v-app>
</template>

<script>
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'
import Drawer from './components/Drawer.vue'
import AppBar from './components/AppBar.vue'

export default {
  components:{
    'app-footer': Footer,
    'app-content': Content,
    'app-bar': AppBar,
    'app-drawer': Drawer,
  },
  data() {
    return {
      
    }
  }
}
</script>
