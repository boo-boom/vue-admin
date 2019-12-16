module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  css: {
    sourceMap: process.env.NODE_ENV !== "production",
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/variables.scss";`
      }
    }
  },
  devServer: {
    port: 9001,
    proxy: {
      "/": {
        target: "http://api.test.xxkucun.com",
        changeOrigin: true
      }
    }
  }
};
