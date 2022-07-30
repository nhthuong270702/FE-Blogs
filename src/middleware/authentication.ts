export default ({ store, next }) => {
 if (localStorage.getItem('user')) next('/auth/home-page');
        else next();
}