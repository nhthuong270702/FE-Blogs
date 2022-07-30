import { apiPosts } from "../../utils/apiurls";

function lazyLoad(view: string){
  return() => import(`../../pages/posts/${view}.vue`)
}


const PostRouter = [

  {
    path: apiPosts + '/list',
    name: "PostList",
    component: lazyLoad('PostList'),
  },

  {
    path: apiPosts + '/list-of-user',
    name: "PostListOfUser1",
    component: lazyLoad('PostListOfUser'),
  },

  {
    path: apiPosts + '/list/trash',
    name: "PostTrash",
    component: lazyLoad('PostListTrash'),
  },

  {
    path: apiPosts + "/create",
    name: "PostCreate",
    component: lazyLoad('PostCreate'),
  },

  {
    path: apiPosts + "/:id",
    name: "PostDetail",
    component: lazyLoad('PostDetail'),
  },

  {
    path: apiPosts + "/:id/edit",
    name: "PostEdit",
    component: lazyLoad('PostEdit'),
  },

];

export default PostRouter;
