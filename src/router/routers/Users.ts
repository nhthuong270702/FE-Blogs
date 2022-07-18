import TestPageVue from "@/pages/TestPage.vue";
import UserEditVue from "@/pages/users/UserEdit.vue";
import UserDetailVue from "@/pages/users/UserDetail.vue";
import UserListVue from "@/pages/users/UserList.vue";
import UserCreateVue from "@/pages/users/UserCreate.vue";
import { apiUsers } from "../../utils/apiurls";

const UserRouter = [
  {
    path: "/test",
    name: "Test",
    component: TestPageVue,
  },
  {
    path: apiUsers,
    name: "UserList",
    component: UserListVue,
  },
  {
    path: apiUsers + "/create",
    name: "UserCreate",
    component: UserCreateVue,
  },
  {
    path: apiUsers + "/:id",
    name: "UserDetail",
    component: UserDetailVue,
  },
  {
    path: apiUsers + "/:id/edit",
    name: "UserEdit",
    component: UserEditVue,
  },
];

export default UserRouter;
