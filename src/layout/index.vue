<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Sidebar, AppMain, Navbar } from "./components";

export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    AppMain
  }
};
</script>
