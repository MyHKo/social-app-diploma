import {Route, Routes} from 'react-router-dom'
import Home from '@pages/Home/index.jsx'
import Profile from '@pages/Profile/index.jsx'
import LogIn from '@pages/LogIn/index.jsx'
import PostPage from '@pages/PostPage/index.jsx'
import SignUp from '@pages/SignUp/index.jsx'
import routes from './path.js'

function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.profilePath} element={<Profile />} />
            <Route path={routes.login} element={<LogIn />} />
            <Route path={routes.signup} element={<SignUp />} />
            <Route path={routes.postPath} element={<PostPage />} />
        </Routes>
    )
}

export default AppRoutes
