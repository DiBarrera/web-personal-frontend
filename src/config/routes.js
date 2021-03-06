// Layout
import LayoutAdmin from '../layouts/LayoutAdmin';
import LayoutBasic from '../layouts/LayoutBasic';

// Admin Pages
import AdminHome from '../pages/Admin';
import AdminSignin from '../pages/Admin/Signin/Signin';

// Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';

// Error 404
import Error404 from '../pages/Error404';

const routes = [
    // Configurafión de rutas Admin
    {
        path: '/admin',
        component: LayoutAdmin,
        exact: false,
        routes: [
            {
                path: '/admin',
                component: AdminHome,
                exact: true
            },
            {
                path: '/admin/login',
                component: AdminSignin,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    // Configuración de rutas User
    {
        path: '/',
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true
            },
            {
                path: '/contact',
                component: Contact,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]

export default routes;