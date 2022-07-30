//thay doi gia tri cua state
export default {

    SET_POSTS(state, postsList) {
    state.postsList = postsList;
    },

    SET_POSTS_TRASH(state, postsTrash) {
    state.postsTrash = postsTrash;
    },

    SET_POST(state, postDetail) {
        state.postDetail = postDetail;
    },

    SET_POSTS_TOP4(state, postsTop4) {
        state.postsTop4 = postsTop4;
    },

};
