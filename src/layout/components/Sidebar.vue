<template>
  <div class="scrollbar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-openeds="['0']"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <template v-for="(route, index) in permission_routes">
          <el-submenu :index="index + ''" :key="route.path" v-if="route.meta">
            <template slot="title"><i class="el-icon-message"></i>{{ route.meta.title }}</template>
            <el-menu-item :index="index + '-' + childIndex" v-for="(item, childIndex) in route.children" :key="item.path">{{ item.meta.title }}</el-menu-item>
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
