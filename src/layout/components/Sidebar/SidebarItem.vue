<template>
  <div class="sidebar-item" v-if="!item.hidden">
    <template v-if="showingChild(item.children, item) && !onlyOneChild.children">
      <el-menu-item v-if="onlyOneChild.meta" :index="resolvePath(onlyOneChild.path)">{{ onlyOneChild.meta.title }}</el-menu-item>
    </template>

    <el-submenu :index="resolvePath(item.path)" popper-append-to-body v-else>
      <template v-if="item.meta" slot="title"><i :class="'el-icon-' + item.meta.icon"></i>{{ item.meta.title }}</template>
      <sidebar-item v-for="child in item.children" :key="child.path" :item="child" :base-path="resolvePath(child.path)" />
    </el-submenu>
  </div>
</template>

<script>
import path from "path";

export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      required: ""
    }
  },
  data() {
    return {
      onlyOneChild: null
    };
  },
  methods: {
    showingChild(children = [], parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
          this.onlyOneChild = item;
          return true;
        }
      });
      if (showingChildren.length === 0) {
        this.onlyOneChild = { ...parent, path: "" };
        return true;
      }
      return false;
    },
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    }
  }
};
</script>
