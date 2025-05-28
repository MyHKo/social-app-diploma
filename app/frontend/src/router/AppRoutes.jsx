import {Route, Routes} from 'react-router-dom'
import Home from '@pages/Home/index.jsx'
import Profile from '@pages/Profile/index.jsx'
import routes from './path.js'

function AppRoutes() {
    return (
        <Routes>
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.profile} element={<Profile />} />
        </Routes>
    )
}

export default AppRoutes
