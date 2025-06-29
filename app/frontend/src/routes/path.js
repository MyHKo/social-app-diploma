const routes = {
    home: '/',
    profilePath: '/profile/:parameterUsername',
    profile: (username) => (`/profile/${username}`),
    login: '/login',
    signup: '/signup',
    post: (id) => (`/post/${id}`),
    postPath: 'post/:id'
}

export default routes
