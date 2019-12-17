<template>
  <div class="scrollbar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="this.$route.path"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="true"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        router
        mode="vertical"
      >
        <template v-for="route in permission_routes">
          <el-submenu :index="route.path" :key="route.path" v-if="route.meta">
            <template slot="title"><i :class="'el-icon-' + route.meta.icon"></i>{{ route.meta.title }}</template>
            <el-menu-item :index="item.path" v-for="item in route.children" :key="item.path">{{ item.meta.title }}</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import variables from "@/assets/style/variables.scss";

export default {
  name: "Sidebar",
  mounted() {
    console.log(this.permission_routes);
  },
  computed: {
    variables() {
      return variables;
    },
    ...mapGetters(["permission_routes"])
  }
};
</script>
