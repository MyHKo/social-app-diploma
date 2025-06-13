const routes = {
    home: '/',
    profile: '/profile',
    login: '/login',
    post: (id) => (`/post/${id}`),
    postPath: 'post/:id'
}

export default routes
