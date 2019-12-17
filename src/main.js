import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/permission";
import "normalize.css/normalize.css";
import "@/assets/style/index.scss";
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Table,
  TableColumn,
  Menu,
  MenuItemGroup,
  MenuItem,
  Submenu,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Scrollbar,
  Button,
  Row,
  Col,
  Dialog
} from "element-ui";

Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Menu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Scrollbar);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Dialog);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
