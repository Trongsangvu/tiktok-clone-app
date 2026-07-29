import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Views
import Home from '~/views/Home';
import Following from '~/views/Following';
import Profile from '~/views/Profile';
import Upload from '~/views/Upload';
import Search from '~/views/Search';
import Live from '~/views/Live';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.live, component: Live },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };