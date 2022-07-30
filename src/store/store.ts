import { createStore } from "vuex";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import userModule from "./modules/users/index";
import postModule from "./modules/posts/index";
import authModule from "./modules/auth/index";

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    userModule: userModule,
    postModule: postModule,
    authModule: authModule,
  },
});
