import { createStore } from "vuex";
import state from "./state";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

import userModule from "./modules/users/index";
import accountAdmin from "./modules/accounts/account-admin";

export const store = createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    userModule: userModule,
    account1: accountAdmin,
  },
});
