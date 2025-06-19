const routes = {
    home: '/',
    profilePath: '/profile/:username',
    profile: (username) => (`/profile/${username}`),
    login: '/login',
    post: (id) => (`/post/${id}`),
    postPath: 'post/:id'
}

export default routes
