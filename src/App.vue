<template>
  <div class="container">
    <div class="top">
      <router-link
        v-for="nav in navs"
        :key="nav.path"
        class="nav"
        :style="{background:$route.name==nav.path?'rgb(255, 64, 64)':'rgb(197, 0, 0)'}"
        :to="nav.path"
      >{{nav.name}}</router-link>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { TYPE_MAP} from './module/topic/store'
export default {
  created() {
    console.log(this.$route.name);
  },
  data() {
    return {
      navs: [
        {
          name:'最新',
          path:TYPE_MAP.NEW
        },
        {
          name:'最火',
          path:TYPE_MAP.HOT
        },
        {
          name:'热门',
          path:TYPE_MAP.TOP
        },
        {
          name: "关于我",
          path: "about"
        }
      ]
    };
  }
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
.container {
  width: 1000px;
  height: 100%;
  margin: 0 auto;
}
.top {
  height: 60px;
  display: flex;
  justify-content: center;
  background: rgb(197, 0, 0);
}
.nav {
  padding: 0 30px;
  line-height: 60px;
  color: #fff;
  background: rgb(197, 0, 0);
  text-decoration: none;
}
</style>